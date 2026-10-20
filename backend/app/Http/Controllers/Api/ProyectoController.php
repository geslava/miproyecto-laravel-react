<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class ProyectoController extends Controller
{
    public function index(): JsonResponse
    {
        $proyectos = [
            [
                'id' => 1,
                'nombre' => 'Proyecto web',
                'descripcion' => 'Aplicación desarrollada con Laravel y React.',
                'estado' => 'En desarrollo'
            ],
            [
                'id' => 2,
                'nombre' => 'Sistema de gestión',
                'descripcion' => 'Sistema para administrar información.',
                'estado' => 'En desarrollo'
            ]
        ];

        return response()->json($proyectos);
    }

    public function show(int $id): JsonResponse
    {
        return response()->json([
            'id' => $id,
            'mensaje' => 'Consulta de proyecto preparada.',
            'nota' => 'Los datos reales se incorporarán posteriormente.'
        ]);
    }
}
