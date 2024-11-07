import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function useUploadComponents() {
  const UploadButton = () => {
    return <Button>Upload</Button>
  }

  const UploadComponent = () => (
    <div>
      <h1>Upload Component Goes Here</h1>
    </div>
  )

  const [disabled] = useState<boolean>(false)

  return { UploadButton, UploadComponent, disabled }
}
