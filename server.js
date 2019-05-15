const Hapi = require('@hapi/hapi')

const init = async () => {
  const server = new Hapi.server({
    port: ~~process.env.PORT || 3000,
    host: process.env.HOST,
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: () => {
      return 'Hello World!'
    },
  })

  await server.start()
  console.log(`Server running on ${server.info.uri}`)
}

init()
