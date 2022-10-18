DROP DATABASE IF EXISTS CombatArena_Game;
CREATE DATABASE CombatArena_Game;
-- USE CombatArena_Game;
-- CREATE TABLE Characters (
-- id INT NOT NULL AUTO_INCREMENT, 
-- name VARCHAR (255) NOT NULL,
-- strength INT NOT NULL,
-- health INT NOT NULL,
-- PRIMARY KEY (id)
-- );
-- CREATE TABLE Players (
-- id INT NOT NULL AUTO_INCREMENT,
-- name VARCHAR(255) NOT NULL,
-- password VARCHAR(255) NOT NULL, 
-- user_id INT NOT NULL,
-- character_id VARCHAR(255) NOT NULL,
-- PRIMARY KEY (id),
-- FOREIGN KEY (user_id) REFERENCES Players(id)
-- );


-- INSERT INTO characters (name, strength, health)
-- VALUES ('Goblin', 20, 5 ),
-- 		('Thief', 40, 10),
--         ('Assassin', 50, 10),
--         ('Cyclops', 50, 20),
--         ('Vampire', 60, 20);
        
-- INSERT INTO players (name, password, user_id, character_id)
-- VALUES ('leothoma', 'tom', 1, 'thief' );

-- SELECT * FROM characters;

-- SELECT * FROM players;