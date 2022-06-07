import React from 'react';
import { useSelector } from 'react-redux';
import Notes from './Notes';
import Header from './Header';
import Footer from './Footer';
import wallDark from '../assets/wallDark.jpg';
import wallLight from '../assets/wallLight.jpg'

function Home() {
  const backState = useSelector((state) => state.note.backState);

  
  if (backState===true){
    
    document.body.style.backgroundImage = `url(${wallDark})`;
    
  } else{
    
    document.body.style.backgroundImage = `url(${wallLight})`;
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
