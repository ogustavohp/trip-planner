import { ClientError } from '@/errors/client-error'
import { prisma } from '@/lib/prisma'
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

export async function getParticipant(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/participants/:participantId',
    {
      schema: {
        params: z.object({
          participantId: z.string().uuid(),
        }),
      },
    },
    async (request) => {
      const { participantId } = request.params

      const participant = await prisma.participant.findUnique({
        where: { id: participantId },
        select: {
          id: true,
          email: true,
          name: true,
          is_confirmed: true,
        },
      })

      if (!participant) {
        throw new ClientError('Participant not found')
      }

      return {
        participant,
      }
    },
  )
}
