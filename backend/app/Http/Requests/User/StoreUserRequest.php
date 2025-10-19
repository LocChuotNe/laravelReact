<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'fullname' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6',
            'phone' => 'nullable|string|max:20',
            'role_id' => 'nullable|integer|in:1,2,3',
            'address' => 'nullable|string|max:500',
            'status' => 'nullable|in:active,inactive',
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
