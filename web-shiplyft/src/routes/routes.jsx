import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import MainLayout from '../layout/MainLayout';
import SignUp from '../features/SignUp';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
    <Route path="/sign-up" element={ <SignUp />} />

      <Route path="/" element={<MainLayout> <HomePage /></MainLayout>} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
