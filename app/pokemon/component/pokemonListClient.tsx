'use client'

import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

type PokemonListType = {
  name: string
  url: string
}

export default function PokemonListClient() {
  const [pokemonList, setPokemonList] = useState<PokemonListType[]>([])
  const [disabled, setDisabled] = useState(true)

  async function getPokemonList() {
    setDisabled(true)
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`
      )
      const data = (await response.json()) as {
        count: number
        results: PokemonListType[]
      }
      setPokemonList(data.results)
    } catch (e) {
      console.error(e)
    } finally {
      setDisabled(false)
    }
  }

  useEffect(() => {
    console.log('I was created')
    getPokemonList()
  }, [])

  return (
    <div>
      Pokemon List Client
      <div>
        <Button disabled={disabled}>Check if this gets disabled</Button>
      </div>
      <div>
        Results
        {pokemonList.length >= 1 &&
          pokemonList.map((entry) => <div key={entry.name}>{entry.name}</div>)}
      </div>
    </div>
  )
}
