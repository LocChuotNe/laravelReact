<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Services\AuthService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class AdminAuthController extends Controller
{
    protected AuthService $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    public function login(LoginRequest $request): JsonResponse
    {
        $result = $this->authService->login($request->validated());

        if (isset($result['error'])) {
            return response()->json(['error' => $result['error']], $result['status']);
        }

        if (!$result['user']->role || $result['user']->role->name !== 'admin') {
            return response()->json(['error' => 'Không có quyền truy cập'], 403);
        }

        return response()->json([
            'message' => $result['message'],
            'user' => $result['user'],
            'token' => $result['token'],
        ], $result['status']);
    }

    public function profile(): JsonResponse
    {
        return response()->json(Auth::user());
    }

    public function logout(): JsonResponse
    {
        Auth::user()->tokens()->delete();
        return response()->json(['message' => 'Đăng xuất thành công']);
    }
}
