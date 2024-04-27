import React, { useEffect, useState } from "react";

function InfineteScroll() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setpage] = useState(1);

  const getData = async () => {
    setLoading(true);
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts?page=${page}`
    );
    const jsonData = await data.json();
    setData((d) => [...d, ...jsonData]);
    setLoading(false);
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setLoading(true);
      setpage((page) => page + 1);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Infinite Scroll</h1>

      {data.map((post) => (
        <p>{post.title}</p>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default InfineteScroll;
