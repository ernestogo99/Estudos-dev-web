create schema teste

create  table teste.cursos_programacao(
	id_curso integer primary key,
	nome_curso varchar(255) not null
)


--inseri algo na tabela utilizando o select
--tem que estar na mesma ordem, no caso 1-id_curso,2-nome_curso
insert into teste.cursos_programacao 
SELECT academico.curso.id,academico.curso.nome
  FROM academico.curso
  JOIN academico.categoria ON academico.categoria.id = academico.curso.categoria_id
 WHERE categoria_id = 2;

--atualizando usando o update from
update teste.cursos_programacao set nome_curso= nome
	from academico.curso where teste.cursos_programacao.id_curso=academico.curso.id
		and academico.curso.id<10
select * from teste.cursos_programacao order by id_curso

	
update academico.curso set nome='C++ básico' where id = 6;
	

select * from academico.curso order by id