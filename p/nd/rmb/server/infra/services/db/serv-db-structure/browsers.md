CREATE TABLE IF NOT EXISTS `3at1`.`browsers` (
  `id` TINYINT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TINYTEXT NULL,
  `parent_id` TINYINT NULL,
  `status` ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9') NOT NULL DEFAULT '2',
  `creation_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `creation_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'Store all browsers will hit to backend.';
