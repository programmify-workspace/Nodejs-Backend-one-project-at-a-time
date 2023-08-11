-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 07, 2023 at 12:38 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cars_website_data`
--

-- --------------------------------------------------------

--
-- Table structure for table `cars_data`
--

CREATE TABLE `cars_data` (
  `id` int(11) NOT NULL,
  `make` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cars_data`
--

INSERT INTO `cars_data` (`id`, `make`, `model`, `year`, `price`, `image`, `date`) VALUES
(2, 'Honda', 'Civic', 2018, 9000, 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/03/2017-Honda-Civic-Hatchback-Sport-Touring-113.jpg?crop=0.816xw:0.816xh;0.0442xw,0.159xh&resize=980:*', '2023-07-12 22:18:31'),
(3, 'Ford', 'Mustang', 2019, 25000, 'https://autotrends.org/wp-content/uploads/2019-ford-mustang-gt-fastback-front.jpg', '2023-07-12 22:20:05'),
(4, 'Chevrolet', 'Camaro', 2017, 22000, 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/02/2017-Chevrolet-Camaro-ZL1-coupe-112.jpg?crop=0.772xw:0.944xh;0.127xw,0.0559xh&resize=640:*', '2023-07-12 22:22:59'),
(5, 'BMW', '3 Series', 2021, 35000, 'https://media.ed.edmunds-media.com/bmw/3-series/2021/oem/2021_bmw_3-series_sedan_330e_fq_oem_1_1600.jpg', '2023-07-12 22:25:52'),
(6, 'Mercedes-Benz', 'E Class', 2019, 40000, 'https://www.carshowroom.com.au/media/21503232/news-2019-mercedes-benz-e-class-gallery-01-0918.jpg', '2023-07-12 22:31:32'),
(7, 'Audi', 'A4', 2020, 32000, 'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_674,q_auto:eco,w_1200/v1/cms/uploads/P3gp5894SMG9bflIaqQ7', '2023-07-12 22:37:19'),
(8, 'Nissan', 'Altima', 2018, 15000, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/2019_Nissan_Altima_SL_2.5L_front_3.22.19.jpg/1200px-2019_Nissan_Altima_SL_2.5L_front_3.22.19.jpg', '2023-07-12 22:47:26'),
(9, 'Jeep', 'Wrangler', 2017, 27000, 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2016/09/2017-Jeep-Wrangler-104.jpg?crop=0.829xw:1.00xh;0.0195xw,0&resize=640:*', '2023-07-12 22:50:59'),
(10, 'Subaru', 'Impreza', 2019, 18000, 'https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/subaru-impreza-20is-tw-1001x565-%281%29.jpg', '2023-07-12 23:10:14'),
(11, 'Hyundai', 'Sonata', 2020, 17000, 'https://images.cars.com/cldstatic/wp-content/uploads/hyundai-sonata-2020-angle--exterior--rear--red-04.jpg', '2023-07-12 23:20:54'),
(12, 'Kia', 'Sorento', 2018, 20000, 'https://s3.caradvice.com.au/wp-content/uploads/2017/10/2018-Kia-Sorento-Sport-0682.jpg', '2023-07-14 13:49:01'),
(13, 'Audi', 'A4', 2005, 8000, 'https://th.bing.com/th/id/R.caaa3715a94508c135532194c92de9b1?rik=Q3BK%2f0YD0A6edA&pid=ImgRaw&r=0', '2023-07-14 14:09:53'),
(14, 'BMW', 'X5', 2020, 40000, 'https://th.bing.com/th/id/R.bf649d1afaa0684b44e235ac414b1a5f?rik=iQBu8MrM24itRQ&pid=ImgRaw&r=0', '2023-07-14 13:49:01'),
(15, 'Chevrolet', 'Cruze', 2016, 12000, 'https://th.bing.com/th/id/OIP.cdccjmKKptlYFN0-MIR7tQHaE6?pid=ImgDet&rs=1', '2023-07-14 13:49:01'),
(16, 'Honda', 'Civic', 2017, 15000, 'https://th.bing.com/th/id/OIP.U9dssLWaoiRHUeG62HCb7QEsDH?pid=ImgDet&rs=1', '2023-07-14 13:49:01'),
(17, 'Hyundai', 'Elantra', 2018, 14000, 'https://th.bing.com/th/id/R.f2be06a3f18fe3945b3f6e44f1acd94e?rik=7bv9hvtrRDE4wg&pid=ImgRaw&r=0', '2023-07-14 13:49:01'),
(18, 'Jeep', 'Wrangler', 2015, 22000, 'https://th.bing.com/th/id/R.0e0291f3879ecaa90f0c8e106b8aaa4a?rik=2XuwhGfF2ZhiWQ&pid=ImgRaw&r=0', '2023-07-14 13:49:01'),
(19, 'Mercedes-Benz', 'C-Class', 2019, 35000, 'https://th.bing.com/th/id/R.a697f11f24ab6b28427aadf24923f7d1?rik=Gnir3SOMPcM%2bag&pid=ImgRaw&r=0', '2023-07-14 13:49:01'),
(20, 'Mustang', 'Ford', 1999, 25000, 'https://th.bing.com/th/id/OIP.mWMhLMARsVE7NT90uvJseAHaE6?pid=ImgDet&rs=1', '2023-07-14 13:49:01'),
(21, 'Subaru', 'Outback', 2017, 20000, 'https://th.bing.com/th/id/R.e8616cfd8545cc2a93c6eeb4846a48f1?rik=11SX6AyxaUn4yA&pid=ImgRaw&r=0', '2023-07-14 13:49:01'),
(22, 'Audi', 'Q7', 2019, 35000, 'https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/review/hero_image/2020-Audi-Q7-50-TDI-quattro-1001x565p-hero.jpg', '2023-07-14 13:49:01'),
(23, 'BMW', '3 Series', 2016, 22000, 'https://th.bing.com/th/id/R.4b8ae89c1236f19414f7515a983012ea?rik=WoN5fvTB9GSNQQ&riu=http%3a%2f%2fs3.caradvice.com.au%2fwp-content%2fuploads%2f2015%2f07%2f2016-BMW-3-Series-Review-4.jpg&ehk=Iqy55o4VfI3%2f0o35jxXEFLQKwqRgCTs4aODDN7qmhJw%3d&risl=&pid=ImgRaw&', '2023-07-14 13:49:01'),
(24, 'Chevrolet', 'Malibu', 2018, 18000, 'https://th.bing.com/th/id/OIP.PGo_Br8DDsiQQ-qXgYxULwHaFj?pid=ImgDet&rs=1', '2023-07-14 13:49:01'),
(25, 'Honda', 'Accord', 2003, 23000, 'https://th.bing.com/th/id/R.1f793a522149477502f7d5ba494b867f?rik=FLBjvbmDsmQf%2bw&pid=ImgRaw&r=0', '2023-07-14 13:49:01'),
(26, 'Hyundai', 'Tucson', 2017, 18000, 'https://media.ed.edmunds-media.com/hyundai/tucson/2017/oem/2017_hyundai_tucson_4dr-suv_night_fq_oem_1_1280.jpg', '2023-07-14 13:49:01'),
(27, 'Jeep', 'Cherokee', 2020, 28000, 'https://th.bing.com/th/id/R.f9fff895f518c222e753ec8380206c53?rik=Gn21ZFB%2fMqFfIw&pid=ImgRaw&r=0', '2023-07-14 13:49:01'),
(28, 'Mercedes-Benz', 'GLE', 2020, 55000, 'https://th.bing.com/th/id/OIP.erY71exVo6gQr4w9PzxaegHaEA?pid=ImgDet&rs=1', '2023-07-14 13:49:01'),
(29, 'Mustang', 'Shelby GT500', 2021, 70000, 'https://th.bing.com/th/id/R.93590b2ee4f1a83da41ee261a1d652ed?rik=Z0v%2bhuL4x3WYdw&pid=ImgRaw&r=0', '2023-07-14 13:49:01'),
(30, 'Nissan', 'Sentra', 1998, 12000, 'https://th.bing.com/th/id/R.034ca3812caded8cda0fe9cdaa2111fa?rik=NbDIJ%2bHfG7m2Aw&riu=http%3a%2f%2fmomentcar.com%2fimages600_%2fnissan-sentra-1998-2.jpg&ehk=t5dPygiEB0MKokS1HR75fVhl%2fHJTAYjjpmo3J1%2f5WLU%3d&risl=&pid=ImgRaw&r=0', '2023-07-14 13:49:01'),
(31, 'Subaru', 'Impreza', 2008, 18000, 'https://th.bing.com/th/id/OIP.t697PyYbl1ehFkgRn6X8fQHaE8?pid=ImgDet&rs=1', '2023-07-14 13:49:01'),
(32, 'Audi', 'A3', 2007, 22000, 'https://th.bing.com/th/id/OIP.SLAMVexYkHgt9Tbk1-mbYQHaFM?pid=ImgDet&rs=1', '2023-07-14 13:49:01'),
(33, 'Chevrolet', 'Traverse', 2017, 25000, 'https://th.bing.com/th/id/OIP.cFqr_etKyPHmvERaCWMoTwHaE7?pid=ImgDet&rs=1', '2023-07-14 13:49:01'),
(34, 'Audi', 'TT', 2003, 15000, 'https://th.bing.com/th/id/OIP.6XU3_EBHM0H5wweoBz1ozgHaE7?pid=ImgDet&rs=1', '2023-07-14 13:49:01'),
(35, 'BMW', '5 Series', 2015, 28000, 'https://th.bing.com/th/id/R.a5857ee7093acc625f04284875a90c6f?rik=n%2f7JrlGbRSUEEw&pid=ImgRaw&r=0', '2023-07-14 13:49:01'),
(36, 'Chevrolet', 'Equinox', 2017, 18000, 'https://th.bing.com/th/id/R.fa8c4bfd4994d56cf38f1cc9ac4c3c57?rik=hu8a7HiJWVI4Eg&pid=ImgRaw&r=0', '2023-07-14 13:49:01'),
(37, 'Honda', 'Pilot', 2019, 35000, 'https://th.bing.com/th/id/OIP.4F_uD2hC9Ys2ETuMKCIO3wHaEK?pid=ImgDet&rs=1', '2023-07-14 13:49:01'),
(38, 'Hyundai', 'Sonata', 2006, 8000, 'https://th.bing.com/th/id/OIP.OfDQFemwPhTRMTgaOhCOFQHaE7?pid=ImgDet&rs=1', '2023-07-14 13:49:01'),
(39, 'Jeep', 'Grand Cherokee', 2018, 30000, 'https://th.bing.com/th/id/OIP.HUMHzayGvyWX7aSdCBpDRwHaE8?pid=ImgDet&rs=1', '2023-07-14 13:49:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars_data`
--
ALTER TABLE `cars_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cars_data`
--
ALTER TABLE `cars_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
