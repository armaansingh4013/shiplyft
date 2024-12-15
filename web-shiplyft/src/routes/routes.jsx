import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "../screens/Hero";
import SignUp from "../features/SignUp";
import Signin from "../features/Signin";
import SignInNumber from "../features/SignInNumber";
import ForgotPasswordEmail from "../features/ForgotPasswordEmail";
import ForgotPasswordCode from "../features/ForgotPasswordCode";
import ResetPassword from "../features/ResetPassword";
import LoginOtp from "../features/LoginOtp";
import Dashboard from "../screens/Dashboard";
import OrderPage from "../screens/Order";
import MainLayout from "../layout/MainLayout";
import Home from "../screens/Home";
import BIlling from "../screens/Billing";
import CustomerSupport from "../screens/CustomerSupport";
import Returns from "../screens/Returns";
import Setting from "../screens/Setting";
import Tools from "../screens/Tools";
import WeightManagement from "../screens/WeightManagement";
import HomePage from "../screens/Hero";


const AppRoutes = () => (
  <BrowserRouter basename="web-shiplyft">
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/signin-number" element={<SignInNumber />} />
      <Route path="/forgot-password" element={<ForgotPasswordEmail/>} />
      <Route path="/forgot-password-verify/:encodedEmail" element={<ForgotPasswordCode/>} />
      <Route path="/reset-password" element={<ResetPassword/>} />
      <Route path="/login-otp/:encodedPhone" element={<LoginOtp/>} />
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
      <Route path="/order/*" element={<MainLayout><OrderPage /></MainLayout>} />
      <Route path="/home" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/billing" element={<MainLayout><BIlling /></MainLayout>} />
      <Route path="/customer-support" element={<MainLayout><CustomerSupport /></MainLayout>} />
      <Route path="/setting" element={<MainLayout><Setting /></MainLayout>} />
      <Route path="/tools" element={<MainLayout><Tools /></MainLayout>} />
      <Route path="/weight-management" element={<MainLayout><WeightManagement /></MainLayout>} />
      <Route path="/home" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/return" element={<MainLayout><Returns /></MainLayout>} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;


