import NavList from "../components/NavList";
import InfiniteScroll from "../components/InfiniteScroll";
import Pagination from "../components/Pagination";
import NestedPostComment from "../components/NestedPostComment";
import FileExplorer from "../components/FileExplorer";
import { useState } from "react";

const reactTopicData = [
  {
    topic: "Post Nested / Infinite Comments",
    component: "NestedPostComment",
  },
  { topic: "React Pagination", component: "Pagination" },
  { topic: "Infinite Scroll", component: "InfiniteScroll" },
  { topic: "File Explorer", component: "FileExplorer" },
  { topic: "Shopping Cart", component: "Treestructure" },
  { topic: "TicToe Game", component: "Treestructure" },
  { topic: "To DO List App", component: "ToDoApp" },
  { topic: "Image Carousel", component: "ImageCarousel" },
  { topic: "Accordian", component: "Accordian" },
  { topic: "Counter", component: "Counter" },
  { topic: "Counter With Reducer", component: "CounterReducer" },
  { topic: "Counter with Store", component: "CounterRedux" },
  { topic: "Counter with Store", component: "CounterRedux" },
];

const ReactTopic = () => {
  const [activeComp, setActiveComp] = useState("NestedPostComment");
  const selectTopicHandler = (comp: string) => {
    setActiveComp(comp);
  };

  return (
    <div className="container m-auto flex">
      <div className="side-bar w-1/4 border border-solid pt-2">
        {reactTopicData.map((nav, idx) => {
          return (
            <NavList
              key={`${nav.component}-${idx}`}
              text={nav.topic}
              link={nav.component}
              clickHandler={selectTopicHandler}
            />
          );
        })}
      </div>
      <div className="w-3/4 ml-2">
        {activeComp === "NestedPostComment" && <NestedPostComment />}
        {activeComp === "InfiniteScroll" && <InfiniteScroll />}
        {activeComp === "Pagination" && <Pagination />}
        {activeComp === "FileExplorer" && <FileExplorer />}
      </div>
    </div>
  );
};

export default ReactTopic;
