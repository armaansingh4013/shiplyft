import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../screens/Home";
import SignUp from "../features/SignUp";

const AppRoutes = () => (
  <BrowserRouter basename="web-shiplyft">
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
