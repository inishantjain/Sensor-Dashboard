--decimal is used for high precision then double then float for less precision
--for non char type if empty cell is encountered it will throw error coz emty cell interpreted as ''
--replace empty values with \N
--@block
CREATE TABLE MAIN (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    timestamp DATETIME,
    temperature DECIMAL(5,2), 
    dew_point DECIMAL(5,2),
    humidity DECIMAL(5,2),
    wind_speed DECIMAL(5,2),
    wind_gust INT,
    precipitation FLOAT,
    visibility FLOAT,
    atm_pressure FLOAT,
    weather_type VARCHAR(255),
    conditions VARCHAR(255)
);

--@block
SHOW VARIABLES LIKE 'local_infile';
--@block
SHOW VARIABLES LIKE 'secure_file_priv';
--@block
SET GLOBAL local_infile = true;

--@block 
ALTER TABLE main MODIFY atm_pressure FLOAT NULL;


--@block
LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/Kolkata_weather.csv'
INTO TABLE MAIN 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS
(id, timestamp, temperature, dew_point, humidity, wind_speed, wind_gust, precipitation, visibility, atm_pressure, weather_type, conditions)
; 

--@block
CREATE INDEX idx_timestamp ON DHT11(timestamp);

--@block
LOAD DATA INFILE './data/Kolkata_weather.csv'
INTO TABLE MAIN 
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '/n'
IGNORE 1 ROWS
(id, timestamp, temperature, dew_point, humidity, wind_speed, wind_gust, precipitation, visibility, atm_pressure, weather_type, conditions)
;

--@block
SELECT * FROM main;
--@block
SELECT * FROM readings;

--@block 
SELECT COUNT(id) FROM dht11;

--@block
TRUNCATE TABLE main;


--@block
SELECT timestamp, temperature, humidity FROM DHT11;

--@block get data of a day
SELECT * FROM DHT11
WHERE DATE(timestamp) = '2015-01-01';

--@block get data of a specific hour for each day
SELECT * FROM DHT11
WHERE TIME(timestamp) = '04:00:00'  AND DATE(timestamp) BETWEEN '2016-01-15' AND '2016-01-25';

--@block
SELECT DATE(timestamp), AVG(temperature) FROM DHT11
WHERE DATE(timestamp) BETWEEN '2016-01-15' AND '2016-01-17'
GROUP BY DATE(timestamp);

--@block
DELETE FROM DHT11 
WHERE id NOT IN (
  SELECT id FROM (
    SELECT MIN(id) as id
    FROM DHT11
    GROUP BY timestamp
    HAVING COUNT(*) > 1
  ) AS temp
);



--@block
SELECT CONVERT_TZ('2014-12-31 23:30:00', '+00:00', '+05:30') AS ist_timestamp;


