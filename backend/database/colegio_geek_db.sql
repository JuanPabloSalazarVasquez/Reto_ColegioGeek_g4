CREATE DATABASE colegio_geek_db

--
-- Estructura de tabla para la tabla `directivos`
--

CREATE TABLE `directivos` (
  `id_directivo` int(10) UNSIGNED NOT NULL,
  `id_persona` int(10) UNSIGNED NOT NULL,
  `cargo_directivo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante`
--

CREATE TABLE `estudiante` (
  `id_estudiante` int(10) UNSIGNED NOT NULL,
  `id_persona` int(10) UNSIGNED NOT NULL,
  `id_grupo` int(10) UNSIGNED NOT NULL,
  `grado` varchar(20) NOT NULL,
  `codigo_estudiante` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estudiante`
--

INSERT INTO `estudiante` (`id_estudiante`, `id_persona`, `id_grupo`, `grado`, `codigo_estudiante`) VALUES
(1, 1, 1, '8', 'EMA001'),
(2, 4, 1, '8', 'CON001');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos`
--

CREATE TABLE `grupos` (
  `id_grupo` int(10) UNSIGNED NOT NULL,
  `director_grupo` int(10) UNSIGNED NOT NULL,
  `jornada_grupo` varchar(20) NOT NULL,
  `grado_grupo` varchar(20) NOT NULL,
  `year_grupo` varchar(10) NOT NULL,
  `estado` enum('En curso','Aprobado','Reprobado') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `grupos`
--

INSERT INTO `grupos` (`id_grupo`, `director_grupo`, `jornada_grupo`, `grado_grupo`, `year_grupo`, `estado`) VALUES
(1, 1, 'Mañana', '8', '2021', 'En curso');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maestro`
--

CREATE TABLE `maestro` (
  `id_maestro` int(10) UNSIGNED NOT NULL,
  `id_persona` int(10) UNSIGNED NOT NULL,
  `codigo_maestro` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `maestro`
--

INSERT INTO `maestro` (`id_maestro`, `id_persona`, `codigo_maestro`) VALUES
(1, 2, 'SAN001'),
(2, 3, 'CES001');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

CREATE TABLE `materias` (
  `id_materia` int(10) UNSIGNED NOT NULL,
  `id_grupo` int(10) UNSIGNED NOT NULL,
  `id_maestro` int(10) UNSIGNED NOT NULL,
  `nombre_materia` varchar(50) NOT NULL,
  `codigo_materia` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `materias`
--

INSERT INTO `materias` (`id_materia`, `id_grupo`, `id_maestro`, `nombre_materia`, `codigo_materia`) VALUES
(1, 1, 2, 'Español', 'IDM001');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notas`
--

CREATE TABLE `notas` (
  `id_nota` int(10) UNSIGNED NOT NULL,
  `id_materia` int(10) UNSIGNED NOT NULL,
  `id_grupo` int(10) UNSIGNED NOT NULL,
  `id_estudiante` int(10) UNSIGNED NOT NULL,
  `nota` float UNSIGNED DEFAULT NULL,
  `estado` enum('En curso','Aprobado','Reprobado') NOT NULL,
  `tipo_nota` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `notas`
--

INSERT INTO `notas` (`id_nota`, `id_materia`, `id_grupo`, `id_estudiante`, `nota`, `estado`, `tipo_nota`) VALUES
(1, 1, 1, 1, 4.6, 'En curso', 'Examen'),
(2, 1, 1, 1, 3.4, 'En curso', 'Taller'),
(3, 1, 1, 2, 5, 'En curso', 'Taller');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id_persona` int(10) UNSIGNED NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `tipo_documento` varchar(30) NOT NULL,
  `numero_documento` bigint(10) NOT NULL,
  `sexo` enum('Hombre','Mujer') NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `direccion_residencial` varchar(100) NOT NULL,
  `ciudad_residencial` varchar(100) NOT NULL,
  `tipo_usuario` enum('Directivo','Estudiante','Maestro') NOT NULL,
  `telefono_residencial` varchar(15) NOT NULL,
  `telefono_celular` varchar(15) NOT NULL,
  `correo_electronico` varchar(30) NOT NULL,
  `estado_cuenta` enum('Activa','Inactiva') NOT NULL,
  `foto_perfil` text NOT NULL,
  `pdf_documento` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id_persona`, `nombres`, `apellidos`, `tipo_documento`, `numero_documento`, `sexo`, `fecha_nacimiento`, `direccion_residencial`, `ciudad_residencial`, `tipo_usuario`, `telefono_residencial`, `telefono_celular`, `correo_electronico`, `estado_cuenta`, `foto_perfil`, `pdf_documento`) VALUES
(1, 'Emanuel', 'Acevedo Muñoz', 'T.I', 1000306848, 'Hombre', '2003-07-09', 'Carrera 66 # 52 Sur 60', 'Medellín', 'Estudiante', '4187277', '3187604393', 'emanuelacag@gmail.com', 'Inactiva', '', ''),
(2, 'Santiago', 'Alvarez Muñoz', 'C.C', 3716594082, 'Hombre', '2004-04-08', '1523 Don Skyway', 'Medellín', 'Maestro', '8799187892', '634922274', 'owazazu-1022@yopmail.com', 'Inactiva', '', ''),
(3, 'Cesar', 'Muela Gamboa', 'C.C', 8799187892, 'Hombre', '1992-07-02', '15724 Konopelski Lock', 'Medellín', 'Maestro', '8406918325', '663692374', 'wihussanill-2074@yopmail.com', 'Inactiva', '', ''),
(4, 'Concepcion Lavin', 'San Jose', 'T.I', 7301824623, 'Hombre', '2003-02-25', '444 Damon Extensions', 'Medellín', 'Estudiante', '7315996727', '600479671', 'esocullix-6225@yopmail.com', 'Inactiva', '', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `directivos`
--
ALTER TABLE `directivos`
  ADD PRIMARY KEY (`id_directivo`),
  ADD KEY `fk_id_persona_directivos-persona` (`id_persona`);

--
-- Indices de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`id_estudiante`),
  ADD KEY `fk_id_persona_estudiante-persona` (`id_persona`),
  ADD KEY `fk_id_grupo_estudiante-grupos` (`id_grupo`);

--
-- Indices de la tabla `grupos`
--
ALTER TABLE `grupos`
  ADD PRIMARY KEY (`id_grupo`),
  ADD KEY `fk_director_grupo_grupos-maestro` (`director_grupo`);

--
-- Indices de la tabla `maestro`
--
ALTER TABLE `maestro`
  ADD PRIMARY KEY (`id_maestro`),
  ADD KEY `fk_id_persona_maestro-persona` (`id_persona`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`id_materia`),
  ADD KEY `fk_id_maestro_materias-maestro` (`id_maestro`),
  ADD KEY `fk_id_grupo_materias-grupos` (`id_grupo`);

--
-- Indices de la tabla `notas`
--
ALTER TABLE `notas`
  ADD PRIMARY KEY (`id_nota`),
  ADD KEY `fk_id_materia_nota-materia` (`id_materia`),
  ADD KEY `fk_id_grupo_nota-grupos` (`id_grupo`),
  ADD KEY `fk_id_estudiante_nota-estudiante` (`id_estudiante`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`id_persona`),
  ADD UNIQUE KEY `correo_electronico` (`correo_electronico`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `directivos`
--
ALTER TABLE `directivos`
  MODIFY `id_directivo` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  MODIFY `id_estudiante` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `grupos`
--
ALTER TABLE `grupos`
  MODIFY `id_grupo` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `maestro`
--
ALTER TABLE `maestro`
  MODIFY `id_maestro` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `materias`
--
ALTER TABLE `materias`
  MODIFY `id_materia` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `notas`
--
ALTER TABLE `notas`
  MODIFY `id_nota` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `id_persona` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `directivos`
--
ALTER TABLE `directivos`
  ADD CONSTRAINT `fk_id_persona_directivos-persona` FOREIGN KEY (`id_persona`) REFERENCES `persona` (`id_persona`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD CONSTRAINT `fk_id_grupo_estudiante-grupos` FOREIGN KEY (`id_grupo`) REFERENCES `grupos` (`id_grupo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_id_persona_estudiante-persona` FOREIGN KEY (`id_persona`) REFERENCES `persona` (`id_persona`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `grupos`
--
ALTER TABLE `grupos`
  ADD CONSTRAINT `fk_director_grupo_grupos-maestro` FOREIGN KEY (`director_grupo`) REFERENCES `maestro` (`id_maestro`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `maestro`
--
ALTER TABLE `maestro`
  ADD CONSTRAINT `fk_id_persona_maestro-persona` FOREIGN KEY (`id_persona`) REFERENCES `persona` (`id_persona`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `materias`
--
ALTER TABLE `materias`
  ADD CONSTRAINT `fk_id_grupo_materias-grupos` FOREIGN KEY (`id_grupo`) REFERENCES `grupos` (`id_grupo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_id_maestro_materias-maestro` FOREIGN KEY (`id_maestro`) REFERENCES `maestro` (`id_maestro`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `notas`
--
ALTER TABLE `notas`
  ADD CONSTRAINT `fk_id_estudiante_nota-estudiante` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id_estudiante`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_id_grupo_nota-grupos` FOREIGN KEY (`id_grupo`) REFERENCES `grupos` (`id_grupo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_id_materia_nota-materia` FOREIGN KEY (`id_materia`) REFERENCES `materias` (`id_materia`) ON UPDATE CASCADE;
COMMIT;

