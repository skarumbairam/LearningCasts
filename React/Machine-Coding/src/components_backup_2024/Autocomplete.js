import { useState } from "react";
import { CountryList } from "../util/data";

const Autocomplete = () => {
  const [inputText, setInputText] = useState("");
  const [displaySearch, setDisplaySearch] = useState([]);
  const onChangeHandler = (e) => {
    const tempText = e.target.value;
    setInputText(tempText);
    const tempSearchItems = getFilterItems(tempText);
    if (tempText === "") {
      setDisplaySearch([]);
      return;
    }
    setDisplaySearch([...tempSearchItems]);
  };

  const getFilterItems = (keyword) => {
    const tempKeyword = keyword.toLocaleLowerCase();
    const items = CountryList.filter((item, index) => {
      const tempTitle = item.name.toLocaleLowerCase();
      if (tempTitle.includes(tempKeyword)) return item;
    });
    return items;
  };

  const onSelectHandler = (item) => {
    setInputText(item.name);
    setDisplaySearch([]);
  };
  return (
    <div className="container">
      <div className="">
        <div className="input-group mb-3">
          <input
            type="text"
            value={inputText}
            aria-label="type for search"
            placeholder="Type your serach"
            className="form-control"
            onChange={(e) => onChangeHandler(e)}
          />
          <button className="btn border">Enter</button>
        </div>
        <div className="displayBox">
          <ul className="list-group list-group-flush">
            {displaySearch.map((item, id) => {
              return (
                <li
                  key={item.name}
                  className="list-group-item"
                  onClick={() => onSelectHandler(item)}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Autocomplete;
