import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home({ data, setTest }) {
  const navigate = useNavigate();

  function clickHanlder(test) {
    setTest((i) => test);
    navigate("/quiz");
  }
  return (
    <div className="flex flex-col gap-4 ">
      {data.map((test) => (
        <div >
          <p className=" btn btn-primary" onClick={() => clickHanlder(test)}>Test Name: {test.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
