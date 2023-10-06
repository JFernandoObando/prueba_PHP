import Tarea from './components/Tarea';
import Login from './components/Login';
import Registro from './components/Registro';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';



function App() {
  const [route, setRoute] = useState(''); // Estado para controlar la ruta

  // Función para cambiar la ruta
  const navigate = (newRoute) => {
    setRoute(newRoute);
  };

// Renderizar el componente de acuerdo a la ruta
const renderComponent = () => {
  switch (route) {
    case 'register':
      return <Registro />;
    case 'login':
      return <Login />;
    default:
      return <Tarea />;
  }
};

return (
  <div>
    {/* Navbar de Bootstrap */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Mi App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="btn btn-link nav-link" onClick={() => navigate('register')}>Registro</button>
          </li>
          <li className="nav-item">
            <button className="btn btn-link nav-link" onClick={() => navigate('login')}>Login</button>
          </li>
          <li className="nav-item">
            <button className="btn btn-link nav-link" onClick={() => navigate('')}>Inicio</button>
          </li>
        </ul>
      </div>
    </nav>

    <div className="container mt-4">
      {/* Renderizar el componente */}
      {renderComponent()}
    </div>
  </div>
);
}

export default App;