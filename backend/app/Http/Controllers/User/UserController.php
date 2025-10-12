<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index(Request $request)
    {
        try {
            $users = User::select(
                'id',
                'first_name',
                'last_name',
                'email',
                'phone',
                'address',
                'status',
                'created_at',
                'updated_at'
            )
                ->orderBy('id', 'desc')
                ->get();

            return response()->json([
                'message' => 'Danh sách người dùng',
                'data' => $users,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Không thể lấy danh sách người dùng',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            $user = User::findOrFail($id);

            return response()->json([
                'message' => 'Thông tin người dùng',
                'data' => $user,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Không tìm thấy người dùng',
                'error' => $e->getMessage(),
            ], 404);
        }
    }

    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'first_name' => 'required|string|max:255',
                'last_name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|string|min:6',
                'phone' => 'nullable|string|max:20',
                'address' => 'nullable|string|max:500',
                'status' => 'nullable|in:active,inactive',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Dữ liệu không hợp lệ',
                    'errors' => $validator->errors(),
                ], 422);
            }

            $user = User::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'phone' => $request->phone,
                'address' => $request->address,
                'status' => $request->status ?? 'active',
            ]);

            return response()->json([
                'message' => 'Tạo người dùng thành công',
                'data' => $user,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Không thể tạo người dùng',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $user = User::findOrFail($id);

            $validator = Validator::make($request->all(), [
                'first_name' => 'sometimes|required|string|max:255',
                'last_name' => 'sometimes|required|string|max:255',
                'email' => 'sometimes|required|email|unique:users,email,' . $id,
                'password' => 'nullable|string|min:6',
                'phone' => 'nullable|string|max:20',
                'address' => 'nullable|string|max:500',
                'status' => 'nullable|in:active,inactive',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Dữ liệu không hợp lệ',
                    'errors' => $validator->errors(),
                ], 422);
            }

            if ($request->has('first_name')) $user->first_name = $request->first_name;
            if ($request->has('last_name')) $user->last_name = $request->last_name;
            if ($request->has('email')) $user->email = $request->email;
            if ($request->has('password')) $user->password = Hash::make($request->password);
            if ($request->has('phone')) $user->phone = $request->phone;
            if ($request->has('address')) $user->address = $request->address;
            if ($request->has('status')) $user->status = $request->status;

            $user->save();

            return response()->json([
                'message' => 'Cập nhật người dùng thành công',
                'data' => $user,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Không thể cập nhật người dùng',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $user = User::findOrFail($id);

            if (auth()->id() === $user->id) {
                return response()->json([
                    'message' => 'Không thể xóa tài khoản của chính bạn',
                ], 403);
            }

            $user->delete();

            return response()->json([
                'message' => 'Xóa người dùng thành công',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Không thể xóa người dùng',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
