import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <header>
        <h1>Hello World</h1>
      </header>
      <nav>
        <NavLink to="">App</NavLink>
        <NavLink to="error">Not found</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path ='error' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter> */}
    <App/>
  </React.StrictMode>
);

reportWebVitals();
