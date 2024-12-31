import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "../screens/Hero";
import SignUp from "../features/SignUp";
import Signin from "../features/Signin";
import SignInNumber from "../features/SignInNumber";
import ForgotPasswordEmail from "../features/ForgotPasswordEmail";
import ForgotPasswordCode from "../features/ForgotPasswordCode";
import ResetPassword from "../features/ResetPassword";
import LoginOtp from "../features/LoginOtp";
import MainLayout from "../layout/MainLayout";
import Home from "../screens/Home";
import BIlling from "../screens/Billing";
import CustomerSupport from "../screens/CustomerSupport";
import Setting from "../screens/Setting";
import Tools from "../screens/Tools";
import WeightManagement from "../screens/WeightManagement";
import ProtectedRoute from "./ProtectedRoutes";
import OrderLayout from "../layout/OrderLayout";
import ReturnLayout from "../layout/ReturnLayout";
import DashboardLayout from "../layout/DashboardLayout";
import AddOrder from "../screens/AddOrder";
import KycProceed from "../components/kyc/KycProceed";
import KycAddress from "../components/kyc/KycAddress";
import GstVerify from "../components/kyc/KycGst";
import KycFiles from "../components/kyc/KycFiles";


const AppRoutes = () => (

  <BrowserRouter basename="web-shiplyft">
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/signin-number" element={<SignInNumber />} />
      <Route path="/forgot-password" element={<ForgotPasswordEmail />} />
      <Route path="/forgot-password-verify/:encodedEmail" element={<ForgotPasswordCode />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/login-otp/:encodedPhone" element={<LoginOtp />} />
      <Route path="/kyc/proceed" element={<KycProceed />} />
      <Route path="/kyc/address" element={<KycAddress />} />
      <Route path="/kyc/verify" element={<GstVerify />} />
      <Route path="/kyc/files" element={<KycFiles />} />
      <Route element={<ProtectedRoute />}>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/dashboard/*" element={<MainLayout><DashboardLayout /></MainLayout>} />



        <Route path="/order/*" element={<MainLayout><OrderLayout /></MainLayout>} />
        <Route path="/add-order/*" element={<MainLayout><AddOrder /></MainLayout>} />

        <Route path="/home" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/billing" element={<MainLayout><BIlling /></MainLayout>} />
        <Route path="/customer-support" element={<MainLayout><CustomerSupport /></MainLayout>} />
        <Route path="/setting" element={<MainLayout><Setting /></MainLayout>} />
        <Route path="/tools" element={<MainLayout><Tools /></MainLayout>} />
        <Route path="/weight-management" element={<MainLayout><WeightManagement /></MainLayout>} />
        <Route path="/home" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/return/*" element={<MainLayout><ReturnLayout /></MainLayout>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;


