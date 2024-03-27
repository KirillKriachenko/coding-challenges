import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Main from './pages/Main';
import Login from './pages/Login';
import Tasks from './pages/Tasks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
  // <BrowserRouter>
  //   <Routes>
  //     <Route index element={<Login />} />
  //     <Route path='/home' element={<Main />} />
  //     {/* <Route path='/home' element={<Layout />}>
  //       <Route index element={<Home />} />
  //       <Route path='tasks' element={<Tasks />} />
  //     </Route> */}
  //   </Routes>
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
