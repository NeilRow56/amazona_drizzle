import { Item } from '@/db/schema'

import Image from 'next/image'

export function ItemCard({ item }: { item: Item }) {
  return (
    <div key={item.id} className="space-y-2 rounded-xl border p-8">
      <Image src={item.fileKey} alt={item.name} width={200} height={200} />
      <h2 className="text-xl font-bold">{item.name}</h2>
      <p className="text-lg">starting price: £{item.startingPrice}</p>
    </div>
  )
}
