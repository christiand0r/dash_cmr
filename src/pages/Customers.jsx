import { Link, useLoaderData } from "react-router-dom";
import { getCustomers } from "../services/customers.service";
import CustomerRow from "../components/CustomerRow";

export const loader = async () => {
  const customers = await getCustomers();
  return { customers };
};

function Customers() {
  const { customers } = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-teal-700">Clientes</h1>
      <p>Administra tus clientes</p>

      <table className="table-auto rounded-lg border-collapse overflow-hidden drop-shadow-md mt-5 w-full bg-white">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-6 py-4 text-gray-600">Cliente</th>
            <th className="px-6 py-4 text-gray-600">Contacto</th>
            <th className="px-6 py-4 text-gray-600">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {!customers.length && (
            <tr>
              <td colSpan={3} className="text-center px-8 py-6">
                Comienza{" "}
                <Link to="/customers/new" className="text-teal-700">
                  agregando un cliente...
                </Link>
              </td>
            </tr>
          )}

          {customers.map((customer) => (
            <CustomerRow key={customer.id} customer={customer} />
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Customers;
