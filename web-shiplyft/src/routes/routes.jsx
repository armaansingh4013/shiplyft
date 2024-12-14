import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../screens/Home";
import SignUp from "../features/SignUp";
import Signin from "../features/Signin";
import SignInNumber from "../features/SignInNumber";
import ForgotPasswordEmail from "../features/ForgotPasswordEmail";
import ForgotPasswordCode from "../features/ForgotPasswordCode";
import ResetPassword from "../features/ResetPassword";
import LoginOtp from "../features/LoginOtp";
import Dashboard from "../screens/Dashboard";
import OrderPage from "../features/Order";
import MainLayout from "../layout/MainLayout";


const AppRoutes = () => (
  <BrowserRouter basename="web-shiplyft">
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/signin-number" element={<SignInNumber />} />
      <Route path="/forgot-password" element={<ForgotPasswordEmail/>} />
      <Route path="/forgot-password-verify/:encodedEmail" element={<ForgotPasswordCode/>} />
      <Route path="/reset-password" element={<ResetPassword/>} />
      <Route path="/login-otp/:encodedPhone" element={<LoginOtp/>} />
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;


