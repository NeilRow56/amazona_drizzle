import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <Image
        src="/undraw_deliveries.svg"
        width="200"
        height="200"
        alt="Package"
      />
      <h2 className="text-2xl font-bold">You have no auctions yet</h2>
      <Button asChild>
        <Link href="#">Create Auction</Link>
      </Button>
    </div>
  )
}
