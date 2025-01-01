import frappe
from frappe.utils import flt, nowdate

@frappe.whitelist()
def create_order(**kwargs):
    try:
        billing_customer_name = kwargs.get("shipping_customer_name")
        shipping_customer_name = kwargs.get("shipping_customer_name")
        billing_address = create_address(
                    title=kwargs.get('billing_address'),
                    city=kwargs.get('billing_city'),
                    state=kwargs.get('billing_state'),
                    country=kwargs.get('billing_country'),
                    pincode=kwargs.get('billing_pincode'),
                    email=kwargs.get('billing_email'),
                    phone=kwargs.get('billing_phone'),
                    customer=billing_customer_name
                )
        shipping_address = create_address(
            title=kwargs.get('shipping_address'),
            city=kwargs.get('shipping_city'),
            state=kwargs.get('shipping_state'),
            country=kwargs.get('shipping_country'),
            pincode=kwargs.get('shipping_pincode'),
            email=kwargs.get('shipping_email'),
            phone=kwargs.get('shipping_phone'),
            customer=shipping_customer_name
        )
        
        pickup_address = create_address(
            title=kwargs.get('pickup_address'),
            city=kwargs.get('pickup_city'),
            state=kwargs.get('pickup_state'),
            country=kwargs.get('pickup_country'),
            pincode=kwargs.get('pickup_pincode'),
            email=kwargs.get('pickup_email'),
            phone=kwargs.get('pickup_phone'),
            customer=shipping_customer_name
        )
        order_doc = frappe.get_doc(dict(
            doctype = "Sales Order",
            custom_order_id =(kwargs.get('order_id')),
            custom_isd_code = kwargs.get('isd_code'),
            custom_billing_isd_code = kwargs.get('billing_isd_code'),
            transaction_date = kwargs.get('order_date'),
            custom_channel_id = kwargs.get('channel_id'),
            custom_billing_customer_name = kwargs.get('billing_customer_name'),
            custom_billing_last_name = kwargs.get('billing_last_name'),
            customer_address= billing_address.name,
            custom_billing_address_2 = kwargs.get('billing_address_2'),
            custom_landmark = kwargs.get('landmark'),
            custom_latitude = kwargs.get('latitude'),
            custom_longitude = kwargs.get('longitude'),
            custom_shipping_is_billing = kwargs.get('shipping_is_billing'),
            customer = kwargs.get('shipping_customer_name'),
            custom_shipping_last_name = kwargs.get('shipping_last_name'),
            shipping_address_name = shipping_address.name,
            custom_shipping_address_2 = kwargs.get('shipping_address_2'),
            custom_pickup_address_ = pickup_address.name,
            order_type = kwargs.get('order_type'),
            custom_product_category = kwargs.get('product_category'),
            contact_phone = kwargs.get('billing_alternate_phone'),
            custom_payment_method = kwargs.get('payment_method'),
            custom_shipping_charges = kwargs.get('shipping_charges'),
            custom_giftwrap_charges =(kwargs.get('giftwrap_charges')),
            custom_transaction_charges = kwargs.get('transaction_charges'),
            discount_amount= flt(kwargs.get('total_discount')),
            custom_sub_total =(kwargs.get('sub_total')),
            custom_weight =(kwargs.get('weight')),
            custom_length =(kwargs.get('length')),
            custom_breadth =(kwargs.get('breadth')),
            custom_height =(kwargs.get('height')),
            custom_pickup_location_id = kwargs.get('pickup_location_id'),
            custom_reseller_name = kwargs.get('reseller_name'),
            custom_company_name = kwargs.get('company_name'),
            custom_ewaybill_no = kwargs.get('ewaybill_no'),
            custom_customer_gstin = kwargs.get('customer_gstin'),
            custom_is_order_revamp = kwargs.get('is_order_revamp'),
            custom_is_document = kwargs.get('is_document'),
            custom_order_tag = kwargs.get('order_tag'),
            custom_delivery_challan = kwargs.get('delivery_challan'),
            custom_is_web = kwargs.get('is_web'),
            custom_is_insurance_opt = kwargs.get('is_insurance_opt'),
            currency = kwargs.get('currency')
        ))
        for item in kwargs.get('order_items'):
            order_doc.append("items", {
                "item_code": item.get('product_id'),
                "qty": flt(item.get('units')),
                "rate": flt(item.get('selling_price')),
                "item_name": item.get("name"),
                'delivery_date': nowdate(),
                "custom_category_name": item.get('category_name'),
                "custom_hsn": item.get('hsn'),
                "custom_sku": item.get('sku'),
                "custom_tax": item.get('tax'),
                "description":item.get("product_description"),
                "discount_amount": flt(item.get('discount')),
                "custom_optionalvaluestatus": item.get('optionalvaluestatus'),
                "custom_caetgroy_code": item.get('caetgroy_code'),
                "custom_category_id": item.get('category_id')
            })
        order_doc.save()
        return "Order Created Successfully"
    except Exception as e:
        return {"message": "Order creation error", "Error": str(e)}

def create_address(title, city, state, country, pincode, email, phone, customer):
    try:
        address_doc = frappe.new_doc("Address")
        address_doc.address_title = title
        address_doc.address_line1 = title
        address_doc.city = city
        address_doc.state = state
        address_doc.country = country
        address_doc.pincode = pincode
        address_doc.email_id = email
        address_doc.phone = phone
        address_doc.append("links", {"link_doctype": "Customer", "link_name": customer})
        address_doc.save()
        return address_doc
    except Exception as e:
        return str(e)