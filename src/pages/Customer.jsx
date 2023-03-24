import { Form, redirect, useActionData, useLoaderData } from "react-router-dom";
import BackButton from "../components/BackButton";
import ClientForm from "../components/ClientForm";
import { validateForm } from "../services/forms.service";
import { getCustomer, updatedCustomer } from "../services/customers.service";

export const loader = async ({ params }) => {
  const customer = await getCustomer(params.id);

  if (!customer)
    throw new Response("", {
      status: 404,
      statusText: `No hay clientes asociados a ese ID (${params.id})`,
    });

  return { customer };
};

export const action = async ({ request, params }) => {
  const form = await request.formData();

  const { data, errors, hasErrors } = validateForm(form, {
    optionals: ["note"],
    mutations: {
      email: (value) => {
        const regex = /^[\w.-]+(?:_[\w.-]+)?@[\w.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(value);
      },
    },
  });

  if (hasErrors) return { errors };

  return updatedCustomer(params.id, data).then(() => redirect("/"));
};

function Customer() {
  const { errors } = useActionData() || {};
  const { customer } = useLoaderData();

  return (
    <>
      <header className="flex items-center justify-between">
        <div>
          <h1 className="font-black text-4xl text-teal-700">Editar Cliente</h1>
          <p>
            A continuación podrás modifica y actualiza la información del
            cliente
          </p>
        </div>

        <BackButton />
      </header>

      <div className="rounded-lg drop-shadow-md mt-5 mx-auto px-5 py-10 max-w-5xl w-full bg-white">
        <Form method="POST">
          <ClientForm data={customer} errors={errors} />
        </Form>
      </div>
    </>
  );
}

export default Customer;
