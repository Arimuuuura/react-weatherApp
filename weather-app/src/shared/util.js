export const getInteger = (num) => {
  const result = Math.floor(num);
  return result;
}

export const getDecimal = (num) => {
  const result = Math.floor(num * 10) / 10;
  return result;
}
