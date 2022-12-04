# NestJS con GraphQL y SQLite

Curso completo en [YouTube](https://youtu.be/ms0WcT2MJg4 "YouTube") creado por Fazt Code.

## Instalación

Para tener el proyecto completo ejecute los siguientes comandos en consola:

Estando en consola en la carpeta que quiera tener el proyecto clonela con Git Bash.

```
git clone https://github.com/Isaias-DR/nest-graphql-tutorial.git
```

O desde GitHub desktop.

Los siguientes comandos tienen la `i` que es `install` en npm.

Instalar los modulos de node.

```
npm i
```

Instalar GraphQL y Apollo.

```
npm i @nestjs/graphql @nestjs/apollo graphql apollo-server-express
```

Instalar TyperORM para SQLite 3.

```
npm i --save @nestjs/typeorm typeorm sqlite3
```

Intalar los decoradores para las validaciones.

```
npm i --save class-validator class-transformer
```

## Usar el proyecto

Levantar el proyecto, se creará el archivo database.sqlite en la raiz del proyecto.

```
npm run start:dev
```

Acceder en [http://localhost:3000/graphql](http://localhost:3000/graphql 'Enlace al proyecto'), hecerlo con `control`+`clic` o con `botón derecho` y `Abril el enlace en una nueva pestaña`.

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

## Programar con NestJS

Instalar la linea de comando de Nest.

```
npm i -g @nestjs/cli
```

Los siguientes comandos tienen la `g` que es `generate` en Nest.

Crear módulos.

```
nest g module "nombre del módulo"
```

Crear servicios.

```
nest g service "nombre del servicio"
```

Crear clase.

```
nest g service "nombre de la clase"
```

Ahora si uno comprende todo lo anterior, puede usar los Boilerplate para crear recursos.

```
nest g resource "nombre recurso"
```