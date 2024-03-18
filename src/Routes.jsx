import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "pages/NotFound";
const Contact = React.lazy(() => import("pages/Contact"));
const Doctors = React.lazy(() => import("pages/Doctors"));
const Services = React.lazy(() => import("pages/Services"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Home = React.lazy(() => import("pages/Home"));
const SingleService = React.lazy(() => import("pages/SingleService"));
const SingleNews = React.lazy(() => import("pages/SingleNews"));
const News = React.lazy(() => import("pages/News"));
const Appointment = React.lazy(() => import("pages/Appointment"));
const DoctorProfile = React.lazy(() => import("pages/DoctorProfile"));
const ServicesDescription = React.lazy(() => import("./pages/servicesDescription"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/news" element={<News />} />
          <Route path="/singlenews" element={<SingleNews />} />
          <Route path="/singleservice" element={<SingleService />} />
          <Route path="/doctorprofile" element={<DoctorProfile />} />
          <Route path="/servicesDescription" element={<ServicesDescription />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
