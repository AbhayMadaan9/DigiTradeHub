import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Section = styled.div`
background-color: rgb(255, 144, 232);
padding: 5rem 0;




h1{
  font-family: Darker Grotesque;
  line-height: 100%;
  font-weight: 500;
  font-size: 5.5rem;
  margin-bottom: 3.5rem;
}
`

const ShareWork = () => {
  return (
    <Section>
      <h1>
        Share your work
        <br />
        Someone out there needs it.
      </h1>
      <Button />
    </Section>
  )
}

export default ShareWork