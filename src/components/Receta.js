import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

const Receta = ({ receta }) => {
  //extraer los valores del context
  const { informacion, guardarIdRecetas } = useContext(ModalContext);

  //Muestra y formatea los ingredientes
  const mostrarIngredientes = (informacion) => {
    let ingredientes = [];

    for (let i = 1; i < 16; i++) {
      if (informacion[`strIngredient${i}`]) {
        ingredientes.push(
          <li>
            {informacion[`strIngredient${i}`]}
            {informacion[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredientes;
  };

  return (
    <div className='col-md-4 mb-3'>
      <div className='card'>
        <h2 className='card-header'>{receta.strDrink}</h2>

        <img
          className='card-img-top'
          src={receta.strDrinkThumb}
          alt={`Imagen de ${receta.strDrink}`}
        />
        <div className='card-body'>
          <button
            type='button'
            className='btn btn-block btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#staticBackdrop'
            onClick={() => {
              guardarIdRecetas(receta.idDrink);
            }}>
            Ver Receta
          </button>

          <div
            className='modal fade'
            id='staticBackdrop'
            data-bs-backdrop='static'
            data-bs-keyboard='false'
            tabindex='-1'
            aria-labelledby='staticBackdropLabel'
            aria-hidden='true'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h2
                    className='modal-title'
                    id='staticBackdropLabel'>
                    {informacion.strDrink}
                  </h2>
                  <h3 className='mt-5'>Instrucciones</h3>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'></button>
                </div>
                <div className='modal-body'>
                  {informacion.strInstructions}
                  <img
                    className='img-fluid my-4'
                    src={informacion.strDrinkThumb}
                    alt='imagen'
                  />

                  <h3>Ingredientes y categorias</h3>
                  <ul>{mostrarIngredientes(informacion)}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receta;
