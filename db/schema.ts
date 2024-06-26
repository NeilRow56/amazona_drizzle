import { pgTable, serial, text } from 'drizzle-orm/pg-core'

export const bida = pgTable('bb_bids', {
  id: serial('id').primaryKey(),
})
