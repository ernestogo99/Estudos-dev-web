select concat(primeiro_nome,' ',ultimo_nome) as nome_completo,
	(now()::date-data_nascimento)/365 as idade 
	from aluno

--função age

select concat(primeiro_nome,' ',ultimo_nome) as nome_completo,
extract(year from age(data_nascimento)) as idade
from aluno