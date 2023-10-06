import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function loginUser(event) {
    event.preventDefault();
    try {
      // Realiza una solicitud POST para iniciar sesión
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      });

      // Maneja la respuesta exitosa, redirige o muestra un mensaje al usuario
      alert("Inicio de sesión exitoso");
      window.location.href = '/'
      // Puedes redirigir al usuario a la página de tareas u otro lugar si es necesario

      // Limpia los campos de entrada
      setEmail("");
      setPassword("");
    } catch (error) {
      alert("Credenciales incorrectas");
    }
  }
  return (
   
    <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
          <div className="card-body p-5 text-center">
            <h3 className="mb-5">Iniciar Sesión</h3>
            <form onSubmit={loginUser}>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label" htmlFor="typeEmailX-2">Email</label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" htmlFor="typePasswordX-2">Password</label>
              </div>
              <button className="btn btn-primary btn-lg btn-block" type="submit">Iniciar Sesión</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  );
  
}

export default Login;
