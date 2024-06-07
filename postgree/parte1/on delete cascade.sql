create table aluno_curso(
	aluno_id integer,
	curso_id integer,
	primary key(aluno_id,curso_id),
	foreign key (aluno_id)
	references aluno(id)
	on delete cascade
	,
	
	foreign key (curso_id)
	references curso(id)
	
)


insert into aluno_curso(aluno_id,curso_id) values(1,1)
insert into aluno_curso(aluno_id,curso_id) values (2,1)
insert into aluno_curso(aluno_id,curso_id) values(3,1)


select  aluno.nome as "nome do aluno",curso.nome as "nome do curso"
from aluno 
	join aluno_curso on aluno_curso.aluno_id=aluno.id
	join curso on curso.id=aluno_curso.curso_id


delete from aluno where id=1