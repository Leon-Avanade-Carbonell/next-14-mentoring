import PokemonClient from './component/pokemonClient'

export default async function PokemonName({
  params,
}: {
  params: { name: string }
}) {
  const name = await params.name

  return (
    <>
      <PokemonClient name={name} />
    </>
  )
}
