# JIGS NODEJS 
By [Maxminlevel](mailto:vovantoan.dev@gmail.com) 

<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About 

JIGS NODEJS is a template framework for NodeJS. JIGS NODEJS attempts to take the pain out of development by easing common tasks used in the majority of NodeJS/web projects, such as:

- [x] Clean architecture
- [x] Singleton design pattern
- [ ] Custom midleware
  - [ ] Forward router
  - [ ] Build message through midleware
- [x] Simple setup routing engine.
- [ ] Support many type database
  - [ ] MongoDB
  - [x] PostgreSQL
- [x] Server Side Rendering
  - [x] I18n
  - [x] Handlebars
- [x] Robust background job processing with Node-cron
- [x] Easily unit testing (Jest)
- [ ] Webpack and babel
- [x] Script for hide enviroment (.env, docker-compose, ...)
- [x] Docker setup for build image and enviroment.

The idea is build a context contain all services we need. We will require only in the first time instead call require any where.

```mermaid
flowchart TD

    subgraph "Docker & Deployment"
        DockerFile["Dockerfile"]:::docker
        DockerInit["Docker Init"]:::docker
        DockerTemplate["Docker Template"]:::docker
        DockerScript["Docker Script"]:::docker
    end

    subgraph "Configuration & Environment Setup"
        ConfigEnv["Env Config"]:::config
        ConfigModule["Config Module"]:::config
        ConfigExampleJSON["Example Config"]:::config
        ScriptEnv["Env Script"]:::config
        ScriptEnvHide["Hidden Env Script"]:::config
        ScriptSetup["Setup Script"]:::config
    end

    subgraph "API Layer"
        APIEntry["API Entry"]:::api
        RouteIndex["Route Index"]:::api
        RouteTest["Test Route"]:::api
    end

    subgraph "Business Logic & Services"
        ServiceMain["Services"]:::services
        HelperObject["Helper Object"]:::services
        HelperSequelize["Sequelize CLI"]:::services
    end

    subgraph "Models & Database Access"
        ModelTest["Test Model"]:::models
        ModelAssociation["Model Association"]:::models
        DBConnection["DB Connection"]:::models
        TestDB["Test DB"]:::models
    end

    subgraph "Presentation Layer"
        ViewIndex["Main View"]:::presentation
        PublicAssets["Public Assets"]:::presentation
    end

    subgraph "Background Processing"
        WorkerEntry["Worker Entry"]:::background
        WorkerExample["Worker Example"]:::background
    end

    %% Connections between subgraphs
    DockerFile --> ConfigEnv
    ConfigEnv --> APIEntry

    APIEntry --> RouteIndex
    APIEntry --> RouteTest
    RouteIndex --> ServiceMain
    RouteTest --> ServiceMain

    ServiceMain --> DBConnection
    ServiceMain --> HelperObject
    ServiceMain --> HelperSequelize

    DBConnection --> TestDB
    DBConnection --> ModelTest
    DBConnection --> ModelAssociation

    RouteIndex --> ViewIndex
    ViewIndex --> PublicAssets

    ServiceMain --> WorkerEntry
    WorkerEntry --> WorkerExample
    WorkerEntry --> DBConnection

    %% Click Events for Docker & Deployment
    click DockerFile "https://github.com/maxminlevel/jigs-nodejs/tree/master/Dockerfile"
    click DockerInit "https://github.com/maxminlevel/jigs-nodejs/blob/master/docker/init.sh"
    click DockerTemplate "https://github.com/maxminlevel/jigs-nodejs/blob/master/docker/template.yml"
    click DockerScript "https://github.com/maxminlevel/jigs-nodejs/blob/master/scripts/docker-image.sh"

    %% Click Events for Configuration & Environment Setup
    click ConfigEnv "https://github.com/maxminlevel/jigs-nodejs/blob/master/example.env"
    click ConfigModule "https://github.com/maxminlevel/jigs-nodejs/blob/master/src/config/index.js"
    click ConfigExampleJSON "https://github.com/maxminlevel/jigs-nodejs/blob/master/src/config/example.json"
    click ScriptEnv "https://github.com/maxminlevel/jigs-nodejs/blob/master/scripts/env.sh"
    click ScriptEnvHide "https://github.com/maxminlevel/jigs-nodejs/blob/master/scripts/env-hide.sh"
    click ScriptSetup "https://github.com/maxminlevel/jigs-nodejs/blob/master/scripts/setup.sh"

    %% Click Events for API Layer
    click APIEntry "https://github.com/maxminlevel/jigs-nodejs/blob/master/src/api.js"
    click RouteIndex "https://github.com/maxminlevel/jigs-nodejs/blob/master/src/routes/index.js"
    click RouteTest "https://github.com/maxminlevel/jigs-nodejs/blob/master/src/routes/test.route.js"

    %% Click Events for Business Logic & Services
    click ServiceMain "https://github.com/maxminlevel/jigs-nodejs/blob/master/src/services/index.js"
    click HelperObject "https://github.com/maxminlevel/jigs-nodejs/blob/master/src/helpers/object.js"
    click HelperSequelize "https://github.com/maxminlevel/jigs-nodejs/blob/master/src/helpers/sequelize/cli.js"

    %% Click Events for Models & Database Access
    click ModelTest "https://github.com/maxminlevel/jigs-nodejs/blob/master/src/models/Test.model.js"
    click ModelAssociation "https://github.com/maxminlevel/jigs-nodejs/blob/master/src/models/association.js"
    click DBConnection "https://github.com/maxminlevel/jigs-nodejs/blob/master/src/db.js"
    click TestDB "https://github.com/maxminlevel/jigs-nodejs/blob/master/src/testdb.js"

    %% Click Events for Presentation Layer
    click ViewIndex "https://github.com/maxminlevel/jigs-nodejs/blob/master/src/views/index.hbs"
    click PublicAssets "https://github.com/maxminlevel/jigs-nodejs/tree/master/src/public"

    %% Click Events for Background Processing
    click WorkerEntry "https://github.com/maxminlevel/jigs-nodejs/blob/master/src/worker.js"
    click WorkerExample "https://github.com/maxminlevel/jigs-nodejs/blob/master/src/workers/example.worker.js"

    %% Styling classes
    classDef config fill:#ADD8E6,stroke:#000,stroke-width:1px;
    classDef api fill:#90EE90,stroke:#000,stroke-width:1px;
    classDef services fill:#98FB98,stroke:#000,stroke-width:1px;
    classDef models fill:#DDA0DD,stroke:#000,stroke-width:1px;
    classDef presentation fill:#FFCC99,stroke:#000,stroke-width:1px;
    classDef background fill:#D3D3D3,stroke:#000,stroke-width:1px;
    classDef docker fill:#C0C0C0,stroke:#000,stroke-width:1px;
```

## Setup

See more in [Guide.md](./Guide.md)


## License

The JIGS NODEJS framework is open-sourced software licensed under the [MIT license](./LICENSE) and Drinkware License below
```
THE DRINKWARE LICENSE

<vvtoan35@gmail.com> wrote this file. As long as 
you retain this :x:tice you can do whatever you want 
with this stuff. If we meet some day, and you think 
this stuff is worth it, you can buy me the following
drink(s) in return.

Red Bull
Coffee
Sprite
Cola
Beer
etc

Toan Vo Van
```
