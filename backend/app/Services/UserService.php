<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public function getAll()
    {
        return User::select(
            'users.id',
            'users.fullname',
            'users.email',
            'users.birthday',
            'users.gender',
            'roles.name as role_name',
            'users.phone',
            'users.address',
            'users.status',
            'users.districts',
            'users.cityid',
            'users.avatar_url')
            ->join('roles', 'users.role_id', '=', 'roles.id')
            ->orderBy('users.id', 'desc')
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
        $user->load('role');
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

    public function canUpdateRole(User $currentUser, User $targetUser, $newRoleId): bool
    {
        $currentRole = $currentUser->role->name;
        $targetRole = $targetUser->role->name;
        $newRole = \App\Models\Role::find($newRoleId)?->name;

        // Editor không được thao tác với tài khoản admin
        if ($currentUser->id === $targetUser->id) {
            return false;
        }

        // Editor không được thao tác với tài khoản admin
        if ($currentRole === 'editor' && $targetRole === 'admin') {
            return false;
        }

        // Editor chỉ được cập nhật viewer → editor
        if ($currentRole === 'editor') {
            return in_array($targetRole, ['viewer', 'editor']) && in_array($newRole, ['viewer', 'editor']);
        }

        // Admin được cập nhật mọi thứ
        if ($currentRole === 'admin') {
            return in_array($targetRole, ['viewer', 'editor', 'admin']) && in_array($newRole, ['viewer', 'editor', 'admin']);
        }

        return false;
}
}
