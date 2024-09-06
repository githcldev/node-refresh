
CREATE TABLE IF NOT EXISTS `3at1`.`cms_ex_vendors` (
  `id` TINYINT NOT NULL AUTO_INCREMENT,
  `type` ENUM('image', 'auth', 'blog', 'auth-blog', 'file', 'video') NOT NULL DEFAULT 'auth',
  `short_name` TINYTEXT NULL,
  `name` VARCHAR(45) NOT NULL,
  `api` TINYTEXT NULL,
  `status` ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9') NOT NULL DEFAULT '2',
  `attr_1` TINYTEXT NULL,
  `attr_2` TINYTEXT NULL,
  `creation_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `creation_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'Records all ex_vendors used in applicaiton';

