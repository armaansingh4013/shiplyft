
const APIs = {
  signup: '/api/method/shiplyft.api.signup.signup',
  signin: 'api/method/shiplyft.api.login.login',
  signinphone:"api/method/shiplyft.api.verify_otp.request_otp",
  signinphoneotp:"api/method/shiplyft.api.verify_otp.verify_otp",
  resetemailsend:"api/method/shiplyft.api.login.send_otp",
  resetotpcheck:"api/method/shiplyft.api.login.change_password_with_otp",
  resetpassword:"api/method/shiplyft.api.login.change_password_with_otp",
  order_details:"api/method/shiplyft.api.order_details.get_filtered_sales_orders",
  add_single_order:"api/method/shiplyft.api.create_order.create_order"
}
export default APIs

 