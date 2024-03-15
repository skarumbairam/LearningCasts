const accordianContainer = document.getElementById("accordian-container");
const accordianData = [
  {
    question: "#FAQ Section 1",
    answer:
      "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    isOpen: true,
  },
  {
    question: "#FAQ Section 2",
    answer:
      "This is the second item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    isOpen: false,
  },
  {
    question: "#FAQ Section 3",
    answer:
      "This is the third item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    isOpen: false,
  },
];

function accordianInit() {
  for (let item of accordianData) {
    const tempAccItem = accordianItem(accordianContainer, item);
  }
}

function accordianItem(parentElement, props) {
  const accordianItem = document.createElement("div");
  accordianItem.classList.add("accordian-item");

  const accordianTitle = document.createElement("div");
  accordianTitle.classList.add("accordian-title");
  const titleText = document.createElement("p");
  titleText.innerText = props.question;
  const titleIcon = document.createElement("span");
  let isOpen = props.isOpen;
  titleIcon.innerText = isOpen ? "-" : "+";

  accordianTitle.appendChild(titleText);
  accordianTitle.appendChild(titleIcon);

  const accordianDescription = document.createElement("div");
  const showHide = isOpen ? "show" : "hide";
  accordianDescription.classList.add(showHide, "accordian-description");
  const descptionText = document.createElement("p");
  descptionText.innerText = props.answer;
  accordianDescription.appendChild(descptionText);

  accordianItem.appendChild(accordianTitle);
  accordianItem.appendChild(accordianDescription);
  parentElement.appendChild(accordianItem);

  accordianTitle.addEventListener("click", function () {
    if (
      this.parentElement
        .querySelector(".accordian-description")
        .classList.contains("show")
    ) {
      getElementsAndHide();
      this.parentElement
        .querySelector(".accordian-description")
        .classList.add("hide");
      this.parentElement.querySelector("span").innerText = "+";
    } else {
      getElementsAndHide();
      this.parentElement
        .querySelector(".accordian-description")
        .classList.add("show");
      this.parentElement.querySelector("span").innerText = "-";
    }
  });
}

function getElementsAndHide() {
  const getItems = document.querySelectorAll(".accordian-item");
  for (let item of getItems) {
    item
      .querySelector(".accordian-description")
      .classList.replace("show", "hide");
    item.querySelector("span").innerText = "+";
  }
}
accordianInit();
