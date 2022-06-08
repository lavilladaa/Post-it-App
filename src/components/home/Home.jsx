import React from 'react';
import { useSelector } from 'react-redux';
import Notes from './Notes';
import Header from './Header';
import Footer from './Footer';
import wallDark from '../assets/wallDark.jpg';
import wallLight from '../assets/wallLight.jpg';

function Home() {
  /* Taking the background from the global state (updated in the localStorage)
   so when the page is refreshed is still the same background. */
  const backState = useSelector((state) => state.note.backState);

  if (backState) {
    document.body.style.backgroundImage = `url(${wallLight})`;
  } else {
    document.body.style.backgroundImage = `url(${wallDark})`;
  }
  return (
    <>
      <Header />
      <Notes />
      <Footer />
    </>
  );
}

export default Home;
