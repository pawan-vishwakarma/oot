import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";
import headerData from "../../data/headerData.json";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-white-A700 flex flex-row justify-between md:flex-col md:justify-between md:items-center md:px-5 w-full text-center sm:flex-col">
        <Text className="md:ml-0 ml-4 md:mt-0 my-4 text-4xl sm:text-3xl md:text-4xl text-indigo-900 uppercase">
          {headerData.hospitalName}
        </Text>

        <div className="flex flex-row w-[50%] justify-evenly md:flex-row md:justify-end items-center gap-4 md:w-auto sm:flex-col">
          {headerData.sections.map((section, index) => (
            <div key={index} className="flex items-center gap-2">
              <Img
                className="h-8 w-8 md:h-8 md:w-8 sm:h-[1.8rem] sm:w-[1.8rem]"
                src={section.icon}
                alt={section.title}
              />
              <div className="flex flex-col">
                <Text
                  className="text-sm md:text-base text-indigo-900 uppercase"
                  size="md"
                >
                  {section.title}
                </Text>
                {section.subtitle && (
                  <Text className="mt-1 text-sm text-blue-500" size="md">
                    {section.subtitle} {section.content}
                  </Text>
                )}
              </div>
            </div>
          ))}
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
