<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class User extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;

    protected $fillable = [
        'fullname',
        'email',
        'password',
        'birthday',
        'gender',
        'phone',
        'address',
        'districts',
        'cityid',
        'isadmin',
        'status',
        'avatar_url',
        'last_login',
        'role_id',
        'agreeToPolicy',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'isadmin' => 'boolean',
        'last_login' => 'datetime',
    ];

    public function role()
    {
        return $this->belongsTo(Role::class);
    }
}
