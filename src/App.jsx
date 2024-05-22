import { useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AppRoutes from './routes/AppRoutes';
import { useEffect, useMemo } from "react";

function App() {
  // te da la ruta del parametro en el que te encuentras
  const location = useLocation();

  // para desaparezca la navbar en logIn y SignUP
  const isLogIndOrSignUp = useMemo(() => location.pathname === '/auth/LogIn' || location.pathname === '/auth/SignUp', [location])






  return (
    <>
      {/* esta clase la colocaremos en _base */}
      <div className={isLogIndOrSignUp ? 'nav-bar-hidden' : 'nav-bar-block'}>

        <NavBar />

      </div>

      <AppRoutes />

    </>
  );
}

export default App;