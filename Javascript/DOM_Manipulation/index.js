/****
 *
 * GET DATA FROM GIVEN API
 *  Display products
 *  Sort Products low to high & high to low
 *  Search Producs
 *  Add cart Items, increasing counts on cart items
 */
let productList = [];
let cartItems = [];

async function getData() {
  let data;
  try {
    data = await fetch("https://fakestoreapi.com/products");
    const products = await data.json();
    return products;
  } catch (error) {
    throw new Error("error", error);
  }
}

async function getProducts() {
  productList = await getData();
  const parentDiv = document.querySelector(".products-container");
  displayProducts(productList, parentDiv);
  searchSortItem();
  addCart();
}

function displayProducts(products, parentDiv) {
  const productsContainer = document.createElement("div");
  productsContainer.classList.add("products");

  for (let i = 0; i < products.length; i++) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.setAttribute("data-id", products[i].id);
    const tempProduct = products[i];

    productDiv.innerHTML = `
    <img class="product-image" src=${tempProduct.image} alt=${tempProduct.title}/> 
    <h2 class=title>${tempProduct.title}</h2>
    <h3 class=price>$ ${tempProduct.price}</h3>
    <button class=cart-btn>Add To Cart</button>
    <span class="fa fa-star checked space">${tempProduct.rating.rate}</span>
    `;

    productsContainer.appendChild(productDiv);
  }
  parentDiv.appendChild(productsContainer);
}

