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

-- INSERT INTO
--     `retraite` (
--         `titre`,
--         `first_url`,
--         `sous_titre`,
--         `description`,
--         `activity1`,
--         `acti1_url`,
--         `activity2`,
--         `acti2_url`,
--         `activity3`,
--         `acti3_url`,
--         `activity4`,
--         `acti4_url`,
--         `activity5`,
--         `acti5_url`
--     )
-- VALUES (
--         'LA RETRAITE DES GOAT',
--         'https://visa-forme.fr/wp-content/uploads/2023/02/yoga-chevre.jpg',
--         'Vous ne rêvez pas. Elle porte un legging',
--         'Venez découvrir notre retraite dans le Larzac entourée de nos amies les chèvres. Une semaine de déconnexion à la réalité et de reconnexion  à la nature. De nombreuses activités sont à découvrir et nous vous accompagnons dans cette expérience inédite !',
--         'Yoga avec les chèvres',
--         'https://www.francebleu.fr/s3/cruiser-production/2018/07/c708a7db-8115-4840-a712-0f91f3651fa4/1200x680_35814929_132431214311703_8907310345639428096_n.jpg',
--         'Activité fromage de chèvre',
--         'https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_244,q_auto,dpr_2.0,w_325/https://images-ca-1-0-1-eu.s3-eu-west-1.amazonaws.com/photos/original/1206/fromage-de-chevre-AdobeStock_175740977.jpg',
--         'ShowCase de la chèvre de Mr Seguin',
--         'https://weezevent.com/wp-content/uploads/2018/08/27184142/organiser-un-concert-en-7-etapes.png',
--         'Barbecue de chèvre',
--         'https://alaloupe.be/wp-content/uploads/barbecue-conseil-et-astuces.jpg',
--         'Taxidermie de chèvre',
--         'https://www.francebleu.fr/s3/cruiser-production/2023/08/1318e8de-6396-4880-881d-3a31b2924c79/1200x680_sc_taxidermie-animaux-table-de-cuisine.jpg'
--     ),
--     (
--         'La retraite des retraités',
--         'https://france3-regions.francetvinfo.fr/image/ATk4a49x1bk7xzKhbvFN5STVOvg/600x400/regions/2021/06/29/60db216f5746e_gh018134-00-01-05-04-5378140.jpg',
--         'On préfère notre grand-parents branchés plutôt que débranché.',
--         'Envie d’une semaine de sport intense ? Venez profitez de votre retraite dans notre retraite dans un contexte hors du commun. Eloigné de toute technologie, venez découvrir les sports extrême entre senior !',
--         'Saut en parachute',
--         'https://images.ladepeche.fr/api/v1/images/view/6527ea3e2ba668485156d6c9/large/image.jpg?v=1',
--         'Surf',
--         'https://cdn.sortiraparis.com/images/1001/66131/560283-surf-in-paris-la-nouvelle-experience-aquatique-signee-the-escape-lab.jpg',
--         'Baptème de voltige',
--         'https://vertical-flight-experience.com/cdn/shop/files/Immersion3.jpg?v=1689626544&width=600',
--         'Escalade sur glace',
--         'https://www.montanus.fr/wp-content/uploads/2019/06/cascade-de-glace-e1560866405650.jpg',
--         'Jet Pack',
--         'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/fa/66/5a.jpg'
--     ),
--     (
--         'Dans son plus simple appareil',
--         'https://resize.prod.femina.ladmedia.fr/rblr/652,438/img/var/2023-07/liste-plages-naturistes-nudiste-region-france.jpg',
--         'Vous ne rêvez pas. Elle ne porte rien',
--         'Pour les plus courageux, nous proposons une retraite insolite à l’abris des regards. Ne vous embêtez pas avec les dimensions de votre valise pour l’avion, venez comme vous êtes.',
--         'Randonnue',
--         'https://lyon.citycrunch.fr/wp-content/uploads/sites/3/2021/03/Rando_Nu_St_Saur_en_Mont_d_Or-4-800x356.jpg',
--         'Olympoils',
--         'https://monteambuilding.com/wp-content/uploads/Olympiades-Team-Building-02.jpg',
--         'Lutte',
--         'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/DCB2/production/_105689465_gettyimages-527507078.jpg',
--         'Barbecul',
--         'https://www.deco.fr/sites/default/files/styles/1200x675/public/2023-07/shutterstock_2234937131.webp',
--         'VolleyBall',
--         'https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w1460/f_auto/primary/rdbsep1hixcdtquioi5h'
--     ),
--     (
--         'Une retraite sans enfant ?',
--         'https://apprendreaeduquer.fr/wp-content/uploads/2016/10/taches-m%C3%A9nag%C3%A8res-enfant.png',
--         'Ils feront enfin votre boulot',
--         'Vous souhaitez partir en vacances sans laisser vos enfants pour autant ? Cette retraite vous permet de vous retrouver en couple tout en ayant vos enfants à porté de vue. Activitées relaxante pour vous et initiation ',
--         'Dégustation de vin',
--         'https://www.ledecante.fr/wp-content/uploads/2018/12/degustation-cle-principe-etape-comment-degustercheers-people-white-wine-min-le-decante-wine-guide-du-vin-bar-cave-2880x1800.jpg',
--         'Leçon de salsa',
--         'https://www.tandemmadrid.com/wp-content/uploads/2024/01/salsa.jpg.webp',
--         'Tournois de VolleyBall',
--         'https://weezevent.com/wp-content/uploads/2023/07/25174441/organiser-tournoi-beach-volley.jpg',
--         'Plongée',
--         'https://img-3.journaldesfemmes.fr/ot6argsxIMeFuDZxcKCAQVb9bsg=/1500x/smart/51d1f15483b94085b0d99e7b0100c63c/ccmcms-jdf/38209839.jpg',
--         'Cours de cuisine',
--         'https://weezevent.com/wp-content/uploads/2019/09/26170152/organiser-cours-cuisine.jpg'
--     ),
--     (
--         'Déconnecté en restant connecté',
--         'https://www.ma-carte-geographique.com/wp-content/uploads/2020/07/shutterstock_591580310-1.jpg',
--         'Partez en voyage en restant chez vous',
--         'Nous vous proposons une retraite en réalité virtuelle pour une excursion dans la nature depuis votre canapé. La retraite la plus économique et une expérience immersive inédite !',
--         'Cours de Yaourt en Savoie',
--         'https://cdn-s-www.dna.fr/images/25D78B15-4E0C-425F-B66D-922DEFE53974/NW_raw/le-lait-en-cours-de-fermentation-doit-etre-a-une-temperature-comprise-entre-45-et-46-c-durant-8h-photo-adobe-stock-1692607609.jpg',
--         'Lecture au bord du Lac de Côme',
--         'https://media.routard.com/image/99/7/tremezzo-lac-come.1526997.w630.jpg',
--         'Safari en Afrique du Sud',
--         'http://www.nexplorea.com/wp-content/uploads/sites/3/2015/07/Safari-Afrique-du-sud-185x185.jpg',
--         'Jeu de société dans les Alpes',
--         'https://docs.montagne-vacances.com/actualites/large/ou-aller-en-sejour-dans-les-alpes-du-sud-l-ete-1914.webp',
--         'Balade en canoë',
--         'http://aufildeleau40.fr/wp-content/uploads/2018/11/balade_nature_17.jpg',
--     );

