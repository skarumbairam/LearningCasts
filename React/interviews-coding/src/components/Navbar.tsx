import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className="shadow-lg h-auto">
      <ul className="container m-auto flex items-center align-middle">
        <NavList text="Home" toPath="/" />
        <NavList text="React" toPath="/react" />
        <NavList text="Javascript" toPath="/javascript" />
        <NavList text="DSA's" toPath="/dsa" />
      </ul>
    </div>
  );
};

const NavList: React.FC<{ text: string; toPath: string }> = ({
  text,
  toPath,
}) => {
  return (
    <li className="p-2 m-2">
      <Link to={toPath}>{text}</Link>
    </li>
  );
};

export default NavBar;
