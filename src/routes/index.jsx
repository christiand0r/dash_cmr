import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Error from "../pages/Error";
import Customers, { loader as customersLoader } from "../pages/Customers";
import NewCustomer, { action as newCustomerAction } from "../pages/NewCustomer";
import Customer, {
  loader as customerLoader,
  action as customerAction,
} from "../pages/Customer";
import { action as customerDeleteAction } from "../components/CustomerRow";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/customers" replace />,
      },
      {
        name: "Clientes",
        path: "/customers",
        element: <Customers />,
        loader: customersLoader,
        errorElement: <Error />,
      },
      {
        name: "Nuevo Cliente",
        path: "/customers/new",
        element: <NewCustomer />,
        action: newCustomerAction,
        errorElement: <Error />,
      },
      {
        path: "/customers/:id",
        element: <Customer />,
        action: customerAction,
        loader: customerLoader,
        errorElement: <Error />,
      },
      {
        path: "/customers/delete/:id",
        action: customerDeleteAction,
      },
    ],
  },
];

export default routes;
