import React from 'react';
import NewIncidencesItem from './new-incidences-item/NewIncidencesItem';

const NewIncidencesList = () => {

  let lista = [1, 1, 1];


  return (
    <div className="w-7/12">
      {lista.map((item) => (
        <NewIncidencesItem key={item} />
      ))}
    </div>
  );
};

export default NewIncidencesList;