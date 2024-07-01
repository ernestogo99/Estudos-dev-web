create  or replace function tabuada(numero integer) returns setof varchar as $$
	declare
		multiplicador integer default 1;

	begin
		while multiplicador<10	loop
			return next numero || ' x ' || multiplicador || ' = ' ||  numero *multiplicador;
			multiplicador := multiplicador+1;			
		end loop;
	end
	
$$ language plpgsql;

select tabuada(9);

create or replace function tabuada_for(numberr integer) returns setof varchar as $$
	begin
		for multiplicador in 1..9 loop
		  return next numberr || ' x ' || multiplicador || ' = ' ||  numberr *multiplicador;
		end loop;
	end
$$ language plpgsql;

select tabuada_for(5);




create function instrutor_com_salario(out nome varchar,out salario_ok varchar) returns setof record as $$
		declare 
			instrutor instrutor;
		begin
			for instrutor in select * from instrutor loop
				nome := instrutor.nome;
				salario_ok = salario_ok_id(instrutor.id);
				return next;
			end loop;
		end
$$ language plpgsql;

select * from instrutor_com_salario();