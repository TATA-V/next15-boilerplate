import { PgEnumValues } from './base';

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}
export const roleValues = Object.values(Role) as PgEnumValues;
