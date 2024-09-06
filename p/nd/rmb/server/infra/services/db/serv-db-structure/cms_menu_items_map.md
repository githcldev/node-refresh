
CREATE TABLE IF NOT EXISTS `3at1`.`cms_menu_items_map` (
  `cms_menu_id` TINYINT NOT NULL,
  `cms_menu_items_id` SMALLINT NOT NULL,
  INDEX `fk_cms_menu_items_map_cms_menu_idx` (`cms_menu_id` ASC) VISIBLE,
  INDEX `fk_cms_menu_items_map_cms_menu_items1_idx` (`cms_menu_items_id` ASC) VISIBLE,
  CONSTRAINT `fk_cms_menu_items_map_cms_menu`
    FOREIGN KEY (`cms_menu_id`)
    REFERENCES `3at1`.`cms_menu` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_cms_menu_items_map_cms_menu_items1`
    FOREIGN KEY (`cms_menu_items_id`)
    REFERENCES `3at1`.`cms_menu_items` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
COMMENT = 'Map information between menu and its items';
