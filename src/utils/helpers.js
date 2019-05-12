export const textTruncate = (str, length) => {
  return (str.length > length)
    ? str.substring(0, length - 1) + '...'
    : str;
};
