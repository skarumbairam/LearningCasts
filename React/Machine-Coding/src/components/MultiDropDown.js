import { useEffect, useState } from "react";

const MultiDropDown = () => {
  const data = ["1", "2", "3", "4", "5"];
  const [dropDownData, setDropDownData] = useState([]);
  const [formData, setFormData] = useState({});

  const [flag, setFlag] = useState(false);

  const slectFirstChangeHandler = (value, name) => {
    console.log("1st", value);
    const dropDownData = data.map((item, idx) => `${value}-${idx}`);
    setDropDownData([...dropDownData]);
    const d1 = {
      [name]: value,
    };

    setFormData({ ...formData, ...d1 });

    setFlag(!flag);
  };

  const slectSecondChangeHandler = (value, name) => {
    console.log("Second Select Change Handler", value);
    const d2 = {
      [name]: value,
    };
    setFormData({ ...formData, ...d2 });
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    if (dropDownData) {
      slectSecondChangeHandler(dropDownData[0], "secondSelect");
    }
  }, [dropDownData]);

  return (
    <div>
      <h2 className="text-xl leading-10">8. Multi Drop Down Select</h2>

      <div className="text-center border-red-400 border mt-4">
        <form onSubmit={(e) => submitData(e)}>
          <SelectItem
            name={"firstSelect"}
            lableText={"First Select:"}
            items={data}
            slectChangeHandler={slectFirstChangeHandler}
          />

          <SelectItem
            name={"secondSelect"}
            lableText={"Second Select:"}
            items={dropDownData}
            slectChangeHandler={slectSecondChangeHandler}
          />

          <button
            className="border-red-400 border p-2 pr-4 pl-4"
            onClick={submitData}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const SelectItem = ({ name, lableText, items, slectChangeHandler }) => {
  const changeHandle = (e) => {
    slectChangeHandler(e.target.value, e.target.name);
  };
  return (
    <div className="p-4 m-4">
      <label for="Lists">{lableText}</label>
      <br></br>
      <select
        name={name}
        className="w-44 border border-red-100 p-2"
        onChange={changeHandle}
      >
        <option value="" selected disabled hidden>
          Choose here
        </option>
        {items.map((item, idx) => {
          return (
            <>
              <option key={`${idx}-${item}`} value={item}>
                {item}
              </option>
            </>
          );
        })}
      </select>
    </div>
  );
};
export default MultiDropDown;
