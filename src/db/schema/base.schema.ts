import { serial, timestamp } from 'drizzle-orm/pg-core';

export const baseColumns = {
  id: serial('id').primaryKey().notNull(),
  createAt: timestamp('create_at').defaultNow().notNull(),
};
