
CREATE TABLE IF NOT EXISTS `3at1`.`cms_widget_positions` (
  `id` TINYINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL,
  `level` ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9') NOT NULL DEFAULT '1',
  `status` ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9') NOT NULL DEFAULT '2',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'Positions available for widget to show at frontend';
