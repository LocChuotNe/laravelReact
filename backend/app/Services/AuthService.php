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

    public function login(array $data): array
    {
        if (!Auth::attempt($data)) {
            return ['error' => 'Thông tin đăng nhập không đúng', 'status' => 401];
        }

        $user = Auth::user();
        $token = $user->createToken('App')->plainTextToken;

        return ['message' => 'Đăng nhập thành công', 'user' => $user, 'token' => $token, 'status' => 200];
    }
}
