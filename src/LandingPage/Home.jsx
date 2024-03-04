import React from 'react'
import Nav from '../utils/Navbar/Nav'
// import Simplify from './parts/Simplify';
import Billing from './parts/Billing';
import Clock from './parts/Clock';
import ContactFaq from './parts/ContactFaq';
import Testimonial from './parts/Testimonial';
import Footer from '../utils/Footer';
import CustomerReview from './parts/CustomerReview';
import Features from './parts/Features';
import FeaturesMain from './parts/FeaturesMain';
import UserFav from './parts/UserFav';
import Awards from './Awards';
import Simplify from '../utils/Simplify';
import { Stack } from '@mui/material';
import CustomerSlider from './parts/CustomerSlider';

const Home = () => {
  return (
    <Stack maxWidth={"1836px"} margin={"0 auto"}>
      <Nav />
      <Simplify />

      {/* <Features/> */}
      <FeaturesMain />
      <UserFav />
      <Testimonial/>
      <CustomerReview/>
      <CustomerSlider/>
      <Clock />
      {/* <Awards/> */}
      <ContactFaq />
      <Footer />
    </Stack>
  );
}

export default Home