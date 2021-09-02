#  API NODE.JS WITH EXPRESS
> CRUD application using Node.JS with TypeScript, Express, TypeORM and DB SqLite3

An app developed to improve Node.JS skills!

## Dependencies

```sh
yarn add express express-async-erros typeorm class-transformer reflect-metadata sqlite3 cors
```

## Dev Dependencies

```sh
yarn add @types/express @types/uuid @types/cors ts-node-dev typescript uuid -D
```

## Scripts

Start TSC:
```sh
yarn tsc --init
```

Execute ts-node-dev src/server.ts:
```sh
yarn dev
```

Run Migration to create a Table in DB:
```sh
yarn typeorm migration:run
```

Drop created Table:
```sh
yarn typeorm schema:drop
```

## Routes
> Edit routes.ts file

* GET Method
    * /list

* POST Method
    * /user -> input Json format
        * name
    * /contacts -> input Json format
        * user_id
        * value
        * type (email, phone)
        * primary (Is a primary contact? Boolean type);

* PUT Method
    * /update/:id -> input Json format
        * name

* DELETE Method
    * /delete/:id