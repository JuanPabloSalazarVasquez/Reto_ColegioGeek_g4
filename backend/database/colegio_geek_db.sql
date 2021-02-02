CREATE USER emanuel;
ALTER USER emanuel WITH PASSWORD '1000306848';


CREATE DATABASE colegio_geek_db WITH 
OWNER = 'emanuel'
ENCODING = 'UTF8'

CREATE DATABASE colegio_geek_db WITH 
ENCODING = 'UTF8';


-- Eliminación de tablas
DROP TABLE IF EXISTS directivos;
DROP TABLE IF EXISTS consolidados;
DROP TABLE IF EXISTS grupos_estudiantes;
DROP TABLE IF EXISTS grupos_materias;
DROP TABLE IF EXISTS notas;
DROP TABLE IF EXISTS estudiante;
DROP TABLE IF EXISTS materias;
DROP TABLE IF EXISTS grupos;
DROP TABLE IF EXISTS maestros;
DROP TABLE IF EXISTS persona;

-- Eliminación de secuencias
DROP SEQUENCE IF EXISTS directivos_seq;
DROP SEQUENCE IF EXISTS consolidados_seq;
DROP SEQUENCE IF EXISTS grupos_estudiantes_seq;
DROP SEQUENCE IF EXISTS grupos_materias_seq;
DROP SEQUENCE IF EXISTS notas_seq;
DROP SEQUENCE IF EXISTS estudiante_seq;
DROP SEQUENCE IF EXISTS materias_seq;
DROP SEQUENCE IF EXISTS grupos_seq;
DROP SEQUENCE IF EXISTS maestros_seq;
DROP SEQUENCE IF EXISTS persona_seq;


-- Eliminación de enumracíon
DROP TYPE IF EXISTS enum_genero;
DROP TYPE IF EXISTS enum_estado_estudiante;
DROP TYPE IF EXISTS enum_estado_grupo_estudiantes;
DROP TYPE IF EXISTS enum_materia_sexto;
DROP TYPE IF EXISTS enum_materia_septimo;
DROP TYPE IF EXISTS enum_materia_octavo;
DROP TYPE IF EXISTS enum_materia_noveno;
DROP TYPE IF EXISTS enum_materia_decimo;
DROP TYPE IF EXISTS enum_materia_once;
DROP TYPE IF EXISTS enum_persona_estado_cuenta;
DROP TYPE IF EXISTS enum_persona_tipo_usuario;

-- Creación de secuencias 
CREATE SEQUENCE directivos_seq;
CREATE SEQUENCE consolidados_seq;
CREATE SEQUENCE grupos_estudiantes_seq;
CREATE SEQUENCE grupos_materias_seq;
CREATE SEQUENCE notas_seq;
CREATE SEQUENCE estudiante_seq;
CREATE SEQUENCE materias_seq;
CREATE SEQUENCE grupos_seq;
CREATE SEQUENCE maestros_seq;
CREATE SEQUENCE persona_seq;

-- Creación de enumeraciones 
CREATE TYPE enum_genero AS ENUM ('Hombre', 'Mujer');
CREATE TYPE enum_estado_estudiante AS ENUM ('Estudiando','Graduado');
CREATE TYPE enum_estado_grupo_estudiantes AS ENUM ('En curso','Aprobado','Reprobado');
CREATE TYPE enum_materia_sexto AS ENUM ('S','N');
CREATE TYPE enum_materia_septimo AS ENUM ('S','N');
CREATE TYPE enum_materia_octavo AS ENUM ('S','N');
CREATE TYPE enum_materia_noveno AS ENUM ('S','N');
CREATE TYPE enum_materia_decimo AS ENUM ('S','N');
CREATE TYPE enum_materia_once AS ENUM ('S','N');
CREATE TYPE enum_persona_estado_cuenta AS ENUM ('Activa','Inactiva');
CREATE TYPE enum_persona_tipo_usuario AS ENUM ('Directivo','Maestro','Estudiante');



-- Tabla consolidados
CREATE TABLE consolidados (
  id_consolidado int4 NOT NULL DEFAULT NEXTVAL ('consolidados_seq'),
  id_estudiante int4 NOT NULL,
  consolidado text NOT NULL,
  PRIMARY KEY (id_consolidado)
);


-- Tabla directivos
CREATE TABLE directivos (
  id_directivo int4 NOT NULL DEFAULT NEXTVAL ('directivos_seq'),
  id_persona int4 NOT NULL,
  cargo_directivo varchar(20) NOT NULL,
  PRIMARY KEY (id_directivo)
);


