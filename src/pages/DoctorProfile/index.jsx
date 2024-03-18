import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components"; // Import necessary components
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Header from "components/Header";
import HomeColumnNine from "components/HomeColumnNine"; // Import HomeColumnNine component

const DoctorProfile = () => {
    const navigate = useNavigate();
  
    const sliderRef = React.useRef(null);
    const [sliderState, setsliderState] = React.useState(0);
    const sliderRef1 = React.useRef(null);
    const [sliderState1, setsliderState1] = React.useState(0);
  
    return (
        <div className="bg-white-A700 flex flex-col font-yesevaone items-center justify-start mx-auto w-full">
            <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
            <Navbar className="bg-indigo-900 flex md:flex-col flex-row font-worksans md:gap-10 gap-[276px] items-center justify-center max-w-[1366px] md:px-10 sm:px-5 px-[187px] py-[17px] w-full"  />
            <div className="w-full mx-auto md:p-5 max-w-[992px]">
                <div className="flex flex-col gap-[77px]">
                    <div className="flex md:flex-col items-start w-[76%] md:w-full gap-6">
                        <Img
                            src="images/img_rectangle20_350x317.png"
                            alt="image_four"
                            className="w-[30%] md:w-full rounded-tr-[5px] rounded-tl-[5px] object-cover"
                        />
                        <div className="flex flex-col mt-[29px] gap-[75px] flex-1">
                            <div className="flex justify-between items-center gap-5">
                                <Text size="xl" as="p" className="!text-black-900">
                                    Doctor’s Name:
                                </Text>
                                <Text size="md" as="p" className="self-end !text-black-900">
                                    Experience:
                                </Text>
                            </div>
                            <div className="flex justify-between w-[89%] md:w-full gap-5">
                                <Text size="md" as="p" className="self-end !text-black-900">
                                    Department:
                                </Text>
                                <Text size="md" as="p" className="self-start !text-black-900">
                                    Fees:
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-col items-center gap-2.5">
                        <div className="flex flex-col w-full gap-[31px]">
                            <Text size="lg" as="p" className="flex w-[98%] md:w-full !text-black-900">
                                <span className="text-black-900">
                                    <>
                                        About:
                                        <br />
                                        <br />
                                    </>
                                </span>
                                <span className="text-black-900 text-base">
                                    <>
                                    <br />
                                        Dr. Ajay Kaul is listed among the top cardiac surgeons in the country and has a vast surgical
                                        experience of over 20,000 cardiac surgeries. He is widely acknowledged for his expertise in
                                        treating Total Arterial Coronary Bypass Surgery, Paediatric Cardiac Surgery, Valve Repairs,
                                        Structural Heart Disease, and Surgery for Cardiac Failure. Dr. Kaul is an expert in the management
                                        of heart failure, which includes - LVAD -Left Ventricular Assist Device (Artificial Heart); Heart
                                        Transplant, and Implantation of various devices for heart failure. <br />
                                    </>
                                </span>
                                <span className="text-black-900 text-xl">
                                    <>
                                        <br />
                                        <br />
                                    </>
                                </span>
                            </Text>
                            <Text size="lg" as="p" className="flex !text-black-900">
                                <span className="text-black-900">
                                    <>
                                        Education:
                                        <br />
                                    </>
                                </span>
                                <span className="text-black-900 text-base">
                                    <>
                                        <br />
                                        MBBS, MS (General Surgery), M.Ch (Cardiothoracic Surgery), Fellowship in Heart & Lung transplant,
                                        Hannover Medical School, Fellowship in Minimally Invasive Cardiac Surgery, Lipzig Heart Centre,
                                        Germany
                                    </>
                                </span>
                            </Text>
                        </div>
                    </div>
                    <HomeColumnNine />
                </div>
            </div>
            <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />
        </div>
    );
};

export default DoctorProfile;
