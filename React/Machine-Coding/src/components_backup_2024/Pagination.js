import React, { useState } from "react";

import { PaginationData } from "../util/data";

function Pagination() {
  console.log(PaginationData);
  const [currentPage, setCurrPage] = useState(1);
  const dataPerPage = 3;
  const totalNoOfPages = Math.ceil(PaginationData.length / dataPerPage);
  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const showRecords = PaginationData.slice(firstIndex, lastIndex);
  const numbers = [...Array(totalNoOfPages)];

  console.log(numbers.length);

  const nextHandler = () => {
    setCurrPage((currentPage) => (currentPage += 1));
  };

  const prevHandler = () => {
    setCurrPage((currentPage) => (currentPage -= 1));
  };

  const selectHandler = (id) => {
    setCurrPage((currentPage) => (currentPage = id + 1));
  };

  return (
    <div>
      {showRecords.map((item, id) => (
        <p>{item.name}</p>
      ))}

      <div>
        <button onClick={prevHandler}>Previous</button>
        {numbers.map((item, idx) => {
          return (
            <button
              style={{ margin: "5px", padding: "5px" }}
              key={idx}
              onClick={() => selectHandler(idx)}
            >
              {idx}
            </button>
          );
        })}
        <button onClick={nextHandler}>Next</button>
      </div>
    </div>
  );
}

export default Pagination;
