import CountryList from "./data.js";
const inputElement = document.getElementById("inputText");
const ulListElement = document.getElementById("list-container");

inputElement.addEventListener("input", function (e) {
  const tempText = e.target.value;
  if (tempText === "") {
    removeListItems();
    return;
  }
  const listOfCoutryArray = getListOfCountry(tempText);
  displayResult(listOfCoutryArray);
});

const displayResult = (array) => {
  const ulElement = document.createElement("ul");
  array.forEach((element) => {
    const liElement = document.createElement("li");
    liElement.innerText = element.name;
    liElement.addEventListener("click", selectInput, false);
    ulElement.appendChild(liElement);
  });
  removeListItems();
  ulListElement.appendChild(ulElement);
};

function selectInput(e) {
  inputElement.value = e.target.innerText;
  removeListItems();
}

const removeListItems = () => {
  ulListElement.querySelectorAll("*").forEach((n) => n.remove());
};

const getListOfCountry = (str) => {
  const cleanStr = str.toLowerCase();
  const filterList = CountryList.filter((item, idx) => {
    const tempItemStr = item.name.toLowerCase();
    if (tempItemStr.includes(cleanStr)) {
      return item;
    }
  });

  return filterList;
};
