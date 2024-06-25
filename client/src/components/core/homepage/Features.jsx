import React, { useState } from "react";
import { all } from "../../../data/data";
import { sarso } from "../../../data/data";
import { til } from "../../../data/data";
import { narial } from "../../../data/data";
import { badam } from "../../../data/data";
import { kalongi } from "../../../data/data";
import { mungfali } from "../../../data/data";
import { aslee } from "../../../data/data";
import Tab from "./Tab";

const Features = () => {
  const [tabActive, setTabActive] = useState("all");

  const handleTabChange = (tab) => {
    setTabActive(tab);
  };

  return (
    <>
      <div className=" max-w-7xl mx-auto ">
        <div className=" bg-gray-500  m-auto py-1 lg:flex lg:justify-center rounded-md px-3 overflow-x-scroll md:overflow-x-hidden">
          <div className="flex gap-5 pl-2">
            <button
              onClick={() => handleTabChange("all")}
              className={` font-bold text-xl ${
                tabActive === "all"
                  ? "bg-pink-600 rounded-md px-4 py-2 text-white transition ease-in duration-500 "
                  : " bg-gray-500 text-black px-4 py-2 rounded-md  transition ease-in duration-500"
              }`}
            >
              All
            </button>

            <button
              onClick={() => handleTabChange("mungfali")}
              className={` font-bold text-xl ${
                tabActive === "mungfali"
                  ? "bg-pink-600 rounded-md px-4 py-2 text-white transition ease-in duration-500 "
                  : " bg-gray-500 text-black px-4 py-2 rounded-md  transition ease-in duration-500"
              }`}
            >
              मूंगफली
            </button>

            <button
              onClick={() => handleTabChange("sarso")}
              className={` font-bold text-xl ${
                tabActive === "sarso"
                  ? "bg-pink-600 rounded-md px-4 py-2 text-white transition ease-in duration-500 "
                  : " bg-gray-500 text-black px-4 py-2 rounded-md  transition ease-in duration-500"
              }`}
            >
              सरसो
            </button>
            <button
              onClick={() => handleTabChange("til")}
              className={` font-bold text-xl ${
                tabActive === "til"
                  ? "bg-pink-600 rounded-md px-4 py-2 text-white transition ease-in duration-500 "
                  : " bg-gray-500 text-black px-4 py-2 rounded-md  transition ease-in duration-500"
              }`}
            >
              तिल्ली
            </button>
            <button
              onClick={() => handleTabChange("narial")}
              className={` font-bold text-xl ${
                tabActive === "narial"
                  ? "bg-pink-600 rounded-md px-4 py-2 text-white transition ease-in duration-500 "
                  : " bg-gray-500 text-black px-4 py-2 rounded-md  transition ease-in duration-500"
              }`}
            >
              नारियल
            </button>
            <button
              onClick={() => handleTabChange("aslee")}
              className={` font-bold text-xl ${
                tabActive === "aslee"
                  ? "bg-pink-600 rounded-md px-4 py-2 text-white transition ease-in duration-500 "
                  : " bg-gray-500 text-black px-4 py-2 rounded-md  transition ease-in duration-500"
              }`}
            >
              असली
            </button>
            <button
              onClick={() => handleTabChange("badam")}
              className={` font-bold text-xl ${
                tabActive === "badam"
                  ? "bg-pink-600 rounded-md px-4 py-2 text-white transition ease-in duration-500 "
                  : " bg-gray-500 text-black px-4 py-2 rounded-md  transition ease-in duration-500"
              }`}
            >
              बादाम
            </button>
            <button
              onClick={() => handleTabChange("kalongi")}
              className={` font-bold text-xl ${
                tabActive === "kalongi"
                  ? "bg-pink-600 rounded-md px-4 py-2 text-white transition ease-in duration-500 "
                  : " bg-gray-500 text-black px-4 py-2 rounded-md  transition ease-in duration-500"
              }`}
            >
              कलौंजी
            </button>
          </div>
        </div>

        <br />
        <br />

        {tabActive === "all" && <Tab data={all} />}
        {tabActive === "mungfali" && <Tab data={mungfali} />}
        {tabActive === "sarso" && <Tab data={sarso} />}
        {tabActive === "til" && <Tab data={til} />}
        {tabActive === "narial" && <Tab data={narial} />}
        {tabActive === "aslee" && <Tab data={aslee} />}
        {tabActive === "badam" && <Tab data={badam} />}
        {tabActive === "kalongi" && <Tab data={kalongi} />}
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Features;
