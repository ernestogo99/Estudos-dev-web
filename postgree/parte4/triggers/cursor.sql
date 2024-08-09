create function instrutores_internos(id_instrutor integer) returns refcursor as $$
	DECLARE
		cursor_salario refcursor;
		salario DECIMAL;
	BEGIN
		open cursor_salario  for select instrutor.salario from instrutor where id != id_instrutor and salario>0;

		fetch last in cursor_salario into salario;--pegar o ultimo valor da consulta com o cursor
		RETURN cursor_salario;
	END;
	
$$ language plpgsql;