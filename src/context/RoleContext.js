// Importamos las dependencias necesarias de React
import React, { createContext, useState, useContext } from 'react';

// Creamos un contexto llamado AuthContext
const AuthContext = createContext();

// Creamos un componente proveedor llamado UserProvider
// Este componente envuelve a otros componentes y les proporciona acceso al contexto

export const AuthProvider = ({ children }) => {
  // Definimos el estado del usuario con un valor inicial
  // Aquí el valor inicial es un objeto con una propiedad 'role' configurada como 'client'
  const [user, setUser] = useState({ role: 'client' });

  // Devolvemos el proveedor del contexto con el valor actual del estado del usuario y la función para actualizarlo
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Creamos un hook personalizado para usar el contexto de usuario
// Esto permite a otros componentes acceder fácilmente al contexto del usuario
export const useAuth = () => useContext(AuthContext);
