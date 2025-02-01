import { useEffect, useState } from "react";

const ShoppingCart = () => {
  const staticdData = [
    { id: 0, item: "Phone", count: 1, price: 10 },
    { id: 1, item: "Book", count: 2, price: 5 },
    { id: 2, item: "Laptop", count: 5, price: 20 },
  ];

  const [data, setData] = useState([...staticdData]);
  const [total, setTotal] = useState(0);

  const addMoreHandler = (elementId) => {
    const newData = data.map((el) => {
      if (el.id === elementId) {
        el.count++;
      }
      return el;
    });
    setData(newData);
  };

  const removeMoreHandler = (elementId) => {
    const newData = data.map((el) => {
      if (el.id === elementId) {
        el.count--;
      }
      return el;
    });

    setData(newData);

    // check if any item data count is lessthan 0
    const filteredData = data.filter((el) => el.count !== 0);
    setData((d) => [...filteredData]);

    setData(filteredData);
  };

  useEffect(() => {
    const result = data.reduce((acc, element) => {
      acc = element.price * element.count + acc;
      return acc;
    }, 0);
    setTotal(result);
  }, [data]);

  return (
    <div>
      <h2 className="text-xl leading-10">
        4. Shopping Cart use increasing & Decreasing{" "}
      </h2>
      <p>
        This component use case is, loads data with and it shows the with count,
        user can increase its induvidual counts
      </p>
      <div className="text-center border-red-400 border mt-4">
        <ul>
          <table className="table w-full">
            <tr className="">
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Count</th>
              <th>Add More</th>
            </tr>

            {data.map((el, id) => {
              return (
                <tr className="">
                  <td>{el.item}</td>
                  <td>{el.price}</td>
                  <td>{el.count}</td>
                  <td>
                    <button
                      className="bg-slate-200 p-3 rounded-lg m-2"
                      onClick={(e) => {
                        addMoreHandler(el.id);
                      }}
                    >
                      Add More
                    </button>
                    <button
                      className="bg-slate-200 p-3 rounded-lg m-2"
                      onClick={(e) => {
                        removeMoreHandler(el.id);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Total : {total}</td>
            </tr>
          </table>
        </ul>
      </div>
    </div>
  );
};

export default ShoppingCart;
