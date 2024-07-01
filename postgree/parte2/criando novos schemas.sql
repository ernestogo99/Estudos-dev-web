--schema

create table academico.aluno(
	id serial primary key,
	primeiro_nome varchar(255) not null,
	ultimo_nome varchar(255) not null,
	data_nascimento date not null
);


create table academico.curso(
	id serial primary key,
	nome varchar(255) not null,
	categoria_id integer not null references academico.categoria(id)
);

create table academico.categoria(
	id serial primary key,
	nome varchar(255) not null
)


create table academico.aluno_curso(
	aluno_id integer not null references academico.aluno(id),
	curso_id integer not null references academico.curso(id),
	primary key(aluno_id,curso_id)
)


create schema academico;
drop table aluno,curso,aluno_curso