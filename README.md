# REST API with Express and MongoDB
This template provides a minimal setup to connect to MongoDB Atlas using ExpressJS with credentials.

```pnpm create vite ./ --template react-ts```

To connect to MongoDB:
1. Create local *.env*:

- ```ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=
PORT=5050```


2.  Replace the *username* and *password* with the actual credentials 
3. ``npm i``
4. ``npm run dev``

## Homework

__Cílem tohoto úkolu je implementovat CRUD operace v databázi__

## První varianta - Blog (easy mode)
- vytvoř schéma pro články a autory
- implementuj **CRUD** operace pro články i autory

## Notes

## Dependencies

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
