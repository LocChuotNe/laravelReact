<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public function getAll()
    {
        return User::select('id', 'fullname', 'email', 'phone', 'address', 'status', 'created_at', 'updated_at')
            ->orderBy('id', 'desc')
            ->get();
    }

    public function find($id)
    {
        return User::findOrFail($id);
    }

    public function create(array $data)
    {
        $data['password'] = Hash::make($data['password']);
        return User::create($data);
    }

    public function update($id, array $data)
    {
        $user = User::findOrFail($id);

        if (isset($data['password'])) {
            $data['password'] = Hash::make($data['password']);
        }

        $user->update($data);
        return $user;
    }

    public function delete($id)
    {
        $user = User::findOrFail($id);

        if (auth()->id() === $user->id) {
            return ['message' => 'Không thể xóa chính bạn', 'status' => 403];
        }

        $user->delete();
        return ['message' => 'Xóa người dùng thành công', 'status' => 200];
    }
}
