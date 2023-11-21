import React from 'react'
import styled from 'styled-components'
import coin1 from '../../coins/coin1.svg'
import coin2 from '../../coins/coin2.svg'
import coin3 from '../../coins/coin3.svg'
import coin4 from '../../coins/coin4.svg'
import coin5 from '../../coins/coin5.svg'

const Section = styled.div`
padding: 5rem 0 6rem;
font-family: Darker Grotesque;
position: relative;

h1{
    font-size: 13rem;
    margin-bottom: 2rem;
    font-weight: 600;
}

h3{
    font-size: 2.6rem;
    font-weight: 500;
    line-height: 100%;
}
`

const Coin1Image = styled.div`
position: absolute;
top: 0rem;
left: 16vw;
transform: translateY(-50%);
`

const Coin2Image = styled.div`
position: absolute;
top: 1.5rem;
left: -2rem;
`

const Coin3Image = styled.div`
position: absolute;
top: 5rem;
right: 5.9rem;
`

const Coin4Image = styled.div`
position: absolute;
top: 16rem;
right: 0rem;
transform: translateX(30%);
`

const Coin5Image = styled.div`
position: absolute;
bottom: 0rem;
left: 0rem;

img{
    width: 80%;
}
`

const Income = () => {
  return (
    <Section>
    <h1>$3,944,320</h1>
    <h3>The amount of income earned by DigiTradeHub
    <br/>
    digital entrepreneurs last week.</h3>
    {/* <Coin1Image>
        <img src={coin1} alt="" />
    </Coin1Image>
    <Coin2Image>
        <img src={coin2} alt="" />
    </Coin2Image>
    <Coin3Image>
        <img src={coin3} alt="" />
    </Coin3Image>
    <Coin4Image>
        <img src={coin4} alt="" />
    </Coin4Image>
    <Coin5Image>
        <img src={coin5} alt="" />
    </Coin5Image> */}
    </Section>
  )
}

export default Income