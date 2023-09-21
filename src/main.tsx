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
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage.tsx";
import { SlowPage } from "./pages/SlowPage/SlowPage.tsx";
import { ReduxExamplePage } from "./pages/ReduxExamplePage.tsx";
import { ProductPage } from "./pages/ProductPage/ProductPage.tsx";

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
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/registration", element: <RegistrationPage /> },
      { path: "/slow-page", element: <SlowPage /> },
      { path: "use-redux-example", element: <ReduxExamplePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
