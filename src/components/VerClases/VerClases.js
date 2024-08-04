import React, { useState, useEffect } from 'react';
import './VerClases.css';
import { useAuth } from '../../context/RoleContext'; // Importamos el contexto de autenticación
import { useNavigate } from 'react-router-dom';

const CalendarClases = () => {
  // Estado para manejar los días de la semana
  const [days, setDays] = useState([]);
  
  // Estado para manejar las clases
  const [classes, setClasses] = useState([

  ]);
  
  // Estado para manejar los datos del nuevo formulario de clase
  const [newClass, setNewClass] = useState({
    name: '',
    coach: '',
    time: '',
    day: '',
    timeSlot: '',
  });

  // Estado para controlar la visibilidad del formulario
  const [showForm, setShowForm] = useState(false);

  // useEffect para calcular los días de la semana que se muestran en el calendario
  useEffect(() => {
    const today = new Date(); 
    const daysOfWeek = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
    const updatedDays = [];

    // Calculamos los días de la semana para el día actual
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      updatedDays.push({
        day: daysOfWeek[date.getDay()],
        date: date.getDate()
      });
    }

    setDays(updatedDays);
  }, []);

  const { user } = useAuth(); // Usamos el contexto de autenticación
  const navigate = useNavigate();

  // Maneja el envío del formulario para agregar una nueva clase
  const handleAddClass = (e) => {
    e.preventDefault();
    // Agregamos la nueva clase al estado de las clases
    setClasses([...classes, newClass]);
    // Reseteamos el formulario
    setNewClass({
      name: '',
      coach: '',
      time: '',
      day: '',
      timeSlot: '',
    });
    setShowForm(false); // Ocultar el formulario después de agregar la clase
  };

  // Maneja la eliminación de una clase existente
  const handleDeleteClass = (e, className) => {
    e.stopPropagation();
    // Filtramos las clases para eliminar la clase seleccionada
    setClasses(classes.filter((classItem) => classItem.name !== className));
  };

  // Navega a la página de la clase al hacer clic
  const handleClassClick = (className) => {
    navigate(`/clase/${className}`);
  };

  return (
    <div className="calendar-container">
      <div style={{ overflowX: 'auto' }}>
        <table className="calendar-table">
          <thead className="calendar-header">
            <tr>
              <td></td>
              {days.map((day, index) => (
                <th key={index}>
                  <div className={`containerDayCalendar ${index === 0 ? 'colorPrimCalendar' : 'colorSecuCalendar'}`}>
                    <span>{`${day.day} ${day.date}`}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Mapeamos las franjas horarias */}
            {['05:00 AM', '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM'].map((time, index) => (
              <tr key={index}>
                <th>{time}</th>
                {/* Mapeamos los días de la semana para cada franja horaria */}
                {Array(7).fill(null).map((_, idx) => (
                  <td key={idx} style={{ position: 'relative' }}>
                    {/* Filtramos y mostramos las clases correspondientes a la franja horaria y día */}
                    {classes
                      .filter((classItem) => classItem.timeSlot === time && classItem.day == idx)
                      .map((filteredClass, classIndex) => (
                        <div
                          key={classIndex}
                          className="itemCalendarLesson"
                          onClick={() => handleClassClick(filteredClass.name)}
                        >
                          <h5>{filteredClass.name}</h5>
                          <p className="coachItemLesson">{filteredClass.coach}</p>
                          <p className="typeItemLesson">{filteredClass.time}</p>
                          <button onClick={(e) => handleDeleteClass(e, filteredClass.name)}>Eliminar</button>
                        </div>
                      ))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Mostrar botón de añadir clase para roles que no sean 'client' */}
      {user.role !== 'client' && (
        <div className="Button-Ver-Añadir" style={{ marginTop: '20px' }}>
          <button onClick={() => setShowForm(!showForm)} className="AddButtonLink">
            {showForm ? 'Cancelar' : 'Añadir Clase'}
          </button>
        </div>
      )}
      {/* Formulario para añadir nueva clase */}
      {showForm && (
        <form onSubmit={handleAddClass} className="add-class-form">
          <input
            type="text"
            placeholder="Nombre de la clase"
            value={newClass.name}
            onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Coach"
            value={newClass.coach}
            onChange={(e) => setNewClass({ ...newClass, coach: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Hora"
            value={newClass.time}
            onChange={(e) => setNewClass({ ...newClass, time: e.target.value })}
            required
          />
          <select
            value={newClass.day}
            onChange={(e) => setNewClass({ ...newClass, day: parseInt(e.target.value) })}
            required
          >
            <option value="" disabled>
              Día
            </option>
            <option value="0">Domingo</option>
            <option value="1">Lunes</option>
            <option value="2">Martes</option>
            <option value="3">Miércoles</option>
            <option value="4">Jueves</option>
            <option value="5">Viernes</option>
            <option value="6">Sábado</option>
          </select>
          <select
            value={newClass.timeSlot}
            onChange={(e) => setNewClass({ ...newClass, timeSlot: e.target.value })}
            required
          >
            <option value="" disabled>
              Franja horaria
            </option>
            {['05:00 AM', '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM'].map((timeSlot, index) => (
              <option key={index} value={timeSlot}>{timeSlot}</option>
            ))}
          </select>
          <button type="submit">Agregar Clase</button>
        </form>
      )}
    </div>
  );
};

export default CalendarClases;
