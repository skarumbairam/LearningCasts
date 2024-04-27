import TodoComponent from "./TodoComponent";
import Autocomplete from "./Autocomplete";
import QuizeComponent from "./QuizComponent";
import TicTocComponent from "./TicTocComponent";
import PaginationComponent from "./PaginationComponent";
import FormComponent from "./FormComponent";
import StopWatchComponent from "./StopWatchComponent";
import AccordianComponent from "./AccordianComponent";
import ImageCarousel from "./ImageCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import InfineteScroll from "./InfineteScroll";
import Pagination from "./Pagination";
import CounterReducer from "./CounterReducer";
import CounterRedux from "./CounterRedux";
import appStore from "../store/appStore";
import { Provider } from "react-redux";
import UseCallBackExample from "./UseCallBackExample";

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
        <UseCallBackExample />
        <Provider store={appStore}>
          <CounterReducer />
          <CounterRedux />
        </Provider>
        <FormComponent />
        <TodoComponent />
        <Autocomplete />
        <Pagination />
        <PaginationComponent />
        <ImageCarousel />
        <InfineteScroll />
      </div>
    </div>
  );
};

export default HomePage;
