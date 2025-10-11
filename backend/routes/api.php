<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\UserController;

// 🔐 Các route public
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// 🔒 Các route yêu cầu đăng nhập bằng token Sanctum
Route::middleware('auth:sanctum')->group(function () {

    // Lấy thông tin user hiện tại
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Danh sách và thao tác người dùng
    Route::get('/users', [UserController::class, 'index']);
    Route::get('/users/{id}', [UserController::class, 'show']);
    Route::post('/users', [UserController::class, 'store']);
    Route::put('/users/{id}', [UserController::class, 'update']);
    Route::delete('/users/{id}', [UserController::class, 'destroy']);

    // Profile cá nhân
    Route::post('/profile', [AuthController::class, 'profile']);
});
