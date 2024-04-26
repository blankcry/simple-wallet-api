export * from "./generator"
export const denominateCurrency = (amount: number) => {
  return amount * 100;
}

export const nominateCurrency = (amount: number) => {
  return amount / 100;
}