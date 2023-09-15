import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./contexts";
import { Provider } from "react-redux";
import { store } from "./store";

function Root() {
  return (
    <>
      <HelmetProvider>
        <Provider store={store}>
          <UserProvider>
            <Header />
            <div className="w-full h-[64px]" />
            <Outlet />
            <Footer />
          </UserProvider>
        </Provider>
      </HelmetProvider>
      <ToastContainer position="bottom-left" />
    </>
  );
}

export default Root;
