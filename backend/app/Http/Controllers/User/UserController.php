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
        return response()->json([
            'message' => 'Cập nhật người dùng thành công',
            'data' => $this->userService->update($id, $request->validated()),
        ]);
    }

    public function destroy($id): JsonResponse
    {
        return response()->json($this->userService->delete($id));
    }
}
