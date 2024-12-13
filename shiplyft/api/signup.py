
import frappe
from random import randint

import urllib.parse
import jwt



@frappe.whitelist(methods=["POST"],allow_guest=True)
def signup(body={}):
    phone = body.get('phone')
    user_email = body.get('user_email')  
    firstname = body.get('firstname', None)
    new_password=body.get('password')
    lastname=body.get('lastname', None)
    new_password=body.get('new_password')
    
    if body.get('password')!=body.get('confirm_password'):
        return{
             "status": "failure",
            "message": "Password is not same."
        }
        
    
    if not phone:
        return {
            "status": "failure",
            "message": "Phone number is required."
        }

    if user_email and phone:
        token = generate_jwt_token(phone,user_email,firstname,lastname,new_password)
        return {
            "status": "success",
            "token": token
        }
        
def generate_jwt_token(phone,user_email,firstname,lastname,new_password):
    try:
        payload = {
            "email": user_email
        }
        user = frappe.get_doc({
                "doctype": "User",
                "email": user_email,
                "first_name": firstname,
                'last_name':lastname,
                'new_password':new_password,
                "mobile_no": phone,
                "enabled": 1,
                "user_type": "Website User",
                "roles": [
                {
                    "role": "Customer"
                }
            ]
            })
        user.insert(ignore_permissions=True)
        if user:
            secret_key="Pardeep01"
            token = jwt.encode(payload, secret_key, algorithm='HS256')
        return {
            "status":"success",
            "token":token
        }
        
    except Exception as e:
        return {
            "status":"failed",
            "message":e
        }