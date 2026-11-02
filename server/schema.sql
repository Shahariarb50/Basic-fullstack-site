CREATE DATABASE IF NOT EXISTS simple_site CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE simple_site;

CREATE TABLE IF NOT EXISTS site_settings (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  setting_key VARCHAR(100) NOT NULL UNIQUE,
  setting_value VARCHAR(500) NOT NULL
);

INSERT INTO site_settings (setting_key, setting_value)
VALUES ('welcome_message', 'Your new website is ready to grow. Start by making it your own.')
ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value);
