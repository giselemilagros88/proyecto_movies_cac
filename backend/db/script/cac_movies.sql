-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-06-2024 a las 14:45:23
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cac_movies`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `directors`
--

CREATE TABLE `directors` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `directors`
--

INSERT INTO `directors` (`id`, `name`, `last_name`) VALUES
(1, 'George', 'Lucas'),
(2, 'George2', 'Lucas2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genders`
--

CREATE TABLE `genders` (
  `id` int(11) NOT NULL,
  `gender` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `genders`
--

INSERT INTO `genders` (`id`, `gender`) VALUES
(1, 'Action'),
(2, 'Fantasy'),
(3, 'Space opera'),
(4, 'Science fiction'),
(5, 'Drama'),
(6, 'Adventure');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `image` text NOT NULL,
  `title` varchar(70) NOT NULL,
  `date` date NOT NULL,
  `duration` time NOT NULL,
  `overview` varchar(200) NOT NULL,
  `trailer` text NOT NULL,
  `facebook` text NOT NULL,
  `twitter` text NOT NULL,
  `instagram` text NOT NULL,
  `web` text NOT NULL,
  `status` varchar(20) NOT NULL,
  `originalLenguage` varchar(20) NOT NULL,
  `budget` float NOT NULL,
  `revenue` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`id`, `image`, `title`, `date`, `duration`, `overview`, `trailer`, `facebook`, `twitter`, `instagram`, `web`, `status`, `originalLenguage`, `budget`, `revenue`) VALUES
(1, 'https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg', 'Star Wars Episode 3: Revenge of the Siths', '2005-05-19', '02:20:00', 'Three years into the Clone Wars, Obi-Wan Kenobi pursues a new threat, while Anakin Skywalker is lured by Chancellor Palpatine into a sinister plot to rule the galaxy. Nearly three years have passed si', 'https://www.youtube.com/watch?v=5UnjrG_N8hU', 'https://es-la.facebook.com/HBOLatAm/photos/star-wars-episodio-iii-la-venganza-de-los-sith-httpbitly1pjdokv/10154297086170260/', 'https://x.com/allthingsrots?lang=es', 'https://www.instagram.com/revengeofthesitharchive/?hl=es', 'https://www.lucasfilm.com/productions/episode-iii/', 'Released', 'English', 113000000, 850000000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies_directors`
--

CREATE TABLE `movies_directors` (
  `id_movies` int(11) NOT NULL,
  `id_directors` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `movies_directors`
--

INSERT INTO `movies_directors` (`id_movies`, `id_directors`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies_genders`
--

CREATE TABLE `movies_genders` (
  `id_movies` int(11) NOT NULL,
  `id_genders` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `movies_genders`
--

INSERT INTO `movies_genders` (`id_movies`, `id_genders`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies_writters`
--

CREATE TABLE `movies_writters` (
  `id_movies` int(11) NOT NULL,
  `id_writters` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `movies_writters`
--

INSERT INTO `movies_writters` (`id_movies`, `id_writters`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL,
  `birthday` date NOT NULL,
  `country` varchar(20) NOT NULL,
  `isAdmin` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `last_name`, `email`, `password`, `birthday`, `country`, `isAdmin`) VALUES
(2, 'Stefano', 'Simoni', 'stefanosimoni@gmail.com', 'asd123', '2000-06-29', 'Argentina', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `writters`
--

CREATE TABLE `writters` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `writters`
--

INSERT INTO `writters` (`id`, `name`, `last_name`) VALUES
(1, 'George', 'Lucas');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `directors`
--
ALTER TABLE `directors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `genders`
--
ALTER TABLE `genders`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `movies_directors`
--
ALTER TABLE `movies_directors`
  ADD KEY `id_directors` (`id_directors`),
  ADD KEY `id_movies` (`id_movies`);

--
-- Indices de la tabla `movies_genders`
--
ALTER TABLE `movies_genders`
  ADD KEY `id_genders` (`id_genders`),
  ADD KEY `id_movies` (`id_movies`);

--
-- Indices de la tabla `movies_writters`
--
ALTER TABLE `movies_writters`
  ADD KEY `id_movies` (`id_movies`),
  ADD KEY `id_writters` (`id_writters`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `writters`
--
ALTER TABLE `writters`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `directors`
--
ALTER TABLE `directors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `genders`
--
ALTER TABLE `genders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `writters`
--
ALTER TABLE `writters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `movies_directors`
--
ALTER TABLE `movies_directors`
  ADD CONSTRAINT `movies_directors_ibfk_1` FOREIGN KEY (`id_directors`) REFERENCES `directors` (`id`),
  ADD CONSTRAINT `movies_directors_ibfk_2` FOREIGN KEY (`id_movies`) REFERENCES `movies` (`id`);

--
-- Filtros para la tabla `movies_genders`
--
ALTER TABLE `movies_genders`
  ADD CONSTRAINT `movies_genders_ibfk_1` FOREIGN KEY (`id_genders`) REFERENCES `genders` (`id`),
  ADD CONSTRAINT `movies_genders_ibfk_2` FOREIGN KEY (`id_movies`) REFERENCES `movies` (`id`);

--
-- Filtros para la tabla `movies_writters`
--
ALTER TABLE `movies_writters`
  ADD CONSTRAINT `movies_writters_ibfk_1` FOREIGN KEY (`id_movies`) REFERENCES `movies` (`id`),
  ADD CONSTRAINT `movies_writters_ibfk_2` FOREIGN KEY (`id_writters`) REFERENCES `writters` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
