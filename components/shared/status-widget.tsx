import { getStatus } from "@openstatus/react"

import { cn } from "@/lib/utils"

export async function StatusWidget() {
  const res = await getStatus("findplate")

  const { status } = res

  const getStatusLevel = (level: string) => {
    return {
      operational: {
        label: "Opérationnel",
        color: "bg-green-500",
        color2: "bg-green-400",
      },
      degraded_performance: {
        label: "Performance dégradée",
        color: "bg-yellow-500",
        color2: "bg-yellow-400",
      },
      partial_outage: {
        label: "Panne partielle",
        color: "bg-yellow-500",
        color2: "bg-yellow-400",
      },
      major_outage: {
        label: "Panne majeure",
        color: "bg-red-500",
        color2: "bg-red-400",
      },
      unknown: {
        label: "Inconnu",
        color: "bg-gray-500",
        color2: "bg-gray-400",
      },
      incident: {
        label: "Incident",
        color: "bg-yellow-500",
        color2: "bg-yellow-400",
      },
      under_maintenance: {
        label: "En maintenance",
        color: "bg-gray-500",
        color2: "bg-gray-400",
      },
    }[level]
  }

  const level = getStatusLevel(status)!

  return (
    <a
      className="border-border flex w-full items-center justify-between space-x-2 rounded-md border px-3 py-1"
      href="https://karhba-go.openstatus.dev"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <p className="text-sm">{level.label}</p>
      </div>

      <span className="relative ml-auto flex size-1.5">
        <span
          className={cn(
            "absolute inline-flex size-full animate-ping rounded-full opacity-75",
            level.color2
          )}
        />
        <span
          className={cn(
            "relative inline-flex size-1.5 rounded-full",
            level.color
          )}
        />
      </span>
    </a>
  )
}
