import { pgEnum, pgTable, varchar } from 'drizzle-orm/pg-core';
import { roleValues } from 'src/db/enums';
import { baseColumns } from './base.schema';

export const userRole = pgEnum('role', roleValues);

export const user = pgTable('user', {
  ...baseColumns,
  nickname: varchar('nickname', { length: 20 }).notNull().unique(),
  email: varchar('email', { length: 254 }).notNull().unique(),
  profileUrl: varchar('profileUrl'),
  role: userRole('role').notNull(),
});
