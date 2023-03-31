export const changeBgBodyPage = (url) =>
  (document.getElementById(
    "body"
  ).style.cssText = `background-image:url(${url});
background-repeat: no-repeat;
background-size: cover;
transition: background 1s;
`);
