<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tareas extends Model
{
    protected $table='users';
    protected $primaryKey='id';
    protected $fillable=['name','email','password'];

    use HasFactory;
}
