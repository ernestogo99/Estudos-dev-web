select categoria.nome as categoria,
count(curso.id) as numero_cursos
from categoria
join curso on curso.categoria_id=categoria.id
group by categoria;

--sub consulta:obtendo a categoria com numero de cursos maior que 1
select categoria,numero_cursos from(
	select categoria.nome as categoria,
count(curso.id) as numero_cursos
from categoria
join curso on curso.categoria_id=categoria.id
group by categoria
) as categoria_cursos
where numero_cursos>1

	-- solução mais simples
SELECT 
    categoria.nome AS categoria,
    COUNT(curso.id) AS numero_cursos
FROM 
    categoria
JOIN 
    curso ON curso.categoria_id = categoria.id
GROUP BY 
    categoria.nome
HAVING 
    COUNT(curso.id) > 1;

