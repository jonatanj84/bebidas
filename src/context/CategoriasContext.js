import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//Crear el context
export const Categoriascontext = createContext();

//Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {
  //crear state
  const [categorias, guardarCategorias] = useState([]);

  //Ejecutar el llamdo la api
  useEffect(() => {
    const obtenerCategorias = async () => {
      const url =
        'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const categorias = await axios.get(url);
      guardarCategorias(categorias.data.drinks);
    };
    obtenerCategorias();
  }, []);

  return (
    <Categoriascontext.Provider value={{ categorias }}>
      {props.children}
    </Categoriascontext.Provider>
  );
};

export default CategoriasProvider;
