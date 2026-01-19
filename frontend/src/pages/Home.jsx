import React from 'react';
// Note the "../components/" path!
import Hero from '../components/Hero';
import NewsFeed from '../components/NewsFeed';
import Ads from '../components/Ads';


const Home = () => {
  return (
    <>
      <Hero />
      <NewsFeed />
      <Ads />
    </>
  );
};

export default Home;