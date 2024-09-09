


-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------

CREATE TABLE IF NOT EXISTS `3at1`.`cms_widget` (
  `id` SMALLINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(60) NOT NULL,
  `content` TINYTEXT NULL,
  `creation_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  `modified_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `creation_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cms_widget_type_id` TINYINT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_cms_widget_cms_widget_type1_idx` (`cms_widget_type_id` ASC) VISIBLE,
  CONSTRAINT `fk_cms_widget_cms_widget_type1`
    FOREIGN KEY (`cms_widget_type_id`)
    REFERENCES `3at1`.`cms_widget_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB
COMMENT = 'Records widget used by page and user';