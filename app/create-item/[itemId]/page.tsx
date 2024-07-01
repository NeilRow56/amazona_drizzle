import { getItem } from '@/components/data-access/items'

import { Button } from '@/components/ui/button'

import { getImageUrl } from '@/lib/files'
import { pageTitleStyles } from '@/styles'

import { formatDistance } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

function formatTimestamp(timestamp: Date) {
  return formatDistance(timestamp, new Date(), { addSuffix: true })
}

const IndividualItemPage = async ({
  params: { itemId },
}: {
  params: { itemId: string }
}) => {
  const item = await getItem(parseInt(itemId))

  if (!item) {
    return (
      <div className="mt-20 flex flex-col items-center justify-center space-y-8">
        <Image
          src="/undraw_deliveries.svg"
          width="200"
          height="200"
          alt="Package"
        />
        <h1 className={pageTitleStyles}>Item not found!</h1>
        <p className="text-center">
          The item you&apos;re trying to view is invalid.
          <br /> Please refine your search
        </p>
        <Button asChild>
          <Link href="/">Auctions</Link>
        </Button>
      </div>
    )
  }

  const bids = [
    {
      id: 1,
      amount: 28000,
      bidderName: 'Alice',
      timestamp: new Date(),
    },
    {
      id: 2,
      amount: 31000,
      bidderName: 'Jane',
      timestamp: new Date(),
    },
    {
      id: 3,
      amount: 42000,
      bidderName: 'Sarah',
      timestamp: new Date(),
    },
  ]

  // const bids = []

  const hasBids = bids.length > 0

  return (
    <main className="">
      <div className="flex gap-2">
        <div className="flex min-w-[450px] flex-col">
          <h1 className={pageTitleStyles}>
            <span className="font-normal">Auction for</span> {item.name}
          </h1>
          <Image
            className="mt-5 rounded-xl border"
            src={getImageUrl(item.fileKey)}
            alt={item.name}
            width={400}
            height={400}
          />
          <div className="mt-5 space-y-4 text-xl">
            <div>
              Starting Price of{' '}
              <span className="font-bold">£{item.startingPrice}</span>{' '}
            </div>
            <div>
              Bid Interval
              <span className="ml-2 font-semibold">£{item.bidInterval}</span>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-2">
          <h2 className="mb-4 py-2 text-2xl font-bold">Current Bids</h2>
          {hasBids ? (
            <ul className="max-w-[450px] space-y-4">
              {bids.map((bid) => (
                <li key={bid.id} className="rounded-xl bg-gray-100 p-8">
                  <div className="flex">
                    <div className="flex w-full">
                      <span className="mr-2 font-bold">£{bid.amount} by </span>
                      <span className="font-bold">{bid.bidderName}</span>
                    </div>
                    <div className="flex w-full items-center text-muted-foreground">
                      <span className="text-sm">
                        {formatTimestamp(bid.timestamp)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center space-y-8 rounded-xl bg-gray-100 p-8">
              <Image
                src="/undraw_deliveries.svg"
                width="200"
                height="200"
                alt="Package"
              />
              <h2 className="text-2xl font-bold">No bids yet</h2>
              <Button asChild>
                <Link href="#">Place a Bid</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default IndividualItemPage
