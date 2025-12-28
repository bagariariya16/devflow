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
