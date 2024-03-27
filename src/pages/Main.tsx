import React from 'react'
import Navbar from '../components/Navbar'
import Chalanges from './Chalanges';
import Home from './Home';

function Main() {
  console.log(window.location)
  let Content;
  switch (window.location.pathname) {
    case "/home":
      Content = <Home />
      break;

    case "/home/chalanges":
      Content = <Chalanges />
      break;
      
    default:
      break;
  }

  return (
    <>
      <Navbar />
      {/* <Content /> */}
    </>

  )
}

export default Main