import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

//Crear el context
export const ModalContext = createContext();

const ModalProvider = (props) => {
  //state del provider
  const [idrecetas, guardarIdRecetas] = useState(null);
  const [informacion, guardarReceta] = useState({});

  //una vez que tenemos la receta, llamar la api
  useEffect(() => {
    const obtenerReceta = async () => {
      if (!idrecetas) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecetas}`;

      const resultado = await axios.get(url);
      guardarReceta(resultado.data.drinks[0]);
    };
    obtenerReceta();
  }, [idrecetas]);

  return (
    <ModalContext.Provider
      value={{
        informacion,
        guardarIdRecetas,
        guardarReceta,
      }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
