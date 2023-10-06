<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\AutenticateController;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/tarea', [App\Http\Controllers\TareaControler::class,'index']);

Route::post('/tareaC', [App\Http\Controllers\TareaControler::class, 'store']);

Route::put('/tareaU/{id}', [App\Http\Controllers\TareaControler::class, 'update']);

Route::delete('/tareaD/{id}', [App\Http\Controllers\TareaControler::class, 'destroy']);

Route::post('/register', [App\Http\Controllers\AutenticateController::class, 'register']);
Route::post('/login', [App\Http\Controllers\AutenticateController::class, 'login']);



