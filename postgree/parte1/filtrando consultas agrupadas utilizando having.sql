select curso.nome,count(aluno.id) from curso
left join aluno_curso on aluno_curso.curso_id=curso.id
left join aluno on aluno.id=aluno_curso.aluno_id
group by curso.nome
having count(aluno.id)=0;

-- identificar funcionarios duplicados
select nome,count(id) from funcionarios 
group by nome
having count(id)>1;