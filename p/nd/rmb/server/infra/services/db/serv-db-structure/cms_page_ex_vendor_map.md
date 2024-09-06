
CREATE TABLE IF NOT EXISTS `3at1`.`cms_page_ex_vendor_map` (
  `status` ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9') NOT NULL DEFAULT '2',
  `attr_1` TINYTEXT NULL,
  `creation_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `creation_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  `cms_ex_vendors_id` TINYINT NOT NULL,
  `cms_page_id` SMALLINT NOT NULL,
  INDEX `fk_cms_page_ex_vendor_map_cms_ex_vendors1_idx` (`cms_ex_vendors_id` ASC) VISIBLE,
  INDEX `fk_cms_page_ex_vendor_map_cms_page2_idx` (`cms_page_id` ASC) VISIBLE,
  CONSTRAINT `fk_cms_page_ex_vendor_map_cms_ex_vendors1`
    FOREIGN KEY (`cms_ex_vendors_id`)
    REFERENCES `3at1`.`cms_ex_vendors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_cms_page_ex_vendor_map_cms_page2`
    FOREIGN KEY (`cms_page_id`)
    REFERENCES `3at1`.`cms_page` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
COMMENT = 'Map page with ex_vendor which are used to share cms_pages';
