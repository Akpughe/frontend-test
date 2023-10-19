export const formatNumber = (
  number: number,
  locale = "en-US",
  options = {}
) => {
  return number.toLocaleString(locale, options);
};
