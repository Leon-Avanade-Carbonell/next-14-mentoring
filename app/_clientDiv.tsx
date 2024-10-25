'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { tryServer } from './_serverAction'

function ClientComponent() {
  const [text, setText] = useState('')
  const [disableClient, setDisableClient] = useState(false)
  function clientPokemon() {
    setDisableClient(true)
    fetch(`https://pokeapi.co/api/v2/pokemon/er`)
      .then((response) => response.json())
      .then((data) => console.table(data))
      .catch((error) => {
        console.log('This was caught in the catch-error')
        console.log(error)
      })
      .finally(() => {
        console.log('API is done')
        setDisableClient(false)
      })
  }

  async function asyncClientPokemon() {
    console.log('async client has started')
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/dx`)
      const data = await response.json()

      console.table(data)
    } catch (err) {
      console.log('I was caught as an error')
      console.log(err)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Input
        className="text-2xl text-red-600"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button
        disabled={disableClient}
        onClick={() => {
          console.log('I was pressed client side')
          //   clientPokemon()
          asyncClientPokemon()
        }}
      >
        This is the CLIENT side button
      </Button>
      <Button onClick={() => tryServer()}>
        This is the SERVER ACTION button
      </Button>
    </div>
  )
}

export default ClientComponent
