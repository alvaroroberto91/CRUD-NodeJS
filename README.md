#  API NODE.JS WITH EXPRESS
> CRUD application using Node.JS, Express, TypeORM and DB SqLite3

An app developed to improve Node.JS skills!

## Dependencies

```sh
yarn add express express-async-erros typeorm class-transformer reflect-metadata sqlite3
```

## Dev Dependencies

```sh
yarn add @types/express @types/uuid ts-node-dev typescript uuid -D
```

## Scripts

Run -> ts-node-dev src/server.ts
```sh
yarn dev
```

Run Migration to create a Table in DB
```sh
yarn typeorm migration:run
```

Drop created Table
```sh
yarn typeorm schema:drop
```