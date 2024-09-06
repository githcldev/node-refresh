

-------------------------------------------------

CREATE TABLE IF NOT EXISTS `3at1`.`cms_config` (
  `key` VARCHAR(255) NOT NULL,
  `value` VARCHAR(255) NOT NULL,
  `modified_by` SMALLINT NOT NULL DEFAULT 0,
  `created_by` SMALLINT NOT NULL DEFAULT 0,
  `modified_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  `creation_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  `modified_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `creation_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `type` ENUM('db', 'server', 'client') NOT NULL,
  PRIMARY KEY (`key`))
ENGINE = InnoDB
COMMENT = 'cms_config keep combined information of three types wiz:\n1)	Client\n2)	Server\n3)	Db';