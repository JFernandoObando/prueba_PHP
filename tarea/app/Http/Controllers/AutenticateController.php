<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller as BaseController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator; 

 

class AutenticateController extends Controller
{
    // Función para registrar un usuario
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|email',
            'password' => 'required',
            'c_password'=>'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $input=$request->all();
        $input['password']=bcrypt($input['password']);        $user=User::create($input);
        $success['token']=$user->createToken('PRUEBAPHP')->accessToken;
        $success['name']=$user->nombre;
        return response()->json(['message' => 'Usuario registrado con éxito'], 201);
    }
       
       

    // Función para iniciar sesión
   /* public function login(Request $request){
        if(Auth::attempt(['email'=>$request->email,'password'=>$request->password])){
            $user=Auth::user();
            $success['token']=$user->createToken('PRUEBAPHP')->accessToken;
            $success['name']=$user->name;

            return response()->json(['message' => 'Usuario registrado con éxito'], 201);

        }else{
            return response()->json(['message' => 'Usuario error'], 201);

        }
    
    }*/

    public function login(Request $request)
{
    $credentials = [
        'email' => $request->input('email'),
        'password' => $request->input('password'),
    ];

    // Verifica las credenciales usando el método Auth::attempt
    if (Auth::attempt($credentials)) {
        $user = Auth::user();
        $token = $user->createToken('PRUEBAPHP')->accessToken;

        return response()->json(['token' => $token], 200);
    }

    return response()->json(['error' => 'Credenciales no válidas'], 401);
}
    /* {
        $credentials = [
            'correo' => $request->input('correo'),
            'pass' => $request->input('pass'),
        ];

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('MyApp')->accessToken;

            return response()->json(['token' => $token], 200);
        }

        return response()->json(['error' => 'Credenciales no válidas'], 401);
    }*/
}