-- Tabla estudiante
CREATE TABLE estudiante (
  id_estudiante int4 NOT NULL DEFAULT NEXTVAL ('estudiante_seq'),
  id_persona int4 NOT NULL,
  codigo_estudiante varchar(20) NOT NULL,
  estado_estudiante enum_estado_estudiante NOT NULL,
  PRIMARY KEY (id_estudiante)
);

ALTER TABLE estudiante
  ADD CONSTRAINT UQ_estudiante_codigo
  UNIQUE (codigo_estudiante);


-- Tabla grupos
CREATE TABLE grupos (
  id_grupo int4 NOT NULL DEFAULT NEXTVAL ('grupos_seq'),
  director_id_maestro int4  NOT NULL,
  codigo_grupo varchar(20) NOT NULL,
  jornada_grupo varchar(20) NOT NULL,
  grado_grupo varchar(20) NOT NULL,
  year_grupo varchar(10) NOT NULL,
  PRIMARY KEY (id_grupo)
);

ALTER TABLE grupos
  ADD CONSTRAINT UQ_grupos_codigo
  UNIQUE (codigo_grupo);


-- Tablagrupos-estudiantes
CREATE TABLE grupos_estudiantes (
  id_grupo_estudiante int4 NOT NULL DEFAULT NEXTVAL ('grupos_estudiantes_seq'),
  id_estudiante int4 NOT NULL,
  id_grupo int4 NOT NULL,
  estado enum_estado_grupo_estudiantes NOT NULL,
  PRIMARY KEY (id_grupo_estudiante)
);


-- Tabla grupos-materias
CREATE TABLE grupos_materias (
  id_grupo_materia int4 NOT NULL DEFAULT NEXTVAL ('grupos_materias_seq'),
  id_materia int4 NOT NULL,
  id_grupo int4 NOT NULL,
  id_maestro int4 NOT NULL,
  PRIMARY KEY (id_grupo_materia)
);


-- Tabla maestros
CREATE TABLE maestros (
  id_maestro int4 NOT NULL DEFAULT NEXTVAL ('maestros_seq'),
  id_persona int4 NOT NULL,
  codigo_maestro varchar(20) NOT NULL,
  PRIMARY KEY (id_maestro)
);

ALTER TABLE maestros
  ADD CONSTRAINT UQ_maestros_codigo
  UNIQUE (codigo_maestro);


-- Tabla materias
CREATE TABLE materias (
  id_materia int4 NOT NULL,
  nombre_materia varchar(20) NOT NULL DEFAULT NEXTVAL ('materias_seq'),
  codigo_materia varchar(20) NOT NULL,
  sexto enum_materia_sexto NOT NULL,
  septimo enum_materia_septimo NOT NULL,
  octavo enum_materia_octavo NOT NULL,
  noveno enum_materia_noveno NOT NULL,
  decimo enum_materia_decimo NOT NULL,
  once enum_materia_once NOT NULL,
  PRIMARY KEY (id_materia)
);

ALTER TABLE materias
  ADD CONSTRAINT UQ_materias_codigo
  UNIQUE (codigo_materia);


-- Tabla notas
CREATE TABLE notas (
  id_nota int4 NOT NULL DEFAULT NEXTVAL ('notas_seq'),
  id_materia int4 NOT NULL,
  id_grupo int4 NOT NULL,
  id_estudiante int4 NOT NULL,
  nota float8 NOT NULL,
  tipo_nota varchar(20) NOT NULL,
  PRIMARY KEY (id_nota)
);


-- Tabla persona
CREATE TABLE persona (
  id_persona int4 NOT NULL DEFAULT NEXTVAL ('persona_seq'),
  nombres varchar(100) NOT NULL,
  apellidos varchar(100) NOT NULL,
  tipo_documento varchar(30) NOT NULL,
  numero_documento integer NOT NULL,
  sexo enum_genero NOT NULL,
  fecha_nacimiento date NOT NULL,
  direccion_residencial varchar(100) NOT NULL,
  ciudad_residencial varchar(100) NOT NULL,
  telefono_residencial varchar(15) NOT NULL,
  telefono_celular varchar(15) NOT NULL,
  correo_electronico varchar(30) NOT NULL,
  estado_cuenta enum_persona_estado_cuenta NOT NULL,
  foto_perfil text NOT NULL,
  pdf_documento text NOT NULL,
  tipo_usuario enum_persona_tipo_usuario NOT NULL,
  PRIMARY KEY (id_persona)
);

-- Campos unicos en la tabla

