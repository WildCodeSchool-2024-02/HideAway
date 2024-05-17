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

-- --------------------------------------------------------
--
-- Structure de la table `item`
--

CREATE TABLE `item` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `title` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

--
-- Contenu de la table `item`
--

INSERT INTO
    `item` (`id`, `title`)
VALUES (1, 'Stuff'),
    (2, 'Doodads');

--
CREATE TABLE `user` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(50) NOT NULL,
    `lastname` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `is_admin` BOOLEAN NULL
);

INSERT INTO
    `user` (
        `firstname`,
        `lastname`,
        `password`,
        `email`,
        `is_admin`
    )
VALUES (
        'test',
        'test',
        'test',
        'test@test.com',
        '0'
    );
-- Index pour les tables exportées
--

CREATE TABLE `retraite` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(100) NOT NULL,
    `first_url` VARCHAR(255) NOT NULL,
    `sous_titre` VARCHAR(100) NOT NULL,
    `description` TEXT NULL,
    `activity1` VARCHAR(250) NULL,
    `acti1_url` VARCHAR(250) NULL,
    `activity2` VARCHAR(250) NULL,
    `acti2_url` VARCHAR(250) NULL,
    `activity3` VARCHAR(250) NULL,
    `acti3_url` VARCHAR(250) NULL,
    `activity4` VARCHAR(250) NULL,
    `acti4_url` VARCHAR(250) NULL,
    `activity5` VARCHAR(250) NULL,
    `acti5_url` VARCHAR(250) NULL
);

INSERT INTO
    `retraite` (
        `titre`,
        `first_url`,
        `sous-titre`,
        `description`,
        `activity1`,
        `acti1_url`,
        `activity2`,
        `acti2_url`,
        `activity3`,
        `acti3_url`,
        `activity4`,
        `acti4_url`,
        `activity5`,
        `acti5_url`
    )
VALUES (
        'toto',
        'https://www.assuropoil.fr/wp-content/uploads/2023/07/avoir-un-chat-sante.jpg',
        'ceci est un sous titre',
        'Mon cul sur la commode',
        'la première activité',
        'https://lemagduchat.ouest-france.fr/images/dossiers/2019-02/mini/chat-jouer-131405-650-400.jpg' '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
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