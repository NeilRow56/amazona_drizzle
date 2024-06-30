'use client'

import { createItemAction, createUploadUrlAction } from '@/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const CreateBidPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="mb-4 text-4xl font-bold">Post an Item to Sell</h1>
      <form
        className="mb-4 flex max-w-lg flex-col space-y-4 rounded-xl border p-8"
        onSubmit={async (e) => {
          e.preventDefault()
          const form = e.currentTarget as HTMLFormElement
          const formData = new FormData(form)
          const file = formData.get('file') as File

          const uploadUrl = await createUploadUrlAction(file.name, file.type)

          await fetch(uploadUrl, {
            method: 'PUT',
            body: file,
            headers: {
              'Content-Type': file.type,
            },
          })

          const name = formData.get('name') as string
          const startingPrice = formData.get('startingPrice') as any

          await createItemAction({
            name,
            startingPrice,
            fileName: file.name,
          })
        }}
      >
        <Input
          required
          type="text"
          className="max-w-lg"
          name="name"
          placeholder="Name your item"
        />
        <Input
          required
          className="max-w-lg"
          name="startingPrice"
          type="number"
          step="0.01"
          placeholder="What to start your auction at"
        />
        <Input type="file" name="file"></Input>
        <Button className="self-end" type="submit">
          Post Item
        </Button>
      </form>
    </div>
  )
}

export default CreateBidPage
