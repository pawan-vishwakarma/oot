import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom"; // Import Link from React Router

import { Button, Img, SelectBox, Text } from "components";
import { useNavigate } from "react-router-dom";
// import ServicesDescription from "pages/servicesDescription";

const AboutUsNavbar = ({ activePage }) => {
  const [changePage, setChangePage] = useState("");

  const navigate = useNavigate();

  const isPageActive = (page) => {
    return page === activePage
      ? "text-blue-100 font-semibold cursor-pointer"
      : "text-white-A700 cursor-pointer";
  };
  const cursorStyle = (page) => {
    return page === activePage ? "cursor-default" : "cursor-pointer";
  };
  const handleSelectChange = () => {
    console.log(changePage);
    if (changePage === "Services") {
      navigate("/services");
    } else if (changePage === "Gynaecology") {
      navigate("/servicesDescription");
    }
  };
  return (
    <div className="bg-indigo-900 flex flex-row font-worksans md:gap-5 gap-5 items-center justify-center max-w-[100%] md:px-10 sm:px-5 px-4 py-4 md:py-6 w-full md:flex-col px-20 z-10">
      <div className="flex flex-row sm:flex-col gap-5 items-center justify-center w-full">
        <Link to="/">
          <Text
            className={`text-lg ${isPageActive("home")}`}
            size="txtWorkSansRegular18"
          >
            Home
          </Text>
        </Link>
        <Link to="/aboutus">
          <Text
            className={`text-lg ${isPageActive("aboutus")}`}
            size={
              activePage === "aboutus"
                ? "txtWorkSansSemiBold18"
                : "txtWorkSansRegular18"
            }
          >
            About Us
          </Text>
        </Link>

        {/* <Link to="/services">
          <Text
            className={`text-lg ${isPageActive("services")}`}
            size={
              activePage === "services"
                ? "txtWorkSansSemiBold18"
                : "txtWorkSansRegular18"
            }
          >
            Services
          </Text>
        </Link> */}
        {/* <Link to="/services">
          <Text
            className={`text-lg ${isPageActive("services")}`}
            size={
              activePage === "services"
                ? "txtWorkSansSemiBold18"
                : "txtWorkSansRegular18"
            }
          ></Text>

          <SelectBox
            className="!text-white-A700 font-worksans text-base text-left w-full"
            placeholderClassName="!text-white-A700"
            indicator={""}
            isMulti={false}
            name="services"
            options={[
              {
                label: "Services",
                value: "Services",
              },
              {
                label: "Gynaecology & Obstetrics ",
                value: "Gynaecology & Obstetrics",
              },
              { label: "IVF Treatment", value: "IVF Treatment" },
              { label: "Pediatrics", value: "Pediatrics" },
            ]}
            isSearchable={false}
            placeholder="Services"
            shape="square"
            color="indigo_900"
            size="xs"
            variant="fill"
            onChange={(value) => handleChange("gender", value)}
            setChangePage={setChangePage}
          />
        </Link> */}
        <div className="text-white">
          <select
            className="bg-indigo-900 text-white focus:text-white border-none "
            style={{color:"white"}}
            onChange={(e)=> window.location.href = e.target.value}
            placeholder = "services"
          >
            <option value="/services" className="text-white">Services</option>
            <option value="/services" className="text-white">Services</option>
            <option value="/servicesDescription" className="text-white">
              Gynaecology & Obstetrics
            </option>
            <option value="/servicesDescription"  className="text-white">IVF Treatment</option>
          </select>
        </div>

        <Link to="/doctors">
          <Text
            className={`text-lg ${isPageActive("doctors")}`}
            size={
              activePage === "doctors"
                ? "txtWorkSansSemiBold18"
                : "txtWorkSansRegular18"
            }
          >
            Doctors
          </Text>
        </Link>
        <Link to="/news">
          <Text
            className={`text-lg ${isPageActive("news")}`}
            size={
              activePage === "news"
                ? "txtWorkSansSemiBold18"
                : "txtWorkSansRegular18"
            }
          >
            News
          </Text>
        </Link>
        <Link to="/contact">
          <Text
            className={`text-lg ${isPageActive("contact")}`}
            size={
              activePage === "contact"
                ? "txtWorkSansSemiBold18"
                : "txtWorkSansRegular18"
            }
          >
            Contact
          </Text>
        </Link>
      </div>
      <div className="flex flex-row sm:flex-col gap-5 items-center justify-center w-full mt-4 md:mt-0">
        <Img className="h-5 w-5" src="images/img_rewind.svg" alt="rewind" />
        <Link to="/appointment">
          <Button
            className="font-medium leading-normal rounded-full text-base text-center md:min-w-[173px]"
            color="blue_100"
            size="sm"
            variant="fill"
          >
            Appointment
          </Button>
        </Link>
      </div>
    </div>
  );
};

AboutUsNavbar.defaultProps = {
  hometext: "Home",
  aboutustext: "Aboutus",
  servicestext: "Services",
  doctorstext: "Doctors",
  newstext: "News",
  contacttext: "Contact",
  appointmentbutton: "Appointment",
};

export default AboutUsNavbar;
