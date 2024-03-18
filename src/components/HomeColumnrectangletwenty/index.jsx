import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { fetchDoctors } from '../../api/doctors'; // Adjust the path based on your project structure
import doctorsData from '../../api/doctors'; // Importing local doctor data


import { Button, Img, List, PagerIndicator, Slider, Text } from 'components';

const HomeColumnrectangletwenty = (props) => {
  const navigate = useNavigate(); 
  // const sliderRef = React.useRef(null);
  // const [sliderState, setsliderState] = React.useState(0);
  // const sliderRef1 = React.useRef(null);
  // const [sliderState1, setsliderState1] = React.useState(0);

  const [doctors, setDoctors] = useState([]);
  const [sliderState, setSliderState] = useState(0);
  const [sliderState1, setSliderState1] = useState(0);

  useEffect(() => {
    setDoctors(doctorsData); // Set the local doctor data



    // const fetchData = async () => {
    //   try {
    //     const doctorsData = await fetchDoctors(); // Assuming fetchDoctors returns an array of doctor objects
    //     setDoctors(doctorsData);
    //   } catch (error) {
    //     console.error('Error fetching doctors data:', error);
    //   }
    // };

    // fetchData();
  }, []);
 
  return (

    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1.5 items-center justify-start">
          <Text className="text-blue-500 text-center text-lg tracking-[2.88px] uppercase" size="txtWorkSansBold18">
            Trusted Care
          </Text>
          <Text className="md:text-3xl sm:text-[28px] text-[32px] text-center text-indigo-900" size="txtYesevaOneRegular32">
            Our Doctors
          </Text>
        </div>
        <Slider
          autoPlay
          autoPlayInterval={2000}
          activeIndex={sliderState}
          responsive={{
            0: { items: 1 },
            550: { items: 2 },
            1050: { items: 3 },
          }}
          onSlideChanged={(e) => {
            setSliderState(e?.item);
          }}
          className="mt-16 w-full"
        >
          {doctors.map((doctor, index) => (
            <List key={index} className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 justify-center mx-2.5" orientation="horizontal">
              <div className="flex flex-col items-start justify-start w-[100%] sm:ml-[0] w-auto">
                <Img className="h-[350px] w-[100%] sm:h-auto object-cover w-[317px] md:w-full" src={doctor.image} alt={doctor.name} />
                <div className="bg-blue-100 flex flex-col items-center justify-end p-6 sm:px-5 w-full">
                  <div className="flex flex-col items-center justify-start w-[51%] md:w-full">
                    <Text className="text-indigo-900 text-lg" size="txtWorkSansRegular18Indigo900" style={{ whiteSpace: 'nowrap',  width: '100%' }}>{doctor.name}</Text>
                    <Text className="mt-[9px] text-indigo-900 text-lg tracking-[2.88px] uppercase" size="txtWorkSansBold18Indigo900" >{doctor.specialty}</Text>
                    <div className="flex flex-row gap-5 items-center justify-between mt-3.5 w-[83%] md:w-full">
                      <Img className="h-6 w-6" alt="vector" src={doctor.vectorIcon} />
                      <Img className="h-6 w-6" alt="facebook" src={doctor.facebookIcon} />
                      <Img className="h-6 w-6" alt="info" src={doctor.infoIcon} />
                    </div>
                  </div>
                </div>
                <Button className="cursor-pointer font-worksans w-full text-base text-center" shape="round" color="indigo_900" size="sm" variant="fill" onClick={() => navigate("/doctorprofile")}>
                  View Profile
                </Button>
              </div>
            </List>
          ))}
        </Slider>
        <PagerIndicator
          className="flex h-[18px] justify-center mt-8 w-[74px]"
          count={3} // Adjust this count based on the number of slides
          activeCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-indigo-900 w-[18px]"
          activeIndex={sliderState1}
          inactiveCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-blue-100 w-[18px]"
          selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
          unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
        />
      </div>
    </>
  );
};

export default HomeColumnrectangletwenty;





// import React from "react";

// import { Button, Img, List, PagerIndicator, Slider, Text } from "components";

