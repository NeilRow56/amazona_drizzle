import { getItem } from '@/components/data-access/items'
import db from '@/db/drizzle'
import { items } from '@/db/schema'
import { eq } from 'drizzle-orm'

const IndividualItemPage = async ({
  params: { itemId },
}: {
  params: { itemId: string }
}) => {
  const item = await getItem(parseInt(itemId))

  return (
    <div className="space-t-8 container mx-auto py-12">
      <h1 className="mb-4 text-4xl font-bold">{item?.name}</h1>
    </div>
  )
}

export default IndividualItemPage
