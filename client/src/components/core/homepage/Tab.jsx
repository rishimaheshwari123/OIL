import React from "react";

const Tab = ({ data }) => {
  return (
    <div className="grid px-4  lg:grid-cols-3 gap-x-5 lg:px-0 ">
      {data.map((currElem, index) => (
        <div
          key={index}
          className="p-5 shadow-lg shadow-orange-600 rounded-lg hover:scale-95"
        >
          <img src={currElem.image} alt="not found" />
          <p className="text-center mt-5 text-2xl font-bold">
            {currElem.title}{" "}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Tab;
