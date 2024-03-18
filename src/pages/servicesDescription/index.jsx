import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

import { Button, Img, Text } from "components";
import Header from "components/Header";
import Navbar from "../../components/Navbar";
import AboutUsSubhead from "components/AboutUsSubhead";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import Footer from "components/Footer";

const ServicesDescription = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <AboutUsSubhead
        className="h-[250px] md:px-5 relative w-full "
        userimage="images/img_rectangle3_250x1366.png"
        homeabouttext="Home / Services"
        aboutustext="Gynaecology & Obstetrics"
      />

      <div className="flex flex-col w-[80%] m-auto gap-5 mt-[20px]">
        <img className="w-[100%]" src="images/Rectangle 13.png" alt="" />

        <div
          className="mt-1.5 text-[32px] text-indigo-900"
          size="txtYesevaOneRegular48"
        >
          EMPOWERING WOMEN’S HEALTH AT ITS BEST
        </div>

        <div className="text-gray-900" size="txtWorkSansRegular16">
          We offer comprehensive and compassionate care for women at every life
          stage. Our team of experienced gynaecologists, obstetricians, and
          nurses provide personalized care, understanding that every woman’s
          journey is unique. We boast state-of-the-art facilities, offering
          advanced diagnostics and treatments under one roof. From routine
          check-ups to specialized care, we support you through adolescence,
          pregnancy, and beyond. Trust our experienced team to prioritize your
          health and well-being in a supportive environment. We are committed to
          staying at the forefront of medical advancements, ensuring that you
          receive the most innovative and effective care available. Your health
          and comfort are our top priorities, and we’re here to empower you with
          the best in women’s healthcare.
        </div>

        <div
          className="mt-1.5 text-[32px] text-indigo-900"
          size="txtYesevaOneRegular48"
        >
          PATIENT CENTERED CARE
        </div>

        <div className="text-gray-900" size="txtWorkSansRegular16">
          We prioritize your unique needs, concerns, and preferences, ensuring
          that your healthcare journey is tailored to you. Our dedicated team
          listens, communicates openly, and provides the support you need to
          make informed decisions about your well-being. Your health and comfort
          are our top priorities, and we are committed to creating a supportive
          environment where you can trust us to address your concerns, answer
          your questions, and guide you on your path to optimal health. You are
          the center of our care, and we’re here to support you every step of
          the way. We strive to continuously improve our services and enhance
          the patient experience. We welcome your feedback and actively work to
          incorporate your input into our ongoing efforts to provide the highest
          quality care.
        </div>

        <img className="w-[100%]" src="images/Rectangle 20.png" alt="" />

        <div
          className="mt-1.5 text-[32px] text-indigo-900"
          size="txtYesevaOneRegular48"
        >
          OUR SERVICES
        </div>

        <div className="text-gray-900" size="txtWorkSansRegular16">
          We provide a wide range of services to meet your unique healthcare
          needs:
          <ul class="list-disc">
            <li>Prenatal care & counselling</li>
            <li>Care & Delivery of regular & high-risk pregnancies</li>
            <li>Control of gynaecological issues</li>
            <li>Contraceptive advice and family planning services</li>
            <li>Cancer Care</li>
            <li>Gynaecological surgeries</li>
            <li>Gynaecological cancer surgeries</li>
            <li>Gynaecological endoscopic surgeries</li>
          </ul>
        </div>
        <HomeColumnFourteen className="flex flex-col font-worksans md:gap-10 gap-16 items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full" />
        </div>
        <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />

    </div>
  );
};

export default ServicesDescription;
