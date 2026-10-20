<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProyectoController;
use App\Http\Controllers\Api\PortafolioController;
use App\Http\Controllers\Api\ContactoController;

// Rutas para proyectos
Route::get('/proyectos', [ProyectoController::class, 'index']);
Route::get('/proyectos/{id}', [ProyectoController::class, 'show']);

// Ruta para el portafolio
Route::get('/portafolio', [PortafolioController::class, 'index']);

// Ruta para recibir mensajes del formulario de contacto
Route::post('/contacto', [ContactoController::class, 'store']);
