import React, { useEffect, useState } from 'react';
import CardJuego from './CardJuego';

const juegoInicial = {
    nombre : '',
    cantJugadores : { desde : '', hasta : ''},
    duracion : { desde : '', hasta : ''},
    edad : '',
};

const DatosNUevoJuego = ({callback, juegoEditado}) => {

    const [juego, setJuego] = useState(juegoInicial);
    const [invalidState, setInvalidState] = useState(true);

    useEffect(validateState, [juego]);

    useEffect(() => {
        if (juegoEditado)
            setJuego(juegoEditado);
    }, [juegoEditado]);
    
    function validateState() {
        setInvalidState(
            juego.nombre === ''
            || juego.cantJugadores.desde === ''
            || juego.cantJugadores.hasta === ''
            || juego.duracion.desde === ''
            || juego.duracion.hasta === ''
            || juego.edad === ''
        );
    }
    function tomarNombre(evento) {
        setJuego(juego => {
            return {...juego, 
                nombre: evento.target.value}
        });
    }
    function tomarCantDesde(evento) {
        setJuego(juego => {
            return {...juego, 
                cantJugadores: {...juego.cantJugadores, desde:evento.target.value}
            }
        });
    }
    function tomarCantHasta(evento) {
        setJuego(juego => {
            return {...juego, 
                cantJugadores: {...juego.cantJugadores, hasta:evento.target.value}
            }
        });
    }
    function tomarDurDesde(evento) {
        setJuego(juego => {
            return {...juego, 
                duracion: {...juego.duracion, desde:evento.target.value}
            }
        });
    }
    function tomarDurHasta(evento) {
        setJuego(juego => {
            return {...juego, 
                duracion: {...juego.duracion, hasta:evento.target.value}
            }
        });
    }
    function tomarEdad(evento) {
        setJuego(juego => {
            return {...juego, 
                edad: evento.target.value
            }
        });
    }

    function crearJuego() {
        callback(juegos => [...juegos.filter(j => j.nombre !== juego.nombre), juego]);
        setJuego(juegoInicial);
    }

    return (
        <div>
          <header className="App-header">
            <h1>Nuevo Juego</h1>
          </header>
          <div className="nuevo">
            <div>
              <label>Nombre</label>
              <input onChange={tomarNombre} placeholder="Nombre" value={juego.nombre}></input>
            </div>
            <div>
              <label>Cantidad de Jugadores</label>
                <input type="number" onChange={tomarCantDesde} placeholder="Desde" value={juego.cantJugadores.desde}></input>
                <input type="number" onChange={tomarCantHasta} placeholder="Hasta" value={juego.cantJugadores.hasta}></input>
            </div>
            <div>
              <label>Duración</label>
                <input type="number" onChange={tomarDurDesde} placeholder="Desde" value={juego.duracion.desde}></input>
                <input type="number" onChange={tomarDurHasta} placeholder="Hasta" value={juego.duracion.hasta}></input>
            </div>
            <div>
              <label>Edad sugerida</label>
                <input type="number" onChange={tomarEdad} placeholder="Desde" value={juego.edad}></input>
            </div>
          </div>
          <button onClick={crearJuego} disabled={invalidState} >Guardar</button>
        </div>
    )
}
export default DatosNUevoJuego;