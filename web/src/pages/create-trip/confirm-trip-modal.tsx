import { User, X } from 'lucide-react'
import { Button } from '../../components/button'

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void
  createTrip: (e: React.FormEvent<HTMLFormElement>) => void
  setOwnerName: (name: string) => void
  setOwnerEmail: (email: string) => void
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
  setOwnerName,
  setOwnerEmail,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação de viagem
            </h2>
            <button type="button" onClick={closeConfirmTripModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{' '}
            <span className="font-semibold text-zinc-100">
              Florianópolis, Brasil
            </span>{' '}
            nas datas de{' '}
            <span className="font-semibold text-zinc-100">
              16 a 27 de Agosto de 2024
            </span>{' '}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="flex h-14 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <User className="size-5 text-zinc-400" />
            <input
              type="text"
              name="name"
              onChange={(e) => setOwnerName(e.target.value)}
              placeholder="Seu nome completo"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
            />
          </div>

          <div className="flex h-14 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <User className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              onChange={(e) => setOwnerEmail(e.target.value)}
              placeholder="Seu e-mail pessoal"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
            />
          </div>

          <Button type="submit" size="full" variant="primary">
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  )
}
