import { redirect, useFetcher, useNavigate } from "react-router-dom";
import { deleteCustomer } from "../services/customers.service";
import Swal from "sweetalert2";

export const action = async ({ params }) => {
  const confirm = await Swal.fire({
    icon: "warning",
    title: "¿Seguro desea eliminar este cliente?",
    text: "Está acción no puede revertirse.",
    confirmButtonText: "Si, eliminar cliente",
    confirmButtonColor: "#b91c1c",
    showCancelButton: true,
    cancelButtonText: "No, cancelar",
    cancelButtonColor: "#4b5563",
  }).then(({ isConfirmed }) => {
    if (!isConfirmed) return;

    return deleteCustomer(params.id).then((res) => res.ok);
  });

  if (!confirm) return null;

  return redirect("/");
};

function CustomerRow({ customer }) {
  const navigate = useNavigate();

  const fetcher = useFetcher();

  return (
    <tr className="even:border-b even:border-t even:border-b-gray-200 even:border-t-gray-200">
      <td className="p-6">
        <p className="font-bold text-xl cursor-pointer transition-colors text-teal-700 hover:text-teal-900">
          {customer.name}
        </p>
        <small className="text-gray-600">{customer.enterprise}</small>
      </td>
      <td className="p-6">
        <p className="text-gray-600">
          <span className="font-bold uppercase ">TEL:</span>{" "}
          {customer.code + customer.phone}
        </p>
        <p className="text-gray-600">
          <span className="font-bold uppercase text-gray-600">CORREO:</span>{" "}
          {customer.email}
        </p>
      </td>

      <td className="p-6">
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate(`/customers/${customer.id}`)}
            className="font-bold text-sm uppercase rounded-lg px-4 py-1 text-white bg-teal-700"
          >
            Editar
          </button>

          <fetcher.Form
            method="post"
            action={`/customers/delete/${customer.id}`}
          >
            <button className="font-bold text-sm uppercase rounded-lg px-4 py-1 text-white bg-red-700">
              Eliminar
            </button>
          </fetcher.Form>
        </div>
      </td>
    </tr>
  );
}

export default CustomerRow;
