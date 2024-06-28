import { Suspense, useEffect, useState } from "react";
import HomeCard from "./HomeCard";

const InfiniteScroll = () => {
  const [data, setData] = useState<any[]>([]);
  const [loadingElement, setloadingElement] = useState(0);
  const [page, setPage] = useState(1);

  const getData = async () => {
    try {
      const API_URL = `https://jsonplaceholder.typicode.com/posts?page=${page}`;
      const response = await fetch(API_URL);
      const incomingData = await response.json();
      setData((prev) => [...prev, ...incomingData]);
      setloadingElement(0);
    } catch (error) {
      setloadingElement(0);
    } finally {
      setloadingElement(0);
      console.log("Uou are in condition", loadingElement);
    }
  };

  const scrollHandler = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    console.log("loading", loadingElement);
    if (!loadingElement && scrollTop + clientHeight > scrollHeight - 100) {
      console.log("Scrol is working?", scrollTop + clientHeight, scrollHeight);

      setloadingElement(1);
      setPage((prevPage: number): number => prevPage + 1);
    }
  };

  useEffect((): void => {
    getData();
  }, [page]);

  useEffect((): (() => void) => {
    window.addEventListener("scroll", scrollHandler);
    return (): void => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="flex flex-col items-left">
      <h3>
        Infinete Scroll, {data.length} - {loadingElement}
      </h3>

      {data.map((item, idx) => {
        return (
          <p>
            {item.id} {item.title}
          </p>
        );
      })}
      {loadingElement && <Loading />}
    </div>
  );
};

const Loading = () => {
  return (
    <div className="bg-white text-black p-20 m-20">
      <p>Loading data.....</p>
    </div>
  );
};

export default InfiniteScroll;
