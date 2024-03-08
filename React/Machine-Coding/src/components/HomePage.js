import TodoComponent from "./TodoComponent";
import SearchComponent from "./SearchComponent";
import TicTocComponent from "./TicTocComponent";
import FormComponent from "./FormComponent";
import StopWatchComponent from "./StopWatchComponent";
import AccordianComponent from "./AccordianComponent";
import PaginationComponent from "./PaginationComponent";
import ImageCarousel from "./ImageCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const HomePage = () => {
  const [theme, setTheme] = useState("light");
  const style = {
    light: {
      backgroundColor: "white",
      color: "black",
    },
    dark: {
      backgroundColor: "black",
      color: "white",
    },
  };

  return (
    <div className="container" style={style.light}>
      <h1> Home Page - Containst Machine Coding Collection</h1>

      <div className="row">
        <h3>ImageCarousel</h3>
        <ImageCarousel />
      </div>
      <div className="row">
        <h3>Pagination Compoent</h3>
        <PaginationComponent />
      </div>

      <div className="row">
        <h3>Todo List Component</h3>
        <TodoComponent />
      </div>

      <div className="row">
        <h3>Tic Toc Game</h3>
        <TicTocComponent />
      </div>

      <h3>Accordian Component</h3>
      <AccordianComponent />
    </div>
  );
};

export default HomePage;
