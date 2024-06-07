create table funcionarios(
	id serial primary key,
	matricula varchar(10),
	nome varchar(255),
	sobrenome varchar (255)
);


insert into funcionarios(matricula,nome,sobrenome) values('m01','diogo','mascarenhas');
insert into funcionarios(matricula,nome,sobrenome) values ('m02','vinicius','dias');
insert into funcionarios(matricula,nome,sobrenome) values('m03','nico','steppat');
insert into funcionarios(matricula,nome,sobrenome) values('m04','joao','roberto');
insert into funcionarios(matricula,nome,sobrenome) values ('m05','diego','rabelo');
insert into funcionarios(matricula,nome,sobrenome) values('m06','roberto','sergio');

select * from funcionarios order by nome desc

select * from funcionarios order by nome,matricula desc