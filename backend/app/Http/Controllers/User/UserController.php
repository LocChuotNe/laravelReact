<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Services\UserService;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    protected UserService $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function index(): JsonResponse
    {
        return response()->json([
            'message' => 'Danh sách người dùng',
            'data' => $this->userService->getAll(),
        ]);
    }

    public function show($id): JsonResponse
    {
        return response()->json([
            'message' => 'Thông tin người dùng',
            'data' => $this->userService->find($id),
        ]);
    }

    public function store(StoreUserRequest $request): JsonResponse
    {
        return response()->json([
            'message' => 'Tạo người dùng thành công',
            'data' => $this->userService->create($request->validated()),
        ], 201);
    }

    public function update(UpdateUserRequest $request, $id): JsonResponse
    {
        $currentUser = auth()->user();
        $targetUser = $this->userService->find($id);
        $newRoleId = $request->input('role_id');

        if (!$this->userService->canUpdateRole($currentUser, $targetUser, $newRoleId)) {
            return response()->json([
                'message' => 'Bạn không có quyền cập nhật vai trò người dùng này',
            ], 403);
        }

        $updatedUser = $this->userService->update($id, $request->validated());

        return response()->json([
            'message' => 'Cập nhật người dùng thành công',
            'data' => $updatedUser,
        ]);
    }

    public function destroy($id): JsonResponse
    {
        return response()->json($this->userService->delete($id));
    }
}
