create function salario_ok(instrutor instrutor) returns varchar as $$
	begin
		if instrutor.salario>200 then
			return 'salario esta ok';
		else
			return 'salario pode aumentar';
		end if;
	end
$$ language plpgsql;
select nome, salario_ok(instrutor) from instrutor;

--outra forma
create or replace function salario_ok_id(id_instrutor integer) returns varchar as $$
	declare
		instrutor instrutor;
	begin
		select * from instrutor where id=id_instrutor into instrutor;

	   /*	if instrutor.salario>300 then
			return 'salario esta ok';
		elseif instrutor.salario=300 then
			return 'salario pode aumentar';
		else
			return 'salario defasado';
		end if;*/

		case instrutor.salario
			when 100 then
				return 'salario muito baixo';
			when 200 then
				return 'salario baixo';
			when 300 then
				return 'salario ok';
			else
				return 'salario otimo';
		end case;
	end
$$ language plpgsql;

select nome,salario_ok_id(instrutor.id) from instrutor;






