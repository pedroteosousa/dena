import Hapi from '@hapi/hapi'

const init = async () => {
  const server = new Hapi.Server({
    port: parseInt(process.env.PORT || '3000'),
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
