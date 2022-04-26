# Project Name

## Project setup
- Copy the `.env.example file -> .env.local`

- Install dependencies
  ```
  npm install
  ```

For more information on how Vue-cli uses environment variables out of the box [click here](https://cli.vuejs.org/guide/mode-and-env.html#environment-variables).

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
This will use `.env.production.local` variables unless specifying a mode.
```
npm run build
```

To build for staging use the comman below. This will use the `.env.staging.local` variables.
```
npm run build:staging
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
