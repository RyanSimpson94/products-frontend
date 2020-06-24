const CurrencySymbol = {
  GBP: "£",
  USD: "$",
  EUR: "€"
};

const getCurrencySymbol = (currency) => {
  switch (currency.toLowerCase()) {
    case "gbp":
      return CurrencySymbol.GBP;
    case "usd":
      return CurrencySymbol.USD;
    case "eur":
      return CurrencySymbol.EUR;
    default: return "";
  }
};

export { CurrencySymbol, getCurrencySymbol };
export default {
  getCurrencySymbol,
  CurrencySymbol
};