import HomeCard from "../components/HomeCard";
const data = [
  {
    title: "React",
    para: "Learn more about react interveiw releated topics and machine codings",
    link: "/react",
  },
  {
    title: "Javascript",
    para: "Learn more about react interveiw releated topics and machine codings",
    link: "/javascript",
  },
  {
    title: "DSA",
    para: "Learn more about react interveiw releated topics and machine codings",
    link: "/dsa",
  },
];

const Home: React.FC = () => {
  return (
    <div className="container m-auto">
      <h1>Learn All about Front End Technologies</h1>
      <p>React, Javascript, DSA's Concept all in one place</p>
      <div className="flex">
        {data.map((item, idx) => {
          return (
            <HomeCard
              key={`${item.title}-${idx}`}
              title={item.title}
              para={item.para}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
