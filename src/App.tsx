import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Chalanges from './pages/Chalanges';
import Pagination from './solutions/Pagination';

function App() {

  let location = window.location.pathname;
  let Content;

  switch (location) {
    case '/home':
      Content = Home;
      break;
    case '/chalanges':
      Content = Chalanges;
      break;
    case '/chalanges/pagination_component':
      Content = Pagination;
      break;
    default:
      Content = Login;
  }

  return (
    <>
      {location != '/' && <Navbar />}
      <Content />
    </>
  );
}

export default App;
