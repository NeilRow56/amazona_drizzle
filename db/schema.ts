import { pgTable, serial, text } from 'drizzle-orm/pg-core'

export const bids = pgTable('bb_bids', {
  id: serial('id').primaryKey(),
})

export const items = pgTable('bb_items', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  name: text('name').notNull(),
})
