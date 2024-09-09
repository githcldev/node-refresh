
CREATE TABLE IF NOT EXISTS `3at1`.`cms_page_widget_map` (
  `cms_page_id1` SMALLINT NOT NULL,
  `cms_widget_positions_id` TINYINT NOT NULL,
  `cms_widget_id1` TINYINT NOT NULL,
  INDEX `fk_cms_page_widget_map_cms_page1_idx` (`cms_page_id1` ASC) VISIBLE,
  INDEX `fk_cms_page_widget_map_cms_widget_positions1_idx` (`cms_widget_positions_id` ASC) VISIBLE,
  INDEX `fk_cms_page_widget_map_cms_widget1_idx` (`cms_widget_id1` ASC) VISIBLE,
  CONSTRAINT `fk_cms_page_widget_map_cms_page1`
    FOREIGN KEY (`cms_page_id1`)
    REFERENCES `3at1`.`cms_page` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_cms_page_widget_map_cms_widget_positions1`
    FOREIGN KEY (`cms_widget_positions_id`)
    REFERENCES `3at1`.`cms_widget_positions` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_cms_page_widget_map_cms_widget1`
    FOREIGN KEY (`cms_widget_id1`)
    REFERENCES `3at1`.`cms_widget` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
COMMENT = 'Map pages with widgets';
