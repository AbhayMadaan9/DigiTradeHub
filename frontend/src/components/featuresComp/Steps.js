import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
width: 80%;
text-align: left;
margin: 0 auto;
letter-spacing: -0.01em;
margin-bottom: 3rem;

&:last-child{
    margin-bottom: 2rem;
}
/* border: 1px solid red; */

h3{
    font-size: 3rem;
    font-weight: 500;
    margin: 20px 0;
    line-height: 1;
    /* margin-bottom: 20px; */
}

div{
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1;
    /* margin-top: 20px; */
}
`

const Steps = ({title,desc}) => {
  return (
    <Section>
        <h3>{title}</h3>
        <div>
            {desc}
        </div>
    </Section>
  )
}

export default Steps