import "./home.css";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import Aboutus from "./AboutUS/aboutUS";
import Counter from "./Counter/Counter";

import Departments from "./Departments/Departments";
import TopContainer from "./TopContainer/TopContainer";
import BottomContainer from "./BottomContainer/BottomContainer";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Aboutus />
      <Counter />

      <Departments />
      <TopContainer />
      <BottomContainer />
      <Footer />
    </>
  );
};

export default Home;
