
CREATE TABLE IF NOT EXISTS `3at1`.`cms_region` (
  `id` SMALLINT NOT NULL AUTO_INCREMENT,
  `has_children` ENUM('1', '2') NOT NULL DEFAULT '1' COMMENT '\'1\' means NO',
  `parent_id` SMALLINT NOT NULL DEFAULT 1,
  `status` ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9') NOT NULL DEFAULT '2',
  `full_name` VARCHAR(60) NOT NULL,
  `locale_name` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
COMMENT = 'Records region available for cms';
