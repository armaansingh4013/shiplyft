
from frappe import _ 
from frappe.utils import nowdate, add_months
import frappe
import re

@frappe.whitelist()
def get_filtered_sales_orders(custom_status=None, custom_order_category=None, time_period=None, order_id=None):
    filters = {"docstatus": 0}  

  
    if custom_status:
        filters["custom_custom_status"] = custom_status
    if custom_order_category:
        filters["custom_order_category"] = custom_order_category

   
    if time_period:
        start_date = add_months(nowdate(), -int(time_period))
        filters["transaction_date"] = [">=", start_date]

 
    if order_id:
        filters["name"] = order_id

    sales_orders = frappe.get_all(
        "Sales Order",
        filters=filters,
        fields=[
            "name",
            "customer_name",
            "custom_custom_status",
            "custom_order_category",
            "grand_total",
            "shipping_address"
        ],
        order_by="transaction_date desc"
    )
    for order in sales_orders:
     
        items = frappe.get_all(
            "Sales Order Item",
            filters={"parent": order["name"]},
            fields=["item_name", "item_code"]
        )
        order["items"] = items  
    return sales_orders
