import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layouts/Layout";
import Home from "../pages/Home";
import Facilities from "../pages/Facilities";
import Rooms from "../pages/Rooms";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/facilities",
        element: <Facilities />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