// const HomeColumnrectangletwenty = (props) => {
//   const sliderRef = React.useRef(null);
//   const [sliderState, setsliderState] = React.useState(0);
//   const sliderRef1 = React.useRef(null);
//   const [sliderState1, setsliderState1] = React.useState(0);

//   return (
//     <>
//       <div className={props.className}>
//         <div className="flex flex-col gap-1.5 items-center justify-start">
//           <Text
//             className="text-blue-500 text-center text-lg tracking-[2.88px] uppercase"
//             size="txtWorkSansBold18"
//           >
//             {props?.trustedcare}
//           </Text>
//           <Text
//             className="md:text-3xl sm:text-[28px] text-[32px] text-center text-indigo-900"
//             size="txtYesevaOneRegular32"
//           >
//             {props?.ourdoctors}
//           </Text>
//         </div>
//         <Slider
//           autoPlay
//           autoPlayInterval={2000}
//           activeIndex={sliderState}
//           responsive={{
//             0: { items: 1 },
//             550: { items: 1 },
//             1050: { items: 1 },
//           }}
//           onSlideChanged={(e) => {
//             setsliderState(e?.item);
//           }}
//           ref={sliderRef}
//           className="mt-16 w-full"
//           items={[...Array(3)].map(() => (
//             <React.Fragment key={Math.random()}>
//               <List
//                 className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mx-2.5"
//                 orientation="horizontal"
//               >
//                 <div className="flex flex-col items-start justify-start sm:ml-[0] w-auto">
//                   <Img
//                     className="h-[350px] sm:h-auto object-cover w-[317px] md:w-full"
//                     src="images/img_rectangle20.png"
//                     alt="rectangleTwenty"
//                   />
//                   <div className="bg-blue-100 flex flex-col items-center justify-end p-6 sm:px-5 w-full">
//                     <div className="flex flex-col items-center justify-start w-[51%] md:w-full">
//                       <Text
//                         className="text-indigo-900 text-lg"
//                         size="txtWorkSansRegular18Indigo900"
//                       >
//                         {props?.doctorname}
//                       </Text>
//                       <Text
//                         className="mt-[9px] text-indigo-900 text-lg tracking-[2.88px] uppercase"
//                         size="txtWorkSansBold18Indigo900"
//                       >
//                         {props?.specialty}
//                       </Text>
//                       <div className="flex flex-row gap-5 items-center justify-between mt-3.5 w-[83%] md:w-full">
//                         <Img
//                           className="h-6 w-6"
//                           alt="vector"
//                           src={props?.vectoricon}
//                         />
//                         <Img
//                           className="h-6 w-6"
//                           alt="facebook"
//                           src={props?.facebookicon}
//                         />
//                         <Img
//                           className="h-6 w-6"
//                           alt="info"
//                           src={props?.infoicon}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <Button
//                     className="cursor-pointer font-worksans min-w-[317px] text-base text-center"
//                     shape="round"
//                     color="indigo_900"
//                     size="sm"
//                     variant="fill"
//                   >
//                     {props?.viewprofilebutton}
//                   </Button>
//                 </div>
//                 <div className="flex flex-col items-start justify-start sm:ml-[0] w-auto">
//                   <Img
//                     className="h-[350px] sm:h-auto object-cover w-[317px] md:w-full"
//                     src="images/img_rectangle20_350x317.png"
//                     alt="rectangleTwenty"
//                   />
//                   <div className="bg-blue-100 flex flex-col items-center justify-end p-6 sm:px-5 w-full">
//                     <div className="flex flex-col items-center justify-start w-[51%] md:w-full">
//                       <Text
//                         className="text-indigo-900 text-lg"
//                         size="txtWorkSansRegular18Indigo900"
//                       >
//                         {props?.doctorname1}
//                       </Text>
//                       <Text
//                         className="mt-[9px] text-indigo-900 text-lg tracking-[2.88px] uppercase"
//                         size="txtWorkSansBold18Indigo900"
//                       >
//                         {props?.specialty1}
//                       </Text>
//                       <div className="flex flex-row gap-5 items-center justify-between mt-3.5 w-[83%] md:w-full">
//                         <Img
//                           className="h-6 w-6"
//                           alt="vector"
//                           src={props?.vectoricon1}
//                         />
//                         <Img
//                           className="h-6 w-6"
//                           alt="facebook"
//                           src={props?.facebookicon1}
//                         />
//                         <Img
//                           className="h-6 w-6"
//                           alt="info"
//                           src={props?.infoicon1}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <Button
//                     className="cursor-pointer font-worksans min-w-[317px] text-base text-center"
//                     shape="round"
//                     color="indigo_900"
//                     size="sm"
//                     variant="fill"
//                   >
//                     {props?.viewprofilebutton1}
//                   </Button>
//                 </div>
//                 <div className="flex flex-col items-start justify-start sm:ml-[0] w-auto">
//                   <Img
//                     className="h-[350px] sm:h-auto object-cover w-[317px] md:w-full"
//                     src="images/img_rectangle20_1.png"
//                     alt="rectangleTwenty"
//                   />
//                   <div className="bg-blue-100 flex flex-col items-center justify-end p-6 sm:px-5 w-full">
//                     <div className="flex flex-col items-center justify-start w-[51%] md:w-full">
//                       <Text
//                         className="text-indigo-900 text-lg"
//                         size="txtWorkSansRegular18Indigo900"
//                       >
//                         {props?.doctorname2}
//                       </Text>
//                       <Text
//                         className="mt-[9px] text-indigo-900 text-lg tracking-[2.88px] uppercase"
//                         size="txtWorkSansBold18Indigo900"
//                       >
//                         {props?.specialty2}
//                       </Text>
//                       <div className="flex flex-row gap-5 items-center justify-between mt-3.5 w-[83%] md:w-full">
//                         <Img
//                           className="h-6 w-6"
//                           alt="vector"
//                           src={props?.vectoricon2}
//                         />
//                         <Img
//                           className="h-6 w-6"
//                           alt="facebook"
//                           src={props?.facebookicon2}
//                         />
//                         <Img
//                           className="h-6 w-6"
//                           alt="info"
//                           src={props?.infoicon2}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <Button
//                     className="cursor-pointer font-worksans min-w-[317px] text-base text-center"
//                     shape="round"
//                     color="indigo_900"
//                     size="sm"
//                     variant="fill"
//                   >
//                     {props?.viewprofilebutton2}
//                   </Button>
//                 </div>
//               </List>
//             </React.Fragment>
//           ))}
//         />
//         <PagerIndicator
//           className="flex h-[18px] justify-center mt-8 w-[74px]"
//           count={3}
//           activeCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-indigo-900 w-[18px]"
//           activeIndex={sliderState1}
//           inactiveCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-blue-100 w-[18px]"
//           sliderRef={sliderRef1}
//           selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
//           unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
//         />
//       </div>
//     </>
//   );
// };

// HomeColumnrectangletwenty.defaultProps = {
//   trustedcare: "Trusted Care",
//   ourdoctors: "Our Doctors",
//   doctorname: "Doctor’s Name",
//   specialty: "Neurology",
//   vectoricon: "images/img_vector_indigo_900.svg",
//   facebookicon: "images/img_facebook_indigo_900.svg",
//   infoicon: "images/img_info.svg",
//   viewprofilebutton: "View Profile",
//   doctorname1: "Doctor’s Name",
//   specialty1: "Neurology",
//   vectoricon1: "images/img_vector_indigo_900.svg",
//   facebookicon1: "images/img_facebook_indigo_900.svg",
//   infoicon1: "images/img_info.svg",
//   viewprofilebutton1: "View Profile",
//   doctorname2: "Doctor’s Name",
//   specialty2: "Neurology",
//   vectoricon2: "images/img_vector_indigo_900.svg",
//   facebookicon2: "images/img_facebook_indigo_900.svg",
//   infoicon2: "images/img_info.svg",
//   viewprofilebutton2: "View Profile",
// };

// export default HomeColumnrectangletwenty;
