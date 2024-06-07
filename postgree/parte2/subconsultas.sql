--sub consultas
select * from curso where categoria_id in(
	select id from categoria where nome not like '% %'
)