ALTER TABLE persona
  ADD CONSTRAINT UQ_persona_documento
  UNIQUE (numero_documento);

ALTER TABLE persona
  ADD CONSTRAINT UQ_persona_correo
  UNIQUE (correo_electronico);



-- Llaves foraneas coneccion con otras tablas


-- Constraint consolidados
ALTER TABLE consolidados ADD CONSTRAINT fk_id_estudiante_consolidados_estudiante FOREIGN KEY (id_estudiante) REFERENCES estudiante (id_estudiante) ON DELETE RESTRICT ON UPDATE CASCADE;
CREATE INDEX fk_id_estudiante_consolidados_estudiante ON consolidados using btree (id_estudiante);

-- Constraint directivos
ALTER TABLE directivos ADD CONSTRAINT fk_id_persona_directivos_persona FOREIGN KEY (id_persona) REFERENCES persona (id_persona) ON DELETE RESTRICT ON UPDATE CASCADE;
CREATE INDEX fk_id_persona_directivos_persona ON directivos using btree (id_persona);

-- Constraint estudiante
ALTER TABLE estudiante ADD CONSTRAINT fk_id_persona_estudiante_persona FOREIGN KEY (id_persona) REFERENCES persona (id_persona) ON DELETE RESTRICT ON UPDATE CASCADE;
CREATE INDEX fk_id_persona_estudiante_persona ON estudiante using btree (id_persona);

-- Constraint grupos
ALTER TABLE grupos ADD CONSTRAINT fk_director_id_maestro_grupos_maestros FOREIGN KEY (director_id_maestro) REFERENCES maestros (id_maestro) ON DELETE RESTRICT ON UPDATE CASCADE;
CREATE INDEX fk_director_id_maestro_grupos_maestros ON grupos using btree (director_id_maestro);

-- Constraint grupos-estudiantes
ALTER TABLE grupos_estudiantes
  ADD CONSTRAINT fk_id_estudiante_grupos_estudiantes_estudiante FOREIGN KEY (id_estudiante) REFERENCES estudiante (id_estudiante) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT fk_id_grupo_grupos_estudiantes_grupos FOREIGN KEY (id_grupo) REFERENCES grupos (id_grupo) ON DELETE RESTRICT ON UPDATE CASCADE;
CREATE INDEX fk_id_estudiante_grupos_estudiantes_estudiante ON grupos_estudiantes using btree (id_estudiante);
CREATE INDEX fk_id_grupo_grupos_estudiantes_grupos ON grupos_estudiantes using btree (id_grupo);

-- Constraint grupos-materias
ALTER TABLE grupos_materias
  ADD CONSTRAINT fk_id_grupos_grupos_materias_grupos FOREIGN KEY (id_grupo) REFERENCES grupos (id_grupo) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT fk_id_maestro_grupos_materias_maestros FOREIGN KEY (id_maestro) REFERENCES maestros (id_maestro) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT fk_id_materia_grupos_materias_materias FOREIGN KEY (id_materia) REFERENCES materias (id_materia) ON DELETE RESTRICT ON UPDATE CASCADE;

CREATE INDEX fk_id_grupos_grupos_materias_grupos ON grupos_materias using btree (id_grupo);
CREATE INDEX fk_id_maestro_grupos_materias_maestros ON grupos_materias using btree (id_maestro);
CREATE INDEX fk_id_materia_grupos_materias_materias ON grupos_materias using btree (id_materia);



-- Constraint maestros
ALTER TABLE maestros ADD CONSTRAINT fk_id_persona_maestros_persona FOREIGN KEY (id_persona) REFERENCES persona (id_persona) ON DELETE RESTRICT ON UPDATE CASCADE;
CREATE INDEX fk_id_persona_maestros_persona ON maestros using btree (id_persona);

-- Constraint notas
ALTER TABLE notas
  ADD CONSTRAINT fk_id_estudiante_notas_estudiante FOREIGN KEY (id_estudiante) REFERENCES estudiante (id_estudiante) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT fk_id_grupo_notas_grupos FOREIGN KEY (id_grupo) REFERENCES grupos (id_grupo) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT fk_id_materia_notas_materias FOREIGN KEY (id_materia) REFERENCES materias (id_materia) ON DELETE RESTRICT ON UPDATE CASCADE;

CREATE INDEX fk_id_estudiante_notas_estudiante ON notas using btree (id_estudiante);
CREATE INDEX fk_id_grupo_notas_grupos ON notas using btree (id_grupo);
CREATE INDEX fk_id_materia_notas_materias ON notas using btree (id_materia);