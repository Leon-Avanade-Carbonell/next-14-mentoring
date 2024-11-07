'use client'

import { Button } from '@/components/ui/button'
import { useUploadComponents } from '@/hook/useUploadComponents'

export default function UploadComponents() {
  const { UploadButton, UploadComponent, disabled } = useUploadComponents()

  return (
    <>
      <div>
        <Button disabled={disabled}>Not Me</Button>
        <UploadButton />
      </div>
      <div>
        <UploadComponent />
      </div>
    </>
  )
}
