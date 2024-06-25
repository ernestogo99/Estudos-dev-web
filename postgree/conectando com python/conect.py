import psycopg2
import psycopg2.extras

hostname = 'localhost'
database = 'conect'
username = 'postgres'
pwd = 'curioso'
port_id = '5432'
conn=None
cursor=None
try:
    # Conecte-se ao banco de dados
    conn = psycopg2.connect(
        host=hostname,
        dbname=database,
        user=username,
        password=pwd,
        port=port_id
    )
    #cursor para realizar consultas sql
    cursor=conn.cursor(cursor_factory=psycopg2.extras.DictCursor)#isso fara com que seja retornado em formato de dicionario
    cursor.execute('DROP TABLE IF EXISTS funcionario')
    #criando tabela
    create_script = '''CREATE TABLE IF NOT EXISTS funcionario(
                       id int PRIMARY KEY,
                       nome varchar(40) NOT NULL,
                       salario int,
                       dept_id varchar(30))'''  
    
    #método do cursor para executar a consulta         
    cursor.execute(create_script)
    
    insert_script='INSERT INTO funcionario (id,nome,salario,dept_id) VALUES(%s,%s,%s,%s)'
    #criamos o insert value para substituir os %s
    #usamos uma tupla para inserir multiplos valores
    insert_value=[(1,'james',1200,'D1'),(2,'ernesto',1500,'D2'),(3,'vina',1700,'D3')]
   #temos que usar um for para inserir multiplos valores
    for record in insert_value:
        cursor.execute(insert_script,record)
    
    update_script='UPDATE funcionario SET salario =salario + ( salario * 0.5)'
    cursor.execute(update_script)
    
    delete_script='DELETE FROM funcionario where nome=%s'
    delete_record=('james',)
    cursor.execute(delete_script,delete_record)
    #dando fetch nos dados
    cursor.execute('SELECT * FROM FUNCIONARIO')
    #update-----------------------------------------------------------
    
    #update
    #------------------------
    #se eu quiser acessar uma coluna especifica,eu uso o indice [i]
    #caso eu não use,mostra tudo
    #como eu usei o dictcursor, eu posso usar o nome da coluna 
    for record in cursor.fetchall():
        print(record['nome'],record['salario'])
    
    
    
    
    
    #dar commit para confirmar a consulta e enviar ao banco
    conn.commit()

   

  
except Exception as e:
    print(f"Ocorreu um erro: {e}")
#vai terminar independente do que acontecer, se tiver erro ou não
finally:
      # Feche a conexão
      if cursor is not None:
          cursor.close()
      if conn is not None :
        conn.close()
    
   