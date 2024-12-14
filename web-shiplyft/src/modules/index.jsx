import axiosInstance from  "../axiosInstance";
import APIs from "../api/index";

export const signUp = async (phone,firstname,email, password,confirm_password) => {
  try {
    const response = await axiosInstance.post(APIs.signup, {
      body:{phone:phone,
      firstname:firstname,
      user_email:email,
      password:password,
      confirm_password:confirm_password}
    });
    return response.data.message.token;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await axiosInstance.post(APIs.signin, {
      body:{
      usr:email,
      pwd:password}
    });
    console.log('====================================');
    console.log(response.data.message.token);
    console.log('====================================');
    return response;
  } catch (error) {
    throw error;
  }
};
export const signInPhone = async (phone) => {
  try {
    const response = await axiosInstance.post(APIs.signinphone, {
      body:{
      phone:phone}
    });
    console.log('====================================');
    console.log(response);
    console.log('====================================');
    return response;
  } catch (error) {
    throw error;
  }
};
export const signInPhoneOtp = async (otp,phone) => {
  try {
    const response = await axiosInstance.post(APIs.signinphone, {
      body:{
        otp:otp,
      phone:phone}
    });
    console.log('====================================');
    console.log(response);
    console.log('====================================');
    return response;
  } catch (error) {
    throw error;
  }
};