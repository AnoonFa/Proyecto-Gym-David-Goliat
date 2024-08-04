import React from 'react';
import { useParams } from 'react-router-dom';

// Componente que recibe lista de todas las clases 
const ClassDetail = ({ classes }) => {
  // 
  const { className } = useParams();
  // Busca la clase en la lista que coincide con el nombre recibido como parámetro
  const selectedClass = classes.find((classItem) => classItem.name === className);
  // Busca la clase en la lista que coincide con el nombre recib

  // Si no encuentra la clase, muestra un mensaje de error
  if (!selectedClass) {
    return <div>Clase no encontrada</div>;
  }

  return (
    <div className="class-detail-container">
      <h2>{selectedClass.name}</h2>
      <p>Coach: {selectedClass.coach}</p>
      <p>Hora: {selectedClass.time}</p>
      <p>Día: {['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][selectedClass.day]}</p>
      <p>Franja horaria: {selectedClass.timeSlot}</p>
    </div>
  );
};

export default ClassDetail;
