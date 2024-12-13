import frappe
from random import randint
import jwt
import datetime

@frappe.whitelist(methods=["POST"], allow_guest=True)
def signin(body={}):
    try:
        user_email = body.get('user_email')
        password = body.get('password')

        if not user_email or not password:
            return {
                "status": "failed",
                "message": "Email and password are required."
            }

        doc = frappe.get_doc('User', user_email)
        if doc and doc.new_password == password:
            token = generate_jwt_token(user_email, password)
            return {
                "status": "success",
                "token": token
            }
        else:
            return {
                "status": "failed",
                "message": "Invalid email or password."
            }

    except frappe.DoesNotExistError:
        return {
            "status": "failed",
            "message": "User does not exist."
        }
    except Exception as e:
        return {
            "status": "failed",
            "message": str(e)
        }

def generate_jwt_token(user_email, password):
    try:
        payload = {
            "email": user_email
        }
        secret_key = "Pardeep01"
        token = jwt.encode(payload, secret_key, algorithm='HS256')

        return token

    except Exception as e:
        frappe.log_error(message=str(e), title="JWT Token Generation Error")
        raise e







