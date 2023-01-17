# Aula 1

## Backend

### Para inicializar o projeto, utilize do comando:

```
npm init -y
```

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

## Front-End

Para criação do projeto, será necessário a utização de uma biblioteca para baixar o projeto, através do seguinte código:

npm create vite@latest

Atribua um nome para o projeto, selecione React como framework e variant como typescript. Siga os passos informados e o projeto estará pronto para criação.

React é um framework para desenvolver interfaces para o usuário. Dentro do arquivo "main.tsx" podemos enxergar o chamado do arquivo "app.tsx" para ser renderizado em tela.

O arquivo "app.tsx" normalmente possui a primeira chamada da aplicação a ser desenvolvida, quando se inicia o desenvolvimento, pode-se apagar o seu conteúdo e criar o seu próprio. Inclusive os arquivos CSS gerados e a pasta "assets" dentro de "src" mantendo a seguinte estrutura:

App.tsx
main.tsx
vite-env.d.ts

Ao criar componentes, SEMPRE crie o nome do componente com a primeira letra mauiscula.

Na criação de componentes, quando passamos parametros para a criação deste, caso queira passar textos, pode chamar nomeParametro="Teste", caso queira passar um número nomeParametro={9}

Ao exibir uma variavel dentro de um contexto de um componente, use {} ou ${} se for dentro de uma string com ``.
Exemplo: <p> { variavel } </p>

Componente: Reaproveitar ou Isolar um código
Propriedade: Uma informação enviada para modificar um componente visual ou comportamentalmente

Para estilização da aplicação atual, será utilizada as seguintes ferramentas:

npm i tailwindcss postcss autoprefixer
 
postcss: Para automatização de tarefas dentro do css.
tailwindcss: Plugin do postcss para atribuição de classes com atributos nos elementos.
autoprefixer: Adiciona prefixos das propriedades usadas que não são suportadas em todos os navegadores para que estas sejam interpretadas corretamente.

Após terminar de instalar as ferramentas, utilize do seguinte comando para configurar as variaveis locais do tailwind no projeto:

npx tailwind init -p

{
Created Tailwind CSS config file: tailwind.config.cjs
Created PostCSS config file: postcss.config.cjs
}

No próximo passo, é necessário criar uma pasta "styles" dentro do "src" e assim, um arquivo chamado "global.css" com as seguintes propriedades:

@tailwind base;
@tailwind utilities;
@tailwind components;

importe o arquivo do tailwind dentro do "app.tsx" e assim atribua na linha do content aonde que serão aplicados as propriedades dessa ferramenta:

  content: [

    "./src/**/*.{js,jsx,ts,tsx}",
    './index.html'
  ],

Apenas considere os arquivos dentro da pasta src que dentro dessa estrutura, considere os arquivos .js,.jsx,.ts,.tsx
E a segunda linha para que seja possivel usá-lo dentro do arquivo .html base do projeto.

Resumidamente, o tailwind permite que colocamos algumas propriedades css dentro do proprio className do componente.

## Mobile

Com React-Native é possivel criar aplicações para o android, IOS e outras...

Para essa aplicação, será utizado o expo para tornar fácil e rápido o ambiente de desenvolvimento que mudam de acordo com o dispositivo utilizado.

Sendo possível até uma visualização pela REDE, utilizando do ExpoGO que pode ser baixado pela loja de aplicativos.

Para instalar a ferramenta no projeto, utilize do seguinte comando:

npm install -g expo-cli

Assim o expo estará pronto para uso no projeto, após isso, utilize para iniciá-lo:

npx create-expo-app nome-do-projeto --template

Assim que executar esse comando, selecione a opção "Blank (Javascript)"

Estrutura da aplicação após o comando:
assets -> aonde estão as imagens relacionadas aos componentes do projeto
node_modules -> Os arquivos correspondentes as instalações de frameworks.
gitignore -> São as extensões ignoradas ao subir o arquivo para a aplicação git utilizada.
app.json -> Informações da aplicação, como por exemplo: nome, icone e versão.
App.tsx -> Primeiro arquivo executado pelo react-native
babel.config.js -> Algumas configurações básicas para execução da aplicação.
package-lock.json -> Controle de versionamento das bibliotecas do node_modules.
package.json -> Controle de versionamento das bibliotecas instaladas para desenvolvimento e/ou interpretação do código lido.
tsconfig.json -> Algumas outras configurações para execução da aplicação.

Para executar a aplicação, use o seguinte comando:








