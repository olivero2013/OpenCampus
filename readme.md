# OpenCampus

OpenCampus is a modern, self-hosted Student Information System (SIS) built for schools that want full control over their data, security, and infrastructure.

It provides a flexible backend foundation for managing students, staff, relationships, organizational hierarchy, authentication, permissions, and audit logging — all designed with scalability and real-world school workflows in mind.

---

## ✨ Features

### 🔐 Authentication & Authorization
- Secure login system with token-based auth
- Role-based access control (RBAC)
- Fine-grained permission system with deny/allow precedence

### 🏫 Student Information System Core
- Student profiles and records
- Staff and user management
- Contacts and relationships (guardians, staff, etc.)
- Organizational hierarchy (schools, departments, classes)

### 📜 Audit Logging
- Every critical action is logged
- Traceable changes for accountability and compliance

### ⚙️ Modular Backend Architecture
- Built with NestJS
- Designed for scalability and extension
- Clean separation of domains (auth, SIS, permissions, etc.)

### 🗄️ Database Layer
- MariaDB-backed persistence
- Prisma ORM for type-safe data access

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MariaDB 10.8+
- npm or pnpm

### Installation

```bash
git clone https://github.com/your-org/opencampus.git
cd opencampus
npm install
```

### Environment Variables

Create a ```.env``` file or use the example:
```.env
DATABASE_URL="mysql://user:password@localhost:3306/opencampus"
JWT_SECRET="your-secret-key"
JWT_EXPIRES_IN="10m"
```

### Run the development server
```bash
npm run start:dev
```

---

### 🔐 Permissions System

OpenCampus uses a structured permission model where:
 - Permissions are action-based (e.g. student.read, student.write)
 - Roles are collections of permissions
 - Explicit deny rules override allow rules
 - All permission checks are logged for audit purposes

---

### 📊 Audit System

Every sensitive operation is recorded, including:

 - Who performed the action
 - What was changed
 - When it happened
 - Where it was triggered from

This ensures full traceability across the system.

---

### 🛠️ Tech Stack
 - Backend: NestJS
 - Frontend: React(probably)
 - Database: MariaDB
 - ORM: Prisma
 - Auth: JWT
 - Architecture: Modular monolith

---

### 📌 Roadmap
 - [] Frontend(Probably React)
 - [] Advanced timetable & scheduling engine
 - [] Gradebook & reporting tools
 - [] API key system for integrations
 - [] Multi-school district support
 - [x] Event-driven audit streaming

---

### 🤝 Contributing
OpenCampus is actively evolving. Contributions, ideas, and feedback are welcome.