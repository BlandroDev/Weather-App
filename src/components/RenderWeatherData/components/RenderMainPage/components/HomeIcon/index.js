import homeIcon from "assets/icons/home/hogar.png";
import { Link } from "wouter";
const HomeIcon = () => {
  return (
    <Link to="/" className="RenderMainPage__a--HomeIcon">
      <img
        src={homeIcon}
        alt="homeIcon"
        className="RenderMainPage__img--HomeIcon"
      />
      <p className="RenderMainPage__p--HomeIcon">Home</p>
    </Link>
  );
};

export default HomeIcon;
