import Hapi from '@hapi/hapi'
import hapi_inert_pluggin from '@hapi/inert'
import path from 'path'

const init = async () => {
  const server = new Hapi.Server({
    port: parseInt(process.env.PORT || '3000'),
    host: process.env.HOST,
  })

  await server.register(hapi_inert_pluggin)

  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: path.join(__dirname, '../../lib/client'),
        listing: true,
        index: true,
      },
    },
  })

  await server.start()
  console.log(`Server running on ${server.info.uri}`)
}

init()
