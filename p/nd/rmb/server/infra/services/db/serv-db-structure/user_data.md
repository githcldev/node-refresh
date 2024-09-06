
CREATE TABLE IF NOT EXISTS `3at1`.`user_data` (
  `user_id` SMALLINT NOT NULL,
  `age` TINYINT NOT NULL DEFAULT 0,
  `gender` ENUM('MALE', 'FEMALE', 'TRANSGENDER') NOT NULL DEFAULT 'MALE',
  `location_registered` TINYTEXT NULL,
  `last_location` TINYTEXT NULL,
  `identity` TINYTEXT NULL,
  `birth_date` DATE NULL,
  `modified_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  `creation_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  `modified_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `creation_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `3at1`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB
COMMENT = 'Records data for user';
