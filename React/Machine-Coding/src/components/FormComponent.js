import { useEffect, useState } from "react";

const FormComponent = () => {
  const [remember, setRemeber] = useState(false);
  const [objData, setObjData] = useState({});

  const setLocalStorage = (obj) => {
    localStorage.setItem("formData", JSON.stringify(objData));
  };

  const setFormData = (formData) => {
    const getAllInput = document.querySelectorAll("input");
    getAllInput.forEach((el) => {
      const getName = el.getAttribute("name");
      el.value = formData[getName] ? formData[getName] : "";
    });
  };

  const submitHandler = () => {
    setLocalStorage(objData);
    const getAllInput = document.querySelectorAll("input");
    getAllInput.forEach((el) => {
      el.value = "";
    });
  };

  const getInputData = (name, value) => {
    const obj = { [name]: value };
    setObjData({ ...objData, ...obj });
  };

  useEffect(() => {
    if (localStorage.getItem("formData")) {
      const formData = localStorage.getItem("formData");
      const data = JSON.parse(formData) || {};
      setFormData({ ...data });
    }
  }, []);

  return (
    <div>
      <div id="form" className="formContainer" action="">
        <div className="item">
          <label for="name">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={(e) => getInputData(e.target.name, e.target.value)}
          />
        </div>
        <div className="item">
          <label for="email">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={(e) => getInputData(e.target.name, e.target.value)}
          />
        </div>
        <div className="item">
          <label for="phone">Phone</label>
          <input
            type="number"
            placeholder="Enter Phone"
            name="phone"
            onChange={(e) => getInputData(e.target.name, e.target.value)}
          />
        </div>

        <div className="item">
          <label for="car">
            <input
              type="radio"
              name="car"
              value="Suzuki"
              onChange={(e) => getInputData(e.target.name, e.target.value)}
            />
            Suziki
          </label>
          <label for="car">
            Honda
            <input
              type="radio"
              name="car"
              value="Honda"
              onChange={(e) => getInputData(e.target.name, e.target.value)}
            />
          </label>
          <label for="car">
            Hundai
            <input
              type="radio"
              name="car"
              value="Hundai"
              onChange={(e) => getInputData(e.target.name, e.target.value)}
            />
          </label>
        </div>

        <button
          className="btn btn-primary page-link"
          onClick={() => submitHandler()}
        >
          Submit
        </button>
      </div>
      <input
        type="checkbox"
        id="remeberMe"
        name="checkbox"
        onChange={(e) => getInputData(e.target.name, e.target.checked)}
      />
      <label for="checkbox">Rember Me</label>
    </div>
  );
};

export default FormComponent;
