import './App.css';
import { useEffect, useState } from 'react';
import CardJuego from './componentes/CardJuego'
import listaDeJuegos from './datos/listaDeJuegos';
import DatosNUevoJuego from './componentes/DatosNuevoJuego';

function App() {

  const [juegos, setJuegos] = useState(listaDeJuegos);
  const [juegoEditado, setJuegoEditado] = useState(null);

  useEffect(() => {
    console.log("JUEGOS CAMBIADOS", juegos);
  }, [juegos]);

  function editarJuego(datosJuego) {
    setJuegoEditado({...datosJuego});
  }

  return (
    <div className="App">
      <DatosNUevoJuego callback={setJuegos} juegoEditado={juegoEditado}/>
      <header className="App-header">
        <h1>Juegos</h1>
      </header>
      <div className="juegos">
        {juegos.map(juego => 
          <CardJuego key={juego.nombre} 
            datos={juego} 
            editar={editarJuego}
            setJuegos={setJuegos}/>
        )}
      </div>

    </div>

  );
};

export default App;
