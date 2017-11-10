CREATE DATABASE expressAPIfireball;
USE expressAPIfireball;

CREATE TABLE fireball (
  peakBrightness INTEGER, 
  latitudeDegrees INTEGER,
  longitudeDegrees INTEGER,
  altitudeKilometers INTEGER,
  velocityKMS INTEGER NULL,
  velxKMS INTEGER NULL,
  velyKMS INTEGER NULL,
  velzKMS INTEGER NULL,
  totalRadEngyJ INTEGER,
  caldTImpEngyKT INTEGER
);
