import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomePage,
  ProductsPage,
  AboutUsPage,
  ContactPage,
  ProfilePage,
  NotFoundPage,
} from "./pages";
import { RegistrationPage } from "./pages/RegistrationPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/registration", element: <RegistrationPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
