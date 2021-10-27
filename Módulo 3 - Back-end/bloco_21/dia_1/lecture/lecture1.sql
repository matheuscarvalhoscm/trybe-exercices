DROP DATABASE IF EXISTS albuns;
CREATE DATABASE albuns;

USE albuns;

CREATE TABLE artists(
  artist_id INT PRIMARY KEY AUTO_INCREMENT,
  artist_name VARCHAR(100) NOT NULL,
  birth_year YEAR NOT NULL
);

CREATE TABLE genres (
  genre_id INT PRIMARY KEY AUTO_INCREMENT,
  genre_name VARCHAR(300)
);

CREATE TABLE albums (
  album_id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(300),
  number_of_songs INT NOT NULL,
  album_length INT NOT NULL,
  artist_id INT NOT NULL,
  genre_id INT NOT NULL,
  FOREIGN KEY (artist_id) REFERENCES artists (artist_id),
  FOREIGN KEY (genre_id) REFERENCES genres (genre_id)
);

CREATE TABLE songs (
  album_id INT NOT NULL,
  artist_id INT NOT NULL,
  FOREIGN KEY (album_id) REFERENCES albums (album_id),
  FOREIGN KEY (artist_id) REFERENCES artists (artist_id),
  PRIMARY KEY (album_id, artist_id)
);



