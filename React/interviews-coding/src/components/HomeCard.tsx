import { Link } from "react-router-dom";

interface cardProps {
  title: string;
  para?: string;
  link?: string;
}

const HomeCard: React.FC<cardProps> = ({ title, para, link }) => {
  return (
    <div className="w-1/3 shadow-lg rounded bg-white p-10 m-5">
      <h2 className="font-medium text-2xl p-2">{title}</h2>
      {para && <p className="font-medium p-2">{para}</p>}
      {link && (
        <Link className="font-medium p-2 text-cyan-500" to={link}>
          Learn More
        </Link>
      )}
    </div>
  );
};

export default HomeCard;
