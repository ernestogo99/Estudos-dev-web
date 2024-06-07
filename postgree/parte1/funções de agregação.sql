--count-retorna a quantidade de registros
-- sum - retorna a soma dos registros
-- max - retorna o maior valor dos registros
--min - retorna o menor valor dos registros
-- avg - retorna a média dos registros

select count (id),sum(id),max(id),min(id), round(avg(id),2)
from funcionarios