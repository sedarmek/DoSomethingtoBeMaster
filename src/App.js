import './App.css';

// import { Outlet, Link } from "react-router-dom";
import Cabecera from './components/Cabecera/Cabecera'
import Cuerpo from './components/Cuerpo/Cuerpo'
// import Pie from './components/Pie/Pie'

function App() {
  return (
    <div className="App">
      {/* <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/cuerpo">Cuerpo</Link> |{" "}
        <Link to="/cronometro">Cronometro</Link>|{" "}
        <Link to="/convertidor">Convertidor</Link>
      </nav>
      <Outlet/> */}
      <Cabecera />
      <Cuerpo/>
      {/* <Pie/> */}
    </div>
  );
}

export default App;
