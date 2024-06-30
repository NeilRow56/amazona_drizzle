import { integer, numeric, pgTable, serial, text } from 'drizzle-orm/pg-core'

export const bids = pgTable('bb_bids', {
  id: serial('id').primaryKey(),
})

export const items = pgTable('bb_items', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  name: text('name').notNull(),
  fileKey: text('fileKey').notNull(),
  startingPrice: numeric('endPrice', { precision: 100, scale: 2 }),
})

export type Item = typeof items.$inferSelect
