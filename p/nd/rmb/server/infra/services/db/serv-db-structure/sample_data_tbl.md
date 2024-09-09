
CREATE TABLE IF NOT EXISTS `3at1`.`sample_data_tbl` (
  `id` TINYINT NOT NULL AUTO_INCREMENT,
  `type` TINYTEXT NULL,
  `geometry` TINYTEXT NULL,
  `property` TINYTEXT NULL,
  `value` TINYTEXT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
COMMENT = 'Sample data tble for test / prac mysql skill';
