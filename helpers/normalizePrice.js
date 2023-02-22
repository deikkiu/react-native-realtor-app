function normalizePrice(str) {
  return str.replace(/(\\xa0)+/g, ' ');
}

export default normalizePrice;
