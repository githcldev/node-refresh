
CREATE TABLE IF NOT EXISTS `3at1`.`cms_menu_items` (
  `id` SMALLINT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `has_children` ENUM('1', '2') NOT NULL DEFAULT '1' COMMENT '\'1\' means NO',
  `depth` ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9') NOT NULL DEFAULT '1',
  `parent_id` SMALLINT NOT NULL DEFAULT 0,
  `cms_acl_id` TINYINT NOT NULL,
  `cms_url_id` TINYINT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_cms_menu_items_cms_acl1_idx` (`cms_acl_id` ASC) VISIBLE,
  INDEX `cms_url_id_idx` (`cms_url_id` ASC) VISIBLE,
  CONSTRAINT `fk_cms_menu_items_cms_acl1`
    FOREIGN KEY (`cms_acl_id`)
    REFERENCES `3at1`.`cms_acl` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `cms_url_id`
    FOREIGN KEY (`cms_url_id`)
    REFERENCES `3at1`.`cms_url` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB
COMMENT = 'Recods item to be used by menu';
