import './App.css';

import Cabecera from './components/Cabecera/Cabecera'
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Cabecera/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/DoSomethingtoBeMaster' element={<HomePage/>}/>
        <Route path ='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
