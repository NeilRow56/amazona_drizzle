import { createItemAction } from '@/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const CreateBidPage = async () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="mb-4 text-4xl font-bold">Post an Item to Sell</h1>
      <form
        className="mb-4 flex max-w-lg flex-col space-y-4 rounded-xl border p-8"
        action={createItemAction}
      >
        <Input
          required
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

        <Button className="self-end" type="submit">
          Post Item
        </Button>
      </form>
    </div>
  )
}

export default CreateBidPage
