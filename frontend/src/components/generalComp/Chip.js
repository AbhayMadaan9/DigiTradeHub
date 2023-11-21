import React from "react";
import styled from "styled-components";
import GumroadG from "../../assets/GumroadG.svg";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: fit-content;
  position: absolute;
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  height: fit-content;

  border-width: 2px;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  border-image: initial;
  border-radius: 50px;
  background-position: 8px 59%;
  background-repeat: no-repeat;
  transition: box-shadow 200ms ease-in-out 0s, transform 200ms ease-in-out 0s,
    -webkit-transform 200ms ease-in-out 0s;
  padding: 0.5rem 0.7rem 0.5rem 0.5rem;
  cursor: pointer;

  &:hover{
    box-shadow: 3px 3px 0 0 #000;
    -webkit-transform: translate(-4px, -4px);
    -ms-transform: translate(-4px, -4px);
    transform: translate(-4px, -4px);
  }

  img {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
  }

  h4 {
    font-family: Darker Grotesque;
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
    font-weight: 700;
    line-height: 100%;
  }
`;

const Chip = ({ name, bottom, left, right }) => {
  return (
    <Section bottom={bottom ? bottom : '5rem'} left={left ? left : 'auto'} right={right ? right : '0'} >
      <img src={GumroadG} alt="" />
      <h4>{name}</h4>
    </Section>
  );
};

export default Chip;
