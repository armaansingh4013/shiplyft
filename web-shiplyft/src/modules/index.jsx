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