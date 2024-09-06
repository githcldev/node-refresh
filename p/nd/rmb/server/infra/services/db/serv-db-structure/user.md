
CREATE TABLE IF NOT EXISTS `3at1`.`user` (
  `id` SMALLINT NOT NULL AUTO_INCREMENT,
  `block` ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9') NOT NULL DEFAULT '2',
  `primary_lang` ENUM('english', 'hindi') NOT NULL DEFAULT 'english',
  `login_name` VARCHAR(45) NULL,
  `login_pass` VARCHAR(60) NULL,
  `user_type_id` TINYINT NOT NULL,
  `modified_by` SMALLINT NULL,
  `modified_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  `creation_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  `modified_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `creation_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_user_user_type1_idx` (`user_type_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_user_type1`
    FOREIGN KEY (`user_type_id`)
    REFERENCES `3at1`.`user_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB
COMMENT = 'Records all user in cms';
