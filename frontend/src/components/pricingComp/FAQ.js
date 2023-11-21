import styled from "styled-components";
import { FAQData } from "./FAQData";
import Question from "./Question";

const Section = styled.div`
  padding: 5rem 0;
  border-bottom: 2px solid #000;
`;

const Header = styled.div`
  /* border: 1px solid red; */
  margin-bottom: 6.5rem;
  h1 {
    /* color: #333; */
    font-size: 5rem;
    font-weight: 500;
    margin-bottom: 1.2rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: 600;

    span {
      text-decoration: underline;
    }
  }
`;

const Questions = styled.div`
  /* border: 1px solid red; */
  width: 92.5%;
  margin: 0 auto;
`;



const FAQ = () => {

  return (
    <Section>
      <Header>
        <h1>Frequently asked questions</h1>
        <p>
          Don't see your question? <span>Visit our help center.</span>
        </p>
      </Header>
      <Questions>
        {FAQData.map((faq, index) => {
          return (
            <Question key={index} {...faq} /> 
          );
        })}
      </Questions>
    </Section>
  );
};

export default FAQ;
