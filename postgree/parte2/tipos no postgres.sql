create type CLASSIFICACAO as enum('livre','12_anos','14_anos','16_anos','18_anos')
	
create temporary table filme(
	id serial primary key,
	nome varchar(255) not null,
	classificacao  CLASSIFICACAO
)

insert into filme(nome,classificacao) values('um filme qualquer','18_anos')