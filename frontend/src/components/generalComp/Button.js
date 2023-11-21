import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  position: relative;
  cursor: pointer;
  width: fit-content;
  margin: 0 auto;
  
  div.black {
      min-width: 18rem;
    font-family: Darker Grotesque;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1;
    padding: 1.2rem 5rem 1.3rem;
    width: fit-content;
    text-decoration: none;
    z-index: 3;
    position: absolute;
    border-radius: 4px;
    background-color: rgb(0, 0, 0);
    position: relative;
    color: rgb(255, 255, 255);
    text-align: center;
    transform: translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transition: transform 200ms ease-in-out 0s,
      -webkit-transform 200ms ease-in-out 0s;
  }

  div.yellow {
    position: absolute;
    background-color: rgb(241, 243, 51);
    z-index: 2;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(0, 0, 0);
    border-radius: 4px;
    transform: translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transition: transform 200ms ease-in-out 0s,
      -webkit-transform 200ms ease-in-out 0s;
  }

  div.red {
    position: absolute;
    background-color: rgb(152, 40, 42);
    z-index: 1;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(0, 0, 0);
    border-radius: 4px;
    transform: translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transition: transform 200ms ease-in-out 0s,
      -webkit-transform 200ms ease-in-out 0s;
  }

  &:hover {
    div.black {
      transform: translate3d(-1.5rem, -1.5rem, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    div.yellow{
        transform: translate3d(-1rem, -1rem, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    div.red {
      transform: translate3d(-0.5rem, -0.5rem, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
  }
`;

const Button = () => {
  return (
    <Section> 
      <div className="black"><Link to="/register">Start Selling</Link></div>
      <div className="yellow"></div>
      <div className="red"></div>
    </Section>
  );
};

export default Button;
