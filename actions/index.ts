'use server'

import { revalidatePath } from 'next/cache'

import { items } from '@/db/schema'

import { redirect } from 'next/navigation'
import db from '@/db/drizzle'
import { auth, currentUser } from '@clerk/nextjs'

export async function createItemAction(formData: FormData) {
  const { userId } = await auth()
  const user = await currentUser()
  if (!userId || !user) {
    throw new Error('Unauthorized')
  }

  await db.insert(items).values({
    name: formData.get('name') as string,

    startingPrice: formData.get('startingPrice') as any,
    userId,
  })

  redirect('/')
}
