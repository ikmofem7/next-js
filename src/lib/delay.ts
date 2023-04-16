const delay = (time: number) => {
  return new Promise((resolve) => setTimeout(() => resolve("success"), time));
};

export { delay };
