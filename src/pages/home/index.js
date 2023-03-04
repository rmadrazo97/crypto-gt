import React from 'react';
import AboutUs from './components/aboutUs';
import Cards from './components/cards';
import CriptoTable from './components/criptoTable';
import EmpizaComprar from './components/empizaComprar';
import HaveQuestionForm from './components/haveQuestionForm';
import HomeBanner from './components/homeBanner';
import Services from './components/services';
import './home.css';

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <CriptoTable />
      <EmpizaComprar />
      <Services />
      <Cards />
      <HaveQuestionForm />
      <AboutUs />
    </div>
  );
};

export default Home;
