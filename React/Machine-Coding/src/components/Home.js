import SimpleCounter from "./SimpleCounter";
import CounterUserReducer from "./CounterUserReducer";
import CounterRedux from "./CounterRedux";
import ShoppingCart from "./ShoppingCart";
import TypeaheadComponent from "./TypeaheadComponent";
import LoadDataAndDisplay from "./LoadDataAndDisplay";
import NestedComments from "./NestedComments";
import TicToc from "./TicToc";
import ModalPopup from "./ModalPopup";
import MultiDropDown from "./MultiDropDown";

const Home = () => {
  const componentsType = [
    "Counter",
    "Counter with UseReducer",
    "Counter with Redux",
    "Shopping Cart",
    "Auto Complete",
    "Load Data & TODO CURD Operation",
    "Nested Comments",
    "TicToc Game",
    "Multi DropDown",
    "Modal Popup Component",
    "Infinete Scroll",
    "Pagination",
    "Quiz Game",
    "Accordian",
  ];
  return (
    <div className="flex flex-col pt-2 mt-2">
      <h1 className="font-semibold text-3xl	">Home Page</h1>
      <h2 className="text-2xl text-center mt-5">React Problem Topics</h2>
      <div className="w-72 m-auto p-3">
        <ul className="list-decimal">
          {componentsType.map((item, id) => {
            return <li key={`${item}-id`}>{item}</li>;
          })}
        </ul>
      </div>

      <div className="p-3">
        <SimpleCounter />
      </div>

      <div className="p-3">
        <CounterUserReducer />
      </div>

      <div className="p-3">
        <CounterRedux />
      </div>

      <div className="p-3">
        <ShoppingCart />
      </div>

      <div className="p-3">
        <TypeaheadComponent />
      </div>

      <div className="p-3">{/* <LoadDataAndDisplay /> */}</div>

      <div className="p-3">
        <NestedComments />
      </div>

      <div className="p-3">
        <TicToc />
      </div>

      <div className="p-3">
        <MultiDropDown />
      </div>

      <div className="p-3">
        <ModalPopup />
      </div>
    </div>
  );
};

export default Home;
