const generatorID = () => {
  const stamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2);

  return stamp + random;
};

export { generatorID };
