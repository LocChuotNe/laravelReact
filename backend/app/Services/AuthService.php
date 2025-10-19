<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthService
{
    public function register(array $data): array
    {
        $data['password'] = Hash::make($data['password']);
        $user = User::create($data);
        $token = $user->createToken('App')->plainTextToken;

        return ['user' => $user, 'token' => $token];
    }

    public function login(array $credentials): array
    {
        if (!Auth::attempt($credentials)) {
            return [
                'error' => 'Sai tài khoản hoặc mật khẩu',
                'status' => 401
            ];
        }

        $user = Auth::user();

        if (!$user->role || !in_array($user->role->name, ['admin', 'editor'])) {
            return [
                'error' => 'Không có quyền truy cập',
                'status' => 403
            ];
        }

        $token = $user->createToken('AdminToken')->plainTextToken;

        return [
            'message' => 'Đăng nhập thành công',
            'user' => $user,
            'token' => $token,
            'status' => 200
        ];
    }

}
