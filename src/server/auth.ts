import { ServerRoute } from '@hapi/hapi'
import { OAuth2Client } from 'google-auth-library'

import dotenv from 'dotenv'
dotenv.config()

if (!process.env.CLIENT_ID) {
  throw new Error('No CLIENT_ID defined')
}

const clientId: string = process.env.CLIENT_ID

const client = new OAuth2Client(clientId)

const route: ServerRoute = {
  handler: async (request, reply) => {
    const requestPayload = request.payload
    if (typeof requestPayload !== 'object') {
      return reply.response('Invalid payload format').code(400)
    }
    if (!('token' in requestPayload)) {
      return reply.response('No token in payload').code(400)
    }
    const { token } = requestPayload

    const ticket = await client.verifyIdToken({
      audience: clientId,
      idToken: token,
    })
    const payload = ticket.getPayload()

    if (payload) {
      return reply
        .response({
          id: payload.sub,
        })
        .code(200)
    } else {
      return reply.response().code(500)
    }
  },
  method: 'POST',
  path: '/auth',
}

export default route
