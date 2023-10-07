CREATE DATABASE  IF NOT EXISTS `spring_project` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `spring_project`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: spring_project
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `user_id` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `password_UNIQUE` (`password`),
  UNIQUE KEY `phone_UNIQUE` (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('1272','Md. Shahidul Islam','shahidul2562@gmail.com','01765782562','1272'),('1273','Selim Rayhan','selimrayhan43@gmail.com','017000000001','1273'),('1274','Mahfuj Ullah','mahfuj103@gmail.com','017000000002','1274'),('1275','Samsuddoha Robin','robin@gmail.com','017000000005','1275'),('1276','Muhinur Rahman','muhin@gmail.com','017000000008','1276'),('1277','Arif Ruble','arif@gmail.com','017000000009','1277');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bill_details`
--

DROP TABLE IF EXISTS `bill_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bill_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `meter_no` varchar(45) DEFAULT NULL,
  `customer_name` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `meter_type` varchar(45) DEFAULT NULL,
  `last_month_units` double DEFAULT NULL,
  `current_month_units` double DEFAULT NULL,
  `units` double DEFAULT NULL,
  `bill_per_unit` double DEFAULT NULL,
  `net_bill` double DEFAULT NULL,
  `meter_rent` double DEFAULT NULL,
  `tax` double DEFAULT NULL,
  `month` varchar(45) DEFAULT NULL,
  `year` varchar(45) DEFAULT NULL,
  `total_bill` double DEFAULT NULL,
  `pay_status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill_details`
--

LOCK TABLES `bill_details` WRITE;
/*!40000 ALTER TABLE `bill_details` DISABLE KEYS */;
INSERT INTO `bill_details` VALUES (27,'123458','Shahidul Islam','Barishal','Business',0,75,75,7.7,577.5,100,40.425,'January','2023',717.925,'Paid'),(28,'123456','Selim Rayhan','Khulna','Residential',0,100,100,5.72,572,50,28.6,'January','2023',650.6,'Paid'),(29,'123458','Shahidul Islam','Barishal','Business',0,100,100,8.2,820,100,57.4,'February','2023',977.4,'Paid'),(31,'123458','Shahidul Islam','Barishal','Business',100,200,100,8.2,820,100,57.4,'March','2023',977.4,'Paid'),(32,'123458','Shahidul Islam','Barishal','Business',200,300,100,8.2,820,100,57.4,'April','2023',977.4,'Paid'),(33,'123458','Shahidul Islam','Barishal','Business',300,450,150,8.2,1230,100,86.1,'May','2023',1416.1,'Not Paid');
/*!40000 ALTER TABLE `bill_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `name` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `meter_no` varchar(45) NOT NULL,
  `meter_type` varchar(45) DEFAULT NULL,
  `issue_date` varchar(45) DEFAULT NULL,
  `district` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`meter_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES ('Rubel Hossain','male','123451','Small Industry','2023-08-01','Dhaka','Mirpur-10','rubel1234@gmail.com','017000000011'),('Muhinur Rahman','male','123452','Small Industry','2023-01-01','Dhaka','Dhanmondi','muhin123@gmail.com','017000000005'),('Selim Rayhan','male','123456','Residential','2023-07-12','Khulna','Khulna','selimrayhan43@gmail.com','017000000005'),('Samsuddoha Robin','male','123457','Residential','2023-07-15','Pabna','Pabna','robin@gmail.com','017000000001'),('Shahidul Islam','male','123458','Business','2023-07-15','Barishal','Barishal','shahidul@gmail.com','017000000007'),('Sazzad Hossain','male','123459','Small Industry','2023-07-03','Dhaka','Dhanmondi','sazzad@gmail.com','017000000000');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_status`
--

DROP TABLE IF EXISTS `payment_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `meter_no` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `month` varchar(45) DEFAULT NULL,
  `year` varchar(45) DEFAULT NULL,
  `meter_type` varchar(45) DEFAULT NULL,
  `units` double DEFAULT NULL,
  `total_bill` double DEFAULT NULL,
  `last_date_for_pay` date DEFAULT NULL,
  `bill_receive_date` date DEFAULT NULL,
  `fine_total` double DEFAULT NULL,
  `payment_status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_status`
--

LOCK TABLES `payment_status` WRITE;
/*!40000 ALTER TABLE `payment_status` DISABLE KEYS */;
INSERT INTO `payment_status` VALUES (11,'123458','Shahidul Islam','January','2023','Business',75,717.925,'2023-02-10','2023-02-11',768.17975,'Paid'),(15,'123458','Shahidul Islam','February','2023','Business',100,977.4,'2023-03-10','2023-03-11',1045.818,'Paid'),(17,'123458','Shahidul Islam','March','2023','Business',100,977.4,'2023-04-12','2023-04-16',1045.818,'Paid'),(18,'123458','Shahidul Islam','April','2023','Business',100,977.4,'2023-05-12','2023-05-18',1075.1399999999999,'Paid'),(19,'123458','Shahidul Islam','May','2023','Business',150,1416.1,'2023-06-10',NULL,0,'Not Paid'),(20,'123456','Selim Rayhan','January','2023','Residential',100,650.6,'2023-02-10','2023-02-11',696.142,'Paid');
/*!40000 ALTER TABLE `payment_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `customer_id` varchar(45) NOT NULL,
  `meter_no` varchar(45) NOT NULL,
  `customer_name` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `customer_email` varchar(45) NOT NULL,
  `customer_phone` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `customer_phone_UNIQUE` (`customer_phone`),
  UNIQUE KEY `meter_no_UNIQUE` (`meter_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('1272146','123458','Shahidul Islam','Mirpur-2','shahidul2562@gmail.com','01765782562','1272146'),('1272147','123456','Selim Rayhan','Shymoli','selim123@gmail.com','01700000000','1272147');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-09 17:48:33
