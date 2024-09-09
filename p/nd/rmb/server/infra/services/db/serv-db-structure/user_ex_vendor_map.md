
CREATE TABLE IF NOT EXISTS `3at1`.`user_ex_vendor_map` (
  `status` ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9') NOT NULL DEFAULT '2',
  `attr_1` TINYTEXT NULL,
  `attr_2` TINYTEXT NULL,
  `creation_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `creation_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  `cms_ex_vendors_id` TINYINT NOT NULL,
  `user_id` SMALLINT NOT NULL,
  INDEX `fk_cms_user_ex_vendor_map_cms_ex_vendors1_idx` (`cms_ex_vendors_id` ASC) VISIBLE,
  INDEX `fk_user_ex_vendor_map_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_cms_user_ex_vendor_map_cms_ex_vendors1`
    FOREIGN KEY (`cms_ex_vendors_id`)
    REFERENCES `3at1`.`cms_ex_vendors` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_user_ex_vendor_map_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `3at1`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
COMMENT = 'Map usage of ex_vendor for auth, photo or file sharing purpose by user';
