--funções com string
-- || concatena as strings
select(primeiro_nome || ' ' || ultimo_nome ) as nome_completo from aluno

select concat('vinicius',null,' ','dias')

--char_length(string) me diz o numero de caracteres da string

--nome todo em letra maiscula
select upper(concat('vinicius',' ','dias'))

--trim: remove espaços