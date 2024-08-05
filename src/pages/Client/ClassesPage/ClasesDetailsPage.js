import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ClasesDetailsPage.css';
import { ClassesContext } from '../../../context/ClasesContext';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import CalendarClases from '../../../components/VerClases/VerClases';
import clasesImg from '../../../assets/images/iaClases.jpg';

// Componente que recibe lista de todas las clases 
const ClassDetail = () => {
  // Extrae el nombre de la clase del URL
  const { classes } = useContext(ClassesContext);
  const { className } = useParams();

  // Busca la clase en la lista que coincide con el nombre recibido como parámetro
  const classDetail = classes.find((classItem) => classItem.name === className);

  // Si no encuentra la clase, muestra un mensaje de error
  if (!classDetail) {
    return <>
      <Header />
      <div className='no-encontrada'>
        <div className='container'>
          <h2>Clase no encontrada</h2>
          <p>La clase {className} no se encuentra en nuestra base de datos.</p>
        </div>
      </div>
      <CalendarClases />
      <Footer />
    </>
  }

  
  return (
    <>
      <Header />
      
      <div className="class-detail">
      <table><ol>
      <img src={clasesImg} alt="Imagen de clases"  className="class-image" />
     
          </ol>
          <ol>
          <div className="class-info">
            <br />
          <h1>{classDetail.name}</h1>
          <p><strong>Coach:</strong> {classDetail.coach}</p>
          <p><strong>Hora:</strong> {classDetail.time}</p>
          <p><strong>Día:</strong> {['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][classDetail.day]}</p>
          <p><strong>Franja horaria:</strong> {classDetail.timeSlot}</p>
          <p><strong>Descripción:</strong>{classDetail.description}</p>
        </div>
          </ol>
          
        </table>
      </div>
      
      <CalendarClases />
      <Footer />
    </>
  );
};

export default ClassDetail;
