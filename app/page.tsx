import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import db from '@/db/drizzle'
import { bids as bidsSchema } from '@/db/schema'
import { revalidatePath } from 'next/cache'

export default async function Home() {
  const bids = await db.query.bids.findMany()
  return (
    <main className="container mx-auto py-12">
      <form
        action={async (formData: FormData) => {
          'use server'

          await db.insert(bidsSchema).values({})
          revalidatePath('/')
        }}
      >
        <Input name="bid" placeholder="Bid" />
        <Button type="submit">Place Bid</Button>
      </form>

      {bids.map((bid) => (
        <div key={bid.id}>{bid.id}</div>
      ))}
    </main>
  )
}
