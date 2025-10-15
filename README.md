Laravel + ReactJS Project Setup Guide
 Công nghệ sử dụng

Backend: Laravel 12 (PHP 8.3)

Frontend: ReactJS

Node.js: v22.20.0

npm: v2.8.9

Database: MySQL 8.2

Quản lý database: PHPMyAdmin
  Các bước cài đặt
Bước 1: Cấu hình PHPMyAdmin

Mở file config.inc.php của PHPMyAdmin.

Tìm dòng cấu hình Authentication Type và sửa như sau:

/* Authentication type */
$cfg['Servers'][$i]['auth_type'] = 'cookie';

/* Server parameters */
$cfg['Servers'][$i]['host'] = 'MySQL-8.2';
$cfg['Servers'][$i]['compress'] = false;
$cfg['Servers'][$i]['AllowNoPassword'] = true;

Bước 2: Clone dự án từ Git
git clone [URL_PROJECT]
cd [FOLDER_PROJECT]

Bước 3: Cài đặt thư viện frontend
npm install


Lưu ý: Đảm bảo bạn đã cài đúng version Node.js v22.20.0 và npm v2.8.9.

Bước 4: Cấu hình biến môi trường

Tìm file .env.example trong thư mục gốc Laravel.

Copy và đổi tên thành .env (cùng cấp với file example):

cp .env.example .env


Chỉnh sửa thông tin database nếu cần:

DB_DATABASE=laravel_react_dev

Bước 5: Tạo database

Truy cập vào PHPMyAdmin (MySQL 8.2).

Tạo mới một database với tên laravel_react_dev.

Đặt charset là utf8mb4 và collation là utf8mb4_unicode_ci.

Bước 6: Import dữ liệu vào database

Import file .sql hoặc dữ liệu mẫu đã có sẵn vào database laravel_react_dev.

Bước 7: Giải quyết thiếu file do .gitignore

Một số file như CSS có thể bị .gitignore loại bỏ khỏi repo.

Nếu gặp lỗi thiếu CSS:

Giải nén thư mục src nếu có file nén.

Đảm bảo thư mục CSS nằm tại:
frontend/src/assets/css

Bước 8: Khởi chạy ứng dụng
Backend (Laravel)
php artisan serve

Frontend (ReactJS)
npm run dev
