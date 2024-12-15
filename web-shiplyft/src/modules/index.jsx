import axiosInstance from  "../axiosInstance";
import APIs from "../api/index";

export const signUp = async (phone,firstname,email, password,confirm_password) => {
  try {
    const response = await axiosInstance.post(APIs.signup, {
    "body":{phone:phone,
      firstname:firstname,
      user_email:email,
      password:password,
      confirm_password:confirm_password}
    });
    return response.data.message;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await axiosInstance.post(APIs.signin, {
      usr:email,
      pwd:password
    });
    return response.data.message;
  } catch (error) {
    throw error;
  }
};
export const signInPhone = async (phone) => {
  try {
    const response = await axiosInstance.post(APIs.signinphone, {
      
      phone:phone
    });
    return response.data.message;
  } catch (error) {
    throw error;
  }
};
export const signInPhoneOtp = async (otp,phone) => {
  try {
    const response = await axiosInstance.post(APIs.signinphoneotp, {
     
        otp:otp,
      phone:phone
    });
    return response.data.message;
  } catch (error) {
    throw error;
  }
};

export const resetEmailSend = async (user) => {
  try {
    const response = await axiosInstance.post(APIs.resetemailsend, {
     
       "body":{
        usr:user
       }
    });
    return response.data.message;
  } catch (error) {
    throw error;
  }
};

export const resetOtpCheck = async (user,otp) => {
  try {
    const response = await axiosInstance.post(APIs.resetotpcheck, {
      "body":{usr:user,
        otp:otp}
    });
    return response.data.message;
  } catch (error) {
    throw error;
  }
};
export const resetPassword = async (user,otp,password) => {
  try {
    const response = await axiosInstance.post(APIs.resetpassword, {
     "body":{
      usr:user,
      otp:otp,
      new_pwd:password
     }
    });
    return response.data.message;
  } catch (error) {
    throw error;
  }
};

export const orderDetails = async (custom_status, time_period, order_id, cusotm_order_category,setData) => {
  try {
    console.log("jhgf");
    
    const response = await axiosInstance.post(APIs.order_details, {
      custom_status:custom_status,
      time_period:time_period,
      order_id:order_id,
      cusotm_order_category:cusotm_order_category
    });
    console.log(response.data.message);
    setData(response.data.message)
  //   setData([
  //     {
  //         "name": "SAL-ORD-2024-00001",
  //         "customer_name": "Pardeep",
  //         "custom_custom_status": "New",
  //         "custom_order_category": "Domestic",
  //         "grand_total": 100.0,
  //         "shipping_address": "punjab<br>\nJindwari<br>mohali<br>\nPunjab<br>140133<br>India<br>\n<br>\n",
  //         "items": [
  //             {
  //                 "item_name": "Samsung Phone",
  //                 "item_code": "Samsung Phone"
  //             }
  //         ]
  //     },
  //     {
  //         "name": "SAL-ORD-2024-00011",
  //         "customer_name": "Pardeep",
  //         "custom_custom_status": "New",
  //         "custom_order_category": "Domestic",
  //         "grand_total": 4999.0,
  //         "shipping_address": "punjab<br>\nJindwari<br>mohali<br>\nPunjab<br>140133<br>India<br>\n<br>\n",
  //         "items": [
  //             {
  //                 "item_name": "Redmi",
  //                 "item_code": "Redmi"
  //             }
  //         ]
  //     }
  // ])
  return 
    // return response.data.message;
  } catch (error) {
    throw error;
  }
};