-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 15, 2023 at 03:14 PM
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
-- Database: `info`
--

-- --------------------------------------------------------

--
-- Table structure for table `records`
--

CREATE TABLE `records` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `records`
--

INSERT INTO `records` (`id`, `name`, `description`) VALUES
(12, ' John Doe', 'Software Engineer'),
(13, 'Jane Smith', 'Marketing Specialist'),
(14, 'Alex Johnson', 'Sales Representative'),
(15, ' Emily Brown', 'Graphic Designer'),
(17, 'Sarah Wilson', 'Data Analyst'),
(18, 'David Miller', 'Accountant'),
(19, 'Jennifer Taylor ', 'HR Manager'),
(20, 'Robert Anderson ', 'Product Manager'),
(21, 'Lisa Martinez', 'Customer Support Agent'),
(22, 'Michael Brown ', 'Financial Analyst'),
(23, 'Robert Lee', 'Sales Representative'),
(24, 'Samantha Scott', 'Social Media Manager'),
(25, 'William Clark ', 'Web Developer'),
(26, 'David Anderson', 'Project Manager'),
(27, 'Michael Lee', 'Project Manager');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `records`
--
ALTER TABLE `records`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `records`
--
ALTER TABLE `records`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
