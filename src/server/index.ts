import Hapi from '@hapi/hapi'
import hapi_inert_pluggin from '@hapi/inert'
import path from 'path'

import dotenv from 'dotenv'
dotenv.config()

const init = async () => {
  const server = new Hapi.Server({
    host: process.env.HOST,
    port: parseInt(process.env.PORT || '3000', 10),
  })

  await server.register(hapi_inert_pluggin)

  server.route({
    handler: {
      directory: {
        index: true,
        listing: true,
        path: path.join(__dirname, '../../lib/client'),
      },
    },
    method: 'GET',
    path: '/{path*}',
  })

  await server.start()
  console.log(`Server running on ${server.info.uri}`)
}

init()
