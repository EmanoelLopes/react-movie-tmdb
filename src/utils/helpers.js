export const textTruncate = (str, length) => {
  return (str.length > length)
    ? str.substring(0, length - 1) + '...'
    : str;
};

export const sortedCast = arr => arr.sort((a, b) => {
  if (a.order > b.order) return 1;
  if (a.order < b.order) return -1;
  return 0;
});
