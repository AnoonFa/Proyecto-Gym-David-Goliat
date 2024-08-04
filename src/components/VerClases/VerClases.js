import React, { useState, useEffect } from 'react';
import './VerClases.css';
import { useAuth } from '../../context/RoleContext'; // Importamos el contexto de autenticación
import { useNavigate } from'react-router-dom';
import Button from '../Button/Button';

const Calendar = () => {
  const [days, setDays] = useState([]);
  // Definimos los dias y que se guien por el estado de la calendario

  useEffect(() => {
    // Obtenemos el día actual y calculamos los días de la semana que se muestran en el calendario
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

  const { user, setUser } = useAuth(); // Usamos el contexto de autenticación
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/');
  };

  const handleDeleteClick = () => {
    navigate('/');
  };


  const handleClassClick = (className) => {
    
    
  };


  const handleBuscarClick = (className) => {
    navigate('/ProductForm'); // Redirige a la página de resultados
  };
  return (
    <div className="MuiGrid-root pb-2 MuiGrid-item MuiGrid-grid-xs-12">
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
            {['05:00 AM', '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM'].map((time, index) => (
              <tr key={index}>
                <th>{time}</th>
                {Array(7).fill(null).map((_, idx) => (
                  <td key={idx} style={{ position: 'relative' }}>
                    {/* Replace with dynamic class information */}
                    {time === '06:00 AM' && idx === 5 && (
                      <div className="itemCalendarLesson" onClick={() => handleClassClick('CYCLINGTECH')}>
                        <h5>CYCLINGTECH</h5>
                        <p className="coachItemLesson">ANDERSON BADILLO PINILLA</p>
                        <p className="typeItemLesson">06:30 AM - 07:15 AM</p>
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

          <div className="Button-Ver-Añadir">
        {/* Botón de login/logout basado en si el usuario está autenticado o no */}

          {user.role !== 'admin' && <Button variant= "add" onClick={handleAddClick} className="AddButtonLink">Añadir Clase</Button> }
          {user.role !== 'employee' && <Button variant= "add" onClick={handleAddClick} className="AddButtonLink">Añadir Clase</Button> }

          {user.role !== 'admin' && <Button variant= "delete" onClick={handleDeleteClick} className="DeleteButtonLink">Eliminar Clase</Button> }
          {user.role !== 'employee' && <Button variant= "delete" onClick={handleDeleteClick} className="DeleteButtonLink">Eliminar Clase</Button> }
 
      </div>

        </table>
      </div>
    </div>
  );
};

export default Calendar;
