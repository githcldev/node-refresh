
CREATE TABLE IF NOT EXISTS `3at1`.`cms_page_seo_key_value_map` (
  `value` VARCHAR(255) NOT NULL,
  `cms_seo_key_id` TINYINT NULL,
  `cms_page_id` SMALLINT NULL,
  INDEX `fk_cms_page_seo_key_value_map_cms_seo_key1_idx` (`cms_seo_key_id` ASC) VISIBLE,
  INDEX `fk_cms_page_seo_key_value_map_cms_page1_idx` (`cms_page_id` ASC) VISIBLE,
  CONSTRAINT `fk_cms_page_seo_key_value_map_cms_seo_key1`
    FOREIGN KEY (`cms_seo_key_id`)
    REFERENCES `3at1`.`cms_seo` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_cms_page_seo_key_value_map_cms_page1`
    FOREIGN KEY (`cms_page_id`)
    REFERENCES `3at1`.`cms_page` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
COMMENT = 'Map common seo keys used by pages';
