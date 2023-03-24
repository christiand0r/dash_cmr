function ClientForm({ data, errors }) {
  const handleErrorStyle = (error) => {
    const base =
      "rounded-lg outline-none border px-2 py-1 w-full text-gray-600";

    return !error
      ? `${base} placeholder:text-gray-400 bg-gray-100 border-gray-100`
      : `${base} placeholder:text-red-400 bg-red-100 border-red-100`;
  };
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label
          htmlFor="name"
          className="block font-semibold text-sm uppercase mb-1 text-gray-600"
        >
          Nombre
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del cliente"
          defaultValue={data?.name}
          className={handleErrorStyle(errors?.name)}
        />
        {errors?.name && (
          <p className="text-sm mt-2 text-red-600">
            Debe proporcionar un nombre válido
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="enterprise"
          className="block font-semibold text-sm uppercase mb-1 text-gray-600"
        >
          Empresa
        </label>
        <input
          type="text"
          name="enterprise"
          id="enterprise"
          placeholder="Nombre de la empresa del cliente"
          defaultValue={data?.enterprise}
          className={handleErrorStyle(errors?.enterprise)}
        />
        {errors?.enterprise && (
          <p className="text-sm mt-2 text-red-600">
            Debe proporcionar un nombre de empresa válido
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-semibold text-sm uppercase mb-1 text-gray-600"
        >
          Correo electrónico
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Correo electrónico del cliente"
          defaultValue={data?.email}
          className={handleErrorStyle(errors?.email)}
        />
        {errors?.email && (
          <p className="text-sm mt-2 text-red-600">
            El correo electrónico no es válido
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="code"
          className="block font-semibold text-sm uppercase mb-1 text-gray-600"
        >
          Telefono
        </label>
        <div className="flex gap-2 w-full">
          <input
            type="text"
            name="code"
            id="code"
            defaultValue={data?.code}
            placeholder="Ej. +58"
            className={`${handleErrorStyle(
              errors?.code && errors?.phone
            )} w-20`}
          />
          <input
            type="text"
            name="phone"
            id="phone"
            defaultValue={data?.phone}
            placeholder="Telefono del cliente"
            className={handleErrorStyle(errors?.code && errors?.phone)}
          />
        </div>

        {errors?.code && errors?.phone && (
          <p className="text-sm mt-2 text-red-600">
            Debe indicar un número de telefono válido
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="notes"
          className="block font-semibold text-sm uppercase mb-1 text-gray-600"
        >
          Notas
        </label>
        <textarea
          name="note"
          id="note"
          defaultValue={data?.note}
          className="rounded-lg outline-none border px-2 py-1 min-h-[10rem] w-full  text-gray-600 bg-gray-100 border-gray-100 placeholder:text-gray-400"
        />
      </div>

      <button
        type="submit"
        className="font-semibold uppercase rounded-lg px-6 py-3 w-full text-white bg-teal-700"
      >
        {data ? "Actualizar cliente" : "Agregar cliente"}
      </button>
    </div>
  );
}

export default ClientForm;
