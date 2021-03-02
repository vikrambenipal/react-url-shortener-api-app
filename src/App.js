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

      <h2>Advanced Statistics</h2>
      <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>

      <div>
        <Card icon={brand_rec} title={"Brand Recognition"} info={"Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."}/>
        <Card icon={detailed_rec} title={"Detailed Records"} info={"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."}/>
        <Card icon={fully_cust} title={"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."}/>
      </div>

      <div>
        <h2>Boost your links today</h2>
        <button>Get Started</button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
