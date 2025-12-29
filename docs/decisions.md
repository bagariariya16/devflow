# Architectural Decisions

## 1. Monorepo Structure
**Decision:** Use a monorepo for backend services and shared libraries.

**Reasoning:**
- Easier dependency sharing
- Simplified CI/CD setup
- Better visibility across services

**Alternatives Considered:**
- Multiple repositories (rejected due to complexity)

---

## 2. Backend Language
**Decision:** Node.js with Express

**Reasoning:**
- Strong ecosystem
- Fast development
- Good fit for microservices

---

## 3. Containerization
**Decision:** Docker for all services

**Reasoning:**
- Environment consistency
- Kubernetes compatibility

---

## 4. Repository Structure
**Decision:** Use a monorepo with apps and packages separation.

**Reasoning:**
- Simplifies shared library usage
- Enables unified CI/CD
- Reduces repo sprawl

**Structure:**
- apps/: deployable services
- packages/: shared libraries
- infra/: infrastructure code

---

## 5. Service Boundaries
**Decision:** Separate Auth, Project, and Deployment concerns into distinct services.

**Reasoning:**
- Clear ownership
- Independent scaling
- Better fault isolation

---

## 6. Monorepo Tooling
**Decision:** Use npm workspaces for dependency management.

**Reasoning:**
- Native Node.js support
- Easy local linking of shared libraries
- Simplified CI/CD dependency installation

**Alternatives Considered:**
- Yarn workspaces
- pnpm

npm was chosen for simplicity and wider familiarity.

---

## 7. Language Choice
**Decision:** Use JavaScript instead of TypeScript initially.

**Reasoning:**
- Focus on architecture and DevOps concepts
- Reduce initial cognitive load
- Faster iteration during early development

**Future Plan:**
- Introduce TypeScript incrementally, starting with shared libraries

---

## 8. Shared Library Design
**Decision:** Centralize logging, errors, and response formatting in a shared library.

**Reasoning:**
- Enforces consistency across microservices
- Simplifies debugging and monitoring
- Reduces duplicated boilerplate

---

## 9. Database Choice
**Decision:** Use PostgreSQL as the primary database.

**Reasoning:**
- Strong relational data support
- Data integrity and constraints
- Industry-standard for backend systems
- Excellent compatibility with cloud platforms like Azure

**Future Plan:**
- Run PostgreSQL locally using Docker
- Use an ORM (Prisma) for database access

---

## API Base Paths
**Decision:** Each service exposes APIs under a dedicated base path.

**Example:**
- Auth Service → `/auth/*`

**Reasoning:**
- Improves clarity and maintainability
- Simplifies routing via API gateways and Kubernetes ingress

---

## Cloud & Cost Strategy
This project is designed to be fully runnable using local infrastructure.

- No paid cloud services are required
- Docker, Kubernetes, and CI/CD simulate production environments
- Architecture remains cloud-agnostic and migration-ready

This ensures zero cost while retaining real-world design principles.
