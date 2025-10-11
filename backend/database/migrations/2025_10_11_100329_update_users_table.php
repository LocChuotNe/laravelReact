<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Thêm các cột mới
            $table->string('phone', 20)->nullable()->after('email');
            $table->string('address', 500)->nullable()->after('phone');
            $table->enum('status', ['active', 'inactive'])->default('active')->after('address');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Xóa các cột khi rollback
            $table->dropColumn(['phone', 'address', 'status']);
        });
    }
};
