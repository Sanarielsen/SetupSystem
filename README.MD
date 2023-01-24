# Passo a passo para configuração do projeto

## Backend

### Para inicializar o projeto, utilize do comando:

```
npm init -y
```

### Este irá criar o package.json do seu projeto. Onde salva as dependencias dos nossos projetos.

O primeiro framework a ser utilizado, será:

```
npm i festify
```

### Ao instalar uma dependencia, é criada a pasta package-lock.json e a pasta node_modules.

+ package-lock.json -> Um arquivo para que o javascript saiba o mapa de todas as extensões utilizadas
+ node_modules -> Para gravar as pastas relacionadas as dependencias do seu projeto.

Typescript é utilizado aqui para que haja **Tipagem estática** para que ele encontre possiveis erros de compatibilidade de tipos antes da sua execução.

Logo a próxima a ser utilizada é:

```
npm install typescript -D
```

Obs: o **-D** serve para que essa extensão seja considerada apenas para desenvolvimento, ou seja, não irá ser considerada ao subir o projeto em uma plataforma de interpretação de código.

Seguido do seguinte comando:

```
npx tsc --init
```

Para que mostre as configurações utilizadas para este projeto.

sendo necessário apenas uma modificação na linha 14 desse arquivo
De: "target": "es2016"
Para: "target: "es2020"

Já que o node já suportam versões mais atualizadas dos frameworks a serem utilizados.

A proxima dependencia a ser utilizada:

```
npm i tsx -D
```

Que é possivel que as execuções dos arquivos ts sem que haja necessidade da **tradução** dele para outros tipos em tempo de execução.

Para criação de **atalhos** dentro do seu projeto, utilize a sessão **scripts** dentro do arquivo * *package.json* * para isso:

Scripts é o nome da sessão, dentro dela coloque o nome da função mediante a sua funçao, exemplo:

```
 "scripts": {
    "dev": "tsx src/server.ts"
  },
```

Assim, ao executar

```
npm run dev
```

Irá ser executado aquele seguinte comando:

```
npx tsx src/server.ts
```

Para ser atualizado a cada modificação em determinado arquivo informado, utilize da palavra **watch** no comando, dessa forma:

```
  "scripts": {
    "dev": "tsx watch src/server.ts"
  },
```

#### API RESTful
Que nada mais é que uma estrutura para acessar vários tipos de entidades através dela para o nosso sistema.
localhost:2222/users
localhost:2222/clients

#### Rotas possíveis:
+ Get -> Busca de uma ou lista de informações
+ Post -> Criar um recurso novo
+ Put -> Alterar um recurso já existente por completo.
+ Patch -> Alterar um recurso já existente em uma parte dela.
+ Delete -> Deleta um recurso já existente em parte ou por completo.

Para utilizar banco de dados dentro da API, será utilizado a biblioteca chamado **sql2**. Ou é usado os famosos ORM que um deles pode ser o **prisma.io**.

Quando escrevemos uma consulta na mão dentro da rota ao invés de usar o ORM para fazer isso, chamamos isso de RAW.

##### Para isso, será instalado a dependencia correspondente a ele:

```
npm i -D prisma
```

##### Junto com ele, será necessário instalar o client do prisma:

```
npm i @prisma/client
```

##### Para configurar o uso do SQLite dentro dessa ferramenta (prisma) que instalamos:

```
npx prisma init --datasource-provider SQLite ("SQLite" ou nome do banco a ser utilizado)
```

Com isso, ele irá gerar um arquivo que será permitido nos comunicar diretamente com o banco. Basicamente, um interpretador de códigos para o banco de dados.
Obs: Dentro do visual studio, pode ser necessário instalar uma extensão para ele entender a .prisma do arquivo gerado.
Obs2: O arquivo .env está as variaveis ambientes utilizadas para criação desse caminho do ORM.

Para criar tabelas dentro do prisma, utilize model + nome da tabela.

Para criar um campo de chave primária, utilize **@id**. E se quiser que ele seja um uuid, utilize do **@default(uuid())** logo em seguida

Utilize do comando **@@map("nome_referencial_aqui")** para criar um nome referencial a essa tabela do banco.

Para ler o arquivo * *schema.prisma* * traduzindo os comandos ali dentro para uma estrutura de banco de dados correspondente ao qual foi criado. Criando-se a migration desse arquivo.

```
npx prisma migrate dev
```

Obs: Ele irá solicitar uma informação, que é basicamente um nome que você atribuiu para essa sessão de alterações desde a última que fez, gerando um log de alterações na pasta **migrations** e uma pasta com o nome atribuído com a data e hora que ele foi criado.

Se estiver utilizando o SQLite, ele irá guardar as informações via arquivo, que é o * *dev.db* *

