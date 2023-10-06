<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tareas;
class TareaControler extends Controller
{
    public function index(){

        $tarea=Tareas::all();
        return response()->json($tarea);
    }
    

    public function store(Request $request)
{
    // Valida los datos de entrada si es necesario
    $validatedData = $request->validate([
        'nombre' => 'required|string|max:255',
        'descripcion' => 'required|string',
        'completado' => 'required|int',
    ]);

    // Crea una nueva tarea
    $tarea = Tareas::create($validatedData);

    return response()->json($tarea, 201); // Devuelve la nueva tarea y un código de respuesta 201 (creado)
}


public function update(Request $request, $id)
{
    // Valida los datos de entrada si es necesario
    $validatedData = $request->validate([
        'nombre' => 'required|string|max:255',
        'descripcion' => 'required|string',
        'completado'=> 'required|int'
    ]);

    // Busca la tarea por su ID
    $tarea = Tareas::find($id);

    if (!$tarea) {
        return response()->json(['message' => 'Tarea no encontrada'], 404);
    }

    // Actualiza los campos de la tarea
    $tarea->update($validatedData);

    return response()->json($tarea);
}


public function destroy($id)
{
    // Busca la tarea por su ID
    $tarea = Tareas::find($id);

    if (!$tarea) {
        return response()->json(['message' => 'Tarea no encontrada'], 404);
    }

    // Elimina la tarea
    $tarea->delete();

    return response()->json(['message' => 'Tarea eliminada']);
}
}
