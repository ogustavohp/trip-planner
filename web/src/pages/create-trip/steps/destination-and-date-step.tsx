import { MapPin, Calendar, Settings2, ArrowRight } from 'lucide-react'

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  closeGuestsInput: () => void
  openGuestsInput: () => void
}

export function DestinationAndDateStep({
  closeGuestsInput,
  isGuestsInputOpen,
  openGuestsInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="shadow-shape flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          disabled={isGuestsInputOpen}
          placeholder="Para onde você vai?"
          className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          type="text"
          disabled={isGuestsInputOpen}
          placeholder="Quando?"
          className="w-40 bg-transparent text-lg outline-none placeholder:text-zinc-400"
        />
      </div>

      <div className="h-6 w-px bg-zinc-800" />

      {isGuestsInputOpen ? (
        <button
          onClick={closeGuestsInput}
          className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 hover:bg-zinc-700"
        >
          Alterar local/data
          <Settings2 className="size-5" />
        </button>
      ) : (
        <button
          onClick={openGuestsInput}
          className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
        >
          Continuar <ArrowRight className="size-5" />
        </button>
      )}
    </div>
  )
}
