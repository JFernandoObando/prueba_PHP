import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [c_password, setC_Password] = useState('');
  const [error, setError] = useState('');

  async function registerUser(event) {
    event.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/register", {
        name: name,
        email: email,
        password: password,
        c_password:c_password
      });
    
      alert("Usuario creado exitosamente");
      setName("");
      setEmail("");
      setPassword(""); 
      setC_Password(""); 
     
    } catch (error) {
      alert("Error al crear la tarea");
    }
  }



  return (
   
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Registro</h3>
                <form onSubmit={registerUser}>
                  <input
                    type="text"
                    className="form-control form-control-lg mb-4"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    className="form-control form-control-lg mb-4"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    className="form-control form-control-lg mb-4"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    className="form-control form-control-lg mb-4"
                    placeholder="Confirmar Contraseña"
                    value={c_password}
                    onChange={(e) => setC_Password(e.target.value)}
                  />
                  <button className="btn btn-primary btn-lg btn-block" type="submit">Registrarse</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default Register;