###### Para rodar uma forma de visualização do banco atual, utilize o studio do prisma, que é chamado por:

```
npx prisma studio
```

**@@unique([id]))** é a mesma coisa que criar um *indice* para uma coluna na tabela do banco.

#### Automatização de Foreign's keys

Quando for criada os campos correspondentes as foreign key nas tabelas, aperte CTRL+Shift+P e execute o comando "Format Document" para que essas configurações sejam definidas no arquivo **schema.prisma**

Obs: Caso queira adicionar uma forma de formatação via salvamento, ative a opção utilizando o mesmo comando, porém, abrindo o *settings.json*, na linha 79, dando a opção *editor.formatOnSave* como *true*

#### Prisma Entity Relationship Diagram Generator

https://www.npmjs.com/package/prisma-erd-generator

1) Execute a linha de comando da documentação (npm i -D prisma-erd-generator @mermaid-js/mermaid-cli)

2) Adicione essa linha de comando no arquivo schema.prisma
```
generator erd {
  provider = "prisma-erd-generator"
}
```
3) Inicialize o servidor com o generate:
```
npx prisma generate
```
4) Abra o arquivo ERD.svg dentro do navegador e visualize o diagrama de entidades do atual banco criado.

#### Seed do Banco de dados (Dados exemplo)

https://www.prisma.io/docs/guides/database/seed-database

Utilize a sessão "Example seed scripts" da documentação, especificadamente, o conteúdo do arquivo *seed.ts* que deve ser criado dentro da pasta *prisma*

E adicionar a seguinte linha dentro do package.json

```
"prisma": {
  "seed": "tsx prisma/seed.ts"
}
```

E assim, para executar o seguinte exemplo dentro de uma tabela do banco do método main (que deve ser apagado completamente daquele conteúdo que vem no exemplo da documentação):

```
await prisma.habit.create( {

    data: {
        title: 'Beber 2L de água',
        created_at: new Date('2023-01-10T00:00:00.000z')
    }
} )
```
```
npx prisma db seed
```

#### Dados possíveis via Request

+ Body -> Onde está as informações para serem enviadas a rota (Normalmente de uma rota post ou put)
+ Params -> Os dados enviados via URL
+ Query -> Parametros que são enviados via GET, caracterizados com ?

### CORS

Basicamente, um CORS é utilizado para interpretar que esse determinado backend será utilizado por determinado frontend. Para iniciar essa aplicação, execute:

```
npm i @fastify/cors
```

### ZOD

Uma biblioteca para validar os tipos de dados enviados para um objeto. Para atribuí-la ao projeto, utilize do seguinte comando:

```
npm i zod
```

### DayJs

Uma biblioteca para trabalhar com datas devido a necessidade de usar apenas a data informada e não a Data e Hora que o método **new Date()** proporciona. Para ativá-la no projeto, utilize:

```
npm i dayjs
```

Obs: Ao registrar uma data no banco, ele será irá registrar como UTC-3, ou seja, mesmo que você envie uma data sem hora, ele irá atribuir a data da meia noite + 3 horas.

## Front-End

Para criação do projeto, será necessário a utização de uma biblioteca para baixar o projeto, através do seguinte código:

```
npm create vite@latest
```

Atribua um nome para o projeto, selecione React como framework e variant como typescript. Siga os passos informados e o projeto estará pronto para criação.

React é um framework para desenvolver interfaces para o usuário. Dentro do arquivo * *main.tsx* * podemos enxergar o chamado do arquivo * *app.tsx* * para ser renderizado em tela.

O arquivo * *app.tsx* * normalmente possui a primeira chamada da aplicação a ser desenvolvida, quando se inicia o desenvolvimento, pode-se apagar o seu conteúdo e criar o seu próprio. Inclusive os arquivos CSS gerados e a pasta * *assets* * dentro de * *src* * mantendo a seguinte estrutura:

+ App.tsx
+ main.tsx
+ vite-env.d.ts

Ao criar componentes, SEMPRE crie o nome do componente com a primeira letra mauiscula.

Na criação de componentes, quando passamos parametros para a criação deste, caso queira passar textos, pode chamar **nomeParametro="Teste"**, caso queira passar um número **nomeParametro={9}**

Ao exibir uma variavel dentro de um contexto de um componente, use {} ou ${} se for dentro de uma string com acento circunflexo.
Exemplo: 

```
<p> { variavel } </p>
```

+ **Componente:** Reaproveitar ou Isolar um código
+ **Propriedade:** Uma informação enviada para modificar um componente visual ou comportamentalmente.

###### Propriedades que herdam objetos

Quando vemos a seguinte situação, onde:

