<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ContactoController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $datos = $request->validate([
            'nombre' => 'required|string|max:100',
            'correo' => 'required|email|max:150',
            'asunto' => 'required|string|max:150',
            'mensaje' => 'required|string|max:2000',
        ]);

        return response()->json([
            'exito' => true,
            'mensaje' => 'Los datos del contacto fueron recibidos correctamente.',
            'datos' => $datos
        ], 201);
    }
}
