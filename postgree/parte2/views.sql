create view vw_cursos_por_categoria as select categoria.nome as categoria,
count(curso.id) as numero_cursos
from categoria
join curso on curso.categoria_id=categoria.id
group by categoria;


select categoria.id as categoria_id, vw_cursos_por_categoria.* from vw_cursos_por_categoria
	join categoria on categoria.nome=vw_cursos_por_categoria.categoria

select categoria from vw_cursos_por_categoria as categoria_cursos
where numero_cursos>1


create view vw_cursos_programacao as select nome from curso where categoria_id=2;

