import homeIcon from "assets/icons/home/hogar.png";
import { Link } from "wouter";
const HomeIcon = () => {
  return (
    <Link to="/">
      <img
        src={homeIcon}
        alt="homeIcon"
        className="RenderMainPage__img--HomeIcon"
      />
    </Link>
  );
};

export default HomeIcon;
