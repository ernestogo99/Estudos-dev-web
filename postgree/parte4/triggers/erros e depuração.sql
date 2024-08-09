-- se ocorrer um erro, não vai ocorrer nenhum insert
-- a coluna teste não existe,o que vai gerar um erro
CREATE or replace FUNCTION cria_instrutor_trigger() RETURNS trigger AS $$ 
    DECLARE
        media_salarial DECIMAL;
        instrutor_recebe_menos INTEGER DEFAULT 0;
        total_instrutores INTEGER DEFAULT 0;
        salario DECIMAL;
        percentual DECIMAL(5,2);
		logs_inseridos integer;
    BEGIN
        SELECT AVG(instrutor.salario) INTO media_salarial FROM instrutor WHERE id != NEW.id;

		
        IF NEW.salario > media_salarial THEN
            INSERT INTO log_instrutores (informacao) VALUES (NEW.nome || ' recebe acima da média');
			

			if logs_inseridos>1 then
				RAISE EXCEPTION 'algo de errado não está certo';
			end if;
        END IF;

		
        FOR salario IN SELECT instrutor.salario FROM instrutor WHERE id != NEW.id LOOP
            total_instrutores := total_instrutores + 1;
			RAISE NOTICE 'salario inserido: % salário do instrutor  existente: %', NEW.salario,salario;
            IF NEW.salario > salario THEN
                instrutor_recebe_menos := instrutor_recebe_menos + 1;
            END IF;    
        END LOOP;

        percentual = instrutor_recebe_menos::DECIMAL / total_instrutores::DECIMAL * 100;
		ASSERT percentual<100::decimal,'instrutores novos não podem receber mais que os antigos';
		

        INSERT INTO log_instrutores (informacao,teste) 
            VALUES (NEW.nome || ' recebe mais do que ' || percentual || '% da grade de instrutores');
		
		Return new;
	EXCEPTION 
		WHEN undefined_column then
			RAISE NOTICE 'algo de errado não está certo';
			RAISE EXCEPTION 'Erro complicado de resolver';
    END;
$$ LANGUAGE plpgsql;


insert into instrutor (nome,salario) values ('curioso',1000);
select * from instrutor
select * from log_instrutores;
