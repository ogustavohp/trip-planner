import { CircleCheck, CircleDashed, UserCog } from 'lucide-react'
import { Button } from '../../components/button'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'

interface Participants {
  id: string
  name: string | null
  email: string
  is_confirmed: boolean
}

export function Guests() {
  const { tripId } = useParams()
  const [participants, setParticipants] = useState<Participants[]>()

  useEffect(() => {
    api
      .get(`/trips/${tripId}/participants`)
      .then((response) => setParticipants(response.data.participants))
  }, [tripId])
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>

      <div className="space-y-5">
        {participants?.map((e, i) => (
          <div key={e.id} className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                {e.name ?? `Convidado ${i}`}
              </span>
              <span className="block truncate text-sm text-zinc-400">
                {e.email}
              </span>
            </div>
            {e.is_confirmed ? (
              <CircleCheck className="size-5 shrink-0 text-lime-300" />
            ) : (
              <CircleDashed className="size-5 shrink-0 text-zinc-400" />
            )}
          </div>
        ))}
      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  )
}
