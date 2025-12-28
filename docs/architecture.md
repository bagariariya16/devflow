# System Architecture

DevFlow follows a modular, service-oriented architecture.

## High-Level Components
- Frontend Web Application
- Backend API Services
- Shared Common Library
- CI/CD Pipeline
- Kubernetes Cluster

## Backend Services

All backend services follow a standard structure:
- Express-based HTTP server
- Health check endpoint
- Isolated package.json
- Shared dependencies via npm workspaces

### Auth Service
Handles authentication, authorization, and token management.

### Project Service
Manages project metadata, repositories, and environment configurations.

### Deployment Service
Handles deployment orchestration, pipeline triggering, and deployment status tracking.

## Infrastructure
- Services are containerized using Docker
- Deployed on Kubernetes using Helm charts
- CI/CD pipelines automate build and deployment

## Data Flow
1. User interacts with the frontend
2. Frontend communicates with backend APIs
3. CI/CD pipelines build and deploy services
4. Kubernetes orchestrates runtime execution

## Shared Library (@devflow/common)

Provides cross-cutting utilities used by all backend services:
- Structured logging
- Standardized error classes
- Consistent API response helpers

This ensures consistency and reduces duplication across services.
