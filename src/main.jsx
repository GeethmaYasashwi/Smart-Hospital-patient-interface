import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'




import LoginPage from './Pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';


import CAppointment from './Pages/DoctorAppointmentpage/ConsultationAppointmentPage.jsx';
import TAppointment from './Pages/DoctorAppointmentpage/TreatmentAppoitmentPage.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  
  {
    path: "/register",
    element: <RegisterPage/>,
  },
 

]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
