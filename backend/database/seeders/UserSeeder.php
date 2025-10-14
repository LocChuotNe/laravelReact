<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
         User::create([
            'fullname' => 'Phạm Lộc',
            'email' => 'locdev.admin@gmail.com',
            'password' => Hash::make('11111111'),
            'address' => 'Xã Cát Phong, Phường Nam Đinh, Tỉnh Ninh Bình',
            'phone' => '0816201699',
            'gender' => 'Nam',
            'birthday' => '2000-08-18',
            'status' => 'active',
            'cityid' => 1,
            'districts' => 1,
            'wardid' => 1,
            'role_id' => 1,
            'isadmin' => true,
            'agreeToPolicy' => true,
        ]);
    }
}
