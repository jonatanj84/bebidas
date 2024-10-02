import React, { useContext, useState } from 'react';
import { Categoriascontext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContex';

const Formulario = () => {
  const [busqueda, guardarBusqueda] = useState({
    nombre: '',
    categoria: '',
  });

  const { categorias } = useContext(Categoriascontext);
  const { buscarRecetas, guardarConsultar } =
    useContext(RecetasContext);

  //funcion para leer los contenedos
  const obtenerdatosRecetas = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className='col-12'
      onSubmit={(e) => {
        e.preventDefault();
        buscarRecetas(busqueda);
        guardarConsultar(true);
      }}>
      <fieldset className='text-center'>
        <legend>Buscar Bebidas por Categorias o Ingredientes</legend>
      </fieldset>

      <div className='row mt-4'>
        <div className='col-md-4'>
          <input
            name='nombre'
            className='form-control'
            type='text'
            placeholder='Buscar por categoria'
            onChange={obtenerdatosRecetas}
          />
        </div>

        <div className='col-md-4'>
          <select
            className='form-control'
            name='categoria'
            onChange={obtenerdatosRecetas}>
            <option>--Seleciona Categoria--</option>
            {categorias.map((categoria) => (
              <option
                key={categoria.strCategory}
                value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className='col-md-4'>
          <input
            type='submit'
            className='btn btn-block btn-primary'
            value='Buscar Bebidas'
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
