export const getRandomNumber = (max: number) => {
  const value = Math.floor(Math.random() * max);
  const sign = Math.random() < 0.5 ? -1 : 1;

  return value * sign;
};
