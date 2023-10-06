<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tareas extends Model
{
    protected $table='tarea';
    protected $primaryKey='id';
    protected $fillable=['nombre','descripcion','completado'];

    use HasFactory;
}
