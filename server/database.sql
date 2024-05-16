-- Active: 1711385285915@@127.0.0.1@3306@hideaway
-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 26 Octobre 2017 à 13:53
-- Version du serveur :  5.7.19-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!40101 SET NAMES utf8mb4 */
;

--
-- Base de données :  `simple-mvc`
--
CREATE DATABASE "hideaway";

-- --------------------------------------------------------
--
-- Structure de la table `item`
--
CREATE TABLE `user` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(50) NOT NULL,
    `lastname` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `is_admin` BOOL NULL
)

INSERT INTO
    `user` (
        `firstname`,
        `lastname`,
        `password`,
        `email`,
        `is_admin`
    )
VALUES ()

CREATE TABLE `item` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT `title` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

--
-- Contenu de la table `item`
--

INSERT INTO
    `item` (`id`, `title`)
VALUES (1, 'Stuff'),
    (2, 'Doodads');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `item`
--
ALTER TABLE `item` ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `item`
--
ALTER TABLE `item`
MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;

CREATE TABLE `retraite` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(100) NOT NULL,
    `first_url` VARCHAR(255) NOT NULL,
    `sous-titre` VARCHAR(100) NOT NULL,
    `description` TEXT NULL,
    `activity1` VARCHAR(250) NULL,
    `acti1_url` VARCHAR(250) NULL,
    `activity2` VARCHAR(250) NULL,
    `acti1_ur2` VARCHAR(250) NULL,
    `activity3` VARCHAR(250) NULL,
    `acti1_ur3` VARCHAR(250) NULL,
    `activity4` VARCHAR(250) NULL,
    `acti1_ur4` VARCHAR(250) NULL,
    `activity5` VARCHAR(250) NULL,
    `acti1_ur5` VARCHAR(250) NULL
);

CREATE TABLE `quizz` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `offer` BOOLEAN,
    `nb_person` INT NOT NULL,
    `age` VARCHAR(3),
    `have_child` BOOLEAN,
    `nb_child` INT NOT NULL,
    `u_are` VARCHAR(250),
    `u_like` VARCHAR(250),
    `user_id` INT NOT NULL REFERENCES `user_id` (id)
)