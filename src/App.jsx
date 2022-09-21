import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Cabecera from './components/Cabecera/Cabecera'
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Cabecera/>
        <Routes>
        <Route path='' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path ='*' element={<NotFoundPage/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
