
CREATE TABLE IF NOT EXISTS `3at1`.`cms_contact_us_types` (
  `id` TINYINT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` TINYTEXT NULL,
  `level` ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9') NOT NULL DEFAULT '2',
  `status` ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9') NOT NULL DEFAULT '2',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'cms_contact_us_relations related_to:\n1)	suggestion\n2)	corporate_affairs\n3)	public_service\n4)	sales\n5)	marketing\n6)	distribution\n7)	user_block\n8)	report_content_error\n9)	report_misuse';
