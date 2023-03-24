const validateForm = (form, { optionals, mutations }) => {
  const errors = {};
  const data = Object.fromEntries(form);

  // Filter only required keys
  const keys = Object.keys(data).filter((key) => !optionals.includes(key));

  // Assing errors in object "errors"
  keys.forEach((key) => {
    errors[key] = mutations[key] ? !mutations[key](data[key]) : !data[key];
  });

  return {
    data,
    errors,
    hasErrors: Object.values(errors).some((value) => value),
  };
};

export { validateForm };
