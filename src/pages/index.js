import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../components/header/Header";
import Banner from "../components/Home2/Banner";
import SolutionSection from "../components/Home2/SolutionSection";
import About from "../components/Home2/About";
import Testimonial from "../components/Home2/Testimonial";
import CoverSection from "../components/Home2/CoverSection";
import EventAndConfarance from "../components/Home2/EventAndConfarance";
import ProjectSection from "../components/Home2/ProjectSection";
import WhyChooseSection from "../components/Home2/WhyChooseSection";
import VideoArea from "../components/Home2/VideoArea";
import PeopleSection from "../components/Home2/PeopleSection";
import ClientSection from "../components/Home2/ClientSection";
import Blog from "../components/Home2/Blog";
import Contact from "../components/Home2/Contact";
import Footer2 from "../components/footer/Footer2";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "header",
        "banner",
        "solution",
        "about",
        "testimonial",
        "cover",
        "event",
        "project",
        "choose",
        "video",
        "people",
        "client",
        "blog",
        "contact",
        "footer",
      ])),
    },
  };
}

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <SolutionSection />
      <About />
      <ProjectSection />
      <WhyChooseSection />
      <VideoArea />
      <PeopleSection />
      <ClientSection />
      <Blog />
      <Contact />
      <Footer2 />
    </>
  );
};

export default Home;
