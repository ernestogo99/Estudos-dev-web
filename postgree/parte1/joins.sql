select aluno.nome as aluno_nome,curso.nome as curso
from aluno
join aluno_curso on aluno_curso.aluno_id=aluno.id
join curso on curso.id=aluno_curso.curso_id

insert into aluno (nome) values('nico')
insert into curso (id,nome) values(3,'css')

select aluno.nome as aluno_nome,curso.nome as curso
from aluno
left join aluno_curso on aluno_curso.aluno_id=aluno.id
left join curso on curso.id=aluno_curso.curso_id

select aluno.nome as aluno_nome,curso.nome as curso
from aluno
right join aluno_curso on aluno_curso.aluno_id=aluno.id
right join curso on curso.id=aluno_curso.curso_id



select aluno.nome as aluno_nome,curso.nome as curso
from aluno
full join aluno_curso on aluno_curso.aluno_id=aluno.id
full join curso on curso.id=aluno_curso.curso_id


select aluno.nome as aluno_nome,curso.nome as curso
from aluno
cross join curso