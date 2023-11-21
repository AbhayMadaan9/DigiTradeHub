import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  Youtube,
} from "../generalComp/SVG";
import GumroadG from "../../assets/GumroadG.svg";
import arrow from "../../assets/ArrowSvg.svg";
import Gumroad from "../../assets/GumroadFooterLogo.svg";

const Header = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  padding: 6.5rem 0 0 4rem;
  text-align: left;
  background-color: #000;
  color: #fff;
  img {
    width: 16vw;
    max-width: 17.5rem;
    min-width: 10rem;
    stroke: #fff;
    /* border: 1px solid red; */
  }
`;

const Section = styled.div`
  background-color: #000;
  padding: 6.5rem 0rem 6.5rem 4rem;
  display: grid;
  grid-template-columns: 1.35fr 0.75fr;
  font-family: Darker Grotesque;
`;

const Subscribe = styled.div`
  /* border: 1px solid #fff; */
  color: #fff;
  text-align: left;
  margin-bottom: 5rem;
  
  h1 {
    /* border: 1px solid #fff; */
    font-size: 2.8rem;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 2.5rem;
  }

  form {
    width: 70%;
    height: 3.75rem;
    margin-bottom: 0px;
    border-radius: 4px;
    background-color: #fff;
    color: #252a2e;
    font-size: 1.1rem;
    line-height: 1.5;
    display: flex;
    align-items: center;

    input {
      border: 2px solid red;
      width: 85%;
      outline: none;
      height: 100%;
      box-sizing: border-box;
      padding: 1rem 1.5rem;
      border-style: none;
      border-radius: 4px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      background-color: #fff;
      color: #000;
      font-family: Darker Grotesque;
      font-weight: 600;
      font-size: 1.5rem;
    }

    button {
      width: 15%;
      height: 100%;
      outline: none;
      cursor: pointer;
      border: none;
      border-left: 2px solid #000;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      background-color: rgb(255, 144, 232);

      img {
        width: 1.65rem;
      }
    }
  }
`;

const Links = styled.div`
  /* border: 1px solid #fff; */
  color: #fff;
  display: flex;
  margin-bottom: 5rem;

  ul {
    list-style: none;
    text-align: left;
    font-family: Darker Grotesque;
    font-size: 1.3rem;
    font-weight: 600;

    &:first-child {
      margin-right: 7rem;
    }

    li {
      line-height: 1;
      margin-bottom: 0.8rem;
      cursor: pointer;

      &:hover {
        color: rgb(255, 144, 232);
      }
    }
  }
`;

const CopyRight = styled.div`
  /* border: 1px solid #fff; */
  color: #fff;
  display: flex;
  align-items: center;

  img {
    margin-right: 0.6rem;
  }

  span {
    line-height: 1;
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

const Socials = styled.div`
  /* border: 1px solid #fff; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 4rem;
  box-sizing: border-box;

  svg {
    width: 30px;
    height: 25px;
    /* fill: #fff; */
    color: #fff;
    cursor: pointer;

    &:hover {
      color: rgb(255, 114, 232);
    }
  }
`;

const Footer = () => {
  return (
    <>
      <Header>
        {/* <img src={Gumroad} alt="" /> */}
      </Header>
      <Section>
        <Subscribe>
          <h1>
            Subscribe to get tips and tactics to
            <br />
            grow the way you want.
          </h1>
          <form>
            <input type="text" name="" placeholder="Your email address" />
            <button>
              <img src={arrow} alt="" />
            </button>
          </form>
        </Subscribe>
        <Links>
          <ul>
            <li>Help</li>
            <li>University</li>
            <li>Blog</li>
            <li>Terms of services</li>
            <li>Privacy Policy</li>
          </ul>
          <ul>
            <li>Feature</li>
            <li>Pricing</li>
            <li>Discover</li>
            <li>Jobs</li>
            <li>Roadmap</li>
          </ul>
        </Links>
        <CopyRight>
          <img src={GumroadG} alt="" />
          <span>&copy; 2023 DigiTradeHub, Inc.</span>
        </CopyRight>
        <Socials>
          <Twitter />
          <Youtube />
          <Instagram />
          <Facebook />
          <Pinterest />
        </Socials>
      </Section>
    </>
  );
};

export default Footer;
