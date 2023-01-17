# Aula 1

## Backend

## Para inicializar o projeto, utilize do comando:

npm init -y

### Este irá criar o package.json do seu projeto. Onde salva as dependencias dos nossos projetos.

O primeiro framework a ser utilizado, será o:

npm i festify

### Ao instalar uma dependencia, é criada a pasta package-lock.json e a pasta node_modules.

package-lock.json -> Um arquivo para que o javascript saiba o mapa de todas as extensões utilizadas
node_modules -> Para gravar as pastas relacionadas as dependencias do seu projeto.

Typescript é utilizado aqui para que haja "Tipagem estática" para que ele encontre possiveis erros de compatibilidade de tipos antes da sua execução.

Logo a próxima a ser utilizada é:

npm install typescript -D

Obs: o "-D" serve para que essa extensão seja considerada apenas para desenvolvimento, ou seja, não irá ser considerada ao subir o projeto em uma plataforma de interpretação de código.

Seguido do seguinte comando:

npx tsc --init

Para que mostre as configurações utilizadas para este projeto.

sendo necessário apenas uma modificação na linha 14 desse arquivo
De: "target": "es2016"
Para: "target: "es2020"

Já que o node já suportam versões mais atualizadas dos frameworks a serem utilizados.

A proxima dependencia a ser utilizada:

npm i tsx -D

Que é possivel que as execuções dos arquivos ts sem que haja necessidade da "tradução" dele para outros tipos em tempo de execução.

Para criação de "atalhos" dentro do seu projeto, utilize a sessão "scripts" dentro do arquivo "package.json" para isso:

Scripts é o nome da sessão, dentro dela coloque o nome da função mediante a sua funçao, exemplo:
 "scripts": {
    "dev": "tsx src/server.ts"
  },

Assim, ao executar 
"npm run dev"

Irá ser executado aquele seguinte comando?
npx tsx src/server.ts

Para ser atualizado a cada modificação em determinado arquivo informado, utilize da palavra "watch" no comando, dessa forma:
  "scripts": {
    "dev": "tsx watch src/server.ts"
  },

#### BACK END -> API RESTful
Que nada mais é que uma estrutura para acessar vários tipos de entidades através dela para o nosso sistema.
localhost:2222/users
localhost:2222/clients

#### Rotas possíveis:
Get -> Busca de uma ou lista de informações
Post -> Criar um recurso novo
Put -> Alterar um recurso já existente por completo.
Patch -> Alterar um recurso já existente em uma parte dela.
Delete -> Deleta um recurso já existente em parte ou por completo.

Para utilizar banco de dados dentro da API, será utilizado a biblioteca chamado "sql2". Ou é usado os famosos ORM que um deles pode ser o "prisma.io".

##### Para isso, será instalado a dependencia correspondente a ele:

npm i -D prisma

##### Junto com ele, será necessário instalar o client do prisma:

npm i @prisma/client

##### Para configurar o uso do SQLite dentro dessa ferramenta (prisma) que instalamos:

npx prisma init --datasource-provider SQLite ("SQLite" ou nome do banco a ser utilizado)

Com isso, ele irá gerar um arquivo que será permitido nos comunicar diretamente com o banco. Basicamente, um interpretador de códigos para o banco de dados.
Obs: Dentro do visual studio, pode ser necessário instalar uma extensão para ele entender a .prisma do arquivo gerado.
Obs2: O arquivo .env está as variaveis ambientes utilizadas para criação desse caminho do ORM.

Para criar tabelas dentro do prisma, utilize model + nome da tabela.

Para criar um campo de chave primária, utilize "@id". E se quiser que ele seja um uuid, utilize do "@default(uuid())" logo em seguida

Utilize do comando "@@map("nome_referencial_aqui")" para criar um nome referencial a essa tabela do banco.

Para ler o arquivo "schema.prisma" traduzindo os comandos ali dentro para uma estrutura de banco de dados correspondente ao qual foi criado. Criando-se a migration desse arquivo.

npx prisma migrate dev

Obs: Ele irá solicitar uma informação, que é basicamente um nome que você atribuiu para essa sessão de alterações desde a última que fez, gerando um log de alterações na pasta "migrations" e uma pasta com o nome atribuído com a data e hora que ele foi criado.

Se estiver utilizando o SQLite, ele irá guardar as informações via arquivo, que é o "dev.db"

###### Para rodar uma forma de visualização do banco atual, utilize o studio do prisma, que é chamado por:

npx prisma studio

## CORS

Basicamente, um CORS é utilizado para interpretar que esse determinado backend será utilizado por determinado frontend. Para iniciar essa aplicação, execute:

npm i @fastify/cors

# Front-End

Para criação do projeto, será necessário a utização de uma biblioteca para baixar o projeto, através do seguinte código:

npm create vite@latest

Atribua um nome para o projeto, selecione React como framework e variant como typescript. Siga os passos informados e o projeto estará pronto para criação.







