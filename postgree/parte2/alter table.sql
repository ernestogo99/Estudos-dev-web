--tabela temporaria 
drop table a

create temporary table a(
	coluna varchar(255) not null check(coluna!=''),
	coluna2 varchar(255) not null,
	unique(coluna,coluna2)
)
--não posso passar null nem uma string vazia devido ao check
	
insert into a values('a','b');
insert into a values('c','d')
-- não consigo inserir coisas repetidas devido ao unique

--alterando a tabela
alter table a rename to teste

select * from teste;
--alterando a coluna
alter table teste rename coluna to primeira_coluna
alter table teste rename coluna2 to segunda_coluna

