# REST API with Azure Functions and TypeScript

This repo contains a sample project created with Azure Core Tools and Visual Studio Code.

## Requirements

- [Install Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
- [Download and install Node.js](https://nodejs.org/es/download/)
- [Install TypeScript](https://www.typescriptlang.org/download)
- [Install Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local)
- [Install Visual Studio Code](https://code.visualstudio.com/)
- [Install Azure Functions VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)

## Azure Functions TypeScript Project

This project contains a CRUD for MS SQL Server DB using Azure Functions, [Typescript](https://www.typescriptlang.org/) and [Sequelize ORM](https://sequelize.org/).

## Database setup

At your SQL Server instance, create a new DB and create a simple table that will contains 4 columns: id, name, description and enabled. You can use the following SQL Server Script:

```SQL
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Departments](
    [id] [int] IDENTITY(1,1) NOT NULL,
    [name] [varchar](255) NOT NULL,
    [description] [varchar](255) NOT NULL,
    [enabled] [bit] NOT NULL DEFAULT 1
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Departments] ADD PRIMARY KEY CLUSTERED 
(
    [id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
```

### Run the project

You can run the project with VS Code. Open the folder with VS Code, go to options panel at the top and click in "Run" then you can select "Start debugging" or "Run without debugging".

If you have problems with some dependencies run:

```shell
npm i
npm i typescript --save-dev
npm install --save-dev @types/node @types/validator @types/tedious
npm install sequelize reflect-metadata sequelize-typescript tedious
```

## Create Function App and Deploy your Azure function

In order to run your Function in the cloud, you should create an Azure Function App instance. You can create it within Visual Studio code using the Azure Functions plugin.

Once your Function App instance is created, now you can deploy it with Visual Studio Code using the Azure Functions plugin.

For more information you can check the [official documentation](https://docs.microsoft.com/en-us/azure/azure-functions/functions-develop-vs-code?tabs=csharp)