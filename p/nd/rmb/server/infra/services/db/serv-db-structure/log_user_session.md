
CREATE TABLE IF NOT EXISTS `3at1`.`log_user_session` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `session_id` TINYTEXT NOT NULL,
  `login_date` DATETIME NOT NULL,
  `logout_date` DATETIME NULL,
  `modified_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  `creation_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  `modified_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `creation_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cms_user_id` SMALLINT NOT NULL,
  `browsers_id` SMALLINT NOT NULL,
  INDEX `fk_log_user_session_cms_user1_idx` (`cms_user_id` ASC) VISIBLE,
  INDEX `fk_log_user_session_browsers1_idx` (`browsers_id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_log_user_session_cms_user1`
    FOREIGN KEY (`cms_user_id`)
    REFERENCES `3at1`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_log_user_session_browsers1`
    FOREIGN KEY (`browsers_id`)
    REFERENCES `3at1`.`browsers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB
COMMENT = 'Log user session details';
