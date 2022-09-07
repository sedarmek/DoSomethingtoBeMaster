import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Cabecera from './components/Cabecera/Cabecera'
import HomePage from './pages/HomePage/HomePage';
import NotePage from './pages/NotePage/NotePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter basename='DoSomethingtoBeMaster'> */}
      <Router>
        <Cabecera/>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/notes' element={<NotePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path ='*' element={<NotFoundPage/>}/>
      </Routes>
      {/* <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/notes' element={<NotePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path ='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter> */}
    </Router>
    </div>
  );
}

export default App;
