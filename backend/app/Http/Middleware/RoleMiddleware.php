<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$roles): Response
    {
        $user = $request->user();

        // Nếu user chưa đăng nhập hoặc không có role
        if (!$user || !$user->role || !in_array($user->role->name, $roles)) {
            return response()->json(['error' => 'Không có quyền truy cập'], 403);
        }

        // Nếu role là quan hệ Eloquent (object)
        // if (is_object($user->role) && isset($user->role->name)) {
        //     if ($user->role->name !== $roles) {
        //         return response()->json(['error' => 'Không có quyền truy cập'], 403);
        //     }
        // }

        // Nếu role là string (ví dụ: 'admin', 'user')
        // if (is_string($user->role) && $user->role !== $roles) {
        //     return response()->json(['error' => 'Không có quyền truy cập'], 403);
        // }

        return $next($request);
    }
}
