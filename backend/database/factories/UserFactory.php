<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition(): array
    {
        return [
            'fullname' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'password' => Hash::make('password123'),
            'birthday' => $this->faker->date(),
            'gender' => $this->faker->randomElement(['male', 'female']),
            'phone' => $this->faker->phoneNumber(),
            'address' => $this->faker->address(),
            'districts' => $this->faker->citySuffix(),
            'cityid' => $this->faker->numberBetween(1, 100),
            'isadmin' => false,
            'status' => 'active',
            'avatar_url' => $this->faker->imageUrl(),
            'last_login' => now(),
            'role_id' => 1,
            'agreeToPolicy' => true,
            'remember_token' => Str::random(10),
        ];
    }
}
