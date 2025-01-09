import { RouterProvider } from "react-router-dom";
import router from "./router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer rtl></ToastContainer>
    </>
  );
}

export default App;
