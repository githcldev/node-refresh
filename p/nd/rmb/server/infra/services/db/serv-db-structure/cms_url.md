
CREATE TABLE IF NOT EXISTS `3at1`.`cms_url` (
  `id` TINYINT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(100) NOT NULL,
  `description` TINYTEXT NULL,
  `module` ENUM('user', 'admin', 'index', 'others') NOT NULL DEFAULT 'index' COMMENT 'user / admin / index / others',
  `modified_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  `creation_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  `modified_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `creation_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
COMMENT = 'Records all valid url patterns with there access level. They are first point where we can validate incomming request resource';
