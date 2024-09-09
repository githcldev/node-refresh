
CREATE TABLE IF NOT EXISTS `3at1`.`user_type` (
  `id` TINYINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `level` ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9') NOT NULL DEFAULT '1' COMMENT '1 is lowest and 9 is highest',
  `user_count` SMALLINT NOT NULL DEFAULT 0,
  `description` TINYTEXT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB
COMMENT = 'Records all avaialble user types in cms';