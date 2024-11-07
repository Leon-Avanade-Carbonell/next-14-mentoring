'use client'

import { useEffect, useState } from 'react'

type UseFetchPropsType = {
  url: string
}

export function useFetch<TData>({ url }: UseFetchPropsType) {
  const [disabled, setDisabled] = useState<boolean>(false)
  const [data, setData] = useState<TData | undefined>()

  async function fetchFn() {
    setDisabled(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000))
      const response = await fetch(url)
      const jsonData = (await response.json()) as TData
      setData(jsonData)
    } catch (error) {
      console.error(error)
    } finally {
      setDisabled(false)
    }
  }

  useEffect(() => {
    fetchFn()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return { disabled, data }
}
