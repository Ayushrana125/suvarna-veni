import React from 'react';
import BestSellers from './components/BestSellers';
import BrandValues from './components/BrandValues';
import HeroCarousel from './components/HeroCarousel';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import SocialFeed from './components/SocialFeed';
import StorySection from './components/StorySection';

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroCarousel />
        <BrandValues />
        <BestSellers />
        <StorySection />
        <SocialFeed />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
