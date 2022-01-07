import React, { Fragment } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import AssistantChat from '../assistant-chat/AssistantChat';

const IncidencePage = () => {

  let { id } = useParams();
  let soluciones = [1, 1, 1, 1, 1];

  return (
    <div className="w-full h-full flex flex-wrap justify-center">

      {/* Titulo */}
      <div className="w-full text-center py-3">
        <h1 className="text-2xl">Incidencia #{id} | Asistente Técnico</h1>
      </div>

      {/* Incidencia */}
      <div className="w-7/12">
        <div className="w-full border-2 border-solid border-gray-300">
          {/* Nombre */}
          <div className="w-full p-3">
            <div className="w-full py-3 flex flex-wrap justify-between items-baseline">
              <strong>Titulo de la Incidencia que registra la persona que reporta</strong>
            </div>
            <hr className="w-full border-b-2 border-solid border-gray-200" />
          </div>
          {/* Descripcion */}
          <div className="w-full p-3">
            <div className="w-full mb-3 text-justify">
              <p>Información detallada del problema...</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsum eaque vel quaerat minus cupiditate
                consectetur impedit explicabo, ex doloremque expedita quam ducimus provident facere temporibus nostrum.
                Dolor, dolore perferendis!</p>
            </div>
            <div className="w-full mb-3 text-justify">
              <p>Información detallada del problema...</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsum eaque vel quaerat minus cupiditate
                consectetur impedit explicabo, ex doloremque expedita quam ducimus provident facere temporibus nostrum.
                Dolor, dolore perferendis!</p>
            </div>
          </div>
          {/* Posibles soluciones */}
          <div className="w-full p-3">
            <h3 className="mb-3">Soluciones</h3>
            {soluciones.map(() => (
              <Fragment>
                <div className="p-3 border-2 border-solid border-gray-200">
                  <div className="">
                    <p>Llegar</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod voluptatum fugit in molestiae. Illo maxime corrupti minima ullam ipsum. Nostrum quas fuga repellat minus expedita magni excepturi similique ratione?</p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>

          {/* Redactar solucion */}
          <div className="w-full p-3"></div>
        </div>
      </div>

      {/* Secundario */}
      <div className="sticky top-0 w-3/12">
        <AssistantChat />
        <Link to="/incidences" onClick={() => { }}>
          <div className="w-full py-2 bg-gray-200 flex justify-center">
            <div className="">Regresar <i class="fas fa-arrow-left"></i></div>
          </div>
        </Link>
      </div>

    </div>
  );
};

export default IncidencePage;