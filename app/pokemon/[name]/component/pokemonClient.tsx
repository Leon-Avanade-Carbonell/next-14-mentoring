'use client'

import { Button } from '@/components/ui/button'
import { useFetch } from '@/hook/useFetch'
import { useState } from 'react'

// type PokemonClientPropsType = {
//   name: string
// }

interface IPokemonClientProps {
  name: string
}

type PokemonResponseType = {
  base_experience: number
}

export default function PokemonClient({ name }: IPokemonClientProps) {
  const [testName, setTestName] = useState<string | undefined>(undefined)

  const { disabled, data } = useFetch<PokemonResponseType>({
    url: `https://pokeapi.co/api/v2/pokemon/${testName}`,
  })

  return (
    <>
      <div>Pokemon name goes here: {name}</div>
      <div>
        <Button disabled={disabled} onClick={() => setTestName(name)}>
          Get Pokemon Information
        </Button>
      </div>
      {!!data && <div>{JSON.stringify(data.base_experience)}</div>}
    </>
  )
}
