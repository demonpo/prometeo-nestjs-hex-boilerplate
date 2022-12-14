## 🚀 Quick Start

### without docker

You'll need:

- Nodejs LTS (16.13.2)
- PostgreSQL

```bash
npm install # install dependencies
npm start # start server
```

### with docker

in order to run this app on docker you have to install docker-compose

https://docs.docker.com/compose/

```bash
docker-compose up # start server on development mode
```

## Envs

this project is using Dotenv, you can check the current envs in the .env.example file, in the root of the project

## Private npm libraries

This project is using private npm libraries, to configure it locally you need to create a ".npmrc" file

```text
@prometeo-dev:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

replace ${GITHUB_TOKEN} with your personal token generated by github
you can check how to create your token in this link https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token


## References
- [Hexagonal architecture](https://github.com/stevescruz/ebarber_backend)
- [Hexagonal architecture 2](https://github.com/demonpo/nest-js-products-api)
- [Domain Driven Design](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/ddd-oriented-microservice)