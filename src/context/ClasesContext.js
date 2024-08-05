import React, { createContext, useState, useEffect } from 'react';

// Creamos el contexto de clases
export const ClassesContext = createContext();

// Proveedor de contexto para las clases
export const ClassesProvider = ({ children }) => {
  const [classes, setClasses] = useState([]);

  // Cargar clases desde localStorage cuando el componente se monta
  useEffect(() => {
    const storedClasses = localStorage.getItem('classes');
    if (storedClasses) {
      setClasses(JSON.parse(storedClasses));
    }
  }, []);

  // Guardar clases en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem('classes', JSON.stringify(classes));
  }, [classes]);

  return (
    <ClassesContext.Provider value={{ classes, setClasses }}>
      {children}
    </ClassesContext.Provider>
  );
};
