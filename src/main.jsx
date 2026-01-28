import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./Root/MainLayout.jsx";
import Home from "./home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import ForgetPassword from "./components/forget-passwword/ForgetPassword.jsx";
import MyProfile from "./pages/myprofile/MyProfile.jsx";
import ServiceDetails from "./components/PetsServices/ServiceDetails.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";
import Services from "./pages/Services/Services.jsx";
import { ToastContainer } from "react-toastify";

import AOS from "aos";
import "aos/dist/aos.css";
import ContactUs from "./pages/Contacts/ContactUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { index: true, element: <Home></Home> },
      {
        path: "/service/:id",
        element: (
            <ServiceDetails></ServiceDetails>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      { path: "/register", element: <Register></Register> },
      {
        path: "/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoutes>
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/contacts",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "/about",
    element: <div>about</div>,
  },
]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider>
//       <RouterProvider router={router} />
//     </AuthProvider>
//     <ToastContainer></ToastContainer>
//   </StrictMode>,
// )

// eslint-disable-next-line react-refresh/only-export-components
const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root></Root>
  </StrictMode>,
);
