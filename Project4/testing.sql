-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 17, 2023 at 08:21 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testing`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(120) NOT NULL,
  `product_brand` varchar(100) NOT NULL,
  `product_price` decimal(8,2) NOT NULL,
  `product_ram` char(5) NOT NULL,
  `product_storage` varchar(50) NOT NULL,
  `product_camera` varchar(20) NOT NULL,
  `product_image` varchar(100) NOT NULL,
  `product_quantity` mediumint(5) NOT NULL,
  `product_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_brand`, `product_price`, `product_ram`, `product_storage`, `product_camera`, `product_image`, `product_quantity`, `product_status`) VALUES
(1, 'Women\'s dress', 'Gucci', '1500.00', '4', '64', '13', 'image-1.jpg', 10, 1),
(2, 'Men\'s shirt', 'Louis Vuitton', '1000.00', '3', '32', '13', 'image-2.jpg', 10, 1),
(3, 'Men\'s black shirt', 'Gucci', '1600.00', '4', '32', '16', 'image-3.jpg', 10, 1),
(4, 'Women\'s purple dress', 'Prada', '1140.00', '3', '32', '8', 'image-4.jpg', 10, 1),
(5, 'Women\'s blue dress', 'Gucci', '2000.00', '', '', '', 'image-5.jpg', 0, 0),
(6, 'Women\'s red dress', 'Louis Vuitton', '2500.00', '', '', '', 'image-6.jpg', 0, 0),
(7, 'Women\'s black dress', 'Prada', '2600.00', '', '', '', 'image-7.jpg', 0, 0),
(8, 'Men\'s light blue shirt', 'Louis Vuitton', '1200.00', '', '', '', 'image-8.jpg', 0, 0),
(9, 'Men\'s dark blue shirt', 'Prada', '1300.00', '', '', '', 'image-9.jpg', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
