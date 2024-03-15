import TodoComponent from "./TodoComponent";
import Autocomplete from "./Autocomplete";
import QuizeComponent from "./QuizComponent";
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
        <h3>1. Todo List Component</h3>
        <TodoComponent />
        <h3>2. Autocomplete Component</h3>
        <Autocomplete />
        <h3>3. Quiz Component</h3>
        <QuizeComponent />
        <h3>4. TicTocComponent</h3>
        <TicTocComponent />
      </div>
    </div>
  );
};

export default HomePage;
