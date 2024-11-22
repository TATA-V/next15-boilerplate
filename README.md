## Next15 Full-Stack Starter

###  Features

`Next15` `TailwindCSS` `XATA` `Drizzle-ORM` `Clerk`

### Setup .env.local file

```ts
XATA_DATABASE_URL=
NEXT_PUBLIC_BASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/
```

### Running Commands

```bash
# Generates Xata types and client files based on your database schema.
pnpm generate

# Applies migrations to your Xata database.
pnpm migrate
```
