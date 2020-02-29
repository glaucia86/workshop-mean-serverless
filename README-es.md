# Workshop - MEAN & Serverless

[![bit-community.png](https://i.postimg.cc/4yVhWzYt/bit-community.png)](https://postimg.cc/BPZ66PcQ)

Repositorio responsable de los workshops MEAN y Serverless.

## ¿Qué voy a aprender? 📙

¡Durante este workshop aprenderá cómo migrar de manera simple, rápida y dinámica una aplicación MEAN a una arquitectura Serverless usando Azure Functions!

Los datos del Empleado consisten en:

**Classe: Funcionario (Empleado)**

+ idFuncionario: (number - guid generado por el MongoDb)
+ nomeFuncionario: string
+ cargo: string
+ numeroIdentificador: number


## Recursos Utilizados 🚀

* **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=meanserverlessworkshop-github-gllemos)**
* **[Node.js](https://nodejs.org/en/)**
* **[Postman](https://www.getpostman.com/)**
* **[Conta - Azure](https://azure.microsoft.com/es-es/?WT.mc_id=meanserverlessworkshop-github-gllemos)**
* **[Azure Web App Service](https://azure.microsoft.com/services/app-service/?WT.mc_id=meanserverlessworkshop-github-gllemos)**
* **[Mongodb Community Server](https://www.mongodb.com/download-center/community)**
* **[MongodB Compass GUI](https://www.mongodb.com/download-center/compass)**
* **[Extensão Visual Studio Code: Azure Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=meanserverlessworkshop-github-gllemos)**
* **[Azure Storage Account](https://azure.microsoft.com/pt-br/services/storage/?WT.mc_id=meanserverlessworkshop-github-gllemos)**

## Azure for Students ⭐️

Si es estudiante en cualquier colegio o universidad, puede crear su cuenta de Azure for Students **[Azure for Students](https://azure.microsoft.com/es-es/free/students/?WT.mc_id=meanserverlessworkshop-github-gllemos)**. Esta cuenta le dará el beneficio de tener un crédito de $ 100 para usar los servicios de forma gratuita, sin tener una tarjeta de crédito. Para activar esta cuenta, haga clic: **[AQUÍ](https://azure.microsoft.com/es-es/free/students/?WT.mc_id=meanserverlessworkshop-github-gllemos)**

## Requisitos Necesarios 📌

Para la realización de los workshops, es necesario tener nociones de: **HTML, CSS y JavaScript**. Y también nociones de Azure Functions. Abajo hay cursos gratuitos sobre:

* **[Curso Gratuito - Creación de un sitio web sencillo con HTML, CSS y Javascript](https://docs.microsoft.com/es-es/learn/modules/build-simple-website/?WT.mc_id=meanserverlessworkshop-github-gllemos)**

* **[Curso Gratuito - Desarrollo de aplicaciones web con Visual Studio Code](https://docs.microsoft.com/es-es/learn/modules/develop-web-apps-with-vs-code/?WT.mc_id=meanserverlessworkshop-github-gllemos)**

- ✅ **[Curso Gratuito - Creación de aplicaciones sin servidor](https://docs.microsoft.com/es-es/learn/paths/create-serverless-applications/?WT.mc_id=meanserverlessworkshop-github-gllemos)**

## Ejecutando la Aplicación Localmente ❗️

### Ejecutando la Aplicación en el Front-End

1) Instalar paquetes con comando: (dentro de la carpeta `front`)

``` 
> npm install
```

2) Luego ejecute el siguiente comando para ejecutar la aplicación. (dentro de la carpeta `front`):

```
> ng serve -o
```

Luego simplemente abra el navegador en **localhost: 4200**

### Ejecutando la Aplicación en el Back-End

Antes de comenzar los pasos a continuación, es muy importante que ahora ejecute MongoDb localmente.

1) Instalar paquetes con comando: (dentro de la carpeta `api`)

``` 
> npm install
```

2) Luego ejecute el siguiente comando para ejecutar la aplicación. (dentro de la carpeta `api`):

```
> nodemon
```

Luego simplemente abra el Postman en **localhost: 8000** y pruebe las requisiciones

Y vòilá! :heart: :heart:

## Consumir las API's en Azure Functions(Mongo x CosmosDb) ⚡️

Para facilitar el desarrollo y la agilidad del proyecto, ya creé dos API que consumen este proyecto en Front End. Para esto, siga los enlaces de apis:

### API a través de MongoDb - Azure Functions

Esta API persiste localmente en MongoDb a través de Azure Functions.

Para ejecutar, solo siga estos pasos:

1. Descargue el proyecto a continuación:

- **[CRUD Serverless MongoDb](https://github.com/glaucia86/crud-serverless-mongodb)**

2. Instale las dependencias requeridas con el comando:

```bash
> npm i
```

3. Crea un archivo llamado: `local.settings.json` e incluya el bloque de código:

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
4. Ejecute el comando:

```bash
> func host start
```

Y enumerará todos los endpoints creados y necesarios para persistir junto con nuestro Front-End.

5. Ahora abre el proyecto `front` y vaya: `src -> app -> funcionario.service.ts`

6. Al ingresar el archivo `funcionario.service.ts`, solo cambia la uri a: `http://localhost:7071/api`

7. Ejecute el proyecto angular con el comando: 

```bash
> ng server -o
```

Y vòilá! Sólo empezar a persistir!!

### API a través de CosmosDb - Azure Functions

1. Descargue el proyecto:

- **[CRUD Serverless CosmosDb](https://github.com/glaucia86/crud-serverless-cosmosdb)**

2. Instale las dependencias requeridas con el comando:

```bash
> npm i
```

3. Crea un archivo llamado: `local.settings.json` e incluya el bloque de código:

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "CosmosDbUrl": "<cosmos-db-url>",
    "CosmosDBUser": "crud-serverless-wavy",
    "CosmosDBPassword": "<cosmos-db-password>"
  },
  "Host": {
    "LocalHttpPort": 7071,
    "CORS": "*"
  }
}
```

4. Ejecute el comando:

```bash
> func host start
```

Y enumerará todos los endpoints creados y necesarios para persistir junto con nuestro Front-End.

5. Ahora abre el proyecto `front` y vaya: `src -> app -> funcionario.service.ts`

6. Al ingresar el archivo `funcionario.service.ts`, solo cambia la uri a: `http://localhost:7071/api`

7. Ejecute el proyecto angular con el comando: 

```bash
> ng server -o
```

Y vòilá! Sólo empezar a persistir!!

### Me gustaría migrar los datos persistentes localmente a Cosmos Db ... ¿Cómo lo hago?

El proceso de migración de datos persistentes localmente de MongoDb a CosmosDb es bastante simple. Sin embargo, le recomiendo que para facilitar el proceso, descargue el **[MongodB Compass GUI](https://www.mongodb.com/download-center/compass)** y tener una cuenta del **[Conta - Azure](https://azure.microsoft.com/es-es/?WT.mc_id=meanserverlessworkshop-github-gllemos)**. Teniendo estas dos cuentas, podemos continuar.

1. Paso: abra el portal de Azure y cree un grupo de recursos. Si ya tienes un grupo de recursos, ¡genial!

```bash
> meanServerlessResourceGroup
```

2. Paso: ahora creemos la base de datos Azure CosmosDb. Para hacerlo, abra su bash en Azure Portal y ejecute los siguientes comandos:

```bash
> crud--serverless-<inclua-seu-nome>

> az cosmosdb create --name crud--serverless-<inclua-seu-nome> --resource group meanServerlessResourceGroup --kind MongoDB
```

3. Abra el recurso recién creado y capture las cadenas de conexión (clave principal) creadas en el paso anterior.

4. Paso: ahora importemos los datos localmente de MongoDb a CosmosDb. Simplemente abra MongoDb Compass y haga clic en exportar archivo y guárdelo en la ubicación donde lo desee.

5. Paso: Ahora ejecutemos el siguiente comando. Este comando será responsable de migrar el archivo creado en el paso anterior para cargarlo en CosmosDb. 

```bash
> mongoimport.exe --host crud--serverless-<inclua-seu-nome>.documents.azure.com:10255 -u crud--serverless-<inclua-seu-nome> -p <primary-key-criada-cosmosdb> --ssl --sslAllowInvalidCertificates --db crud--serverless-<inclua-seu-nome> --collection funcionarios --file funcionarios.json
```
Y listo! Cuando se abre el Portal de Azure y acceder al recurso Azure CosmosDb, verá que sus datos locales, se han migrado con éxito en Azure CosmosDb!

## Implementando la aplicación en Azure ☁️

Para implementar la aplicación en la nube debemos seguir los pasos: (todos los pasos deben usar el Azure CLI)

Pero antes, debemos ejecutar el comando adentro de la carpeta `front`:

```bash
> ng build
```

Vas a generar una otra carpeta llamada `dist`. Y es justo ella que iremos necesitar para implementar en la nube! ;)

1. Hacer la configuración de un usuario de implementación con el comando (**todos los comandos deben ejecutarse usando Azure cli**)

```bash
> az webapp up -n <nombre-de-la-app>
```

Y listo! Podemos abrir nuestra aplicación! :)

## Enlaces y Recursos Importantes ⭐️

Durante el workshop, hablé sobre muchas documentaciones importantes, enlaces y recursos que pueden ayudarlo a conocer más sobre Azure Functions y Azure.

- ✅ **[Azure para desarrolladores de JavaScript y Node.js](https://docs.microsoft.com/es-es/javascript/azure/?WT.mc_id=meanserverlessworkshop-github-gllemos&view=azure-node-latest)**
- ✅ **[Documentación de Azure Functions](https://docs.microsoft.com/es-es/azure/azure-functions/?WT.mc_id=meanserverlessworkshop-github-gllemos)**
- ✅ **[Creación de la primera función mediante Visual Studio Code](https://docs.microsoft.com/es-es/azure/azure-functions/functions-create-first-function-vs-code?WT.mc_id=meanserverlessworkshop-github-gllemos)**
- ✅ **[Extensão Vs Code – Azure Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=meanserverlessworkshop-github-gllemos)**
- ✅ **[E-Book Grátis - Azure Serverless Computing Cookbook](https://azure.microsoft.com/es-es/resources/azure-serverless-computing-cookbook/?WT.mc_id=meanserverlessworkshop-github-gllemos)**

## Tengo dudas ... ¿Qué hago? ❓

Si tiene preguntas sobre los códigos de proyecto relacionados con los workshops, no dude en abrir un **[ISSUE AQUI](https://github.com/glaucia86/workshop-mean-serverless/issues)**. ¡Tan pronto como sea posible, responderé cualquier pregunta que pueda tener!
