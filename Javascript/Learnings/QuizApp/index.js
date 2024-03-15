function initQuizApp() {
  const data = [
    { question: "Hello Quiz", answer: ["I am good", "I am great"] },
  ];
  const container = document.getElementById("container");
  quizCard(container, data[0]);
}

function quizCard(parent, data) {
  const quizContainer = document.createElement("div");
  quizContainer.classList.add("card", "text-center");
  const question = document.createElement("div");
  question.innerText = data.question;
  const body = document.createElement("div");
  body.classList.add("gap-3", "d-grid");

  // Option Loop

  for (const el of data.answer) {
    let optionButton = document.createElement("button");
    optionButton.innerText = el;
    optionButton.classList.add("d-lg-block", "gap-5");
    body.appendChild(optionButton);
  }

  body.classList.add("card-body");
  question.classList.add("card-header");
  quizContainer.appendChild(question);
  quizContainer.appendChild(body);

  parent.appendChild(quizContainer);
}

initQuizApp();
