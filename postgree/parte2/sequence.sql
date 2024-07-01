create sequence eu_criei
--é assim que o postgres trabalha por baixo dos panos
select nextval('eu_criei');

create temporary table auto(
	id integer  primary key  default nextval('eu_criei'),
	nome varchar(30) not null
);

insert into auto(nome) values('ernestogo');
insert into auto(id,nome) values(2,'pitoco arretado')
select * from auto

