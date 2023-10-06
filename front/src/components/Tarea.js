import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Tarea() {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [completado, setCompletado] = useState(false); // Cambiado a un valor booleano
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    Load();
  }, []);

  async function Load() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/tarea");
      setTareas(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/tareaC", {
        nombre: nombre,
        descripcion: descripcion,
        completado: completado ? 1 : 0, // Convierte el valor booleano a 1 o 0
      });
      alert("Tarea creada exitosamente");
      setNombre("");
      setDescripcion("");
      setCompletado(false); // Reinicia el estado del checkbox
      Load();
    } catch (error) {
      alert("Error al crear la tarea");
    }
  }

  async function edittareas(tarea) {
    setId(tarea.id);
    setNombre(tarea.nombre);
    setDescripcion(tarea.descripcion);
    setCompletado(tarea.completado === 1); // Convierte 1 a true y 0 a false
  }

  async function Deletetareas(id) {
    try {
      await axios.delete("http://127.0.0.1:8000/api/tareaD/" + id);
      alert("Tarea eliminada exitosamente");
      Load();
    } catch (error) {
      alert("Error al eliminar la tarea");
    }
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.put("http://127.0.0.1:8000/api/tareaU/" + id, {
        nombre: nombre,
        descripcion: descripcion,
        completado: completado ? 1 : 0, // Convierte el valor booleano a 1 o 0
      });
      alert("Tarea actualizada exitosamente");
      setId('');
      setNombre('');
      setDescripcion('');
      setCompletado(false); // Reinicia el estado del checkbox
      Load();
    } catch (error) {
      alert("Error al actualizar la tarea");
    }
  }

  return (
    <div className="container">
      <h1>Detalles de Tareas</h1>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label>Nombre de tarea</label>
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Descripción de tarea</label>
              <input
                type="text"
                className="form-control"
                value={descripcion}
                onChange={(event) => setDescripcion(event.target.value)}
              />
            </div>
            <div className="form-check"> {/* Cambiado a form-check */}
              <input
                type="checkbox"
                className="form-check-input"
                checked={completado}
                onChange={(event) => setCompletado(event.target.checked)}
              />
              <label className="form-check-label">Tarea Completada</label>
            </div>
            <div>
              <button className="btn btn-primary mt-4 custom-button" onClick={save}>
                Registrar
              </button>
              <button className="btn btn-warning mt-4 ml-2" onClick={update}>
                Actualizar
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <table className="table table-striped" align="center">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Estado</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {tareas.map((tarea) => (
                <tr key={tarea.id}>
                  <td>{tarea.id}</td>
                  <td>{tarea.nombre}</td>
                  <td>{tarea.descripcion}</td>
                  <td>{tarea.completado === 1 ? 'Completado' : 'Pendiente'}</td>
                  <td>
                    <button
                      className="btn btn-warning mr-2"
                      onClick={() => edittareas(tarea)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => Deletetareas(tarea.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tarea;
