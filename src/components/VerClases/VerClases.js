import React from "react";
import "./VerClases.css";
import { useNavigate } from "react-router-dom";

const VerClases = () => {
  const navigate = useNavigate();

  const handleRegisClick = () => {
    navigate("/ClasesForm"); // Redirige a la página de resultados
  };

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const times = [
    "8:00",
    "10:00",
    "11:00",
    "12:00",
    "2:00",
    "4:00",
    "7:00",
    "9:00",
  ];
  const classes = {
    Sunday: ["clase", "", "", "", "", "", "", ""],
    Monday: ["", "", "clase", "clase", "", "", "clase", ""],
    Tuesday: ["", "", "", "clase", "", "", "", "clase"],
    Wednesday: ["", "", "", "", "", "", "", "clase"],
    Thursday: ["", "", "", "", "clase", "", "", "clase"],
    Friday: ["clase", "", "", "clase", "", "", "", ""],
    Saturday: ["", "", "", "", "", "", "clase", ""],
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h1>Calendario de Clases</h1>
        <div className="calendar-month">Enero 2025</div>
      </div>
      <table className="calendar">
        <thead>
          <tr>
            <th>Hora</th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time, timeIndex) => (
            <tr key={time}>
              <td>{time}</td>
              {days.map((day) => (
                <td key={day}>{classes[day][timeIndex]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="buttons">
        <button className="ingresar-clase">Ingresar Clase</button>
        <button className="agregar-clase" onClick={handleRegisClick}>
          Agregar Clase
        </button>
      </div>
    </div>
  );
};

export default VerClases;

import React from "react";
import "./VerClases.css";
import { useNavigate } from "react-router-dom";

const VerClases = () => {
  const navigate = useNavigate();

  const handleRegisClick = () => {
    navigate("/ClasesForm"); // Redirige a la página de resultados
  };

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const times = [
    "8:00",
    "10:00",
    "11:00",
    "12:00",
    "2:00",
    "4:00",
    "7:00",
    "9:00",
  ];
  const classes = {
    Sunday: ["clase", "", "", "", "", "", "", ""],
    Monday: ["", "", "clase", "clase", "", "", "clase", ""],
    Tuesday: ["", "", "", "clase", "", "", "", "clase"],
    Wednesday: ["", "", "", "", "", "", "", "clase"],
    Thursday: ["", "", "", "", "clase", "", "", "clase"],
    Friday: ["clase", "", "", "clase", "", "", "", ""],
    Saturday: ["", "", "", "", "", "", "clase", ""],
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h1>Calendario de Clases</h1>
        <div className="calendar-month">Enero 2025</div>
      </div>
      <table className="calendar">
        <thead>
          <tr>
            <th>Hora</th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time, timeIndex) => (
            <tr key={time}>
              <td>{time}</td>
              {days.map((day) => (
                <td key={day}>{classes[day][timeIndex]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="buttons">
        <button className="ingresar-clase">Ingresar Clase</button>
        <button className="agregar-clase" onClick={handleRegisClick}>
          Agregar Clase
        </button>
      </div>
    </div>
  );
};

export default VerClases;
