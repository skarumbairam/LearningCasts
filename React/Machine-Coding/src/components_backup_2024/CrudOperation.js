import { useEffect, useRef, useState } from "react";

function CrudOperation() {
  const intialData = [];
  const [data, setData] = useState([...intialData]);
  const [show, setShow] = useState(false);
  const [action, setAction] = useState("Add +");
  const [inputVal, setInputVal] = useState("Type Item");
  const inputRefVal = useRef("");
  const [itemId, setItemId] = useState(null);

  const addItem = () => {
    setShow(true);
  };

  const cancelItem = () => {
    setShow(false);
    setAction("Add +");
    setInputVal("Type Item");
  };

  const updateData = (itemId) => {
    const updateItems = data.map((item) => {
      if (item.id === itemId) {
        item.name = inputRefVal.current.value;
      }
      return item;
    });

    setData(updateItems);
  };

  const deleteItem = (id) => {
    const filterData = data.filter((item) => item.id !== id);
    setData([...filterData]);
  };

  const updateItem = (id, value) => {
    setAction("Update");
    setShow(true);
    setInputVal(value);
    setItemId(id);
  };

  const submitData = (e) => {
    e.preventDefault();
    setShow(false);

    setData((prev) => [
      { id: Date.now(), name: inputRefVal.current.value },
      ...prev,
    ]);

    if (action === "Update") {
      updateData(itemId);
      setAction("Add +");
      setInputVal("Type Item");
    }
  };

  const getData = async () => {
    const jsonData = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await jsonData.json();
    console.log("data", data);
    setData((p) => [...p, ...data]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <a
        onClick={() => {
          addItem();
        }}
        style={{
          padding: "10px",
          backgroundColor: "blue",
          borderRadius: "2px",
          color: "white",
        }}
      >
        {action}
      </a>

      {show && (
        <>
          <a
            onClick={() => {
              cancelItem();
            }}
            style={{
              padding: "10px",
              backgroundColor: "blue",
              borderRadius: "2px",
              color: "white",
              margin: "10px",
            }}
          >
            Cancel
          </a>
          <div>
            <form onSubmit={submitData}>
              <input type="text" placeholder={inputVal} ref={inputRefVal} />
            </form>
          </div>
        </>
      )}

      {data.map((item) => {
        return (
          <>
            <ItemComponent
              id={item.id}
              name={item.name}
              updateFn={updateItem}
              deleteFn={deleteItem}
            />
          </>
        );
      })}
    </>
  );
}

const ItemComponent = ({ name, id, deleteFn, updateFn }) => {
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        textAlign: "left",
      }}
    >
      <p>{id}</p>
      <p>{name}</p>
      <p
        onClick={() => {
          updateFn(id, name);
        }}
      >
        Edit
      </p>
      <p
        onClick={() => {
          deleteFn(id);
        }}
      >
        Delete
      </p>
    </div>
  );
};

export default CrudOperation;
