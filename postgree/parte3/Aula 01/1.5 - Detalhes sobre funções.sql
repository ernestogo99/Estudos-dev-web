CREATE TABLE a ( nome VARCHAR(255) NOT NULL);
--em a . nome estou me referindo ao nome na tabela a
-- em cria_a.nome estou me referindo ao parametro da funcao
-- o ultimo comando de uma funcao deve trazer o valor, o insert não tras nada,so insere no banco
-- o retorno de uma função é sempre o primeiro item do ultimo comando

create or replace function cria_a(nome varchar) returns varchar as $$
	insert into a(nome) values('nome');
	select nome;
$$ language sql;

select cria_a('ernestogo')