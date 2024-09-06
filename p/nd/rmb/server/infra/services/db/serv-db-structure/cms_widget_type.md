


-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------

CREATE TABLE IF NOT EXISTS `3at1`.`cms_widget_type` (
  `id` TINYINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` TINYTEXT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB
COMMENT = 'Types of widget facilated by cms';