-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 17, 2023 at 07:42 PM
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
-- Database: `shopping`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(256) NOT NULL,
  `product_brand` varchar(256) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_image` varchar(256) NOT NULL,
  `product_quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_brand`, `product_price`, `product_image`, `product_quantity`) VALUES
(1, 'Honor 9 Lite (Sapphire Blue, 64 GB)  (4 GB RAM)', 'Honour', 250, 'image-1.jpg', 10),
(2, 'Infinix Hot S3 (Sandstone Black, 32 GB)  (3 GB RAM)', 'Infinix', 350, 'image-2.jpg', 10),
(4, 'VIVO V9 Youth (Gold, 32 GB)  (4 GB RAM)', 'VIVO', 350, 'image-3.jpg', 10),
(5, 'Moto E4 Plus (Fine Gold, 32 GB)  (3 GB RAM)', 'Moto', 165, 'image-4.jpg', 10),
(6, 'Iphone 14 pro max (Pink, 128 GB) ', 'Iphone', 985, 'image-5.jpg', 10);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
