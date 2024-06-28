const NavList: React.FC<{
  text: string;
  link: string;
  clickHandler: (link: string) => void;
}> = ({ text, link, clickHandler }) => {
  const onClickHandler = () => {
    clickHandler(link);
  };
  return (
    <div>
      <button
        onClick={() => onClickHandler()}
        className="p-2 m-2 text-black border-b w-full text-left"
      >
        {text}
      </button>
    </div>
  );
};

export default NavList;
