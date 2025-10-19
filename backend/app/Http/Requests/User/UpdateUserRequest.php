<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
{

     public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $id = $this->route('id');
        return [
            'fullname' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|email|unique:users,email,' . $id,
            'password' => 'nullable|string|min:6',
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:500',
            'status' => 'nullable|in:active,inactive',
            'role_id' => 'nullable|exists:roles,id',

            'role_id' => [
                'nullable',
                'integer',
                Rule::in([1, 2, 3])
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'role_id.in' => 'Vai trò không hợp lệ. Chỉ chấp nhận admin, editor hoặc viewer.',
        ];
    }
}
