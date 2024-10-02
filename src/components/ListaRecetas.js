import React, { useContext } from 'react';
import { RecetasContext } from '../context/RecetasContex';
import Receta from './Receta';

const ListaRecetas = () => {
  //extraer la receta
  const { recetas } = useContext(RecetasContext);

  return (
    <div className='row mt-5'>
      {recetas.map((receta) => (
        <Receta key={recetas.inDrink} receta={receta} />
      ))}
    </div>
  );
};

export default ListaRecetas;
