<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;


class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::insert([
            ['name' => 'admin', 'description' => 'Quản trị hệ thống'],
            ['name' => 'editor', 'description' => 'Biên tập nội dung'],
            ['name' => 'viewer', 'description' => 'Người xem'],
        ]);
    }
}
