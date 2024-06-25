import React, { useEffect, useState } from "react";
import { culture as initialCulture } from "../../../data/data";

const Culture = () => {
  const [culture, setCulture] = useState(
    initialCulture.map((item) => ({ ...item, currentCount: 0 }))
  );

  useEffect(() => {
    const targetCounts = initialCulture.map((item) => parseInt(item.count, 10));
    const increments = initialCulture.map((item) =>
      Math.ceil(parseInt(item.count, 10) / 100)
    );

    const updateCounts = () => {
      setCulture((prevCulture) =>
        prevCulture.map((item, index) => {
          if (item.currentCount < targetCounts[index]) {
            const newCount = item.currentCount + increments[index];
            return {
              ...item,
              currentCount:
                newCount > targetCounts[index] ? targetCounts[index] : newCount,
            };
          } else {
            return item;
          }
        })
      );
    };

    const interval = setInterval(updateCounts, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-200 mt-10 py-10 flex flex-col items-center">
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-5">
        {culture.map((currElem, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 p-4 bg-white rounded-md shadow-md"
          >
            <p className="text-3xl font-bold text-center text-orange-500">
              {Math.round(currElem.currentCount)}+
            </p>
            <p className="text-2xl font-bold text-center">{currElem.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Culture;
