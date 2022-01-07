import React from 'react';
import AssistantChat from '../assistant-chat/AssistantChat';
import NewIncidencesList from './new-incidences-list/NewIncidencesList'

const IncidencesPage = () => {
  return (
    <div className="w-full h-full flex flex-wrap justify-center">

      <div className="w-full text-center py-3">
        <h1 className="text-2xl">Incidencias | Asistente Técnico</h1>
      </div>

      {/* <div className="w-3/12"></div> */}
      <div className="w-7/12">
        <NewIncidencesList />
      </div>

      {/* Chat */}
      <div className="w-3/12">
        <AssistantChat />
      </div>
    </div>
  );
};

export default IncidencesPage;