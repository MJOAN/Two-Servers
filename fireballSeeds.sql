CREATE DATABASE expressAPIfireball;
USE expressAPIfireball;

CREATE TABLE fireball (
  altitude_km INTEGER (100),
  calculated_total_impact_energy_kt INTEGER (100),
  date_time_peak_brightness_ut INTEGER (200), 
  latitude_deg INTEGER (50),
  longitude_deg INTEGER (50),
  total_radiated_energy_j INTEGER (100),
  velocity_km_s_vx INTEGER NULL (150),
  velocity_km_s_vy INTEGER NULL (150),
  velocity_km_s_vz INTEGER NULL (150),
  velocity_km_s INTEGER NULL (100)
);

CREATE TABLE fireballCSV (
  peakBrightness INTEGER (100), 
  latitudeDegrees INTEGER (100),
  longitudeDegrees INTEGER (100),
  altitudeKilometers INTEGER (100),
  velocityKMS INTEGER NULL (100),
  velxKMS INTEGER NULL (100),
  velyKMS INTEGER NULL (100),
  velzKMS INTEGER NULL (100),
  totalRadEngyJ INTEGER (100),
  caldTImpEngyKT INTEGER (100)
);

CREATE TABLE emails
(
  id int NOT NULL AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO emails (email) VALUES ('sally_strong@gmail.com');