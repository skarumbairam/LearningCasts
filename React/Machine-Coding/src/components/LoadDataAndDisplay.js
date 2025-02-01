import { useEffect, useState } from "react";

const LoadDataAndDisplay = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const dataJson = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await dataJson.json();
    setPost(data);
  };
  return (
    <div>
      <h2 className="text-xl leading-10">
        6. Load External Data and display in table TODO (CURD Operation)
      </h2>
      <p>
        This component has been created to load date from external APIn and
        display them in Table
      </p>

      <div className="text-center border-red-400 border mt-4">
        <ul>
          {post.map((el, id) => {
            if (id < 5) {
              return <li> {el.title}</li>;
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default LoadDataAndDisplay;
