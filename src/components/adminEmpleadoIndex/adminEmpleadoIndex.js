import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/HeaderAdmin";
import Footer from "../Footer/Footer";
import VerProducto from "../VerProductos/VerProductos";
import VerCliente from "../VerCliente/VerCliente";
import RegisterForm from "../../pages/Auth/RegisterPage/Register";
import ClasesForm from "../../Forms/ClasesForm/ClasesForm";
import ProductForm from "../../Forms/ProductForm/ProductForm";
import VerClases from "../VerClases/VerClases";
import PlansAdmin from "../Plans/PlansAdmin";
import PlanDetails from "../../pages/Planes/VerPlan";

function AdminPage() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h2>Bienvenido, Administrador</h2>} />
        <Route
          path="VerCliente"
          element={
            <div style={{ display: "flex" }}>
              <VerCliente />
              <RegisterForm />
            </div>
          }
        />
        <Route path="Productos" element={<VerProducto />} />
        <Route path="resultados" element={<ProductForm />} />
        <Route path="VerClases" element={<VerClases />} />
        <Route path="ClasesForm" element={<ClasesForm />} />
        <Route path="/PlansAdmin/*" element={<PlansAdmin />} />
        <Route path="PlanDetails/:planId" element={<PlanDetails />} />
        {/* Otras rutas aquí */}
      </Routes>
      <Footer />
    </>
  );
}

export default AdminPage;
