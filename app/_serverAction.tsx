'use server'

export async function tryServer() {
  console.log('I started')
  await new Promise((resolve) => setTimeout(resolve, 3000))
  console.log('This was called from the server')
}
