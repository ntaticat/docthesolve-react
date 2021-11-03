import React, { Fragment } from 'react';
import NewIncidencesList from './new-incidences-list/NewIncidencesList'

export const IncidencesPage = () => {
  return (
    <div className="w-full h-full flex flex-wrap justify-center">

      <div className="w-full text-center py-3">
        <h1 className="text-2xl">Incidencias | Asistente Técnico</h1>
      </div>

      {/* <div className="w-3/12"></div> */}
      <NewIncidencesList />

      {/* Chat */}
      <div className="w-3/12">
        <div className="w-full border-2 border-solid border-gray-300">
          <div className="w-full p-3">
            <div className="w-full py-3 flex flex-wrap justify-between items-baseline">
              <strong>Chat</strong>
            </div>
            <hr className="w-full border-b-2 border-solid border-gray-200" />
          </div>

          <div className="w-full p-3">
            <p>Aquí estará un chat... De momento no está</p>
          </div>
        </div>
      </div>
    </div>
  );
};