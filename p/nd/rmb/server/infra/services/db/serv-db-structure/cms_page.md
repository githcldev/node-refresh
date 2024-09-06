
CREATE TABLE IF NOT EXISTS `3at1`.`cms_page` (
  `id` MEDIUMINT NOT NULL AUTO_INCREMENT,
  `hits` MEDIUMINT NOT NULL DEFAULT 0,
  `lang` ENUM('english', 'hindi') NOT NULL DEFAULT 'english',
  `title` VARCHAR(255) NULL,
  `seo_title` VARCHAR(255) NULL,
  `content` TEXT NULL,
  `created_by` SMALLINT NULL,
  `modified_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  `creation_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  `modified_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `creation_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `created_by_idx` (`created_by` ASC) VISIBLE,
  CONSTRAINT `created_by`
    FOREIGN KEY (`created_by`)
    REFERENCES `3at1`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB
COMMENT = 'Records content for pages used by cms';
