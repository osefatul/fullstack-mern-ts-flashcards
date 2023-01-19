### Deployment process
- `package.json` in development.
```Typescript
{
"name": "server",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon --watch \"src/**\" --ext \"ts,json\" --exec \"ts-node src/index.ts\""
},
"keywords": [],
"author": "",
"license": "MIT",
"dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "mongoose": "^6.8.4"
},
"devDependencies": {
    "@types/cors": "^2.8.13",
    "@types/dotenv": "^8.2.0",
    "@types/express": "^4.17.15",
    "nodemon": "^2.0.20",
    "ts-node": "^10.9.1"
}
}
```

- `package.json` ready for deployment to heroku

```Typescript
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.ts",
  "scripts": {
    "start": "node build/index.js",
    "postinstall": "tsc"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "mongoose": "^6.8.4",
    "nodemon": "^2.0.20"
  },
  "devDependencies": {
    "@types/cors": "^2.8.13",
    "@types/dotenv": "^8.2.0",
    "@types/express": "^4.17.15",
    "nodemon": "^2.0.20",
    "ts-node": "^10.9.1",
    "typescript": "^4.9.4"
  }
}

- Add `Procfile` and the content should be "worker: npm start"