
CREATE TABLE IF NOT EXISTS `3at1`.`cms_page_section_map` (
  `cms_page_id` SMALLINT NOT NULL,
  `section_id` SMALLINT NOT NULL,
  INDEX `fk_cms_page_section_map_section1_idx` (`section_id` ASC) VISIBLE,
  CONSTRAINT `fk_cms_page_ex_vendor_map_cms_page1`
    FOREIGN KEY (`cms_page_id`)
    REFERENCES `3at1`.`cms_page` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_cms_page_section_map_section1`
    FOREIGN KEY (`section_id`)
    REFERENCES `3at1`.`section` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
COMMENT = 'Map sections used by cms_page';
