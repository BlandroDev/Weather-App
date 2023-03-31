import { changeBgBodyPage } from "../../../../functions/changeBgBodyPage";
import { keywordSearch } from "../keywordSearch";
import { textFormat } from "../../../../functions/textFormat";
import { urlFormat } from "../../../../functions/urlFormat";

export const handleChangeSearch = ({ event, setSearch }) => {
  event.preventDefault();
  setSearch(keywordSearch(event));
};

export const handleSubmitSearch = ({ event, search, pushLocation }) => {
  event.preventDefault();
  if (search == null || search.length === 0 || /^\s*$/.test(search)) {
    return;
  } else {
    const url = window.localStorage.getItem("url");
    changeBgBodyPage(url);
    pushLocation(`/search/${urlFormat(encodeURI(textFormat(search)))}`);
    window.localStorage.setItem("recentSearch", textFormat(search));
  }
};
