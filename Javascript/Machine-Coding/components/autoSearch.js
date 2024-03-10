import { countryList } from "../utils/data.js";

const autoSearchInitialize = () => {
  console.log("countryList", countryList);

  // Create Input Field
  // Create Event
  // Load Data and filter
  // Display List of countries in UI
  // Put together

  createInputBox();
};

const createInputBox = () => {
  var rootElement = document.getElementById("searchComponent");
  var searchBar = document.createElement("input");
  searchBar.setAttribute("type", "text");
  searchBar.setAttribute("placeHolder", "Type country to search!");
  searchBar.setAttribute("value", "");
  rootElement.append(searchBar);

  searchBar.addEventListener("input", (e) => {
    const tempInput = e.target.value;
    const list =
      tempInput !== "" ? filterCountryList(countryList, tempInput) : [];
    const searchList = document.getElementById("searchList");
    list.map((item, idx) => {
      const tempLi = "<li>" + item.name + "</li>";
      searchList.append(tempLi);
    });

    console.log(list);
  });
};

const filterCountryList = (arrayList, inputText) => {
  const countryList = arrayList.filter(
    (item) =>
      item.name.toLowerCase().substring(0, inputText.length) ===
      inputText.toLowerCase()
  );

  return countryList;
};

export { autoSearchInitialize };
