import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import FetchData from './components/fetch_data.js';
import NewsNavbar from './components/navbar.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NewsNavbar />
    <FetchData />
  </React.StrictMode>
);

