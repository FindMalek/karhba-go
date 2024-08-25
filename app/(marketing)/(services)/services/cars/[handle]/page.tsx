import React from "react"

export default function CarsSpecificPage({
  params,
}: {
  params: { handle: string }
}) {
  return (
    <div>
      CarsSpecificPage
      {params.handle}
    </div>
  )
}
