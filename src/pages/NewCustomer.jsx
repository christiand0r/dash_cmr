import { Form, redirect, useActionData } from "react-router-dom";
import BackButton from "../components/BackButton";
import ClientForm from "../components/ClientForm";
import { validateForm } from "../services/forms.service";
import { createCustomer } from "../services/customers.service";

export const action = async ({ request }) => {
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

  return createCustomer(data).then(() => redirect("/"));
};

function NewCustomer() {
  const { errors } = useActionData() || {};

  return (
    <>
      <header className="flex items-center justify-between">
        <div>
          <h1 className="font-black text-4xl text-teal-700">Nuevo Cliente</h1>
          <p>
            Proporciona información de tu cliente y registraslo en el sistema
          </p>
        </div>

        <BackButton />
      </header>

      <div className="rounded-lg drop-shadow-md mt-5 mx-auto px-5 py-10 max-w-5xl w-full bg-white">
        <Form method="POST">
          <ClientForm errors={errors} />
        </Form>
      </div>
    </>
  );
}
export default NewCustomer;
