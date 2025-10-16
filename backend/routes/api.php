<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\UserAuthController;
use App\Http\Controllers\Auth\AdminAuthController;
use App\Http\Controllers\User\UserController;

Route::prefix('user')->group(function () {
    Route::post('register', [UserAuthController::class, 'register']);
    Route::post('login', [UserAuthController::class, 'login']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('profile', [UserAuthController::class, 'profile']);
        Route::post('logout', [UserAuthController::class, 'logout']);
    });
});

Route::prefix('admin')->group(function () {
    Route::post('login', [AdminAuthController::class, 'login']);

    Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
        Route::get('/me', [AdminAuthController::class, 'me']);
        Route::get('dashboard', [AdminAuthController::class, 'profile']);
        Route::post('logout', [AdminAuthController::class, 'logout']);

        // Quản lý người dùng
        Route::prefix('users')->group(function () {
            Route::get('/', [UserController::class, 'index']);
            Route::get('{id}', [UserController::class, 'show']);
            Route::post('/', [UserController::class, 'store']);
            Route::put('{id}', [UserController::class, 'update']);
            Route::delete('{id}', [UserController::class, 'destroy']);
        });
    });
});
