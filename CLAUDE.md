# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a **comprehensive, polyglot learning repository** containing 40+ technology directories with 100+ projects spanning 15+ programming languages. It documents a full-stack learning journey from fundamentals to advanced topics, including web development, cloud services, DevOps, data structures, and modern software engineering practices.

**Key Philosophy**: Each project is independent and primarily educational in nature, demonstrating patterns, frameworks, and best practices rather than production-ready code.

---

## Directory Structure & Organization

### Core Learning Paths

**node-dev/** — Progressive Node.js curriculum (20+ lessons)
- Lessons numbered 0000-0019 covering: async/await, Express, databases, authentication, AWS services
- Progressively builds from fundamentals to serverless architecture
- Contains full-stack examples (chat apps, CRUD systems)

**react/** — Modern React applications
- Projects: hello-react, hello-redux, firebase-react, chat-app, voting-app, time-tracking
- Demonstrates state management (Redux, Redux-Saga), hooks, and real-time updates
- Mix of class and functional components across different versions

**angular/** — Angular applications with TypeScript
- Major project: reddit-clone (complete data-driven application)
- Includes Angular 5.x, modern Angular, and legacy AngularJS projects
- Testing setup: Karma for unit tests, Protractor for E2E tests

**rails/** & **ruby/** — Ruby and Rails projects
- MVC patterns, authentication strategies, background jobs (Sidekiq)
- Uses Gemfile for dependency management

**Frontend Fundamentals**: `front-end/` — HTML, CSS, JavaScript essentials

**Infrastructure & DevOps**: `docker/`, `kubernetes/`, `terraform/`, `infra-base/`

**Specialized**: `blockchain/`, `flutter/`, `database/`, `ds-and-algo/` (interview prep), `job-simulations/`

**Languages**: `golang/`, `python/`, `rust/`, `cpp/`, `php/`, `kotlin/`, `perl/`, `lua/`, `haskell/`, `typescript/`, `javascript/`, and others

---

## Build & Development Commands

### Node.js / npm Projects

```bash
cd <project-directory>
npm install              # Install dependencies
npm start               # Start development server
npm run build           # Build for production
npm test                # Run tests
npm run lint            # Check code style (if configured)
```

**Testing individual files**: Most Node projects use Jasmine or Jest
```bash
npm test -- <test-file-pattern>
```

### Angular Projects

```bash
npm install
ng serve                # Development server (localhost:4200)
ng build --prod         # Production build
ng test                 # Unit tests (Karma + Jasmine)
ng lint                 # TypeScript linting
ng e2e                  # End-to-end tests (Protractor)
```

### React Projects (Create React App)

```bash
npm install
npm start               # Development server (localhost:3000)
npm run build           # Production build
npm test                # Jest tests
```

### Python Projects

```bash
python3 script.py       # Run individual script
pip install -r requirements.txt  # Install dependencies (if present)
python3 -m pytest       # Run tests (if available)
```

### Go Projects

```bash
cd <project-directory>
go run main.go          # Run program
go run ./...            # Run all files in package
go build                # Build executable
go test                 # Run tests
go test -v              # Verbose test output
```

### Ruby / Rails Projects

```bash
bundle install          # Install dependencies
bundle exec rails server # Start Rails server
bundle exec rspec       # Run RSpec tests
bundle exec rails console # Interactive console
```

### Rust Projects

```bash
cargo run               # Compile and run
cargo build --release   # Build optimized binary
cargo test              # Run tests
cargo test -- --nocapture  # Tests with output
```

---

## Project-Specific Notes

### node-dev/
- **Structure**: Numbered lessons 0000-0019, each a distinct learning module
- **Progression**: Starts with async/await concepts, progresses to full-stack apps, ends with AWS services
- **Testing**: Run tests with `npm test` from project root
- **Dependencies**: Shared at root level (package.json in node-dev/)
- **Key projects**:
  - 0003-chat-app: Socket.io real-time communication
  - 0008-express-basics: Express.js fundamentals
  - 0012-cake-ordering: Full CRUD application with authentication
  - 0013-0019: AWS Lambda, S3, Serverless Framework integration

### angular/reddit-clone/
- **TypeScript Configuration**: Strict mode enabled, Angular 5.x era (decorators, RxJS)
- **Testing Setup**:
  - karma.conf.js: Unit test runner
  - protractor.conf.js: E2E test runner
  - tsconfig.spec.json: Test-specific TypeScript config
- **Build Output**: `dist/` directory after `ng build`
- **E2E Tests**: Use `ng e2e` (Protractor) for end-to-end testing

### react/projects
- **State Management**: Various approaches across projects (Redux, local state, Redux-Saga)
- **React Version**: Mix of React 16.x and 17.x
- **Testing**: Jest with React Testing Library
- **Firebase Projects**: firebase-react uses backend-as-a-service patterns

### Rails & Ruby Projects
- **Dependency Management**: Gemfile + bundler
- **Database**: Typically Rails default (SQLite in development)
- **Testing**: RSpec for Ruby projects, RailsHelper for Rails
- **Key Patterns**: Devise authentication (devise-token-auth), token-based auth, Sidekiq async jobs

---

## Dependency Management & CI/CD

### Automated Dependency Updates
- **Tool**: Dependabot configured for auto-merging minor/patch updates
- **CI Workflow**: `.github/workflows/dependabot-pr-automerge.yml` automatically merges valid Dependabot PRs
- **Affected Projects**: 18+ npm/yarn packages across directories

### When Adding Dependencies
- Ensure you're in the correct project directory before `npm install` or `bundle install`
- Each project (or lesson in node-dev/) may have isolated dependencies
- Check existing package.json/Gemfile to understand dependency patterns

---

## Testing Framework Overview

### JavaScript/TypeScript Projects

**Jasmine** (with Karma runner):
- Angular projects use Jasmine + Karma
- Tests located in `.spec.ts` files alongside source
- Run: `ng test` or `npm test`

**Jest** (with React):
- React projects use Jest (via react-scripts)
- Tests can be `.test.js` or `.test.tsx`
- Run: `npm test`

### Go Projects
- Built-in `go test` command
- Test files named `*_test.go`
- Run: `go test ./...` for all tests

### Ruby Projects
- **RSpec** for unit tests (typically)
- Test files in `spec/` directory
- Run: `bundle exec rspec`

---

## Database & Backend Integration

### MongoDB (node-dev projects)
- Uses Mongoose ODM for schema definition and queries
- Connection typically in main server file
- Patterns vary: some use connection middleware, others use initialization

### SQL Databases
- PostgreSQL, MySQL, SQLite used in various projects
- Found in: database/, node-dev/ (later lessons), rails/
- Rails projects auto-handle schema with migrations

### AWS Services (node-dev/0013-0019)
- Lambda handlers: httpHandler.js, kinesisHandler.js patterns
- Uses Claudia.js or Serverless Framework for deployment
- S3 integration for file uploads/processing
- DynamoDB for NoSQL at scale

---

## Real-Time Communication

### Socket.io
- Used in chat applications (node-dev/0003-chat-app, react/chat-app)
- Requires running server for WebSocket connections
- Configuration typically in main server file with event handlers

### WebSocket API
- Native WebSocket implementation projects in websocket/ directory
- Lower-level than Socket.io, more explicit event handling

---

## Common Patterns & Considerations

### Authentication
- **Patterns Demonstrated**:
  - Token-based (JWT) in rails/devise-token-auth and node-dev/0011
  - Session-based in Rails projects
  - Firebase authentication in firebase-react
- Located in: node-dev/0011-message-authen, rails/devise-token-auth, etc.

### State Management (React)
- **Redux**: hello-redux, skypey-redux
- **Redux-Saga**: redux-saga-beginner-tutorial
- **Local State**: hello-react, basic examples

### Data Structures & Algorithms
- Located in ds-and-algo/ with multi-language implementations
- Useful for interview preparation
- Sorted algorithms, searching, graph traversal covered

### Design Patterns
- Found throughout ruby/ (Gang of Four patterns)
- Also in angular/ (dependency injection, reactive patterns)

---

## Debugging & Development Tips

### Node.js Projects
```bash
# Debug with inspector
node --inspect server.js
# Then open chrome://inspect in Chrome DevTools
```

### Angular Projects
- Use `ng serve` with default source maps for debugging
- Browser DevTools show original TypeScript code
- Network tab useful for tracking HTTP/Socket.io calls

### React Projects
- React DevTools browser extension recommended
- Redux DevTools for state tracking (if Redux used)
- Console shows component warnings during development

### Go Projects
- Use `fmt.Println()` for quick debugging
- VSCode Go extension helpful for debugging
- `go test -v` shows test execution order

---

## Important File Locations

### Configuration Files
- **TypeScript**: `tsconfig.json` (Angular, React projects, typescript/)
- **Angular CLI**: `.angular-cli.json` or `angular.json`
- **Jest**: Configuration in package.json or `jest.config.js`
- **Karma**: `karma.conf.js` (Angular projects)
- **Go**: `go.mod`, `go.sum` (golang/ projects)
- **Rust**: `Cargo.toml`, `Cargo.lock` (rust/ projects)
- **Ruby**: `Gemfile`, `Gemfile.lock` (rails/, ruby/)

### Entry Points
- **Node.js**: Usually `index.js`, `server.js`, or `main.js`
- **Angular**: `src/main.ts`
- **React**: `src/index.js`
- **Go**: `main.go`
- **Python**: Varies, check project README

### Test Configuration
- **Angular**: `karma.conf.js`, `tsconfig.spec.json`
- **React**: Configured in package.json (Create React App)
- **Go**: Tests alongside source files (`*_test.go`)
- **Ruby**: `spec/` directory structure

---

## Repository Status & Git

- **Current Setup**: Integrated with GitHub, Dependabot enabled
- **Main Branch**: `master`
- **Workflow**: `.github/workflows/dependabot-pr-automerge.yml` auto-merges dependency updates
- **Purpose**: Educational projects are expected to work independently

---

## Performance & Optimization Considerations

### Codebase Size
- 40+ directories with 100+ projects = large repository
- Clone time is reasonable; be mindful of full history

### Node Modules & Dependencies
- Multiple node_modules directories (one per project)
- Total disk usage can be significant
- Consider `.gitignore` handling for each project

### Angular Projects (Large)
- Compilation can be slower on older machines
- Use `ng serve --poll` if file watching issues occur
- Production builds take time but generate optimized output

---

## Learning Philosophy & Project Context

This repository demonstrates:
- **Hands-on learning** through complete, working examples
- **Progressive complexity** with numbered learning paths
- **Multi-paradigm exploration** across 15+ languages
- **Full-stack coverage** from frontend to DevOps
- **Pattern variety** intentionally showing different approaches

**Projects are educational, not production code**. They may have:
- Inconsistent error handling across lessons
- Varying test coverage (some heavily tested, others minimal)
- Different architectural approaches intentionally shown for learning
- Dependencies that may be outdated in specific projects

---

## Recommended Workflow for Tasks

1. **Identify the project directory** — Use node-dev/, react/, angular/, etc. as starting point
2. **Check the project README** — Most have specific setup instructions
3. **Install dependencies** — `npm install`, `bundle install`, `go mod download`, etc.
4. **Run existing tests** — Understand current test coverage and patterns
5. **Make changes** — Focus on the specific feature/fix requested
6. **Verify with tests** — Run relevant test suite
7. **Check build** — For compiled languages (Go, Rust, TypeScript), verify build succeeds

For **multi-project changes** (e.g., updating shared patterns), be aware that projects are independent and may need separate updates.

---

## Questions & Clarifications

When working on this repository:
- **Which project?** — Ask if task scope spans multiple directories
- **Testing requirements?** — Different projects have different test expectations
- **Deployment target?** — Node.js projects may target AWS, local dev, etc.
- **Version compatibility?** — Some projects intentionally use older versions for learning (e.g., Angular 5.x)

Refer to individual project README files when uncertain about specific implementation details or running procedures.
