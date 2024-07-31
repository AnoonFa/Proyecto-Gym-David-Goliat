import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../../../components/Header/Header.js';
import Footer from '../../../components/Footer/Footer.js';
import LoginRegistro from './LoginPage';
import AdminPage from '../../../components/adminEmpleadoIndex/adminEmpleadoIndex.js';


function LoginP() {
    return (
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                    <LoginRegistro />
                  <Footer />
                </>
                
              }
            />
            <Route path="/adminEmpleadoIndex/*" element={<AdminPage />} />
          </Routes>
        </div>
    );
  }
  
  export default LoginP;
  