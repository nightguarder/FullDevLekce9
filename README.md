# Mongodb branch

- Minimal ExpressJS Typescript app to connect to MongoDB Atlas db.
- Using [Mongoose](https://mongoosejs.com/) and [Joi] (https://joi.dev/api/?v=17.9.1#dateiso) to get familiar with CRUD and ORM

## Ukol

__Cílem tohoto úkolu je implementovat CRUD operace v databázi__

### První varianta - Blog (easy mode)

- [x] vytvoř schéma pro články a autory
- [x] implementuj **CRUD** operace pro články i autory

## Project setup

__Project mostly based on this tutorial:__

- [REST API with Express, Node and MongoDB](https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial) 
- [CRUD tutorial](https://www.mongodb.com/developer/languages/javascript/node-crud-tutorial/)
- [MongoDB setup](https://medium.com/@rachealkuranchie/how-to-build-a-crud-api-with-express-js-and-typescript-21c7c66e5296)


## Mongo DB connection

- First create Configuration file holding Atlas connection string details.
1. Create local *.env*:

```javascript
PORT=5050
HOST=localhost
MONGO_USER=username
MONGO_PWD=securepwd
MONGO_DATABASE=myfirstDatabase
```

2.  Replace the *MONGO_USER* and *<password>* with the actual credentials from [Atlas Database Dashboard](https://cloud.mongodb.com/v2)

3. save .env and continue
4. If you have configured everything correctly you should get after starting the server:
__``You successfully connected to MongoDB!``__

- Troubleshooting:
[MongoserverErrorAuth](https://dev.to/shafia/how-to-fix-the-error-mongoservererror-bad-auth-authentication-failed-5b58)

### Run the project locally

1. ``npm i``

2. ``npm run dev``

3. ``pnpm run build``

4. ``pnpm link --global``

## Notes

- Start project from scratch: 
- ```pnpm create vite ./ --template react-ts```

## Documentation
- [Joi docs](https://joi.dev/api/?v=17.9.1#dateiso)
- [Mongoose](https://mongoosejs.com/)