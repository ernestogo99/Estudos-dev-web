select nome,sobrenome,count(id)
from funcionarios
group by nome,sobrenome
order by nome;


select curso.nome,count(aluno.id) from aluno
join aluno_curso on aluno.id=aluno_curso.aluno_id
join curso on curso.id=aluno_curso.curso_id
group by curso.nome
order by curso.nome