import { useState } from "react";

const debounce = function (cb, d) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("cbq", args);
      cb(...args);
    }, d);
  };
};

const throttling = function (cb, d) {
  let lastTriggerTime = 0;
  return function (...args) {
    let now = Date.now();
    if (now - lastTriggerTime < d) return;
    lastTriggerTime = now;
    return cb(...args);
  };
};

const TypeaheadComponent = () => {
  const data = [
    "Apple",
    "Ant",
    "Angry",
    "Always",
    "Banana",
    "Ball",
    "Bail",
    "Orange",
    "India",
    "Isrel",
    "Singapore",
    "Malasiya",
  ];

  const [suggestionList, setSuggestionList] = useState([]);

  const typeSearchHandler = (e) => {
    const tempText = e.target.value;
    if (tempText === "") {
      setSuggestionList([]);
      return;
    }
    const getMatchedText = getMatchedValue(tempText);
    setSuggestionList([...getMatchedText]);
  };

  const getMatchedValue = (keyText) => {
    const tempKeyText = keyText.toLowerCase();
    const result = data.filter((item, id) => {
      const tempItemText = item.toLowerCase();
      if (tempItemText.substring(0, tempKeyText)) return item;
    });
    return result;
  };

  return (
    <div>
      <h2 className="text-xl leading-10">5. Auto complete Component</h2>
      <p>
        When user types the letter in the input box will give suggestion list to
        the user to choose (TO DO Implement Debounce and Throttling)
      </p>

      <div className="text-center border-red-400 border mt-4">
        <input
          className="w-60 p-3 m-4 border-blue-400 border"
          type="text"
          placeholder="type to search"
          onChange={(e) => typeSearchHandler(e)}
        />
        <div>
          <ul>
            {suggestionList.map((item, id) => {
              return <li key={item}> {item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TypeaheadComponent;
