
CREATE TABLE IF NOT EXISTS `3at1`.`user_attr` (
  `user_id` SMALLINT NOT NULL,
  `parent_user_id` SMALLINT NOT NULL DEFAULT 0,
  `post_count` SMALLINT NOT NULL DEFAULT 0,
  `about` VARCHAR(255) NULL,
  `display_name` VARCHAR(60) NULL,
  `following_count` SMALLINT NULL,
  `reporter_count` TINYINT NULL,
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
COMMENT = 'Records attributes for user';
