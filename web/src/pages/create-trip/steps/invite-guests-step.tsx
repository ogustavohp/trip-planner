import { UserRoundPlus, ArrowRight } from 'lucide-react'

interface InviteGuestsStepProps {
  openGuestsModal: () => void
  emailsToInvite: string[]
  openConfirmTripModal: () => void
}

export function InviteGuestsStep({
  emailsToInvite,
  openConfirmTripModal,
  openGuestsModal,
}: InviteGuestsStepProps) {
  return (
    <div className="shadow-shape flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4">
      <button
        type="button"
        onClick={openGuestsModal}
        className="flex flex-1 items-center gap-2 text-left"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="flex-1 text-lg text-zinc-100">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="flex-1 text-lg text-zinc-400">
            Quem estará na viagem?
          </span>
        )}
      </button>

      <div className="h-6 w-px bg-zinc-800" />

      <button
        onClick={openConfirmTripModal}
        className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
      >
        Confirmar Viagem <ArrowRight className="size-5" />
      </button>
    </div>
  )
}
