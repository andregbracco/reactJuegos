import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faClock,faBirthdayCake, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const CardJuego = ({datos, setJuegos, editar}) => {
  
  function eliminar(nombre) {
    setJuegos(juegos => [...juegos.filter(juego => juego.nombre !== nombre )]);
  }

  return (
      <div onClick={() => editar(datos)} className="item">
          <FontAwesomeIcon 
            onClick={()=> eliminar(datos.nombre)} 
            className="delete" icon={faTrashAlt} 
          />

          <h4>{datos.nombre}</h4>

          <div className="stats">
            <div className="stat jugadores">
              <FontAwesomeIcon icon={faUsers} />
              {datos.cantJugadores.desde} - {datos.cantJugadores.hasta}
            </div>
            <div className="stat tiempo">
              <FontAwesomeIcon icon={faClock} />
              {datos.duracion.desde}-{datos.duracion.hasta} min</div>
            <div className="stat edades">
              <FontAwesomeIcon icon={faBirthdayCake} />
              {datos.edad}+ years</div>
          </div>
      </div>
  )
};

export default CardJuego;