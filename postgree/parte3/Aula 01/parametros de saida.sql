
--usando parametros de saida
create function soma_e_produto(numero_1 integer,numero_2 integer,out soma integer,out produto integer)  as $$ 
		select numero_1 + numero_2 as soma, numero_1 * numero_2 as produto;
$$ language sql


--criando um tipo composto
create type dois_valores as (soma integer,produto integer);

create function sum_and_product(num1 integer,num2 integer) returns dois_valores as $$ 
	select num1+num2 as soma, num1*num2 as produto;
$$ language sql

select * from soma_e_produto(3,3)
select * from sum_and_product(4,4);