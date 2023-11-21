import React from "react";
import styled from "styled-components";
import logo from "../assets/618ea7afd990103829d614ff_gumroad-logo.svg";
import Explore from "../components/homeComp/Explore";
import Footer from "../components/generalComp/Footer";
import Income from "../components/homeComp/Income";
import Inspiration from "../components/homeComp/Inspiration";
import Navbar from "../components/generalComp/Navbar";
import Review1 from "../components/homeComp/Review1";
import Review2 from "../components/homeComp/Review2";
import Roadmap from "../components/homeComp/Roadmap";
import SellAnything from "../components/homeComp/SellAnything";
import SellAnywhere from "../components/homeComp/SellAnywhere";
import SellToAnyone from "../components/homeComp/SellToAnyone";
import ShareWork from "../components/generalComp/ShareWork";
import StartSelling from "../components/homeComp/StartSelling";
import Suggestion from "../components/homeComp/Suggestion";
import { Playground } from "../components/generalComp/SVG";
import Review3 from "../components/homeComp/Review3";

const Section = styled.div`
  /* border: 1px solid black; */
  padding: 2rem 2vw;
  border-bottom: 2px solid #000;
  overflow-x: hidden;
  display: block;

  img {
    border: 1px solid #fff;
    display: block;
    width: 100%;
    height: auto;
  }
`;
const PlaygroundImage = styled.div`
  border-bottom: 2px solid #000;
  svg {
    display: block;
  }
`;

const Home = () => {
  return (
    <>
      {/* <Section>
        <img src={logo} alt="" />
      </Section> */}
      <Navbar/>
      <StartSelling />
      <Roadmap />
      <Suggestion />
      <Explore />
      <SellAnything />
      <Review1 />
      <SellToAnyone />
      <Review2 />
      <SellAnywhere />
      <Inspiration />
      <Review3 />
      <Income />
      <PlaygroundImage>
        <Playground />
      </PlaygroundImage>
      <ShareWork />
      <Footer />
    </>
  );
};

export default Home;