```
style={{width: "500px"}}
```
Existe esse atribuição com duas "{{}}" por causa que essa própriedade está recebendo um objeto, ou seja, se fosse criada um objeto separadamente para depois ser atribuído, seria algo dessa forma:

```
const styleDiv = {

  width: "500px";
}

<div style={styleDiv}> Conteúdo </div>
```

Quando se cria um componente, existe a possibilidade de passar uma função dentro de uma propriedade, porém, não podemos passá-la em formato de execução, porque se não, não passaremos a referencia e sim o valor resultado, exemplo:

```
//Passa a função como referencia a outro componente
onClick={submitInfo}
```
```
//Passa o resultado da função como referencia a outro componente
onClick={submitInfo()}
```

#### Imperativa e Declarativa

Imperativa -> Passa exatamente o que a aplicação precisa fazer para fazer determinada ação.
Ex: Quando temos um modal e usamos a DOM para exibí-lo dentro da página atual.

Declarativa -> Cria-se uma condição e reage a essa para realizar uma operação.
Ex: Quando temos um modal e ele só renderiza em tela quando a variável atrelada a ele é cumprida.

#### Tailwind

Para estilização da aplicação atual, será utilizada as seguintes ferramentas:

```
npm i tailwindcss postcss autoprefixer
```
 
+ **postcss:** Para automatização de tarefas dentro do css.
+ **tailwindcss:** Plugin do postcss para atribuição de classes com atributos nos elementos.
+ **autoprefixer:** Adiciona prefixos das propriedades usadas que não são suportadas em todos os navegadores para que estas sejam interpretadas corretamente.

Após terminar de instalar as ferramentas, utilize do seguinte comando para configurar as variaveis locais do tailwind no projeto:

```
npx tailwind init -p
```

{
Created Tailwind CSS config file: tailwind.config.cjs
Created PostCSS config file: postcss.config.cjs
}

No próximo passo, é necessário criar uma pasta "styles" dentro do "src" e assim, um arquivo chamado "global.css" com as seguintes propriedades:

```
@tailwind base;
@tailwind utilities;
@tailwind components;
```

importe o arquivo do tailwind dentro do "app.tsx" e assim atribua na linha do content aonde que serão aplicados as propriedades dessa ferramenta:

```
  content: [

    "./src/**/*.{js,jsx,ts,tsx}",
    './index.html'
  ],
```

Apenas considere os arquivos dentro da pasta src que dentro dessa estrutura, considere os arquivos .js,.jsx,.ts,.tsx
E a segunda linha para que seja possivel usá-lo dentro do arquivo .html base do projeto.

Resumidamente, o tailwind permite que colocamos algumas propriedades css dentro do proprio className do componente.

#### Icones

Para a utilização de icones, existem diversas bibliotecas, mas essa em específico foi recomendada para esse projeto. Para utilizá-la:

```
npm i phosphor-react
```

#### DayJs

Também utilizado no front para tratativa de datas.

#### Radix-ui

É um conjunto de elementos já construídos e pensados com acessibilidade para a sua aplicação assim como o bootstrap e o Material UI são.

Para instalar em especifico um elemento, é necessário usar esse código: (Mas nada lhe impede de baixar a biblioteca inteira)

```
npm install @radix-ui/react-dialog
```

Antes o componente utilizado era para construir um modal seguimos um agora para construir um popover

```
npm install @radix-ui/react-popover
```

Porém, foi construído de forma "manual" para mostrar como faríamos se aplicação fosse acessível.

### CLSX

Nesse projeto, essa biblioteca foi usada para atribuir um style padrão para a nossa aplicação, porém, existe uma segunda atribuição que pode ser enviada via objeto, ou seja, mais de uma condição para atribuir x ou y estilo somado com o anterior.

Para instalar essa biblioteca, usa-se:

```
npm install clsx
```

## Mobile

Com React-Native é possivel criar aplicações para o android, IOS e outras...

Para essa aplicação, será utizado o expo para tornar fácil e rápido o ambiente de desenvolvimento que mudam de acordo com o dispositivo utilizado.

Sendo possível até uma visualização pela REDE, utilizando do ExpoGO que pode ser baixado pela loja de aplicativos.

Para instalar a ferramenta no projeto, utilize do seguinte comando:

```
npm install -g expo-cli
```

Assim o expo estará pronto para uso no projeto, após isso, utilize para iniciá-lo:

```
npx create-expo-app nome-do-projeto --template
```

Assim que executar esse comando, selecione a opção "Blank (Javascript)"

