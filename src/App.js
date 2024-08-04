  import React from "react";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Header from "./components/Header/Header";
  import Footer from "./components/Footer/Footer";
  import Plans from "./components/Plans/Plans";
  import PlansAdmin from "./components/Plans/PlansAdmin";
  import RegisterForm from "./pages/Auth/RegisterPage/Register";
  import ClasesForm from "./Forms/ClasesForm/ClasesForm";
  import ClientPage from "./components/IndexCliente/IndexCliente";
  import AdminPage from "./components/adminEmpleadoIndex/adminEmpleadoIndex";
  import VerProducto from "./components/VerProductos/VerProductos";
  import ProductForm from "./Forms/ProductForm/ProductForm";
  import Carousel from "./components/Carousel/Carousel";
  import Products from "./components/Products/Products";
  import VerClases from "./components/VerClases/VerClases";
  import PlanDetails from "./pages/Planes/VerPlan";
  import RutinesPage from "./pages/Client/RoutinesPage/RoutinesPage"; 
  import PlanesCliente from "./pages/Client/PlansPage/PlansPage";
  import { AuthProvider } from "./context/RoleContext";
  import LoginP from "./pages/Auth/LoginPage/LoginPage";
  import ProductsPage from "./pages/Client/ProductsPage/ProductsPage";
  import ClasesPage from "./pages/Client/ClassesPage/ClassesPage";

  function App() {
    return (
      <Router>
        <AuthProvider>
        <div>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <Carousel/>
                    <Plans />
                    <Products />
                    <Footer />
                  </>
                }
              />
              <Route path="/ClienteIndex/*" element={<ClientPage />} />
              <Route path="/adminEmpleadoIndex/*" element={<AdminPage />} />
              <Route path="/LoginP/*" element={<LoginP />} />
              <Route path="/Register/*" element={<RegisterForm />} />
              <Route path="/Productos/*" element={<VerProducto />} />
              <Route path="/ProductForm/*" element={<ProductForm />} />
            <Route path="/VerClases/*" element={<VerClases />} />
            <Route path="/ClasesForm/*" element={<ClasesForm />} />
            <Route path="/PlansAdmin/*" element={<PlansAdmin />} />
            <Route path="PlanDetails/:planId" element={<PlanDetails />} />
            <Route path="/ClasesPage/*" element={<ClasesPage />} />
            <Route path="/ProductsPage/*" element={<ProductsPage />} />
            <Route path="/RutinesClient/*" element={<RutinesPage />} />
            <Route path="/PlansPage/*" element={<PlanesCliente />} /> 
            </Routes>
          </div>
        </AuthProvider>
    </Router>
    );
  }

  export default App;
