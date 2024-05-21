export const temperatureConvert = (celsius: number) => {
  const temp = localStorage.getItem("temp");
  let fahrenheit = (celsius * 9) / 5 + 32;
  const result =
    temp === "true" && temp !== null ? fahrenheit.toFixed(2) : celsius;
  return result;
};
