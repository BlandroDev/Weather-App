export const keywordSearch = (e) => {
  if (e) window.sessionStorage.setItem("search", e.target.value);
  return `${window.sessionStorage.getItem("search") || ""}`;
};
