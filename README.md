# push-handler

## Getting started

> You will need an `.env` file at the root of the project

`MONGODB_URI='mongodb://<USERNAME>:<PASSWORD>@<HOSTNAME>:<PORT>/<DATABASE>'` (*required*)
`VAPID_PUBLIC_KEY='<YOUR VAPID PUBLIC KEY>'` (*required*)
`VAPID_PRIVATE_KEY='<YOUR VAPID PRIVATE KEY>'` (*required*)
`PORT=3000` (optional)

### Run the web app

#### From the root directory of the project run:

1. Start dev API server

```npm run dev```

2. Open another terminal window/tab in the root directory of the project

3. Start Webpack server (proxies to the API server) by running:

```cd public && npm start```

