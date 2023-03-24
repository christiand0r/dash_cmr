import { generatorID } from "../utils/generators";

const URL = import.meta.env.VITE_SERVE;

const getCustomers = async () => {
  const customers = await fetch(`${URL}/customers`)
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return customers;
};

const getCustomer = async (id) => {
  const customer = await fetch(`${URL}/customers/${id}`)
    .then((res) => res.json())
    .then((json) => (Object.keys(json).length ? json : null))
    .catch((err) => console.log(err));

  return customer;
};

const createCustomer = async (customer) => {
  const { name, email, enterprise, phone, code, note } = customer;

  const res = await fetch(`${URL}/customers`, {
    method: "POST",
    body: JSON.stringify({
      code: code.includes("+") ? code : `+${code}`,
      created: Date.now(),
      email,
      enterprise,
      id: generatorID(),
      name,
      note,
      phone,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      const data = res.json();
      return { ok: true, message: "Customer created successfully", ...data };
    })
    .catch((err) => {
      console.log(err);
      return { ok: false, message: "Error trying to create a customer" };
    });

  return res;
};

const updatedCustomer = async (id, customer) => {
  const { name, email, enterprise, phone, code, note } = customer;

  // Get last data customer
  const data = await getCustomer(id);

  // Spread the data and then
  // updated with the new data receive
  const res = await fetch(`${URL}/customers/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      ...data,
      code: code.includes("+") ? code : `+${code}`,
      email,
      enterprise,
      modified: Date.now(),
      name,
      note,
      phone,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      const data = res.json();
      return { ok: true, message: "Customer updated successfully", ...data };
    })
    .catch((err) => {
      console.log(err);
      return { ok: false, message: "Error trying to updated a customer" };
    });

  return res;
};

const deleteCustomer = async (id) => {
  const res = await fetch(`${URL}/customers/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then(() => {
      return { ok: true, message: "Customer delete successfully" };
    })
    .catch((err) => {
      console.log(err);
      return { ok: false, message: "Error trying to delete a customer" };
    });

  return res;
};

export {
  getCustomers,
  getCustomer,
  createCustomer,
  updatedCustomer,
  deleteCustomer,
};
