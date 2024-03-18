import React, { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import { Img, SelectBox, Text, TextArea } from "components";

const dateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const doctorOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HomeColumnNine = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    doctorName: "",
    date: "",
    time: "",
    phoneNo: "",
    message: "",
  });

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit appointment");
      }

      const data = await response.json();
      console.log("Appointment submitted successfully:", data);
    } catch (error) {
      console.error("Error submitting appointment:", error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full">
        <form onSubmit={handleSubmit}>
          <div className="flex sm:flex-col flex-row  items-center justify-evenly w-full">
            <div className="flex sm:flex-1 flex-col items-center justify-start w-1/2 sm:w-full">
              <input
                type="text"
                className="bg-indigo-900 h-[50px] justify-center pb-[13px] pl-5 sm:pr-5 pr-[35px] pt-[17px] rounded-tl-[5px] text-base text-white-A700 w-[245px]"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
              <input
                type="text"
                className="bg-indigo-900 h-[50px] justify-center pl-5 sm:pr-5 pr-[35px] py-[15px] text-base text-white-A700 w-[245px]"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <SelectBox
                className="!text-white-A700 font-worksans text-base text-left w-full"
                placeholderClassName="!text-white-A700"
                indicator={
                  <Img
                    className="h-[9px] mr-[0] w-4"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="groupFortyThree"
                options={dateOptionsList}
                isSearchable={false}
                placeholder="Date"
                shape="square"
                color="indigo_900"
                size="xs"
                variant="fill"
                onChange={(value) => handleChange("date", value)}
              />
              <SelectBox
                className="!text-white-A700 font-worksans text-base text-left w-full"
                placeholderClassName="!text-white-A700"
                indicator={
                  <Img
                    className="h-[9px] mr-[0] w-4"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="groupFortySix"
                options={doctorOptionsList}
                isSearchable={false}
                placeholder="Doctor"
                shape="square"
                color="indigo_900"
                size="xs"
                variant="fill"
                onChange={(value) => handleChange("doctorName", value)}
              />
            </div>
            <div className="flex sm:flex-1 flex-col items-center justify-start w-1/2 sm:w-full">
              <SelectBox
                className="!text-white-A700 font-worksans text-base text-left w-full"
                placeholderClassName="!text-white-A700"
                indicator={
                  <Img
                    className="h-[9px] mr-[0] w-4"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="gender"
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
                isSearchable={false}
                placeholder="Gender"
                shape="square"
                color="indigo_900"
                size="xs"
                variant="fill"
                onChange={(value) => handleChange("gender", value)}
              />
              <input
                type="text"
                className="bg-indigo-900 h-[50px] justify-center pl-5 sm:pr-5 pr-[35px] py-[15px] text-base text-white-A700 w-[245px]"
                placeholder="Phone"
                value={formData.phoneNo}
                onChange={(e) => handleChange("phoneNo", e.target.value)}
              />
              <SelectBox
                className="!text-white-A700 font-worksans text-base text-left w-full"
                placeholderClassName="!text-white-A700"
                indicator={
                  <Img
                    className="h-[9px] mr-[0] w-4"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="time"
                options={[
                  { label: "Morning", value: "morning" },
                  { label: "Afternoon", value: "afternoon" },
                  { label: "Evening", value: "evening" },
                ]}
                isSearchable={false}
                placeholder="Time"
                shape="square"
                color="indigo_900"
                size="xs"
                variant="fill"
                onChange={(value) => handleChange("time", value)}
              />
              <SelectBox
                className="!text-white-A700 font-worksans text-base text-left w-full"
                placeholderClassName="!text-white-A700"
                indicator={
                  <Img
                    className="h-[9px] mr-[0] w-4"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="department"
                options={[
                  { label: "Department1", value: "department1" },
                  { label: "Department2", value: "department2" },
                  { label: "Department3", value: "department3" },
                ]}
                isSearchable={false}
                placeholder="Department"
                shape="square"
                color="indigo_900"
                size="xs"
                variant="fill"
                onChange={(value) => handleChange("department", value)}
              />
            </div>
          </div>
          <input
                type="text"
          className="bg-indigo-900 border-0 font-worksans pb-[35px] pl-5 sm:pr-5 pr-[35px] pt-[18px] text-base text-left placeholder:text-white-A700 text-white-A700 w-full"
// name="message"
placeholder="Message"
value={formData.message}
onChange={(e) => handleChange("message", e.target.value)}
/>

          <div className="bg-blue-100 flex flex-col items-center justify-start p-[15px] rounded-bl-[5px] rounded-br-[5px] w-full">
          <button type="submit" className="text-base text-center text-indigo-900 uppercase">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default HomeColumnNine;












// import React from "react";

// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemButton,
//   AccordionItemHeading,
//   AccordionItemPanel,
//   AccordionItemState,
// } from "react-accessible-accordion";

// import { Img, SelectBox, Text, TextArea } from "components";

// const dateOptionsList = [
//   { label: "Option1", value: "option1" },
//   { label: "Option2", value: "option2" },
//   { label: "Option3", value: "option3" },
// ];
// const doctorOptionsList = [
//   { label: "Option1", value: "option1" },
//   { label: "Option2", value: "option2" },
//   { label: "Option3", value: "option3" },
// ];

// const HomeColumnNine = (props) => {
//   return (
//     <>
//       <div className={props.className}>
//         <div className="flex flex-col items-center justify-start w-full">
//           <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
//             <div className="flex sm:flex-1 flex-col items-center justify-start w-1/2 sm:w-full">
//               <input
//                 type="text"
//                 className="bg-indigo-900 h-[50px] justify-center pb-[13px] pl-5 sm:pr-5 pr-[35px] pt-[17px] rounded-tl-[5px] text-base text-white-A700 w-[245px]"
//                 placeholder={props?.name}
//               />
//               <input
//                 type="text"
//                 className="bg-indigo-900 h-[50px] justify-center pl-5 sm:pr-5 pr-[35px] py-[15px] text-base text-white-A700 w-[245px]"
//                 placeholder={props?.email}
//               />
//               <SelectBox
//                 className="!text-white-A700 font-worksans text-base text-left w-full"
//                 placeholderClassName="!text-white-A700"
//                 indicator={
//                   <Img
//                     className="h-[9px] mr-[0] w-4"
//                     src="images/img_arrowdown.svg"
//                     alt="arrow_down"
//                   />
//                 }
//                 isMulti={false}
//                 name="groupFortyThree"
//                 options={dateOptionsList}
//                 isSearchable={false}
//                 placeholder="Date"
//                 shape="square"
//                 color="indigo_900"
//                 size="xs"
//                 variant="fill"
//               />
//               <SelectBox
//                 className="!text-white-A700 font-worksans text-base text-left w-full"
//                 placeholderClassName="!text-white-A700"
//                 indicator={
//                   <Img
//                     className="h-[9px] mr-[0] w-4"
//                     src="images/img_arrowdown.svg"
//                     alt="arrow_down"
//                   />
//                 }
//                 isMulti={false}
//                 name="groupFortySix"
//                 options={doctorOptionsList}
//                 isSearchable={false}
//                 placeholder="Doctor"
//                 shape="square"
//                 color="indigo_900"
//                 size="xs"
//                 variant="fill"
//               />
//             </div>
//             <div className="flex sm:flex-1 flex-col items-center justify-start w-1/2 sm:w-full">
//               <SelectBox
//                 className="!text-white-A700 font-worksans text-base text-left w-full"
//                 placeholderClassName="!text-white-A700"
//                 indicator={
//                   <Img
//                     className="h-[9px] mr-[0] w-4"
//                     src="images/img_arrowdown.svg"
//                     alt="arrow_down"
//                   />
//                 }
//                 isMulti={false}
//                 name="gender"
//                 options={[
//                   { label: "Male", value: "male" },
//                   { label: "Female", value: "female" }
//                 ]}
//                 isSearchable={false}
//                 placeholder="Gender"
//                 shape="square"
//                 color="indigo_900"
//                 size="xs"
//                 variant="fill"
//               />
//               <input
//                 type="text"
//                 className="bg-indigo-900 h-[50px] justify-center pl-5 sm:pr-5 pr-[35px] py-[15px] text-base text-white-A700 w-[245px]"
//                 placeholder={props?.phone}
//               />
//               <SelectBox
//                 className="!text-white-A700 font-worksans text-base text-left w-full"
//                 placeholderClassName="!text-white-A700"
//                 indicator={
//                   <Img
//                     className="h-[9px] mr-[0] w-4"
//                     src="images/img_arrowdown.svg"
//                     alt="arrow_down"
//                   />
//                 }
//                 isMulti={false}
//                 name="time"
//                 options={[
//                   { label: "Morning", value: "morning" },
//                   { label: "Afternoon", value: "afternoon" },
//                   { label: "Evening", value: "evening" }
//                 ]}
//                 isSearchable={false}
//                 placeholder="Time"
//                 shape="square"
//                 color="indigo_900"
//                 size="xs"
//                 variant="fill"
//               />
//               <SelectBox
//                 className="!text-white-A700 font-worksans text-base text-left w-full"
//                 placeholderClassName="!text-white-A700"
//                 indicator={
//                   <Img
//                     className="h-[9px] mr-[0] w-4"
//                     src="images/img_arrowdown.svg"
//                     alt="arrow_down"
//                   />
//                 }
//                 isMulti={false}
//                 name="department"
//                 options={[
//                   { label: "Department1", value: "department1" },
//                   { label: "Department2", value: "department2" },
//                   { label: "Department3", value: "department3" }
//                 ]}
//                 isSearchable={false}
//                 placeholder="Department"
//                 shape="square"
//                 color="indigo_900"
//                 size="xs"
//                 variant="fill"
//               />
//             </div>
//           </div>
//           <TextArea
//             className="bg-indigo-900 border-0 font-worksans pb-[35px] pl-5 sm:pr-5 pr-[35px] pt-[18px] text-base text-left placeholder:text-white-A700 text-white-A700 w-full"
//             name="groupFortySeven"
//             placeholder="Message"
//           />
//           <div className="bg-blue-100 flex flex-col items-center justify-start p-[15px] rounded-bl-[5px] rounded-br-[5px] w-full">
//             <Text
//               className="text-base text-center text-indigo-900 uppercase"
//               size="txtWorkSansMedium16"
//             >
//               {props?.submit}
//             </Text>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// HomeColumnNine.defaultProps = {
//   name: "Name",
//   email: "Email",
//   gender: "Gender",
//   phone: "Phone",
//   submit: "Submit",
// };

// export default HomeColumnNine;







// import React from "react";

// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemButton,
//   AccordionItemHeading,
//   AccordionItemPanel,
//   AccordionItemState,
// } from "react-accessible-accordion";

// import { Img, SelectBox, Text, TextArea } from "components";

// const dateOptionsList = [
//   { label: "Option1", value: "option1" },
//   { label: "Option2", value: "option2" },
//   { label: "Option3", value: "option3" },
// ];
// const doctorOptionsList = [
//   { label: "Option1", value: "option1" },
//   { label: "Option2", value: "option2" },
//   { label: "Option3", value: "option3" },
// ];

// const HomeColumnNine = (props) => {
//   return (
//     <>
//       <div className={props.className}>
//         <div className="flex flex-col items-center justify-start w-full">
//           <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
//             <div className="flex sm:flex-1 flex-col items-center justify-start w-1/2 sm:w-full">
//               <Text
//                 className="bg-indigo-900 h-[50px] justify-center pb-[13px] pl-5 sm:pr-5 pr-[35px] pt-[17px] rounded-tl-[5px] text-base text-white-A700 w-[245px]"
//                 size="txtWorkSansRegular16WhiteA700"
//               >
//                 {props?.name}
//               </Text>
//               <Text
//                 className="bg-indigo-900 h-[50px] justify-center pl-5 sm:pr-5 pr-[35px] py-[15px] text-base text-white-A700 w-[245px]"
//                 size="txtWorkSansRegular16WhiteA700"
//               >
//                 {props?.email}
//               </Text>
//               <SelectBox
//                 className="!text-white-A700 font-worksans text-base text-left w-full"
//                 placeholderClassName="!text-white-A700"
//                 indicator={
//                   <Img
//                     className="h-[9px] mr-[0] w-4"
//                     src="images/img_arrowdown.svg"
//                     alt="arrow_down"
//                   />
//                 }
//                 isMulti={false}
//                 name="groupFortyThree"
//                 options={dateOptionsList}
//                 isSearchable={false}
//                 placeholder="Date"
//                 shape="square"
//                 color="indigo_900"
//                 size="xs"
//                 variant="fill"
//               />
//               <SelectBox
//                 className="!text-white-A700 font-worksans text-base text-left w-full"
//                 placeholderClassName="!text-white-A700"
//                 indicator={
//                   <Img
//                     className="h-[9px] mr-[0] w-4"
//                     src="images/img_arrowdown.svg"
//                     alt="arrow_down"
//                   />
//                 }
//                 isMulti={false}
//                 name="groupFortySix"
//                 options={doctorOptionsList}
//                 isSearchable={false}
//                 placeholder="Doctor"
//                 shape="square"
//                 color="indigo_900"
//                 size="xs"
//                 variant="fill"
//               />
//             </div>
//             <Accordion
//               preExpanded={[0]}
//               className="flex sm:flex-1 flex-col gap-px w-1/2 sm:w-full"
//             >
//               {[...Array(3)].map((item, index) => (
//                 <AccordionItem uuid={index} key={Math.random()}>
//                   <div className="flex flex-col items-center justify-start w-full">
//                     <AccordionItemHeading className="w-full">
//                       <AccordionItemButton>
//                         <AccordionItemState>
//                           {({ expanded }) => (
//                             <div className="bg-indigo-900 flex flex-row items-end justify-between p-3.5 rounded-tr-[5px] w-full">
//                               <Text
//                                 className="ml-[5px] mt-0.5 text-base text-white-A700"
//                                 size="txtWorkSansRegular16WhiteA700"
//                               >
//                                 {props?.gender}
//                               </Text>
//                               {expanded && (
//                                 <Img
//                                   className="h-[9px] mb-1 mr-[5px] mt-[7px]"
//                                   src="images/img_arrowdown.svg"
//                                   alt="arrowdown"
//                                 />
//                               )}
//                               {!expanded && (
//                                 <Img
//                                   className="h-[9px] mr-[5px] my-[5px]"
//                                   src="images/img_arrowdown.svg"
//                                   alt="arrowdown_One"
//                                 />
//                               )}
//                             </div>
//                           )}
//                         </AccordionItemState>
//                       </AccordionItemButton>
//                     </AccordionItemHeading>
//                     <AccordionItemPanel className="w-full ">
//                       <div className="flex flex-col items-center justify-start mx-auto w-full">
//                         <Text
//                           className="bg-indigo-900 h-[50px] justify-center pl-5 sm:pr-5 pr-[35px] py-[15px] text-base text-white-A700 w-[245px]"
//                           size="txtWorkSansRegular16WhiteA700"
//                         >
//                           {props?.phone}
//                         </Text>
//                       </div>
//                     </AccordionItemPanel>
//                   </div>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </div>
//           <TextArea
//             className="bg-indigo-900 border-0 font-worksans pb-[35px] pl-5 sm:pr-5 pr-[35px] pt-[18px] text-base text-left placeholder:text-white-A700 text-white-A700 w-full"
//             name="groupFortySeven"
//             placeholder="Message"
//           ></TextArea>
//           <div className="bg-blue-100 flex flex-col items-center justify-start p-[15px] rounded-bl-[5px] rounded-br-[5px] w-full">
//             <Text
//               className="text-base text-center text-indigo-900 uppercase"
//               size="txtWorkSansMedium16"
//             >
//               {props?.submit}
//             </Text>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// HomeColumnNine.defaultProps = {
//   name: "Name",
//   email: "Email",
//   gender: "Gender",
//   phone: "Phone",
//   submit: "Submit",
// };

// export default HomeColumnNine;
