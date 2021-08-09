-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 10-08-2021 a las 01:53:18
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ecommercepwi`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id`, `id_producto`, `id_usuario`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 2, 1, 1, '2021-08-08 22:30:09', '2021-08-08 23:32:19'),
(2, 1, 1, 1, '2021-08-08 22:56:47', '2021-08-08 23:21:21'),
(3, 3, 1, 1, '2021-08-08 22:56:51', '2021-08-08 23:21:11'),
(4, 1, 1, 1, '2021-08-08 23:21:58', '2021-08-08 23:32:19'),
(5, 3, 1, 1, '2021-08-08 23:21:59', '2021-08-08 23:22:21'),
(6, 1, 1, 1, '2021-08-08 23:22:01', '2021-08-08 23:22:18'),
(7, 1, 3, 1, '2021-08-09 20:31:21', '2021-08-09 20:32:02'),
(8, 2, 3, 1, '2021-08-09 20:33:53', '2021-08-09 20:34:44'),
(9, 2, 3, 1, '2021-08-09 20:34:05', '2021-08-09 20:34:44'),
(10, 1, 3, 1, '2021-08-09 20:34:17', '2021-08-09 20:34:44'),
(11, 3, 3, 1, '2021-08-09 20:34:28', '2021-08-09 20:34:44'),
(12, 2, 3, 1, '2021-08-09 20:34:38', '2021-08-09 20:34:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `categoria` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `categoria`, `descripcion`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'Celulares importados', 'Celulares Iphone y Samsungs', 0, '2021-07-22 18:20:45', '2021-07-22 18:20:45'),
(2, 'Celulares de segunda linea', 'Celulares Xiaomi, Huawei, etc.', 0, '2021-07-29 00:01:22', '2021-07-29 00:09:43'),
(3, 'dsadasdsadsa', 'dsadsadsadsadsa', 1, '2021-07-29 00:09:49', '2021-07-29 00:09:51');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `precio` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `marca` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `stock`, `id_categoria`, `marca`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'Iphone 11', 'Iphone 11 de 128gb', 1200, 65, 1, 'IPHONE', 0, '2021-07-22 18:21:26', '2021-07-28 23:29:44'),
(2, 'Samsung s20', 'Samsung s20 de 256gb', 800, 100, 1, 'SAMSUNG', 0, '2021-07-22 18:22:14', '2021-07-22 18:22:14'),
(3, 'Iphone 12', 'Iphone 12 de 64gb', 1200, 55, 1, 'IPHONE', 0, '2021-07-28 23:01:33', '2021-07-28 23:01:33'),
(4, 'iPhone 12 Pro Max (256 GB)', 'iPhone 12 Pro Max con procesador A14 Bionic, 256 GB de almacenamiento interno y triple cámara de 12+12+12 MP.', 1600, 100, 1, 'IPHONE', 0, '2021-08-09 20:48:29', '2021-08-09 20:48:29'),
(5, 'Motorola Moto G20', 'Te presentamos el Motorola Moto G20 con un procesador Octa-Core 1.8 GHz para que estés al día con todas las aplicaciones y juegos de última generación. Descubrí todas las posibilidades para tus fotos, tanto de día como de noche, con la cámara de 48+8+2+2 ', 1000, 25, 2, 'MOTOROLA', 0, '2021-08-09 20:49:27', '2021-08-09 20:49:27'),
(6, 'LG K51s', 'Te presentamos el LG K51s con un procesador Octa-Core (2.3GHz, 1.8 GHz) para que estés al día con todas las aplicaciones y juegos de última generación. Descubrí todas las posibilidades para tus fotos, tanto de día como de noche, con la cámara de 32+5+2+2 ', 800, 36, 2, 'LG', 0, '2021-08-09 20:50:41', '2021-08-09 20:50:41'),
(7, 'Samsung Galaxy A32', 'Te presentamos el Samsung Galaxy A32 con un procesador Octa-Core (2.0GHz, 1.8GHz) para que estés al día con todas las aplicaciones y juegos de última generación. Descubrí todas las posibilidades para tus foto, tanto de día como de noche, con la cámara de ', 600, 24, 2, 'SAMSUNG', 0, '2021-08-09 20:51:39', '2021-08-09 20:51:39');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_imagenes`
--

CREATE TABLE `productos_imagenes` (
  `id` int(11) NOT NULL,
  `uid` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `id_producto` int(11) NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `productos_imagenes`
--

INSERT INTO `productos_imagenes` (`id`, `uid`, `id_producto`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'Galaxy-S20-azul.jpg', 2, 0, '2021-07-22 18:31:10', '2021-07-28 20:50:13'),
(2, '605d6ded-33e1-4dc9-93c1-9579d82d9057.jpeg', 1, 0, '2021-07-22 18:31:10', '2021-07-28 23:29:50'),
(3, '741929cf-d6e4-45e4-bec9-1017c0cc08c6.jpeg', 3, 0, '2021-07-28 23:01:33', '2021-07-28 23:01:33'),
(4, '1c159afa-faa7-4942-8750-33bae529cb09.png', 4, 0, '2021-08-09 20:48:29', '2021-08-09 20:48:29'),
(5, 'd922166d-6d02-452d-b639-0f21a3609679.png', 5, 0, '2021-08-09 20:49:27', '2021-08-09 20:49:27'),
(6, 'e4054d8d-ab89-41a5-a306-73e8fa1fea9b.png', 6, 0, '2021-08-09 20:50:41', '2021-08-09 20:50:41'),
(7, 'e016da15-e77e-4333-add8-1da19cac7798.png', 7, 0, '2021-08-09 20:51:39', '2021-08-09 20:51:39');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `mail` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `pass` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `telefono` int(111) NOT NULL,
  `admin` tinyint(4) NOT NULL DEFAULT 0,
  `habilitado` tinyint(4) NOT NULL DEFAULT 0,
  `confirmacionCorreo` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `username`, `mail`, `pass`, `telefono`, `admin`, `habilitado`, `confirmacionCorreo`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'santi', 'sanuibarbia', 'santibarbia@gmail.com', '95cab5b3c03c4f3a3d662a1315217b1e67c24a7a', 2147483647, 1, 1, 'ad00a519-a9ed-43df-afb5-cad21450f220', 0, '2021-07-15 22:51:38', '2021-08-09 20:11:29'),
(2, 'Leo', 'leo47', 'santibarbia@gmail.com', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 1254612335, 1, 1, '76e0354e-b83d-4804-b089-ee87c0fe201a', 1, '2021-07-15 23:01:22', '2021-07-28 22:48:18'),
(3, 'Santiago', 'messi2', 'santibarbia@gmail.com', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 1234, 1, 1, 'e1b1ec9e-0253-4fc8-ab62-70ccba64f17c', 0, '2021-07-22 17:35:38', '2021-07-22 17:36:20');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_producto` (`id_producto`,`id_usuario`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indices de la tabla `productos_imagenes`
--
ALTER TABLE `productos_imagenes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_producto_2` (`id_producto`),
  ADD KEY `id_producto` (`id_producto`),
  ADD KEY `id_producto_3` (`id_producto`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `productos_imagenes`
--
ALTER TABLE `productos_imagenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `carrito_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`);

--
-- Filtros para la tabla `productos_imagenes`
--
ALTER TABLE `productos_imagenes`
  ADD CONSTRAINT `productos_imagenes_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
