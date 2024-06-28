import { FcFolder } from "react-icons/fc";
import { LuFileJson2 } from "react-icons/lu";

const file = [
  {
    id: 1,
    name: "root",
    isFolder: true,
    items: [{ id: 2, name: "public", isFolder: true, items: [] }],
  },
];

const FileExplorer = () => {
  return <Folder folderData={file[2]} />;
};

type folderData = {
  id: number;
  name: string;
  items: any[];
  isFolder: boolean;
};

const Folder: React.FC<{ folderData: folderData }> = ({ folderData }) => {
  return <div className="flex w-28"></div>;
};

export default FileExplorer;
