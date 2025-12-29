## Authentication Flow
- Login returns JWT token
- Token must be sent as `Authorization: Bearer <token>`
- JWT expiry: 1 hour
- Protected routes use auth middleware
