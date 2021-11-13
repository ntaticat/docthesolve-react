import React, { Fragment, useState } from 'react';

const NewIncidencesItem = () => {

  const [verMas, setVerMas] = useState(false);



  return (
    <div className="w-full border-2 border-solid border-gray-300">
      {/* Titulo y numero de reporte */}
      <div className="w-full p-3">
        <div className="w-full py-3 flex flex-wrap justify-between items-baseline">
          <strong>Titulo de la Incidencia que registra la persona que reporta</strong>
          <small className="bg-green-600 text-gray-100 px-2 py-1 rounded-lg">reporte #123</small>
        </div>
        <hr className="w-full border-b-2 border-solid border-gray-200" />
      </div>
      {/* Descripción corta */}
      {!verMas &&
        <Fragment>
          <div className="w-full p-3 text-center">
            <p>Descripción breve del reporte...</p>
          </div>
          <button button className="w-full py-2 bg-gray-200" onClick={() => setVerMas(true)}>
            Ver más información <i className="fas fa-arrow-down"></i>
          </button>
        </Fragment>
      }
      {/* Descripción y botón para realizar acción */}
      {verMas &&
        <Fragment>
          <div className="w-full p-3">
            <div className="w-full mb-3 text-justify">
              <p>Información detallada del problema...</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsum eaque vel quaerat minus cupiditate
                consectetur impedit explicabo, ex doloremque expedita quam ducimus provident facere temporibus nostrum.
                Dolor, dolore perferendis!</p>
            </div>
            <div className="w-full flex justify-start">
              <button className="px-2 py-1 bg-gray-700 text-gray-100 rounded-lg">Ver reporte</button>
            </div>
          </div>
          <button className="w-full py-2 bg-gray-200" onClick={() => setVerMas(false)}>
            Mostrar menos <i className="fas fa-arrow-up"></i>
          </button>
        </Fragment>
      }
    </div>
  );
};

export default NewIncidencesItem;