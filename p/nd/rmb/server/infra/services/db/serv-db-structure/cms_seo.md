
CREATE TABLE IF NOT EXISTS `3at1`.`cms_seo` (
  `id` TINYINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(60) NOT NULL,
  `default_value` TINYTEXT NOT NULL,
  `creation_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `creation_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
COMMENT = 'Records commong seo key value used by cms pages';
