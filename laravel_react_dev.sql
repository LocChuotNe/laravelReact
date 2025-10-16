-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: MySQL-8.2
-- Thời gian đã tạo: Th10 15, 2025 lúc 11:56 PM
-- Phiên bản máy phục vụ: 8.2.0
-- Phiên bản PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `laravel_react_dev`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_roles_table', 1),
(2, '0001_01_01_000000_create_users_table', 1),
(3, '0001_01_01_000001_create_cache_table', 1),
(4, '0001_01_01_000002_create_jobs_table', 1),
(5, '2025_10_09_100414_add_fields_to_users_table', 1),
(6, '2025_10_10_023102_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'App', 'e0189e8928b4465a3eb63e1c7376640ead4797075983da97ab455565623934ac', '[\"*\"]', NULL, NULL, '2025-10-12 23:48:25', '2025-10-12 23:48:25'),
(2, 'App\\Models\\User', 1, 'App', '92e95c895b04f61497fb151a288d1d3205a013f980e6f92bd0189ccad3cd6ad4', '[\"*\"]', '2025-10-13 00:14:13', NULL, '2025-10-13 00:06:01', '2025-10-13 00:14:13'),
(3, 'App\\Models\\User', 1, 'App', '61edb8ee0db43c472bf06ea24508f1267ca5ba4f71468d89bbbc60e3b116063c', '[\"*\"]', '2025-10-13 00:14:37', NULL, '2025-10-13 00:14:00', '2025-10-13 00:14:37'),
(4, 'App\\Models\\User', 2, 'App', 'ef5f613b7d2454b47dbdd58739c08af1ea27dfe9f77909e07bde4004fa8be745', '[\"*\"]', NULL, NULL, '2025-10-13 00:42:07', '2025-10-13 00:42:07'),
(5, 'App\\Models\\User', 3, 'App', 'c687feb6d3e74145fd370ce1c8678678592d967389ac8496839b82c38ca46442', '[\"*\"]', NULL, NULL, '2025-10-13 00:47:35', '2025-10-13 00:47:35'),
(6, 'App\\Models\\User', 4, 'App', '3b77aa93c97fa551e3ed0a6690047c0c6da9a0c67dfb5abca8f34c2a4ad9f81a', '[\"*\"]', NULL, NULL, '2025-10-13 00:47:47', '2025-10-13 00:47:47'),
(7, 'App\\Models\\User', 5, 'App', 'bab6325631c5905f8c90684c6146f68d2486fea6a0535f9b8509cb41dfe6ef0c', '[\"*\"]', NULL, NULL, '2025-10-13 00:50:32', '2025-10-13 00:50:32'),
(8, 'App\\Models\\User', 5, 'App', '743ecb9341f522060867fa87a2886ce70a941cac83f67e4d966e76a14b71bd1c', '[\"*\"]', NULL, NULL, '2025-10-13 00:52:28', '2025-10-13 00:52:28'),
(9, 'App\\Models\\User', 1, 'App', '06199560d142813dd5229bedbfb9cfecdb6741d08d2365e96e721d562ecdfb19', '[\"*\"]', NULL, NULL, '2025-10-13 00:56:15', '2025-10-13 00:56:15'),
(10, 'App\\Models\\User', 5, 'App', 'e1b034b7fe4eba267e7132f5ae4ad91f5fb30f851a4bfa22eb233877c736b804', '[\"*\"]', NULL, NULL, '2025-10-13 00:56:31', '2025-10-13 00:56:31'),
(11, 'App\\Models\\User', 5, 'App', '07c42a72c2f90376dff1c29345ee1c1e07c73d949ba7c84bb647a5836288d27e', '[\"*\"]', NULL, NULL, '2025-10-13 00:57:05', '2025-10-13 00:57:05'),
(12, 'App\\Models\\User', 5, 'App', '60ab60f3e417c77a830f534b7e22a8cda66b83959175d8bcbb3191aa116391e7', '[\"*\"]', NULL, NULL, '2025-10-13 00:58:53', '2025-10-13 00:58:53'),
(13, 'App\\Models\\User', 5, 'App', 'b15d88ac4936793f190f437d8edec7f96a50aaef2d0af449c65c0a35aef70ff1', '[\"*\"]', NULL, NULL, '2025-10-13 00:59:18', '2025-10-13 00:59:18'),
(14, 'App\\Models\\User', 5, 'App', '68867c8ddacff0db4e158db8aa3f476fac976f7f8d0b53c89f28e1265683de48', '[\"*\"]', NULL, NULL, '2025-10-13 00:59:26', '2025-10-13 00:59:26'),
(15, 'App\\Models\\User', 5, 'App', 'b9f666306240288111f05e0cb651ac6928dc0dd72672fda85ab25e974cdff496', '[\"*\"]', '2025-10-13 01:13:47', NULL, '2025-10-13 01:00:43', '2025-10-13 01:13:47'),
(16, 'App\\Models\\User', 5, 'App', '80fd6dc6e6f98326f3ddcc43f84a044bb0223223745a4ecf2177bb730c24634c', '[\"*\"]', NULL, NULL, '2025-10-13 01:03:01', '2025-10-13 01:03:01'),
(17, 'App\\Models\\User', 5, 'App', 'b0583918e3486c8696fb4648e44ec3ae48ef2286d7a8b6cec07a01a80347f06a', '[\"*\"]', NULL, NULL, '2025-10-13 01:03:18', '2025-10-13 01:03:18'),
(18, 'App\\Models\\User', 5, 'App', '8213d9d61bd51878dfde1eae31ed46a02fe8bfb7813a3e3cf7916ae5e0d4edf4', '[\"*\"]', NULL, NULL, '2025-10-13 01:06:22', '2025-10-13 01:06:22'),
(19, 'App\\Models\\User', 5, 'App', '9addf8f42bf0cb5e46a86dc8401e3492ff7ad14857c219701f3555222f8538f4', '[\"*\"]', NULL, NULL, '2025-10-13 01:06:48', '2025-10-13 01:06:48'),
(20, 'App\\Models\\User', 1, 'App', 'f1defe52c6b83102effec8fcfc2e9131979e5efc75bfed1650a11a41e0da9156', '[\"*\"]', '2025-10-15 01:30:06', NULL, '2025-10-13 01:09:39', '2025-10-15 01:30:06'),
(21, 'App\\Models\\User', 5, 'App', '1f038c4ce462599db8e70783b80497258fc657400aa8e3ac39723a134971a43e', '[\"*\"]', NULL, NULL, '2025-10-13 01:10:36', '2025-10-13 01:10:36'),
(22, 'App\\Models\\User', 1, 'App', '2425859616f5ea94ca6575bdf423f4967dcccb65a99b6ae964852c436a4562cc', '[\"*\"]', '2025-10-13 01:18:40', NULL, '2025-10-13 01:10:58', '2025-10-13 01:18:40'),
(23, 'App\\Models\\User', 1, 'App', '5a825035fb4c36bd14c8d4e82b80b7b7a500f45b29d15bc081e27e7d238ab920', '[\"*\"]', '2025-10-14 19:22:49', NULL, '2025-10-13 02:03:28', '2025-10-14 19:22:49'),
(24, 'App\\Models\\User', 5, 'App', '749bef4abdb9083276ac080cc1d43bbb52ae06c6e146be969c9e8fc77e708915', '[\"*\"]', NULL, NULL, '2025-10-13 02:18:56', '2025-10-13 02:18:56'),
(25, 'App\\Models\\User', 1, 'App', '607dbc60c9b92f292b6e73bcae5a84b41ec4287983dd5593bf558ece805d1ed5', '[\"*\"]', NULL, NULL, '2025-10-13 02:19:33', '2025-10-13 02:19:33'),
(26, 'App\\Models\\User', 5, 'App', '2a4c55ecc47c76b82b016638f452937ef9b1a466d4c58eb3034e3b697d255d9e', '[\"*\"]', NULL, NULL, '2025-10-13 02:25:28', '2025-10-13 02:25:28'),
(27, 'App\\Models\\User', 6, 'App', '12f2ea77b96716a752f635d0db44344d182f3a0b5009380d1315b4e1a41ef282', '[\"*\"]', NULL, NULL, '2025-10-13 02:25:58', '2025-10-13 02:25:58'),
(28, 'App\\Models\\User', 6, 'App', 'ec1ec2a376f83cf29e65ab4d8fc0e9ebecc5602ea769a62a605d8b1cfd4e686c', '[\"*\"]', NULL, NULL, '2025-10-13 02:27:40', '2025-10-13 02:27:40'),
(29, 'App\\Models\\User', 6, 'App', 'a31f94f695641e66cf61ef936366388c3e724e9cbe368e028dbb509885cddd38', '[\"*\"]', NULL, NULL, '2025-10-13 02:45:30', '2025-10-13 02:45:30'),
(30, 'App\\Models\\User', 1, 'App', '61ae4c76956d59989ab8fffccfd52f9c8465faea8dea174a42eaba7142331e98', '[\"*\"]', NULL, NULL, '2025-10-13 02:45:41', '2025-10-13 02:45:41'),
(31, 'App\\Models\\User', 1, 'App', '891486930c1c2749d017f13c547a93be498dd1051f77a407dc49e5ba05fd1fad', '[\"*\"]', NULL, NULL, '2025-10-13 19:49:25', '2025-10-13 19:49:25'),
(32, 'App\\Models\\User', 7, 'App', '7e5110e7c465d99a3ac0ca012b382f5a3ae568106dee94cffc50f15895a8ecd2', '[\"*\"]', NULL, NULL, '2025-10-13 23:53:22', '2025-10-13 23:53:22'),
(33, 'App\\Models\\User', 7, 'App', '5178f474711102aa8e4b1813700789ef17b1946f61d40ccbd612c84ba4cc73d4', '[\"*\"]', NULL, NULL, '2025-10-13 23:53:55', '2025-10-13 23:53:55'),
(34, 'App\\Models\\User', 7, 'App', 'b9a54ae2ec74bad5cc914c8bf80e37fae9c1ec7c897d545b1db5f5e674a90926', '[\"*\"]', NULL, NULL, '2025-10-13 23:59:56', '2025-10-13 23:59:56'),
(35, 'App\\Models\\User', 7, 'App', '5d6a05fb2f689111a88caec5858f660d50df7e45242389b8b7f1c0e33aadba1a', '[\"*\"]', NULL, NULL, '2025-10-14 00:17:52', '2025-10-14 00:17:52'),
(36, 'App\\Models\\User', 1, 'App', '27ebbd4c0b457ba81a65429cdcd4ee8537cfd86110ec7c1d8bd6269d09721f6b', '[\"*\"]', NULL, NULL, '2025-10-14 02:56:56', '2025-10-14 02:56:56'),
(37, 'App\\Models\\User', 7, 'App', 'd5e6a7ddd38f43f70d902f6499708466e3b31e7cf728d62fa54dea527882fee9', '[\"*\"]', NULL, NULL, '2025-10-14 10:47:06', '2025-10-14 10:47:06'),
(38, 'App\\Models\\User', 7, 'App', 'e3e89862dfeb24af85ec0819098101ab806ce09d7961b9df4923f058f3fea97d', '[\"*\"]', NULL, NULL, '2025-10-14 10:47:12', '2025-10-14 10:47:12'),
(39, 'App\\Models\\User', 5, 'App', 'ba1d228d00447187ff2a13cd82773210e4da4ca4e04ea8fc62237a965690990b', '[\"*\"]', NULL, NULL, '2025-10-14 18:38:16', '2025-10-14 18:38:16'),
(40, 'App\\Models\\User', 7, 'AdminToken', '43776236e5ff11aefce412f85a1634808f43ea77264ed16daa288066177c66f0', '[\"*\"]', NULL, NULL, '2025-10-14 19:04:05', '2025-10-14 19:04:05'),
(41, 'App\\Models\\User', 1, 'AdminToken', 'ed30a056e0317875785b7892675867ee0e7034ba7e1398a4523e055d4a31d511', '[\"*\"]', NULL, NULL, '2025-10-14 19:20:02', '2025-10-14 19:20:02'),
(42, 'App\\Models\\User', 5, 'AdminToken', '48c1be512a73892e621cf563e746e123575ed380d21a1bcb816d5a4c30b536b7', '[\"*\"]', NULL, NULL, '2025-10-14 19:20:42', '2025-10-14 19:20:42'),
(43, 'App\\Models\\User', 5, 'AdminToken', '085d8bfbf49b3331f2090f935b149e58e7c23960416dd153058d3a8f34f45629', '[\"*\"]', NULL, NULL, '2025-10-14 19:21:03', '2025-10-14 19:21:03'),
(44, 'App\\Models\\User', 1, 'AdminToken', '3ae93c9e00a323c68ef756a2f118de5c3e57fb0ef6cc2c7bd908f6b5c7506ed4', '[\"*\"]', NULL, NULL, '2025-10-14 19:21:37', '2025-10-14 19:21:37'),
(45, 'App\\Models\\User', 5, 'AdminToken', '3ba639a28b1562d85b71cd433054550b3c1dc8545c85f65de3f9ff6227a7107f', '[\"*\"]', NULL, NULL, '2025-10-14 19:22:14', '2025-10-14 19:22:14'),
(46, 'App\\Models\\User', 1, 'AdminToken', 'e7677505f7bf793f5d13c1146671b7ffb6ef59bfd98ab6325c54dbce725ad157', '[\"*\"]', '2025-10-15 00:16:23', NULL, '2025-10-14 19:23:08', '2025-10-15 00:16:23'),
(47, 'App\\Models\\User', 5, 'AdminToken', 'e7b230a11b22621fc3bf37d4ece219bdc551984f07124604f0b576e7062c2d4b', '[\"*\"]', NULL, NULL, '2025-10-14 19:24:42', '2025-10-14 19:24:42'),
(48, 'App\\Models\\User', 5, 'AdminToken', '91292b85f7188e0b6bf99a773e9af75daa5b72bbc40d63290aba96afeae5233a', '[\"*\"]', NULL, NULL, '2025-10-14 19:30:51', '2025-10-14 19:30:51'),
(49, 'App\\Models\\User', 5, 'AdminToken', 'd3c79e04e0b04fb8d8dd3d74c60d22800bfa1e4a13920b40aabaed9ab803ed55', '[\"*\"]', '2025-10-14 20:09:22', NULL, '2025-10-14 20:02:57', '2025-10-14 20:09:22'),
(50, 'App\\Models\\User', 1, 'AdminToken', '2f90eec191468abed1107d3a8c07a0e0a1c94f49b14a49c2747335351a4351ba', '[\"*\"]', '2025-10-15 00:13:56', NULL, '2025-10-14 20:04:09', '2025-10-15 00:13:56'),
(51, 'App\\Models\\User', 5, 'AdminToken', 'ab2e28077a26b04de9266f7cdd5f50db4e785ad7e5fd87b1381f69044d76c068', '[\"*\"]', '2025-10-14 20:12:24', NULL, '2025-10-14 20:04:43', '2025-10-14 20:12:24'),
(52, 'App\\Models\\User', 5, 'AdminToken', 'e62c44d88c28ad19d9515b05a4cd8bfd061bec7431beb3c8d792684523484b53', '[\"*\"]', '2025-10-14 20:13:10', NULL, '2025-10-14 20:13:02', '2025-10-14 20:13:10'),
(53, 'App\\Models\\User', 5, 'AdminToken', '36e00ca6714eff7487bc33ea745804ddd3351ca521b3555de8d49567038fdab5', '[\"*\"]', '2025-10-14 20:14:23', NULL, '2025-10-14 20:13:55', '2025-10-14 20:14:23'),
(54, 'App\\Models\\User', 5, 'AdminToken', 'e0c31efc2e90ffdd69017680c0e053f11bf87467259b1f8e24489bceb119a60c', '[\"*\"]', '2025-10-14 20:15:14', NULL, '2025-10-14 20:15:14', '2025-10-14 20:15:14'),
(55, 'App\\Models\\User', 5, 'AdminToken', 'ca908f8b25215a4b7010d3fa020977393ad90078e8577dd3b4bcbfa2f1d69850', '[\"*\"]', '2025-10-14 21:11:27', NULL, '2025-10-14 20:20:30', '2025-10-14 21:11:27'),
(56, 'App\\Models\\User', 5, 'AdminToken', '77d656dd768847e732730d2c16884c33a70cc9b6ae8972d34a12163ef985a5a8', '[\"*\"]', '2025-10-14 21:11:59', NULL, '2025-10-14 21:11:44', '2025-10-14 21:11:59'),
(57, 'App\\Models\\User', 5, 'AdminToken', 'e8425a0ada470fcd4390d342e58ad9e6d9793e984df3967d8c46eadc2a433645', '[\"*\"]', '2025-10-15 00:13:24', NULL, '2025-10-14 21:13:04', '2025-10-15 00:13:24'),
(58, 'App\\Models\\User', 8, 'AdminToken', '1ecd71f6f0c83e0cc3ccc95583460b9803dc1ffee0b289b3f796d06454cc2dad', '[\"*\"]', '2025-10-15 09:51:09', NULL, '2025-10-15 00:16:55', '2025-10-15 09:51:09');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

CREATE TABLE `roles` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `roles`
--

INSERT INTO `roles` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'Quản trị hệ thống', NULL, NULL),
(2, 'editor', 'Biên tập nội dung', NULL, NULL),
(3, 'viewer', 'Người xem', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('1IL9ZVBn8on8TyfRbVEwtA0xb7hp0APlXK3i8Sfd', NULL, '127.0.0.1', 'PostmanRuntime/7.48.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibVczdWZDSnhsdTV0Z0JUYlA1QUtIQjBIRVM1MDg3eHJOYk41N2tZYiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760341946),
('qjhIIlJbCeuQCDM1bTuTBgpHkz6jqCUCZlcUUcJh', NULL, '127.0.0.1', 'PostmanRuntime/7.48.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSkFVdEdnZWsxT1ZGbmdPQ3l1cmN6Vk5xTTRTOFpaSFcySFE5MG5CYyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760339198);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `fullname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthday` date DEFAULT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` text COLLATE utf8mb4_unicode_ci,
  `districts` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cityid` int UNSIGNED DEFAULT NULL,
  `wardid` int UNSIGNED DEFAULT NULL,
  `isadmin` tinyint(1) NOT NULL DEFAULT '0',
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `avatar_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_login` timestamp NULL DEFAULT NULL,
  `role_id` bigint UNSIGNED DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `agreeToPolicy` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `fullname`, `email`, `email_verified_at`, `password`, `birthday`, `gender`, `phone`, `address`, `districts`, `cityid`, `wardid`, `isadmin`, `status`, `avatar_url`, `last_login`, `role_id`, `remember_token`, `created_at`, `updated_at`, `agreeToPolicy`) VALUES
(1, 'Phạm Lộc', 'locdev.admin@gmail.com', NULL, '$2y$12$5bkUtSArMCalWfFhygRdmes5nLxU2q9WAUFgkiKiKGaBd0K.XtNwC', '2000-08-18', 'Nam', '0816201699', 'Xã Cát Phong, Phường Nam Đinh, Tỉnh Ninh Bình', '1', 1, 1, 1, 'active', NULL, NULL, 1, NULL, '2025-10-12 23:39:42', '2025-10-12 23:39:42', 1),
(8, 'Nguyễn Văn A', 'user1@example.com', NULL, '$2y$12$IFgB5b3lduJksUAjkCEGN.NJU6xAgO4wvO6QTiHp5IxKwL4vIIyla', NULL, NULL, '0123456789', 'Hà Nội', NULL, NULL, NULL, 0, 'active', NULL, NULL, 1, NULL, '2025-10-15 00:15:44', '2025-10-15 00:16:23', 0),
(11, 'Nguyễn Văn B', 'user2@example.com', NULL, '$2y$12$tRwXvjDW9AfzttlXk36PpOO/5MTof9fV5FHeGYbNbFnDQUTbF7T56', NULL, NULL, '0123456789', 'Hà Nội', NULL, NULL, NULL, 0, 'active', NULL, NULL, NULL, NULL, '2025-10-15 01:29:44', '2025-10-15 01:29:44', 0),
(12, 'Nguyễn Văn C', 'user3@example.com', NULL, '$2y$12$MGVMOLWUCkZHwXfytkSMo.fv4NPg71LuoalM4m/dXeDAKl4CUau0a', NULL, NULL, '0123456789', 'Hà Nội', NULL, NULL, NULL, 0, 'active', NULL, NULL, NULL, NULL, '2025-10-15 01:29:51', '2025-10-15 01:29:51', 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Chỉ mục cho bảng `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Chỉ mục cho bảng `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Chỉ mục cho bảng `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_role_id_foreign` (`role_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Ràng buộc đối với các bảng kết xuất
--

--
-- Ràng buộc cho bảng `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
