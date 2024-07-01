import db from '@/db/drizzle'
import { items } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function getItem(itemId: number) {
  const item = await db.query.items.findFirst({
    where: eq(items.id, itemId),
  })
  return item
}
