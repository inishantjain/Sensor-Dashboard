
--@block
CREATE TABLE DHT11(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    temperature DECIMAL(5,2),
    humidity DECIMAL(5,2),
    timestamp DATETIME
)


--@block
CREATE INDEX idx_timestamp ON DHT11(timestamp);

--@block
LOAD DATA INFILE './data.csv'
INTO TABLE DHT11 
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '/n'
IGNORE 1 ROWS;

--@block
SELECT * FROM DHT11;

--@block 
SELECT COUNT(id) FROM dht11;

--@block
TRUNCATE TABLE DHT11;

--@block
SELECT timestamp, temperature, humidity FROM DHT11;

--@block get data of a day
SELECT * FROM DHT11
WHERE DATE(timestamp) = '2016-02-15';

--@block get data of a specific hour for each day
SELECT * FROM DHT11
WHERE TIME(timestamp) = '04:00:00'  AND DATE(timestamp) BETWEEN '2016-01-15' AND '2016-01-25';

--@block
SELECT DATE(timestamp), AVG(temperature) FROM DHT11
WHERE DATE(timestamp) BETWEEN '2016-01-15' AND '2016-01-17'
GROUP BY DATE(timestamp);