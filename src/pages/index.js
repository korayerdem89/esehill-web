// import React from "react";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import Header from "../components/header/Header";
// import Banner from "../components/Home2/Banner";
// import SolutionSection from "../components/Home2/SolutionSection";
// import About from "../components/Home2/About";
// import ProjectSection from "../components/Home2/ProjectSection";
// import ClientSection from "../components/Home2/ClientSection";
// import Brands from "../components/Home2/Brands";
// import Contact from "../components/Home2/Contact";
// import Footer2 from "../components/footer/Footer2";

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, [
//         "common",
//         "header",
//         "banner",
//         "solution",
//         "about",
//         "testimonial",
//         "cover",
//         "event",
//         "project",
//         "choose",
//         "video",
//         "people",
//         "client",
//         "brands",
//         "contact",
//         "footer",
//       ])),
//     },
//   };
// }

// const Home = () => {
//   return (
//     <>
//       <Header />
//       <Banner />
//       <SolutionSection />
//       <About />
//       <ProjectSection />
//       <ClientSection />
//       <Brands />
//       <Contact />
//       <Footer2 />
//     </>
//   );
// };

// export default Home;

import React from "react";

const index = () => {
  return <div>index</div>;
};

export default index;
