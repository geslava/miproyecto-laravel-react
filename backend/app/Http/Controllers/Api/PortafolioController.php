<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class PortafolioController extends Controller
{
    public function index(): JsonResponse
    {
        $portafolio = [
            'titulo' => 'Mi portafolio',
            'descripcion' => 'Portafolio de proyectos y aplicaciones web.',
            'tecnologias' => [
                'Laravel',
                'React',
                'PHP',
                'JavaScript',
                'MariaDB'
            ],
            'proyectos_destacados' => [
                [
                    'id' => 1,
                    'nombre' => 'Proyecto web'
                ],
                [
                    'id' => 2,
                    'nombre' => 'Sistema de gestión'
                ]
            ]
        ];

        return response()->json($portafolio);
    }
}
