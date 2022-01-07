import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import NewIncidencesItem from './new-incidences-item/NewIncidencesItem';

const NewIncidencesList = () => {

  let lista = [1, 1, 1];


  return (
    <Fragment>
      {lista.map((item) => (
        <NewIncidencesItem key={item} />
      ))}
    </Fragment>
  );
};

export default NewIncidencesList;