import { ItemCard } from '@/components/ItemCard'
import db from '@/db/drizzle'
import { items } from '@/db/schema'

import { auth, currentUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { EmptyState } from './empty-state'

export default async function MyAuctionPage() {
  const { userId } = await auth()
  const user = await currentUser()
  if (!userId || !user) {
    throw new Error('Unauthorized')
  }
  const allItems = await db.query.items.findMany({
    where: eq(items.userId, userId),
  })

  const hasItems = allItems.length > 0
  return (
    <div className="container mx-auto py-12">
      <h2 className="mb-4 text-2xl font-semibold">Your Current Auctions</h2>
      {hasItems ? (
        <div className="grid grid-cols-4 gap-8">
          {allItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  )
}
