/*
inserir instrutores (com salarios)
se o salario for maior que a media,salvar um log
salvar outro log dizendo que fulano recebe mais que x% da grade de instrutores
*/


CREATE TABLE log_instrutores (
    id serial PRIMARY KEY,
    informacao varchar(255),
    momento_criacao timestamp DEFAULT CURRENT_TIMESTAMP
);

create or replace function cria_instrutor(nome_instrutor varchar,salario_instrutor decimal) returns void as $$
	declare
		id_instrutor_inserido integer;
		media_salarial decimal;
		total_instrutores  integer default 0;
		salario decimal;
		instrutores_recebem_menos integer default 0;
		percentual decimal;
	begin

		select avg(instrutor.salario) into media_salarial from instrutor;
		
		insert into instrutor(nome,salario)  values (nome_instrutor,salario_instrutor) returning id into id_instrutor_inserido;

		if salario_instrutor>media_salarial then
			insert into log_instrutores (informacao) values (nome_instrutor || ' recebe acima da media ');
		end if;


		for salario in select instrutor.salario from instrutor where id != id_instrutor_inserido loop
			total_instrutores :=total_instrutores+1;

			if salario_instrutor>salario then
				instrutores_recebem_menos := instrutores_recebem_menos +1;
			end if;
		end loop;

		percentual= instrutores_recebem_menos/total_instrutores *100;
		insert into log_instrutores(informacao)
			values (nome_instrutor || '	recebe mais que '|| percentual ||'da grade de instrutores');
	end
$$ language plpgsql;

select 	 cria_instrutor('vitor',1200)
select * from instrutor;
select * from log_instrutores;
