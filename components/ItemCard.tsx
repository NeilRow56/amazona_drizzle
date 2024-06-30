import { Item } from '@/db/schema'
import { getImageUrl } from '@/lib/files'

import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

export function ItemCard({ item }: { item: Item }) {
  return (
    <div key={item.id} className="space-y-2 rounded-xl border p-8">
      <Image
        src={getImageUrl(item.fileKey)}
        alt={item.name}
        width={200}
        height={200}
      />
      <h2 className="text-xl font-bold">{item.name}</h2>
      <p className="text-lg">starting price: £{item.startingPrice}</p>
      <Button asChild>
        <Link href={`/create-item/${item.id}`}>Place Bid</Link>
      </Button>
    </div>
  )
}
