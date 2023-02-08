-- MySQL dump 10.13  Distrib 8.0.32, for macos13 (arm64)
--
-- Host: 127.0.0.1    Database: coderhub
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `avatar`
--

DROP TABLE IF EXISTS `avatar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avatar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(100) NOT NULL,
  `mimetype` varchar(30) DEFAULT NULL,
  `size` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `filename` (`filename`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `avatar_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avatar`
--

LOCK TABLES `avatar` WRITE;
/*!40000 ALTER TABLE `avatar` DISABLE KEYS */;
INSERT INTO `avatar` VALUES (1,'85a4ca08545ed1ee98bec7565bb77a0f','image/jpeg',35532,1,'2023-02-08 12:52:58','2023-02-08 12:52:58'),(2,'9a210173b32e51149857d03a7b9f693d','image/jpeg',35532,1,'2023-02-08 15:40:18','2023-02-08 15:40:18'),(3,'6880594af9db6b4ab6618813d270b2df','image/jpeg',35532,1,'2023-02-08 15:50:19','2023-02-08 15:50:19');
/*!40000 ALTER TABLE `avatar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) NOT NULL,
  `moment_id` int NOT NULL,
  `user_id` int NOT NULL,
  `comment_id` int DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `moment_id` (`moment_id`),
  KEY `user_id` (`user_id`),
  KEY `comment_id` (`comment_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'yaero',1,1,NULL,'2023-02-07 16:18:59','2023-02-07 16:18:59'),(2,'guigui',1,1,NULL,'2023-02-07 16:19:05','2023-02-07 16:19:05'),(3,'mie',1,2,NULL,'2023-02-08 15:52:26','2023-02-08 15:52:26');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `file`
--

DROP TABLE IF EXISTS `file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `file` (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(100) NOT NULL,
  `mimetype` varchar(30) DEFAULT NULL,
  `size` int DEFAULT NULL,
  `moment_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `filename` (`filename`),
  KEY `user_id` (`user_id`),
  KEY `moment_id` (`moment_id`),
  CONSTRAINT `file_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `file_ibfk_2` FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file`
--

LOCK TABLES `file` WRITE;
/*!40000 ALTER TABLE `file` DISABLE KEYS */;
INSERT INTO `file` VALUES (1,'54235a027b1702d5bee6d9d6f1099ef6','image/jpeg',351591,1,2,'2023-02-08 16:43:46','2023-02-08 16:43:46'),(2,'135a07e309c44751baf879c80a6e260d','image/heic',1532218,1,2,'2023-02-08 16:43:46','2023-02-08 16:43:46'),(3,'7ba05093ba34806b0da5040f35884412','image/jpeg',155221,1,2,'2023-02-08 16:43:46','2023-02-08 16:43:46');
/*!40000 ALTER TABLE `file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `label`
--

DROP TABLE IF EXISTS `label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `label` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `label`
--

LOCK TABLES `label` WRITE;
/*!40000 ALTER TABLE `label` DISABLE KEYS */;
INSERT INTO `label` VALUES (1,'labelA','2023-02-07 13:30:56','2023-02-07 13:30:56'),(4,'123','2023-02-07 14:45:19','2023-02-07 14:45:19'),(5,'311','2023-02-07 14:45:19','2023-02-07 14:45:19'),(6,'111','2023-02-07 14:46:52','2023-02-07 14:46:52'),(7,'222','2023-02-07 14:46:52','2023-02-07 14:46:52'),(8,'aaa','2023-02-07 15:10:15','2023-02-07 15:10:15'),(9,'bbb','2023-02-07 15:10:15','2023-02-07 15:10:15'),(10,'a','2023-02-07 15:10:42','2023-02-07 15:10:42'),(11,'b','2023-02-07 15:10:42','2023-02-07 15:10:42');
/*!40000 ALTER TABLE `label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moment`
--

DROP TABLE IF EXISTS `moment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `moment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) NOT NULL,
  `user_id` int NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `moment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moment`
--

LOCK TABLES `moment` WRITE;
/*!40000 ALTER TABLE `moment` DISABLE KEYS */;
INSERT INTO `moment` VALUES (1,'yahooooo!!!!',1,'2023-02-03 08:31:27','2023-02-03 08:31:27'),(3,'曾几何时，他也好，她也好，都是这家伙的被害者。所以我才憎恶着。这个强求着所谓“大家”的世界。必须建立在牺牲某人之上才能成立的低劣的和平。以温柔和正义粉饰，明明是恶毒之物却登大雅之堂，随着时间的流逝越发凶恶，除欺瞒外别无其二的空虚的概念。过去和世界都是无法改变的。发生过的事情和所谓的“大家”都是无法改变的。但是，并不是说自己只能隶属于他们',1,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(4,'不要告诉我你不需要保护，不要告诉我你不寂寞，知微，我只希望你，在走过黑夜的那个时辰，不要倔强的选择一个人。',3,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(5,'If you shed tears when you miss the sun, you also miss the stars.如果你因失去了太阳而流泪，那么你也将失去群星了。',1,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(6,'在世间万物中我都发现了你，渺小时，你是阳光下一粒种子，伟大时，你隐身在高山海洋里。',2,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(8,'限定目的，能使人生变得简洁。',2,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(9,'翅膀长在你的肩上，太在乎别人对于飞行姿势的批评，所以你飞不起来',4,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(10,'一个人至少拥有一个梦想，有一个理由去坚强。心若没有栖息的地方，到哪里都是在流浪。',2,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(11,'不乱于心，不困于情。不畏将来，不念过往。如此，安好。',3,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(12,'如果你给我的，和你给别人的是一样的，那我就不要了。',3,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(13,'故事的开头总是这样，适逢其会，猝不及防。故事的结局总是这样，花开两朵，天各一方。',2,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(14,'你不愿意种花，你说，我不愿看见它一点点凋落。是的，为了避免结束，你避免了一切开始。',2,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(15,'你如果认识从前的我，也许你会原谅现在的我。',4,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(16,'每一个不曾起舞的日子，都是对生命的辜负。',2,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(17,'向来缘浅，奈何情深。',2,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(18,'心之所向 素履以往 生如逆旅 一苇以航',3,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(19,'生如夏花之绚烂，死如秋叶之静美。',3,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(20,'答案很长，我准备用一生的时间来回答，你准备要听了吗？',4,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(21,'因为爱过，所以慈悲；因为懂得，所以宽容。',4,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(22,'我们听过无数的道理，却仍旧过不好这一生。',1,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(23,'我来不及认真地年轻，待明白过来时，只能选择认真地老去。',2,'2020-11-23 14:21:19','2020-11-23 14:21:19');
/*!40000 ALTER TABLE `moment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moment_label`
--

DROP TABLE IF EXISTS `moment_label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `moment_label` (
  `moment_id` int NOT NULL,
  `label_id` int NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`moment_id`,`label_id`),
  KEY `label_id` (`label_id`),
  CONSTRAINT `moment_label_ibfk_1` FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `moment_label_ibfk_2` FOREIGN KEY (`label_id`) REFERENCES `label` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moment_label`
--

LOCK TABLES `moment_label` WRITE;
/*!40000 ALTER TABLE `moment_label` DISABLE KEYS */;
INSERT INTO `moment_label` VALUES (1,1,'2023-02-07 15:03:48','2023-02-07 15:03:48'),(1,6,'2023-02-07 15:03:05','2023-02-07 15:03:05'),(1,7,'2023-02-07 15:03:05','2023-02-07 15:03:05'),(1,8,'2023-02-07 15:10:15','2023-02-07 15:10:15'),(1,9,'2023-02-07 15:10:15','2023-02-07 15:10:15'),(1,10,'2023-02-07 15:10:42','2023-02-07 15:10:42'),(1,11,'2023-02-07 15:10:42','2023-02-07 15:10:42');
/*!40000 ALTER TABLE `moment_label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `password` varchar(32) NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `avatar_url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'leslie','21bb5bb51758eab175d4d640334abba0','2023-01-30 16:16:14','2023-02-08 15:40:18','http://localhost:8000/user/1/avatar'),(2,'cabbage','b3188adab3f07e66582bbac456dcd212','2023-01-30 16:16:25','2023-01-30 16:16:25',NULL),(3,'yahoo','241fe8af1e038118cd817048a65f803e','2023-01-30 16:16:32','2023-01-30 16:16:32',NULL),(4,'caicai','2e2c8d8306bd1953cc93bae5fe400810','2023-02-03 08:58:03','2023-02-03 08:58:03',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-09  1:58:57
