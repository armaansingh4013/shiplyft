import frappe
from random import randint
import jwt
import datetime


SECRET_KEY = "Pardeeo01"
@frappe.whitelist(allow_guest=True)
def request_otp(phone):
    if not phone:
        return {"status": "failure", "message": "Phone number is required."}
    
    user_exists = frappe.db.exists("User", {"mobile_no": phone})
    if not user_exists:
        return {"status": "failure", "message": "This phone number is not registered."}

    otp = randint(1000, 9999)
    frappe.cache().set_value(phone, otp, expires_in_sec=300) 
    message = f"Your OTP is {otp}. Please use it to sign in."
    frappe.log(f"Mock SMS sent to {phone}: {message}")

    return {"status": "success", "message": "OTP sent successfully."}


@frappe.whitelist(allow_guest=True)
def verify_otp(phone, otp):
    if not phone or not otp:
        return {"status": "failure", "message": "Phone number and OTP are required."}


    cached_otp = frappe.cache().get_value(phone)

    if cached_otp and str(cached_otp) == str(otp):
       
        token = generate_jwt(phone)
        return {
            "status": "success",
            "message": "OTP verified successfully.",
            "token": token,
        }
    else:
        return {"status": "failure", "message": "Invalid or expired OTP."}


def generate_jwt(phone):
    payload = {
        "phone": phone,
        "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1),
    }
    token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
    return token
