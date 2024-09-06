
CREATE TABLE IF NOT EXISTS `3at1`.`section` (
  `id` SMALLINT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `content` TEXT NULL,
  `parent_id` SMALLINT NOT NULL DEFAULT 0,
  `status` ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9') NOT NULL DEFAULT '2',
  `created_by` SMALLINT NOT NULL,
  `creation_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `creation_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `created_by_idx` (`created_by` ASC) VISIBLE,
  CONSTRAINT `created_by`
    FOREIGN KEY (`created_by`)
    REFERENCES `3at1`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB
COMMENT = 'Records section used in cms_pages, post and user pages';