INSERT INTO
    `retraite` (
        `titre`,
        `first_url`,
        `sous_titre`,
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
        'LA RETRAITE DES GOAT',
        'https://visa-forme.fr/wp-content/uploads/2023/02/yoga-chevre.jpg',
        'Vous ne rêvez pas. Elle porte un legging',
        'Venez découvrir notre retraite dans le Larzac entourée de nos amies les chèvres. Une semaine de déconnexion à la réalité et de reconnexion  à la nature. De nombreuses activités sont à découvrir et nous vous accompagnons dans cette expérience inédite !',
        'Yoga avec les chèvres',
        'https://www.francebleu.fr/s3/cruiser-production/2018/07/c708a7db-8115-4840-a712-0f91f3651fa4/1200x680_35814929_132431214311703_8907310345639428096_n.jpg',
        'Activité fromage de chèvre',
        'https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_244,q_auto,dpr_2.0,w_325/https://images-ca-1-0-1-eu.s3-eu-west-1.amazonaws.com/photos/original/1206/fromage-de-chevre-AdobeStock_175740977.jpg',
        'ShowCase de la chèvre de Mr Seguin',
        'https://weezevent.com/wp-content/uploads/2018/08/27184142/organiser-un-concert-en-7-etapes.png',
        'Barbecue de chèvre',
        'https://alaloupe.be/wp-content/uploads/barbecue-conseil-et-astuces.jpg',
        'Taxidermie de chèvre',
        'https://www.francebleu.fr/s3/cruiser-production/2023/08/1318e8de-6396-4880-881d-3a31b2924c79/1200x680_sc_taxidermie-animaux-table-de-cuisine.jpg'
    ),
    (
        'La retraite des retraités',
        'https://france3-regions.francetvinfo.fr/image/ATk4a49x1bk7xzKhbvFN5STVOvg/600x400/regions/2021/06/29/60db216f5746e_gh018134-00-01-05-04-5378140.jpg',
        'On préfère notre grand-parents branchés plutôt que débranché.',
        'Envie d’une semaine de sport intense ? Venez profitez de votre retraite dans notre retraite dans un contexte hors du commun. Eloigné de toute technologie, venez découvrir les sports extrême entre senior !',
        'Saut en parachute',
        'https://images.ladepeche.fr/api/v1/images/view/6527ea3e2ba668485156d6c9/large/image.jpg?v=1',
        'Surf',
        'https://cdn.sortiraparis.com/images/1001/66131/560283-surf-in-paris-la-nouvelle-experience-aquatique-signee-the-escape-lab.jpg',
        'Baptème de voltige',
        'https://vertical-flight-experience.com/cdn/shop/files/Immersion3.jpg?v=1689626544&width=600',
        'Escalade sur glace',
        'https://www.montanus.fr/wp-content/uploads/2019/06/cascade-de-glace-e1560866405650.jpg',
        'Jet Pack',
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/fa/66/5a.jpg'
    ),
    (
        'Dans son plus simple appareil',
        'https://resize.prod.femina.ladmedia.fr/rblr/652,438/img/var/2023-07/liste-plages-naturistes-nudiste-region-france.jpg',
        'Vous ne rêvez pas. Elle ne porte rien',
        'Pour les plus courageux, nous proposons une retraite insolite à l’abris des regards. Ne vous embêtez pas avec les dimensions de votre valise pour l’avion, venez comme vous êtes.',
        'Randonnue',
        'https://lyon.citycrunch.fr/wp-content/uploads/sites/3/2021/03/Rando_Nu_St_Saur_en_Mont_d_Or-4-800x356.jpg',
        'Olympoils',
        'https://monteambuilding.com/wp-content/uploads/Olympiades-Team-Building-02.jpg',
        'Lutte',
        'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/DCB2/production/_105689465_gettyimages-527507078.jpg',
        'Barbecul',
        'https://www.deco.fr/sites/default/files/styles/1200x675/public/2023-07/shutterstock_2234937131.webp',
        'VolleyBall',
        'https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w1460/f_auto/primary/rdbsep1hixcdtquioi5h'
    ),
    (
        'Une retraite sans enfant ?',
        'https://apprendreaeduquer.fr/wp-content/uploads/2016/10/taches-m%C3%A9nag%C3%A8res-enfant.png',
        'Ils feront enfin votre boulot',
        'Vous souhaitez partir en vacances sans laisser vos enfants pour autant ? Cette retraite vous permet de vous retrouver en couple tout en ayant vos enfants à porté de vue. Activitées relaxante pour vous et initiation ',
        'Dégustation de vin',
        'https://www.ledecante.fr/wp-content/uploads/2018/12/degustation-cle-principe-etape-comment-degustercheers-people-white-wine-min-le-decante-wine-guide-du-vin-bar-cave-2880x1800.jpg',
        'Leçon de salsa',
        'https://www.tandemmadrid.com/wp-content/uploads/2024/01/salsa.jpg.webp',
        'Tournois de VolleyBall',
        'https://weezevent.com/wp-content/uploads/2023/07/25174441/organiser-tournoi-beach-volley.jpg',
        'Plongée',
        'https://img-3.journaldesfemmes.fr/ot6argsxIMeFuDZxcKCAQVb9bsg=/1500x/smart/51d1f15483b94085b0d99e7b0100c63c/ccmcms-jdf/38209839.jpg',
        'Cours de cuisine',
        'https://weezevent.com/wp-content/uploads/2019/09/26170152/organiser-cours-cuisine.jpg'
    ),
    (
        'Déconnecté en restant connecté',
        'https://www.ma-carte-geographique.com/wp-content/uploads/2020/07/shutterstock_591580310-1.jpg',
        'Partez en voyage en restant chez vous',
        'Nous vous proposons une retraite en réalité virtuelle pour une excursion dans la nature depuis votre canapé. La retraite la plus économique et une expérience immersive inédite !',
        'Cours de Yaourt en Savoie',
        'https://cdn-s-www.dna.fr/images/25D78B15-4E0C-425F-B66D-922DEFE53974/NW_raw/le-lait-en-cours-de-fermentation-doit-etre-a-une-temperature-comprise-entre-45-et-46-c-durant-8h-photo-adobe-stock-1692607609.jpg',
        'Lecture au bord du Lac de Côme',
        'https://media.routard.com/image/99/7/tremezzo-lac-come.1526997.w630.jpg',
        'Safari en Afrique du Sud',
        'http://www.nexplorea.com/wp-content/uploads/sites/3/2015/07/Safari-Afrique-du-sud-185x185.jpg',
        'Jeu de société dans les Alpes',
        'https://docs.montagne-vacances.com/actualites/large/ou-aller-en-sejour-dans-les-alpes-du-sud-l-ete-1914.webp',
        'Balade en canoë',
        'http://aufildeleau40.fr/wp-content/uploads/2018/11/balade_nature_17.jpg'
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