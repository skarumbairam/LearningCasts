import { Link } from "react-router-dom";
const Header = (props) => {
  const navHeaders = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Blog", path: "/blog" },
  ];
  return (
    <div className="container m-auto ">
      <nav className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold underline">Logo</h1>
        </div>
        <div>
          <ul className="list-none flex">
            {navHeaders.map((header, id) => {
              return (
                <li className="p-2" key={`navHeader-${id}`}>
                  <Link to={header.path}>{header.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
