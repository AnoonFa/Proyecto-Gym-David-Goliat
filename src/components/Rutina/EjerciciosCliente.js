import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RutinaAdminIndex.css'; // Asegúrate de importar el CSS adecuado

const EjerciciosCliente = ({ cliente }) => {
  const navigate = useNavigate();

  const rutinasIniciales = {
    Endomorfo: [
      { nombre: 'Sentadillas', series: 3, repeticiones: 12, descanso: 60 },
      { nombre: 'Flexiones', series: 3, repeticiones: 15, descanso: 45 },
      { nombre: 'Fondos en paralelas', series: 3, repeticiones: 10, descanso: 60 },
      { nombre: 'Remo con mancuerna', series: 3, repeticiones: 12, descanso: 60 },
      { nombre: 'Fondos en paralelas', series: 3, repeticiones: 10, descanso: 60 },
      { nombre: 'Remo con mancuerna a una mano', series: 3, repeticiones: 12, descanso: 60 },
      { nombre: 'Elevaciones laterales con mancuerna', series: 3, repeticiones: 12, descanso: 30 },
      { nombre: 'Sentadillas frontales', series: 3, repeticiones: 12, descanso: 60 },
      { nombre: 'Flexiones con pies elevados', series: 3, repeticiones: 15, descanso: 45 },
      { nombre: 'Fondos en paralelas con peso', series: 3, repeticiones: 10, descanso: 60 },
      { nombre: 'Remo con mancuerna a una mano', series: 3, repeticiones: 12, descanso: 60 }
    ],
    Mesomorfo: [
      { nombre: 'Peso muerto', series: 3, repeticiones: 5, descanso: 90 },
      { nombre: 'Press de banca inclinado', series: 3, repeticiones: 8, descanso: 90 },
      { nombre: 'Dominadas', series: 'Máximo de repeticiones', repeticiones: null, descanso: 120 },
      { nombre: 'Remo con barra', series: 3, repeticiones: 10, descanso: 60 },
      { nombre: 'Peso muerto rumano', series: 3, repeticiones: 8, descanso: 90 },
      { nombre: 'Press de banca declinado', series: 3, repeticiones: 8, descanso: 90 },
      { nombre: 'Dominadas con agarre ancho', series: 'Máximo de repeticiones', repeticiones: null, descanso: 120 },
      { nombre: 'Remo con barra T', series: 3, repeticiones: 10, descanso: 60 },
      { nombre: 'Peso muerto sumo', series: 3, repeticiones: 6, descanso: 90 },
      { nombre: 'Press de banca cerrado', series: 3, repeticiones: 12, descanso: 90 },
      { nombre: 'Dominadas con agarre estrecho', series: 'Máximo de repeticiones', repeticiones: null, descanso: 120 },
      { nombre: 'Remo con barra con agarre invertido', series: 3, repeticiones: 10, descanso: 60 },
      { nombre: 'Peso muerto convencional', series: 3, repeticiones: 5, descanso: 90 },
      { nombre: 'Press de banca inclinado', series: 3, repeticiones: 8, descanso: 90 },
      { nombre: 'Dominadas con peso añadido', series: 'Máximo de repeticiones', repeticiones: null, descanso: 120 },
      { nombre: 'Remo con barra con agarre ancho', series: 3, repeticiones: 10, descanso: 60 }
    ],
    Hectomorfo: [
      { nombre: 'Elevaciones laterales', series: 3, repeticiones: 12, descanso: 30 },
      { nombre: 'Curl de bíceps con barra Z', series: 3, repeticiones: 15, descanso: 30 },
      { nombre: 'Press francés con mancuernas', series: 3, repeticiones: 12, descanso: 30 },
      { nombre: 'Zancadas bulgaras', series: 3, repeticiones: 15, descanso: 30 },
      { nombre: 'Elevaciones laterales con banda elástica', series: 3, repeticiones: 15, descanso: 30 },
      { nombre: 'Curl de bíceps con martillo', series: 3, repeticiones: 12, descanso: 30 },
      { nombre: 'Press francés con barra', series: 3, repeticiones: 12, descanso: 30 },
      { nombre: 'Zancadas con peso', series: 3, repeticiones: 12, descanso: 30 },
      { nombre: 'Elevaciones laterales con mancuerna', series: 3, repeticiones: 12, descanso: 30 },
      { nombre: 'Curl de bíceps con barra W', series: 3, repeticiones: 15, descanso: 30 },
      { nombre: 'Press francés con mancuerna', series: 3, repeticiones: 12, descanso: 30 },
      { nombre: 'Zancadas con salto', series: 3, repeticiones: 10, descanso: 30 }
    ]
  };

  const [rutina, setRutina] = useState(rutinasIniciales[cliente.tipo] || []);

  useEffect(() => {
    setRutina(rutinasIniciales[cliente.tipo] || []);
  }, [cliente]);

  const handleInputChange = (index, field, value) => {
    const newRutina = [...rutina];
    newRutina[index] = { ...newRutina[index], [field]: value };
    setRutina(newRutina);
  };

  const handleActualizar = () => {
    // Redirigir a la página /adminEmpleadoIndex
    navigate('/adminEmpleadoIndex');
  };

  return (
    <div className="ejercicios-cliente">
      <h2>Rutina de {cliente.nombre}</h2>
      <div className="ejercicios-list">
        {rutina.map((ejercicio, index) => (
          <div key={index} className="ejercicio-card">
            <div className="televisor-screen"></div> {/* Cuadrado gris encima del título */}
            <div className="ejercicio-info">
              <h3>{ejercicio.nombre}</h3>
              <div className="input-container">
                <label>Series:</label>
                {ejercicio.series === 'Máximo de repeticiones' ? (
                  <span>{ejercicio.series}</span>
                ) : (
                  <input
                    type="number"
                    value={ejercicio.series}
                    onChange={(e) => handleInputChange(index, 'series', e.target.value)}
                  />
                )}
              </div>
              {ejercicio.series !== 'Máximo de repeticiones' && (
                <div className="input-container">
                  <label>Repeticiones:</label>
                  <input
                    type="number"
                    value={ejercicio.repeticiones || ''}
                    onChange={(e) => handleInputChange(index, 'repeticiones', e.target.value)}
                  />
                </div>
              )}
              <div className="input-container">
                <label>Descanso (s):</label>
                <input
                  type="number"
                  value={ejercicio.descanso}
                  onChange={(e) => handleInputChange(index, 'descanso', e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="actualizar-btn" onClick={handleActualizar}>Actualizar</button>
    </div>
  );
};

export default EjerciciosCliente;

