import { promises } from "dns";
import { useEffect, useState } from "react";

const Pagination = () => {
  const [currPage, setCurrPage] = useState(1);
  const [data, setData] = useState<any[]>([]);

  const [recordPerPage, setRecordPerPage] = useState(10);
  const totalNoOfPages = Math.ceil(data.length / recordPerPage);
  const lastIndex = recordPerPage * currPage;
  const firstIndex = lastIndex - recordPerPage;
  const copyData = data.slice(firstIndex, lastIndex);

  const pages = [...Array.from(Array(totalNoOfPages + 1).keys())].slice(1);

  const getData = async () => {
    try {
      const API_END_POINT = "https://jsonplaceholder.typicode.com/posts";
      const data = await fetch(API_END_POINT);
      const incomingData = await data.json();
      setData((prev) => [...prev, ...incomingData]);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const prevHandler = (id: number) => {
    setCurrPage((currPage) => currPage - 1);
  };

  const nextHandler = (id: number) => {
    setCurrPage((currPage) => currPage + 1);
  };

  return (
    <div className="text-center">
      <h2 className="p-2 font-semibold">
        Pagination Example - {totalNoOfPages + " " + recordPerPage}
      </h2>
      <div className="text-left w-1/2 m-auto">
        {copyData.map((item, idx) => {
          return (
            <h5 className="p-1" key={item.id}>
              {item.id + " " + item.title}
            </h5>
          );
        })}
      </div>
      <div className="flex">
        <button
          onClick={() => prevHandler(currPage)}
          disabled={currPage === 1 ? true : false}
          className={`bg-gray-300 p-2 m-1 rounded min-w-24 ${
            currPage === 1 ? "opacity-50" : "opacity-100"
          }`}
        >
          Previous
        </button>
        {pages.map((item, idx) => {
          return (
            <div className="p-2 m-1">
              <button
                className={`bg-gray-300 p-2 m-1 rounded min-w-12 ${
                  currPage === idx + 1 ? "bg-orange-300" : ""
                }`}
                onClick={() => setCurrPage(idx + 1)}
              >
                {item}
              </button>
            </div>
          );
        })}
        <button
          onClick={() => nextHandler(currPage)}
          disabled={currPage === totalNoOfPages ? true : false}
          className={`bg-gray-300 p-2 m-1 rounded min-w-24 ${
            currPage === totalNoOfPages ? "opacity-50" : "opacity-100"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
