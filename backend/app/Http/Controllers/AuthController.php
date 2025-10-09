<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:8|same:confirmed_password',
            'agreeToPolicy' => 'required|accepted',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()], 422);
        }

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'agreeToPolicy' => $request->agreeToPolicy,
        ]);

        $input['first_name'] = $user->first_name;
        $input['last_name'] = $user->last_name;
        $input['email'] = $user->email;
        $input['password'] = $user->password;
        $input['agreeToPolicy'] = $user->agreeToPolicy;
        
        return response()->json($input, 201);
    }

    public function login(Request $request)
    {
        if (!Auth()->attempt($request->only('email', 'password'))) {
            return response()->json(['error' => 'Invalid Createdetails'], 401);
        }

        return response()->json(['message' => 'Login successful'], 200);
    }
}
