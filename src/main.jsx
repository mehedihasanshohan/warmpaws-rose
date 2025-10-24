import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Root/MainLayout.jsx';
import Home from './home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import ForgetPassword from './components/forget-passwword/ForgetPassword.jsx';
import MyProfile from './pages/myprofile/MyProfile.jsx';
import ServiceDetails from './components/PetsServices/ServiceDetails.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import PrivateRoutes from './Routes/PrivateRoutes.jsx';
import Services from './pages/Services/Services.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {index: true, element:<Home></Home> },
      {
        path: '/service/:id',
        element:  <PrivateRoutes>
                   <ServiceDetails></ServiceDetails>
                  </PrivateRoutes>
      },
      {
        path: '/login',
        element: <Login></Login>},
      {path: '/register', element:<Register></Register>},
      {
        path:'/forget-password',
        element:<ForgetPassword></ForgetPassword>},
      {
        path: '/my-profile',
        element:  <PrivateRoutes>
                   <MyProfile></MyProfile>
                  </PrivateRoutes>
      },
      {
        path: '/services',
        element: <Services></Services>
      }
    ]
  },
  {
    path: "/about",
    element: <div>about</div>,
  },
  {
    path: "/contact",
    element: <div>contact</div>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
