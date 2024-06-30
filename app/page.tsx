import { ItemCard } from '@/components/ItemCard'
import db from '@/db/drizzle'

export default async function HomePage() {
  const allItems = await db.query.items.findMany()
  return (
    <div className="container mx-auto py-12">
      <h2 className="mb-4 text-2xl font-semibold">Items for Sale</h2>
      <div className="grid grid-cols-4 gap-8">
        {allItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
