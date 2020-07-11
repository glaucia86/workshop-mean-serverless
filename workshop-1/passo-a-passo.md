# Migrando uma Aplicação MEAN para Arquitetura Serverless & Azure Functions

[![bit-azure.png](https://i.postimg.cc/ZKwS8SHj/bit-azure.png)](https://postimg.cc/vcxkyCp6)

Durante esse workshop você aprenderá a realizar a migração de uma maneira simples, rápida e dinâmica uma aplicação MEAN para uma arquitetura Serverless, fazendo uso do Azure Functions!

O projeto MEAN já está pronto e vocês podem fazer um git clone ou download **[AQUI](https://github.com/glaucia86/workshop-mean-serverless)**

Vamos nessa?!

## Entendendo a estrutura do Projeto MEAN

Nesse projeto vamos focar nas duas pastas: **api** e **front**. Conforme a imagem abaixo:

[![Screen-Shot-09-11-19-at-12-04-PM.png](https://i.postimg.cc/mk6wmMnv/Screen-Shot-09-11-19-at-12-04-PM.png)](https://postimg.cc/RJKKF34d)

Se vocês executarem essa aplicação notarão que estamos persistindo essa aplicação no MongoDb e usando o Back-End, que nesse caso estamos usando o Node.js

Os dados persistidos consiste em:

**Classe: Funcionario**

+ **idFuncionario:** (number - guid gerado pelo MongoDb)
+ **nomeFuncionario:** string
+ **cargo:** string
+ **numeroIdentificador:** number

Caso desejam executar localmente esse projeto, bastam seguir os passos no README.md do repositório do projeto.

Bom, agora que vocês estão com o projeto MEAN em mãos, vamos começar a fazer a migração para o Azure Functions?!

Mas antes, vamos entender o que seria o Azure Functions!

## O que é Azure Functions?! ⚡️

**[Azure Functions](https://azure.microsoft.com/services/functions/?WT.mc_id=meanserverlessworkshop-github-gllemos)** um serviço de computação serverless que permite executar o facilmente pequenos trechos de código ou funções na nuvem sobre demanda sem precisar provisionar ou gerenciar a infraestrutura. 

E o Azure Functions possui suporte a inúmeras linguagens, entre elas:

- **[C#](https://docs.microsoft.com/azure/azure-functions/functions-reference-csharp?WT.mc_id=meanserverlessworkshop-github-gllemos)**
- **[JavaScript](https://docs.microsoft.com/azure/azure-functions/functions-reference-node?WT.mc_id=meanserverlessworkshop-github-gllemos)**
- **[F#](https://docs.microsoft.com/azure/azure-functions/functions-reference-fsharp?WT.mc_id=meanserverlessworkshop-github-gllemos)**
- **[Java](https://docs.microsoft.com/azure/azure-functions/functions-reference-java?WT.mc_id=meanserverlessworkshop-github-gllemos)**
- **[PowerShell](https://docs.microsoft.com/azure/azure-functions/functions-reference-powershell?WT.mc_id=meanserverlessworkshop-github-gllemos)**
- **[Python](https://docs.microsoft.com/azure/azure-functions/functions-reference-python?WT.mc_id=meanserverlessworkshop-github-gllemos)**
- **[TypeScript](https://docs.microsoft.com/azure/azure-functions/functions-reference-node?WT.mc_id=meanserverlessworkshop-github-gllemos#typescript)**

Já as linguagens abaixo, já possui suporte, porém estão na sua versão preview:

- **Bash**
- **PHP**

Se desejarem saber mais detalhes das linguagens que possuem suporte ao Azure Functions, bastam acessar o link **[AQUI](https://docs.microsoft.com/azure/azure-functions/supported-languages?WT.mc_id=meanserverlessworkshop-github-gllemos)**.

Porém, para esse workshop focaremos no JavaScript! 😉

## Templates Importantes no Azure Functions

Antes de começar a realizar a migração é importante mencionar que o **[Azure Functions](https://azure.microsoft.com/services/functions/?WT.mc_id=meanserverlessworkshop-github-gllemos)** dispõe de inúmeros templates já prontos e preparados só para começar a serem usados. Entre eles:

- **[HTTPTrigger](https://docs.microsoft.com/azure/azure-functions/functions-create-first-azure-function?WT.mc_id=meanserverlessworkshop-github-gllemos)**
- **[TimerTrigger](https://docs.microsoft.com/azure/azure-functions/functions-create-scheduled-function?WT.mc_id=meanserverlessworkshop-github-gllemos)**
- **[CosmosDBTrigger](https://docs.microsoft.com/azure/azure-functions/functions-bindings-cosmosdb-v2?WT.mc_id=meanserverlessworkshop-github-gllemos)**
- **[BlobTrigger](https://docs.microsoft.com/azure/azure-functions/functions-bindings-storage-blob?WT.mc_id=meanserverlessworkshop-github-gllemos)**
- **[QueueTrigger](https://docs.microsoft.com/azure/azure-functions/functions-bindings-storage-queue?WT.mc_id=meanserverlessworkshop-github-gllemos)**
- **[EventGridTrigger](https://docs.microsoft.com/azure/event-grid/resize-images-on-storage-blob-upload-event?tabs=dotnet&WT.mc_id=meanserverlessworkshop-github-gllemos)**
- **[EventHubTrigger](https://docs.microsoft.com/azure/azure-functions/functions-bindings-event-hubs?WT.mc_id=meanserverlessworkshop-github-gllemos)**
- **[ServiceBusQueueTrigger](https://docs.microsoft.com/azure/azure-functions/functions-bindings-service-bus?WT.mc_id=meanserverlessworkshop-github-gllemos)**
- **[ServiceBusTopicTrigger](https://docs.microsoft.com/azure/azure-functions/functions-bindings-service-bus?WT.mc_id=meanserverlessworkshop-github-gllemos)**

Não entrarei em detalhes de cada um, pois senão esse workshop ficará muito grande. Mas, caso desejam entender mais sobre cada template e qual o seu melhor uso numa determinada aplicação recomendo a leitura na documentação **[AQUI](https://docs.microsoft.com/azure/azure-functions/functions-overview?WT.mc_id=meanserverlessworkshop-github-gllemos)**. 

Para esse tutorial, estaremos fazendo uso do - **[HTTPTrigger](https://docs.microsoft.com/azure/azure-functions/functions-create-first-azure-function?WT.mc_id=meanserverlessworkshop-github-gllemos)** uma vez que esse template dispara a execução do seu código usando uma solicitação HTTP. E é justamente o que precisaremos!

Caso você seja um(a) estudante de alguma Instituição de Ensino de Faculdade ou Universidade, poderá criar sua conta no **[Azure for Students](https://azure.microsoft.com/pt-br/free/students/?WT.mc_id=meanserverlessworkshop-github-gllemos)**. Essa conta te dará o benefício em possuir crédito de USD 100,00 para usar os serviços de maneira gratuita, sem necessidade de possuir um cartão de crédito. Para ativar essa conta, bastam acessar o link ao lado: **[AQUI](https://azure.microsoft.com/pt-br/free/students/?WT.mc_id=meanserverlessworkshop-github-gllemos)**. Com essa conta, você poderá fazer uso de **1.000.000 solicitações gratuitas por mês para processar eventos no Azure Functions!**

[![Screen-Shot-09-11-19-at-12-42-PM.png](https://i.postimg.cc/Jh68m7sR/Screen-Shot-09-11-19-at-12-42-PM.png)](https://postimg.cc/5HCTSV5r)

Bom, depois desse overview sobre Azure Functions, podemos enfim começar a nossa migração! Vamos que vamos!

## Instalando o pacote Azure Functions Core Tools

O **[Azure Functions Core Tools](https://docs.microsoft.com/pt-br/azure/azure-functions/functions-run-local)** nos permitirá a desenvolver e testar as funções de maneira local na nossa máquina a partir de um terminal ou prompt de comando.

Abaixo seguem os programas e o pacote que precisaremos para continuar no nosso tutorial:

* **[Node.js - LTS](https://nodejs.org/en/)**
* **[Azure Functions Core Tools](https://www.npmjs.com/package/azure-functions-core-tools)**
* **[Mongo Compass](https://www.mongodb.com/products/compass)**

Depois que você tiver o Node.js instalado na sua máquina basta digitar o seguinte comando:

* **Windows**

```bash
npm install -g azure-functions-core-tools
```


* **MacOs**

```bash
brew tap azure/functions
brew install azure-functions-core-tools
```

* **Linux (Ubuntu/Debian) com APT**

```bash
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg
```

Para mais informações para instalar de maneira correta o Azure Functions Core Tools, bastam acessar o link **[AQUI](https://docs.microsoft.com/azure/azure-functions/functions-run-local?WT.mc_id=meanserverlessworkshop-github-gllemos)**

E como vou saber se de fato o meu Azure Functions Core Tools está instalado de maneira correta?! Bastam digitar o seguinte comando no terminal:

```bash
> func
```

Se acontecer conforme o gif abaixo é porque o pacote foi instalado com sucesso!

[![gif-serverless-07.gif](https://s3.gifyu.com/images/gif-serverless-07.gif)](https://gifyu.com/image/hYvM)

Ótimo. Agora, podemos criar as nossas funções. Para isso, crie um pasta local na sua máquina e vamos começar!

## Criando uma Nova Aplicação no Azure Functions

Agora que já temos instalado o pacote, vamos criar uma nova aplicação. Para isso, bastam seguir o passos conforme o gif abaixo:

[![gif-serverless-08.gif](https://s3.gifyu.com/images/gif-serverless-08.gif)](https://gifyu.com/image/hYqP)

Observem que, quando abrimo o Visual Studio Code, precisamos clicar no botão `YES` que aparece no canto inferior direito para habilitar alguns arquivos importantes no projeto.

## Criando conexão com o MongoDb

Bom, vamos fazer agora algumas alterações necessárias no nosso projeto recém criado. Para isso, vamos instalar localmente o **[mongodb](https://www.npmjs.com/package/mongodb)** no nosso projeto. Digitem o seguinte comando:

```bash
> npm install mongodb
```

Ao instalar o mongoDb no projeto, observem que houve alterações no arquivo `package.json`. No final o arquivo deverá ficar da seguinte maneira:

* **arquivo: package.json**

```json
{
  "name": "crud-serverless-mongodb",
  "version": "1.0.0",
  "description": "Projeto azure functions com persistencia com o mongoDb",
  "scripts": {
    "test": "echo \"No tests yet...\""
  },
  "author": "",
  "dependencies": {
    "mongodb": "^3.3.2"
  }
}
```

Agora, vamos criar uma pasta chamada: `shared` e dentro dela vamos criar o arquivo: `mongo.js`. A estrutura do projeto agora ficará da seguinte maneira:

[![Screen-Shot-09-11-19-at-02-05-PM.png](https://i.postimg.cc/SxnBMnf5/Screen-Shot-09-11-19-at-02-05-PM.png)](https://postimg.cc/CRVryLtH)

Vamos agora alterar o arquivo `mongo.js`. Para isso, inclua o código abaixo:

* **arquivo: shared/mongo.js**

```javascript
/**
 * Arquivo: mongo.js
 * Data: 10/11/2019
 * Descrição: arquivo responsável por tratar a conexão da Base de Dados localmente
 * Author: Glaucia Lemos
 */

const { MongoClient } = require("mongodb");

const config = {
  url: "mongodb://localhost:27017/crud-serverless-mongodb",
  dbName: "crud-serverless-mongodb"
};

async function createConnection() {
  const connection = await MongoClient.connect(config.url, {
    useNewUrlParser: true
  });
  const db = connection.db(config.dbName);
  return {
    connection,
    db
  };
}

module.exports = createConnection;
```

Aqui estamos criando a nossa conexão local com o MongoDb! Muito parecido com o que já fazemos no Back-End com o Node.js!

E vamos também alterar o arquivo `local.settings.json`. Esse arquivo é responsável por 'guardar' todas as keys que não queremos que estejam expostas na hora de realizar o commit. Notem que esse arquivo está na lista de arquivos no `.gitignore`. 

Abram o arquivo `local.settings.json` e façam as seguintes alterações:

* **arquivo: local.settings.json**

```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsStorage": "{AzureWebJobsStorage}"
  },
  "Host": {
    "LocalHttpPort": 7071,
    "CORS": "*"
  }
}
```


Notem no código acima que já estamos habilitando o CORS. Pois sem ele, não conseguimos realizar as operações de CRUD no front! Se desejarem entender um pouco mais sobre o CORS recomendo a leitura **[AQUI](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS)**.

Bom, a primeira parte já está pronta! Agora vamos criar o nosso CRUD no Azure Functions!

## Criando a função: 'CreateFuncionario'

Para criar uma nova função bastam digitar o seguinte comando:

```bash
func new
```

Ao digitar esse comando ele dará várias opções de templates que o Azure Functions nos disponibiliza. No nosso caso, conforme já mencionado acima, vamos escolher o template: `HttpTrigger`. Sigam os passos do gif abaixo:

 [![gif-serverless-09.gif](https://s3.gifyu.com/images/gif-serverless-09.gif)](https://gifyu.com/image/hYI8)

Observem que, foi criado uma pasta `CreateFuncionario` e dois arquivos:

* **function.json**: aqui iremos definir as rotas e os métodos do nosso endpoint.

* **index.json**: aqui iremos desenvolver a lógica inerente ao endpoint.

Vamos começar a alterar esses arquivos. Começando pelo `function.json`

* **arquivo: CreateFuncionario/function.json**

```json
{
  "bindings": [{
          "authLevel": "anonymous",
          "type": "httpTrigger",
          "direction": "in",
          "name": "req",
          "methods": ["post"],
          "route": "funcionarios"
      },
      {
          "type": "http",
          "direction": "out",
          "name": "res"
      }
  ]
}
```

Agora vamos alterar o arquivo `index.js`:

* **arquivo: CreateFuncionario/index.js**

```javascript
/**
 * Arquivo: CreateFuncionario/index.js
 * Data: 10/11/2019
 * Descrição: arquivo responsável por criar um novo 'Funcionário'
 * Author: Glaucia Lemos
 */

const createMongoClient = require('../shared/mongo')

module.exports = async function (context, req) {
  const funcionario = req.body || {}

  if (funcionario) {
    context.res = {
      status: 400,
      body: 'Os dados do(a) Funcionário(a) é obrigatório!'
    }
  }

  const { db, connection } = await createMongoClient()

  const Funcionarios = db.collection('funcionarios')

  try {
    const funcionarios = await Funcionarios.insert(funcionario)
    connection.close()

    context.res = {
      status: 201,
      body: funcionarios.ops[0]
    }
  } catch (error) {
    context.res = {
      status: 500,
      body: 'Error ao criar um novo Funcionário(a)'
    }
  }
}

```

Aqui estamos praticamente definindo a rota do `Post` e desenvolvendo a lógica do Criar um novo Funcionário.

Vamos executar esse endpoint?! Para executar, bastam digitar o seguinte comando:

```bash
> func host start
```

E ele irá listar o nosso endpoint criado! Vejam no gif:

[![gif-serverless-11.gif](https://s3.gifyu.com/images/gif-serverless-11.gif)](https://gifyu.com/image/hYI5)

Ele o seguinte endpoint: `[POST] http://localhost:7071/api/funcionario`

A porta `7071` é a porta default do Azure Functions. E é justamente ela que iremos precisar para colocar no nosso Front-End!

Bom, vamos agora pegar essa rota e adicionar no Front-End! Para isso, precisamos realizar algumas alterações no projeto `Front`. Vão até a pasta `front` em: `front -> src -> app -> funcionario.service.ts` e alterem o seguinte arquivo `funcionario.service.ts`

* **arquivo: funcionario.service.ts**

```javascript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  // ==> Uri da api (Back-End)
  uri = 'http://localhost:7071/api';

  constructor(private http: HttpClient) { }


(...)
```

Só precisamos alterar a `uri` definida no service do Angular. 

Nesse momento, precisaremos executar o Mongo Compass e o Front-End. Observem no gif como persistirá o novo funcionário e que não precisaremos mais da pasta `api` do projeto!

[![gif-serverless-12.gif](https://s3.gifyu.com/images/gif-serverless-12.gif)](https://gifyu.com/image/hYIP)

Persistiu lindamente! 😍 

Agora, vamos fazer o listar!

## Criando a função: 'GetFuncionarios'

É a mesma premissa que foi feita acima, vamos criar uma nova função com o comando: `func new`, nomear a função de `GetFuncionarios` e alterar os arquivos: `function.json` e `index.js`

[![gif-serverless-13.gif](https://s3.gifyu.com/images/gif-serverless-13.gif)](https://gifyu.com/image/hYdH)

- **GetFuncionarios/function.json**

```json
{
    "bindings": [{
            "authLevel": "anonymous",
            "type": "httpTrigger",
            "direction": "in",
            "name": "req",
            "methods": ["get"],
            "route": "funcionarios"
        },
        {
            "type": "http",
            "direction": "out",
            "name": "res"
        }
    ]
}

```


- **GetFuncionarios/index.js**

```javascript
/**
 * Arquivo: GetFuncionarios/index.js
 * Data: 10/11/2019
 * Descrição: arquivo responsável por listar todos os 'Funcionários'
 * Author: Glaucia Lemos
 */

const createMongoClient = require('../shared/mongo')

module.exports = async context => {
  const { db, connection } = await createMongoClient()


  const Funcionarios = db.collection('funcionarios')
  const res = await Funcionarios.find({})
  const body = await res.toArray()

  connection.close()

  context.res = {
    status: 200,
    body
  }
}
```

Vamos testar novamente! Vejam novamente o gif abaixo!

[![gif-serverless-14.gif](https://s3.gifyu.com/images/gif-serverless-14.gif)](https://gifyu.com/image/hYdI)

Novamente está funcionando perfeitamente. Já observaram que é fácil criar um CRUD com o Azure Functions, não é mesmo?! Agora é só seguir os mesmos passos para as próximas funções!

## Criando a função: 'GetFuncionarioById'

Agora que já ficou muito claro a todos aqui como é fácil criar um CRUD com o Azure Functions, vou começar a acelerar o processo de criação e só informar o que foi alterado nos arquivos `function.json` e `index.js`


- **GetFuncionarioById/function.js**

```json
{
    "bindings": [{
            "authLevel": "anonymous",
            "type": "httpTrigger",
            "direction": "in",
            "name": "req",
            "methods": ["get"],
            "route": "funcionarios/{id}"
        },
        {
            "type": "http",
            "direction": "out",
            "name": "res"
        }
    ]
}
```

- **GetFuncionarioById/index.json**

```javascript
// @ts-nocheck
/**
 * Arquivo: GetFuncionarioById/index.js
 * Data: 10/11/2019
 * Descrição: arquivo responsável por listar Funcionário pelo Id
 * Author: Glaucia Lemos
 */

const { ObjectID } = require('mongodb')
const createMongoClient = require('../shared/mongo')

module.exports = async function (context, req) {
  const { id } = req.params

  if (!id) {
    context.res = {
      status: 400,
      body: 'Por favor, passe o número correto do Id do Funcionário!'
    }

    return
  }

  const { db, connection } = await createMongoClient()

  const Funcionarios = db.collection('funcionarios')

  try {
    const body = await Funcionarios.findOne({ _id: ObjectID(id) })

    connection.close()
    context.res = {
      status: 200,
      body
    }
  } catch (error) {
    context.res = {
      status: 500,
      body: 'Erro ao listar o Funcionário pelo Id.'
    }
  }
}
```

Não vamos testar agora. Vamos desenvolver as duas últimas funções: `Update` e `Delete`.

## Criando a função: 'UpdateFuncionario'

Novamente, vamos criar uma nova função e alterar os arquivos `function.json` e `index.js`:


- **UpdateFuncionario/function.js**

```json
{
    "bindings": [{
            "authLevel": "anonymous",
            "type": "httpTrigger",
            "direction": "in",
            "name": "req",
            "methods": ["put"],
            "route": "funcionarios/{id}"
        },
        {
            "type": "http",
            "direction": "out",
            "name": "res"
        }
    ]
}
```

- **UpdateFuncionario/index.js**

```javascript
// @ts-nocheck
/**
 * Arquivo: UpdateFuncionario/index.js
 * Data: 10/11/2019
 * Descrição: arquivo responsável por atualizar 'Funcionário' por Id
 * Author: Glaucia Lemos
 */

const { ObjectID } = require('mongodb')
const createMongoClient = require('../shared/mongo')

module.exports = async function (context, req) {
  const { id } = req.params
  const funcionario = req.body || {}

  if (!id || !funcionario) {
    context.res = {
      status: 400,
      body: 'Os campos são obrigatórios'
    }

    return
  }

  const { db, connection } = await createMongoClient()
  const Funcionarios = db.collection('funcionarios')

  try {
    const funcionarios = await Funcionarios.findOneAndUpdate(
      { _id: ObjectID(id) },
      { $set: funcionario }
    )

    connection.close()

    context.res = {
      status: 200,
      body: funcionarios
    }
  } catch (error) {
    context.res = {
      status: 500,
      body: 'Erro ao atualizar o Funcionário'
    }
  }
}

```

Show! Agora vamos desenvolver a nossa última função: `Delete`!

## Criando a função: 'DeleteFuncionario'

Novamente, bastam criar uma nova função, escolher a opção: `HttpTrigger`, nomear a função de `DeleteFuncionario` e alterar os arquivos `function.json` e `index.js`:

- **DeleteFuncionario/function.json**

```json
{
  "bindings": [{
          "authLevel": "anonymous",
          "type": "httpTrigger",
          "direction": "in",
          "name": "req",
          "methods": ["delete"],
          "route": "funcionarios/{id}"
      },
      {
          "type": "http",
          "direction": "out",
          "name": "res"
      }
  ]
}
```

- **DeleteFuncionario/index.js**

```javascript
// @ts-nocheck
/**
 * Arquivo: DeleteFuncionario/index.js
 * Data: 10/11/2019
 * Descrição: arquivo responsável excluir um 'Funcionário' pelo Id
 * Author: Glaucia Lemos
 */

const { ObjectID } = require('mongodb')
const createMongoClient = require('../shared/mongo')

module.exports = async function (context, req) {
  const { id } = req.params

  if (!id) {
    context.res = {
      status: 400,
      body: 'Os campos são obrigatórios!'
    }

    return
  }

  const { db, connection } = await createMongoClient()

  const Funcionarios = db.collection('funcionarios')

  try {
    await Funcionarios.findOneAndDelete({ _id: ObjectID(id) })
    connection.close()
    context.res = {
      status: 204,
      body: 'Funcionário excluído com sucesso!'
    }
  } catch (error) {
    context.res = {
      status: 500,
      body: 'Erro ao excluir Funcionário' + id
    }
  }
}
```

E está pronto o nosso CRUD! Vamos testar todas as rotas?! Vejam o gif abaixo!

[![gif-serverless-15.gif](https://s3.gifyu.com/images/gif-serverless-15.gif)](https://gifyu.com/image/hYnf)

Coisa mais linda não é mesmo?! Notem mais uma vez que, aquela pasta `api` onde há inúmeros arquivos, não terá mais necessidade! 

Todo o código fonte desenvolvido estão aqui:

👉 **[Projeto Front-End](https://github.com/glaucia86/workshop-mean-serverless)**

👉 **[Projeto Api - Serverless](https://github.com/glaucia86/crud-serverless-mongodb)**

## Palavras Finais

Hoje aprendemos a realizar a migração de uma aplicação MEAN para o Azure Functions, porém persistindo esses dados localmente e executando essas funções localmente. E se porventura precisarmos hospedar essa aplicação na Nuvem? E o nosso Back-end como ficaria?

No próximo post, estarei explicando a vocês como realizar a migração do MongoDb para o CosmosDb e como realizar o deploy dessas funções usando uma extensão do Azure Tools no próprio Visual Studio Code.

Se vocês desejam saber mais detalhes sobre Azure Functions recomendo a todos vocês os seguintes cursos totalmente gratuitos de Serverless & Azure Functions e alguns outros recursos importantes:

✅ **[Cursos Grátis - Azure Functions](https://docs.microsoft.com/pt-br/learn/paths/create-serverless-applications/?WT.mc_id=meanserverlessworkshop-github-gllemos)**

✅ **[Azure para devs JavaScript & Node.js](https://docs.microsoft.com/pt-br/javascript/azure/?WT.mc_id=meanserverlessworkshop-github-gllemos&view=azure-node-latest)**

✅ **[Documentação Azure Functions](https://docs.microsoft.com/pt-br/azure/azure-functions/?WT.mc_id=meanserverlessworkshop-github-gllemos)**

✅ **[Criando a sua Primeira Função no Visual Studio Code](https://docs.microsoft.com/pt-br/azure/azure-functions/functions-create-first-function-vs-code?WT.mc_id=meanserverlessworkshop-github-gllemos)**

✅ **[Extensão Vs Code – Azure Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=meanserverlessworkshop-github-gllemos)**

✅ **[E-Book Grátis - Azure Serverless Computing Cookbook](https://azure.microsoft.com/pt-br/resources/azure-serverless-computing-cookbook/?WT.mc_id=meanserverlessworkshop-github-gllemos)**

E, para ficarem por dentro das últimas atualizações não deixem de me seguir no Twitter! 😃

[![Twitter](https://code4coders.files.wordpress.com/2019/05/image-12.png)](https://twitter.com/glaucia_lemos86) 

Até a próxima pessoal! ❤️ ❤️ ❤️


