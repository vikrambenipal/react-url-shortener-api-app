import React from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import Nav from './components/Nav';
import Card from './components/Card';
import Footer from './components/Footer';
import illustration from './images/illustration-working.svg';
import brand_rec from './images/icon-brand-recognition.svg';
import detailed_rec from './images/icon-detailed-records.svg';
import fully_cust from './images/icon-fully-customizable.svg';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 30px;
  img {
    max-width: 100%;
    margin-left: 80px;
    margin-top: 30px;
  }
  p {
    width: 80%;
    line-height: 30px;
    margin: 0 auto;
  }
  button {
    background-color: #2BD0D0;
    color: white;
    border: none;
    border-radius: 28px;
    height: 48px;
    width: 40%;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`
const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 0px;
  padding-top: 30px;
  //margin-bottom: 50px;
  background-color: #EFF1F7;
  p {
    width: 80%;
    line-height: 30px;
    margin: 0 auto;
  }
`
const CardList = styled.div`
  background-color: #EFF1F7;
  padding-bottom: 30px;
  margin-top: 70px;
`

const BoostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  background-color: #3A3054;
  padding-top: 50px;
  padding-bottom: 50px;
  h2 {
    color: white;
  }
  button {
    background-color: #2BD0D0;
    color: white;
    border: none;
    border-radius: 28px;
    height: 48px;
    width: 40%;
    margin-bottom: 30px;
  }
`

const App = () => {
  return (
    <div className="App">
      <Nav />
      <HeroContainer>
        <img src={illustration} alt=""></img>
        <div>
          <h1>More than just shorter links</h1>
          <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
          <button>Get Started</button>
        </div>
      </HeroContainer>
      <Form />

      <StatisticsContainer>
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
          <CardList>
            <Card icon={brand_rec} title={"Brand Recognition"} info={"Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."}/>
            <Card icon={detailed_rec} title={"Detailed Records"} info={"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."}/>
            <Card icon={fully_cust} title="Fully Customizable" info={"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."}/>
        </CardList>
      </StatisticsContainer>

      <BoostContainer>
        <h2>Boost your links today</h2>
        <button>Get Started</button>
      </BoostContainer>

      <Footer />
    </div>
  );
}

export default App;