function searchSortItem() {
  const inputEl = document.getElementById("search-item");
  const searchBtn = document.getElementById("search-button");

  // Type input box
  inputEl.oninput = function (e) {
    const products = document.querySelectorAll(".product");
    const titleElement = document.querySelectorAll(".title");

    const val = this.value.toLowerCase();

    products.forEach((element, idx) => {
      if (!val || val == "") {
        element.classList.remove("hide");
      }

      const titleElementText = titleElement[idx].innerText.toLowerCase();

      if (titleElementText.includes(val)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    });
  };

  // Click search button
  searchBtn.onclick = function () {
    if (inputEl.value == "") alert("Please Enter Value");

    titleElement.forEach((element, idx) => {
      // get title content
      console.log(element.innerText);
      const searchText = inputEl.value.toLowerCase();
      const elementText = element.innerText.toLowerCase();

      if (elementText.includes(searchText)) {
        products[idx].classList.remove("hide");
      } else {
        products[idx].classList.add("hide");
      }
    });
  };

  // Sort Product by Price range

  lowtohigh.onchange = function () {
    const productsContainer = document.querySelector(".products");
    const parentDiv = document.querySelector(".products-container");
    productsContainer.remove();

    const sortProducts = productList.sort(
      (a, b) => parseInt(a.price) - parseInt(b.price)
    );

    displayProducts(sortProducts, parentDiv);
    addCart();
  };

  hightolow.onchange = function () {
    const productsContainer = document.querySelector(".products");
    const parentDiv = document.querySelector(".products-container");
    productsContainer.remove();

    const sortProducts = productList.sort(
      (a, b) => parseInt(b.price) - parseInt(a.price)
    );
    displayProducts(sortProducts, parentDiv);
    addCart();
  };
}

function addCart() {
  const cartBtns = document.querySelectorAll(".cart-btn");
  const cartCount = document.getElementById("cart-count");

  cartBtns.forEach((btn, idx) => {
    btn.onclick = function () {
      const getProductId = parseInt(this.parentElement.getAttribute("data-id"));
      console.log(getProductId);
      console.log(this.parentNode.remove());
      const cart = productList.filter((item, idx) => item.id === getProductId);

      cartItems.push(...cart);
      console.log(cartItems);
      cartCount.innerText = `Cart Item - ${cartItems.length}`;
    };
  });
}

getProducts();

/***
 * TODO LIST
 *
 */

let taskList = [
  {
    id: 1,
    task: "Task Item 1",
    isDone: true,
  },
  {
    id: 2,
    task: "Task Item 2",
    isDone: false,
  },
];

function todoOperation() {
  const addTaskBtn = document.querySelector(".add-task-btn");
  const inputTask = document.getElementById("input-task");
  const taskListsContainer = document.querySelector(".task-lists-container");

  addTaskBtn.onclick = function () {
    if (inputTask.value === "") alert("Please Enter Task");

    const tempTask = {
      id: Date.now(),
      task: inputTask.value,
      isDone: false,
    };

    inputTask.value = "";
    taskList.unshift(tempTask);

    // Remove existing and re-render
    const listContainer = document.querySelector(".list-container");
    listContainer.remove();

    addTask(taskList, taskListsContainer);
    console.log(taskList);
  };

  addTask(taskList, taskListsContainer);
  deleteTask();
}

function addTask(list, parentDiv) {
  const listContainer = document.createElement("div");
  listContainer.classList.add("list-container");
  list.forEach((item, idx) => {
    const listDiv = document.createElement("div");
    listDiv.classList.add("list-item");
    listDiv.setAttribute("data-id", item.id);

    listDiv.innerHTML = `
    <p class=${item.isDone ? "strike" : ""}>${item.task}</p>
     <input class="hide" type=text placeholder=${item.task} />
     <button class="hide save-btn" > Save </button>
     <button class="edit-btn"> Edit </button>
     <button class="delete-btn" >Delete</button>
    `;
    listContainer.appendChild(listDiv);
  });

  parentDiv.appendChild(listContainer);
  deleteTask();
}

function deleteTask() {
  const listItems = document.querySelectorAll(".list-item ");

  listItems.forEach((item, idx) => {
    item.onclick = function (e) {
      if (e.target.tagName === "P") {
        if (e.target.classList.contains("strike")) {
          e.target.classList.remove("strike");
        } else {
          e.target.classList.add("strike");
        }
      }

      if (e.target.tagName === "BUTTON") {
        let editFlag = false;

        const buttonVal = e.target.getAttribute("class");
        const getId = parseInt(this.getAttribute("data-id"));

        if (buttonVal === "delete-btn") {
          const filteredList = taskList.filter((ele, idx) => ele.id !== getId);
          taskList = [...filteredList];
          const listContainer = document.querySelector(".list-container");
          const taskListsContainer = document.querySelector(
            ".task-lists-container"
          );
          listContainer.remove();
          addTask(taskList, taskListsContainer);
        }

        //

        if (buttonVal === "edit-btn") {
          const inputbox = this.getElementsByTagName("input");
          const saveBtn = this.getElementsByClassName("save-btn");
          const editBtn = this.getElementsByClassName("edit-btn");

          inputbox[0].classList.remove("hide");
          saveBtn[0].classList.remove("hide");
          editBtn[0].classList.add("hide");

          saveBtn[0].onclick = function () {
            const inputVal = inputbox[0].value;
            console.log("INPUT VAL", inputVal);
            if (inputVal === "") alert("Value is empty");

            const updatedList = taskList.map((list, idx) => {
              if (list.id == getId) {
                list.task = inputVal;
              }
              return list;
            });

            console.log(updatedList);

            const listContainer = document.querySelector(".list-container");

            const taskListsContainer = document.querySelector(
              ".task-lists-container"
            );

            listContainer.remove();
            addTask(updatedList, taskListsContainer);

            inputbox[0].classList.add("hide");
            saveBtn[0].classList.add("hide");
            editBtn[0].classList.remove("hide");
          };
        }
      }
    };
  });
}

todoOperation();

/**
 * TIC TOC GAME
 */

let currentPlayer = "X";
let count = 0;
const winnerPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const squares = document.querySelectorAll(".square");

document.querySelector(".reset").onclick = function () {
  squares.forEach((el, id) => {
    el.innerText = "";
    el.removeAttribute("disabled");
    currentPlayer = "X";
  });
  document.querySelector(".result").innerText = "";
};

squares.forEach((square, idx) => {
  square.onclick = function () {
    if (this.innerText.length === 0) {
      this.innerText = currentPlayer;
      this.setAttribute("disabled", true);
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
      count++;
    }

    winnerPattern.forEach((currentPattern, idx) => {
      let winnweFound = true;
      const currPlayer = squares[currentPattern[0]].innerText;
      if (currPlayer == "") return;
      currentPattern.forEach((el, id) => {
        const tempPlayer = squares[el].innerText;
        if (currPlayer !== tempPlayer) {
          winnweFound = false;
        }
      });

      if (winnweugFound) {
        document.querySelector(
          ".result"
        ).innerText = `Game is Over And The Winner is :: ${currPlayer}`;
      }

      if (count === 9 && !winnweFound) {
        document.querySelector(
          ".result"
        ).innerText = `Game is Over And No Winner Reset The Game and Play Again`;
      }
    });
  };
});

/**
 *
 * FAQ Component
 */

const faqs = [
  {
    question: "What is FAQ 1?",
    answer:
      "FAQ stands for Frequently Asked Questions. It is a compilation of common questions and their corresponding answers that are often asked by customers or users. Having a FAQ section on a website, after a product description or in any customer support platform is crucial for various reasons.",
  },
  {
    question: "What is FAQ 2?",
    answer:
      "FAQ stands for Frequently Asked Questions. It is a compilation of common questions and their corresponding answers that are often asked by customers or users. Having a FAQ section on a website, after a product description or in any customer support platform is crucial for various reasons.",
  },
  {
    question: "What is FAQ 3?",
    answer:
      "FAQ stands for Frequently Asked Questions. It is a compilation of common questions and their corresponding answers that are often asked by customers or users. Having a FAQ section on a website, after a product description or in any customer support platform is crucial for various reasons.",
  },
  {
    question: "What is FAQ 4?",
    answer:
      "FAQ stands for Frequently Asked Questions. It is a compilation of common questions and their corresponding answers that are often asked by customers or users. Having a FAQ section on a website, after a product description or in any customer support platform is crucial for various reasons.",
  },
];

function initiFAQ() {
  const faqContainer = document.querySelector(".faq-container");
  faqs.forEach((item, id) => {
    const divElement = document.createElement("div");
    divElement.innerHTML = `
    <div class="faq"> 
     <h3 class="question">${item.question}</h3> 
      <p class="answer hide">${item.answer}</p>
    </div>`;

    faqContainer.appendChild(divElement);
  });

  const questions = document.querySelectorAll(".question");

  questions.forEach((el, id) => {
    el.onclick = function () {
      const currFaq = this.parentElement.querySelector(".answer");
      if (currFaq.classList.contains("hide")) {
        const allAnswer = document.querySelectorAll(".answer");
        allAnswer.forEach((item) => {
          item.classList.add("hide");
        });
        currFaq.classList.remove("hide");
      } else {
        currFaq.classList.add("hide");
      }
    };
  });
}

initiFAQ();
