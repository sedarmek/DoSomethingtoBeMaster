import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Cabecera from './components/Cabecera/Cabecera'
import HomePage from './pages/HomePage/HomePage';
import NotePage from './pages/NotePage/NotePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Cabecera/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/DoSomethingtoBeMaster' element={<HomePage/>}/>
        <Route path='/DoSomethingtoBeMaster/notes' element={<NotePage/>}/>
        <Route path='/DoSomethingtoBeMaster/about' element={<AboutPage/>}/>
        <Route path ='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
