import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import db from '@/db/drizzle'
import { bids as bidsSchema, items } from '@/db/schema'
import { auth, currentUser } from '@clerk/nextjs'
import { revalidatePath } from 'next/cache'

export default async function Home() {
  const { userId } = await auth()
  const user = await currentUser()
  if (!userId || !user) {
    throw new Error('Unauthorized')
  }
  const allItems = await db.query.items.findMany()
  return (
    <div className="container mx-auto py-12">
      <form
        action={async (formData: FormData) => {
          'use server'

          await db.insert(items).values({
            name: formData.get('name') as string,
            userId,
          })
          revalidatePath('/')
        }}
      >
        <Input name="name" placeholder="Name your item" />
        <Button type="submit">Post Item</Button>
      </form>

      {allItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}
