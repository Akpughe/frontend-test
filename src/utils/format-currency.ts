const formatCurrency = (number: number, locale = "en-US", options = {}) => {
  return number?.toLocaleString(locale, options);
};

export default formatCurrency;
