import { MapPin, Calendar, Settings2 } from 'lucide-react'
import { Button } from '../../components/button'

export function DestinationAndDateHeader() {
  return (
    <div className="shadow-shape flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">Florianópolis, Brasil</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100">17 a 23 de Agosto</span>
        </div>

        <div className="h-6 w-px bg-zinc-800" />

        <Button>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  )
}
