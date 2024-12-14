import frappe
from random import randint
import jwt
import datetime
import json

@frappe.whitelist( allow_guest=True )
def login(usr, pwd):
    try:
        login_manager = frappe.auth.LoginManager()
        login_manager.authenticate(user=usr, pwd=pwd)
        login_manager.post_login()

        user = frappe.get_doc('User', frappe.session.user)
        
        if user.api_key and user.api_secret:
                user.api_secret = user.get_password('api_secret')
        else:
                api_generate = generate_keys(frappe.session.user)     


        frappe.response["message"] = {
                "success_key":1,
                "message":"success",
                "sid":frappe.session.sid,
                "api_key":user.api_key if user.api_key else api_generate[1],
                "api_secret": user.api_secret if user.api_secret else api_generate[0],
                "username":user.username,
                "email":user.email
        }
    except Exception as e:
        frappe.clear_messages()
        frappe.local.response["message"] = {
            "success_key":0,
            "message":"Incorrect username or password",
            "error":e
        }
        
        return 

def generate_keys(user):
    user_details = frappe.get_doc('User', user)
    api_secret = frappe.generate_hash(length=15)
    api_key = frappe.generate_hash(length=15)
    user_details.api_key = api_key

    user_details.api_secret = api_secret
    user_details.save(ignore_permissions=True)

    if frappe.request.method == "GET":
        frappe.db.commit()
    

    return user_details.get_password("api_secret"), user_details.api_key
       
       
       

@frappe.whitelist(methods="POST",allow_guest=True)
def change_password(body={}):
    username = frappe.db.get_value("User",body.get("usr"), 'name')
    if username:
        user_doc = frappe.get_doc("User", body.get("usr"))
        if frappe.local.login_manager.check_password(user_doc.name, body.get("old_pwd")):
            user_doc.new_password = body.get("new_pwd")
            user_doc.save()
            frappe.db.commit()
            frappe.local.response["message"] = {
                "success_key": 1,
                "message": "Password changed successfully"
            }
        else:
            frappe.local.response["message"] = {
                "success_key": 0,
                "message": "Old password is incorrect"
            }
    else:
        frappe.local.response["message"] = {
            "success_key": 0,
            "message": "User not found"
        }















# import frappe
import random
import string
from frappe.core.doctype.communication.email import make_email

# Step 1: Generate and send OTP
@frappe.whitelist(methods="POST", allow_guest=True)
def send_otp(body={}):
    print(">>>>>>>>>>.")
    user_email = frappe.db.get_value("User", body.get("usr"), 'email')
    if user_email:
        otp = ''.join(random.choices(string.digits, k=6))  # Generate a 6-digit OTP
        frappe.cache().set_value(f"otp:{body.get('usr')}", otp, expires_in_sec=300)  # Store OTP in cache for 5 minutes
        
        # Send OTP via email
        subject = "Your OTP for Password Reset"
        message = f"Your OTP for resetting the password is: {otp}. This OTP is valid for 5 minutes."
        make_email(user_email, subject, message).send()
        
        frappe.local.response["message"] = {
            "success_key": 1,
            "message": "OTP sent to your email"
        }
    else:
        frappe.local.response["message"] = {
            "success_key": 0,
            "message": "User not found"
        }

# Step 2: Verify OTP and reset password
@frappe.whitelist(methods="POST", allow_guest=True)
def change_password_with_otp(body={}):
    username = frappe.db.get_value("User", body.get("usr"), 'name')
    if username:
        cached_otp = frappe.cache().get_value(f"otp:{body.get('usr')}")
        if cached_otp and cached_otp == body.get("otp"):
            # OTP is valid, proceed to change password
            user_doc = frappe.get_doc("User", body.get("usr"))
            user_doc.new_password = body.get("new_pwd")
            user_doc.save()
            frappe.db.commit()
            
            # Clear the OTP from cache after successful use
            frappe.cache().delete_value(f"otp:{body.get('usr')}")
            
            frappe.local.response["message"] = {
                "success_key": 1,
                "message": "Password changed successfully"
            }
        else:
            frappe.local.response["message"] = {
                "success_key": 0,
                "message": "Invalid or expired OTP"
            }
    else:
        frappe.local.response["message"] = {
            "success_key": 0,
            "message": "User not found"
        }