
CREATE TABLE IF NOT EXISTS `3at1`.`cms_acl` (
  `id` TINYINT NOT NULL AUTO_INCREMENT,
  `parent_id` TINYINT NULL,
  `user_count` SMALLINT NULL,
  `level` ENUM('1', '2', '3', '4', '5', '6') NOT NULL DEFAULT '2',
  `name` VARCHAR(45) NOT NULL,
  `description` TINYTEXT NULL,
  `modified_by` SMALLINT NOT NULL,
  `modified_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  `creation_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  `modified_date` DATETIME GENERATED ALWAYS AS (CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP) VIRTUAL,
  `creation_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `modified_by_idx` (`modified_by` ASC) VISIBLE,
  CONSTRAINT `modified_by`
    FOREIGN KEY (`modified_by`)
    REFERENCES `3at1`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB
COMMENT = 'Access control layer for managing different recording permission on different levels of users';