Estrutura da aplicação após o comando:
+ **assets** -> aonde estão as imagens relacionadas aos componentes do projeto
+ **node_modules** -> Os arquivos correspondentes as instalações de frameworks.
+ **gitignore** -> São as extensões ignoradas ao subir o arquivo para a aplicação git utilizada.
+ **app.json** -> Informações da aplicação, como por exemplo: nome, icone e versão.
+ **App.tsx** -> Primeiro arquivo executado pelo react-native
+ **babel.config.js** -> Algumas configurações básicas para execução da aplicação.
+ **package-lock.json** -> Controle de versionamento das bibliotecas do node_modules.
+ **package.json** -> Controle de versionamento das bibliotecas instaladas para desenvolvimento e/ou interpretação do código lido.
+ **tsconfig.json** -> Algumas outras configurações para execução da aplicação.

Para executar a aplicação, use o seguinte comando:

``
npx expo start
``

Ao fazer isso, ele irá gerar um QR Code que poderá ser lido através do Expo GO baixado em seu dispositivo e assim executar a aplicação em seu dispositivo.

+ View é algo similar a <div>
+ Text é algo similar ao <h1> ou <p>
+ StatusBar é a barra superior com os icones das modificações, bateria, sinal...

Para o uso do CSS, é parecido com o uso dentro do styled components, através de uma variável que receberá o código css:

``
<View style={styles.container}> context </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
``
Obs: Não é necessário atribuir o * *display: flex* *, pois os componentes já estão pré-configurados assim por padrão.

Quando iniciar uma alteração que houve grandes mudanças (bundle re-executado), re-execute o servidor com essa alteração no código:

``
npx expo start --clear
``
Obs: Para que o fundo da imagem combine com o fundo da aplicação, foi adicionada a mesma cor para este, dentro do arquivo **app.json** na sessão de *splash* na opção **backgroundColor**, atribuindo o seguinte valor: *#09090A*

#### Fonte

Para atribuir a fonte *inter*, utilize do seguinte código:

``
npx expo install expo-font @expo-google-fonts/inter
``

Obs: qualquer dúvida, utilize a documentação do expo: https://docs.expo.dev/guides/using-custom-fonts/

#### Nativewind

Para definição de estilos através de classes como no Tailwind, usaremos essa biblioteca para fazer o mesmo trabalho feito no frontend React:

```
npm i nativewind
npm i tailwind --save-dev
```

Para a criação do arquivo *tailwind.config.js*, utilize do seguinte comando:

```
npx tailwindcss init
```

Assim que é feita a criação do arquivo, é atribuído este conteúdo para o arquivo:

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090a'
      },
      fontFamily: {
        regular: 'Inter_400Regular',
        semibold: 'Inter_600SemiBold',
        bold: 'Inter_700Bold',
        extrabold: 'Inter_800ExtraBold',
      }
    },
  },
  plugins: [],
}
```

Dentro do arquivo *babel.config.js*, atribua a seguinte linha de código dentro do return junto com o parametro já presente do **return**:

```
plugins: ['nativewind/babel'],
```

Dentro dos componentes do Native, inicialmente ele não irá reconhecer o atributo **className**. Para isso, é necessário criar um arquivo con o seguinte nome *app.d.ts" dentro da pasta src após criar uma pasta @types no caminho atual.
Esse arquivo terá uma única linha também:

```
/// <reference types="nativewind/types" />
```

Obs: Baixe o Tailwind Intelli Sense para ajudar no desenvolvimento com esse framework.

#### Biblioteca para interpretar SVG's

O React Native em si não consegue interpretar SVG's, mas graças a essa biblioteca, ele começa a passar a entender desse caso.

```
npx expo install react-native-svg
```

Seguido desse complemento:

```
npm i react-native-svg-transformer --save-dev 
```

Um ponto a se resaltar, é que essas bibliotecas de configurações do bundle ou de aplicação, é recomendado que se pare a execução do projeto para as referencias serem atualizadas quando estiverem instaladas.

#### React Navigation

Para navegar entre páginas dentro da nossa aplicação, será necessário o uso do React Navigator, por isso, utilizaremos dessa biblioteca:

```
npm install @react-navigation/native
```

```
npx expo install react-native-screens react-native-safe-area-context
```

```
npm install @react-navigation/native-stack
```

Dentro do navigator, nao é possivel declarar nomes sem que ele aponte como erro, porque é como se tivesse faltando alguma tipagem pra ele. Ou seja, podemos criar o arquivo *navigation.d.ts" na pasta *@types* com o seguinte conteúdo:

```
export declare global {

  namespace ReactNavigation {

    interface RootParamList {
      home: undefined;
      new: undefined;
      habit: {

        date: string;
      }
    }
  }
}
```

Obs: Pense em dados simples, um id ou uma data, não passe muitas informações via parametro porque pode deixar a tipagem pesada.

