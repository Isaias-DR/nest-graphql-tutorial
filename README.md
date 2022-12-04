# NestJS con GraphQL y SQLite

Curso completo en [YouTube](https://youtu.be/ms0WcT2MJg4 "YouTube") creado por Fazt Code.

## Instalación

Para tener el proyecto completo ejecute los siguientes comandos en consola, en la carpeta que quiera tener clonarla:

Clonar el repocitorio en consola o clrear un espacio de trabajo en GitHub.
`$ gh repo clone Isaias-DR/nest-graphql-tutorial`

Instalar la linea de comando de Nest.
`$ npm i -g @nest/cli`

Instalar GraphQL y Apollo.
`$ npm i @nestjs/graphql @nestjs/apollo graphql apollo-server-express`

Instalar TyperORM para SQLite 3.
`$ npm install --save @nestjs/typeorm typeorm sqlite3`

Intalar los decoradores para las validaciones
`$ npm i --save class-validator class-transformer`

## Usar el proyecto

Levantar el proyecto, se creará el archivo database.sqlite en la raiz del proyecto.
`$ npm run start:dev`

Acceder en [http://localhost:3000/graphql](http://localhost:3000/graphql 'Enlace al proyecto')

La consulta más completa que se puede hacer es desde autores a publicaciones, no esta implementado el caso opuesto.
```
{
  authors {
    id
    name
    posts {
      id
      title
    }
  }
}
```

