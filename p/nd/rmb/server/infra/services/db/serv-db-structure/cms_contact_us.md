
CREATE TABLE IF NOT EXISTS `3at1`.`cms_contact_us` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `session_id` VARCHAR(45) NOT NULL,
  `browser_id` SMALLINT NOT NULL,
  `subject` VARCHAR(100) NOT NULL,
  `message` TINYTEXT NOT NULL,
  `created_by` SMALLINT NOT NULL,
  `creation_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `creation_gmt` ENUM('+5:30', '+4:30') NOT NULL DEFAULT '+5:30',
  `cms_contact_us_types_id` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_cms_contact_us_cms_contact_us_types1_idx` (`created_by` ASC) VISIBLE,
  CONSTRAINT `fk_cms_contact_us_cms_contact_us_types1`
    FOREIGN KEY (`created_by`)
    REFERENCES `3at1`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB
COMMENT = 'Keep all incomming messages from any contact_us form';
