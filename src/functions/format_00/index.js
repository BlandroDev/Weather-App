export const format_00 = (entrie) => {
  const entrieString = entrie.toString();
  if (entrieString.length < 2) return `0${entrie}`;
  else return entrie;
};
