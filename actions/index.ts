'use server'

import { items } from '@/db/schema'

import { redirect } from 'next/navigation'
import db from '@/db/drizzle'
import { auth, currentUser } from '@clerk/nextjs'
import { getSignedUrlForS3Object } from '@/lib/s3'

export async function createUploadUrlAction(key: string, type: string) {
  return await getSignedUrlForS3Object(key, type)
}

export async function createItemAction({
  fileName,
  name,
  startingPrice,
}: {
  fileName: string
  name: string
  startingPrice: any
}) {
  const { userId } = await auth()
  const user = await currentUser()
  if (!userId || !user) {
    throw new Error('Unauthorized')
  }

  await db.insert(items).values({
    name,
    startingPrice,
    fileKey: fileName,
    userId,
  })

  redirect('/')
}
