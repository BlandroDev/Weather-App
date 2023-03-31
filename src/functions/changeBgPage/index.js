const changeBgPage = (url) => {
  const bg = document.getElementById("root");
  bg.style.cssText = `background-image:url(${url});
    background-repeat: no-repeat;
    background-size: cover;
    transition: background 1s;
    `;
};

export default changeBgPage;
