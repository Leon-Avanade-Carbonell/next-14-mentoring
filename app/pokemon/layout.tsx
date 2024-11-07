export default function PokemonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="max-w-5xl px-9">
        <div>This is the Pokemon Layout Header</div>
        <div>{children}</div>
      </div>
    </>
  )
}
