# Developer Setup

## Prerequisites
- Node.js
- Docker
- Git
- Kubernetes CLI (kubectl)
- Helm

## Local Development
Instructions will be added as services are implemented.

## Environment Variables
To be documented per service.

### Verify PostgreSQL (via Docker)
```bash
docker exec -it devflow-postgres psql -U devflow -d devflow_auth
