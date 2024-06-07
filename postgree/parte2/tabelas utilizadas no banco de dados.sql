
create table aluno(
	id serial primary key,
	primeiro_nome varchar(255) not null,
	ultimo_nome varchar(255) not null,
	data_nascimento date not null
);


create table curso(
	id serial primary key,
	nome varchar(255) not null,
	categoria_id integer not null references categoria(id)
);

create table categoria(
	id serial primary key,
	nome varchar(255) not null
)


create table aluno_curso(
	aluno_id integer not null references aluno(id),
	curso_id integer not null references curso(id),
	primary key(aluno_id,curso_id)
);