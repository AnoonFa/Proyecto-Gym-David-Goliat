import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../../../components/Header/Header.js';
import Footer from '../../../components/Footer/Footer.js';
import LoginRegistro from './LoginPage';
import ClientPage from '../../Client/IndexCliente/ClienteIndex';


function Login() {
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

           
          </Routes>
        </div>

    );
  }
  
  export default Login;
  