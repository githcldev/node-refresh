
CREATE TABLE IF NOT EXISTS `3at1`.`cms_record_status` (
  `id` TINYINT(1) NOT NULL AUTO_INCREMENT,
  `level` ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9') NOT NULL DEFAULT '5',
  `name` VARCHAR(45) NOT NULL,
  `description` TINYTEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = '\'high-priority\', \'ok\', \'acl-failure-between-user-and-cms\', \'resource-block-or-not-found\', \'acl-failure-between-user-and-third-party\'';
