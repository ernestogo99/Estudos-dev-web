create table aluno(
	id serial primary key,
	nome varchar(255) not null
)

insert into aluno(nome) values('diogo')

insert into aluno(nome) values('vinicius')

select *from aluno

create table aluno_curso(
	aluno_id integer,
	curso_id integer,
	primary key(aluno_id,curso_id),
	foreign key (aluno_id)
	references aluno(id),

	foreign key (curso_id)
	references curso(id)
)


insert into aluno_curso(aluno_id,curso_id) values(1,1)
insert into aluno_curso(aluno_id,curso_id) values (2,1)
insert into aluno_curso(aluno_id,curso_id) values(3,1)

select * from curso where id=1
