import './App.css';

import Cabecera from './components/Cabecera/Cabecera'
import Cuerpo from './components/Cuerpo/Cuerpo'
// import Pie from './components/Pie/Pie'

function App() {
  return (
    <div className="App">
      <Cabecera></Cabecera>
      <Cuerpo></Cuerpo>
      {/* <Pie></Pie> */}
    </div>
  );
}

export default App;
