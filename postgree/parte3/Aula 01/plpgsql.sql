--usar := para atribuição e = para comparação
create or replace function primeira_pl() returns integer as $$
	--declarando variaveis
	declare
		primeira_variavel integer default 3;
	begin
		primeira_variavel := primeira_variavel*2;
		--varios comandos sql
		begin
			primeira_variavel:=7;
		end;
		
		return primeira_variavel;
	end
$$ language plpgsql;


select primeira_pl()