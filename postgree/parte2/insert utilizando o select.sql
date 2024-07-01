
create temporary table cursos_programacao(
	id_curso integer primary key,
	nome_curso varchar(255) not null
)


--inseri algo na tabela utilizando o select
--tem que estar na mesma ordem, no caso 1-id_curso,2-nome_curso
insert into cursos_programacao 

SELECT academico.curso.id,academico.curso.nome
  FROM academico.curso
  JOIN academico.categoria ON academico.categoria.id = academico.curso.categoria_id
 WHERE categoria_id = 2;

select * from cursos_programacao