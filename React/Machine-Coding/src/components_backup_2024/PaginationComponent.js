import { useState } from "react";
import { PaginationData } from "../util/data";

const PaginationComponent = () => {
  const [currPage, setCurrPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = PaginationData.slice(firstIndex, lastIndex);
  const noOfPages = Math.ceil(PaginationData.length / recordsPerPage);

  const numbers = [...Array(noOfPages + 1).keys()].slice(1);

  const nextHandler = () => {
    if (currPage < noOfPages) {
      setCurrPage(currPage + 1);
    }
  };
  const previousHandler = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
    }
  };

  const numClickHandler = (id) => {
    setCurrPage(id + 1);
  };

  return (
    <div className="container">
      <table
        className="table  table-striped table-bordered"
        style={{ maxWidth: "100%" }}
      >
        <thead>
          <tr>
            <th> ID</th>
            <th> Name</th>
            <th> Email</th>
          </tr>
        </thead>
        <tbody>
          {records.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
        <div className="pagination">
          <button
            type="button"
            className="btn btn-primary page-link"
            onClick={() => previousHandler()}
          >
            Previous
          </button>
          {numbers.map((n, i) => {
            return (
              <button
                className={`page-link btn ${currPage === n ? "active" : ""}`}
                onClick={() => numClickHandler(i)}
                key={i}
              >
                {n}
              </button>
            );
          })}
          <button
            type="button"
            className="btn btn-primary page-link"
            onClick={() => nextHandler()}
          >
            Next
          </button>
        </div>
      </table>
    </div>
  );
};

export default PaginationComponent;
