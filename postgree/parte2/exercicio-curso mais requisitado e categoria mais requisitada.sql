--curso mais requisitado

select curso.nome,
count(aluno_curso.aluno_id) numero_alunos
from curso join aluno_curso on aluno_curso.curso_id=curso.id
group by curso.nome
order by numero_alunos desc
limit 1;

--categoria mais requisitada

SELECT categoria.nome,
       COUNT(aluno_curso.aluno_id) AS numero_alunos
FROM categoria
LEFT JOIN curso ON curso.categoria_id = categoria.id
LEFT JOIN aluno_curso ON aluno_curso.curso_id = curso.id
GROUP BY categoria.nome
ORDER BY numero_alunos DESC;


