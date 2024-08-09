
drop trigger cria_log_instrutores on instrutor

create trigger cria_log_instrutores before insert on instrutor
	for each row execute function cria_instrutor_trigger()

insert into instrutor(nome,salario) values('outra pessoa',600);