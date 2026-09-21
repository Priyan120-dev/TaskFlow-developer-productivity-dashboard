# Security Policy

The TaskFlow engineering team prioritizes data privacy, secure authentication, and rigorous authorization boundaries across all frontend, backend, and AI capabilities.

---

## 🛡️ Implemented Security Controls

### 1. Authentication & Password Security
- **Password Hashing**: Passwords are never stored in plaintext. They are hashed using **bcryptjs** with 10 salt rounds prior to persistence in MongoDB Atlas.
- **Stateless JWT Tokens**: Upon successful authentication (`/api/auth/login` or `/api/auth/register`), the server issues a signed JSON Web Token (JWT) with a configured expiration window.
- **Bearer Token Authorization**: Client requests to protected routes transmit the token via standard `Authorization: Bearer <token>` HTTP headers.
- **Client Session Storage**: The frontend stores JWTs in `localStorage` and provides automatic clearance upon logout or expiration.

### 2. Strict Backend Authorization & Ownership
- **JWT Verification Middleware** (`taskflow-api/src/middleware/auth.middleware.js`): Intercepts protected routes, cryptographically validates the token against `process.env.JWT_SECRET`, and attaches the verified user identity to `req.user`.
- **Zero-Trust Client Identity**: For all mutations (`POST`, `PUT`, `DELETE`), the backend strictly ignores client-submitted `ownerId`, `userId`, or `createdById` fields. The resource owner is always set to `req.user.id` derived from the verified token.
- **Cross-Tenant Isolation**: Project and task modification endpoints verify that the requesting user owns the target resource before executing mutations.

### 3. Database & Input Validation
- **Mongoose Schema Enforcement**: Strict type definitions, required field validation, and allowed enum values (`status`, `priority`, `role`) prevent malicious or malformed payloads.
- **MongoDB ObjectId Validation**: IDs passed in URL parameters are checked for valid 24-character hexadecimal format before querying the database, preventing NoSQL injection and casting exceptions.
- **Database Error Shielding**: Database connection strings, stack traces, and internal database errors are sanitized in production responses and logged server-side.

### 4. Cross-Origin Resource Sharing (CORS)
- Backend CORS is explicitly restricted via `cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' })`.
- Wildcard origins (`*`) are disallowed for production credentials.

### 5. AI Safety & LLM Mutation Guarding
- **Server-Side API Keys**: `GEMINI_API_KEY` is strictly confined to the backend runtime environment. It is never exposed to the frontend bundle, Vite environment variables, or client HTTP responses.
- **No Direct LLM Database Writes**: The Google Gemini integration operates strictly as an advisory engine. AI-suggested project creation or task creation returns structured proposals (`requiresConfirmation: true`). The database is only mutated when the user explicitly clicks **Confirm & Create**, which triggers existing authorized REST endpoints.
- **Workspace Data Isolation**: Prompts requiring workspace context only ingest records belonging to `req.user.id`.

### 6. Secret Management & Version Control
- Environment files (`.env`, `.env.*`) are gitignored in both root and `taskflow-api/` directories.
- Example templates (`.env.example`) contain only non-sensitive placeholder keys.
- CI/CD pipelines and repository scans verify that zero API keys or credentials are committed.

---

## 🔍 Security Considerations

| Vector | Threat | Mitigation |
|---|---|---|
| **Brute Force** | Dictionary attacks on login | Strong bcrypt hashing; rate limiting recommended for production reverse proxies. |
| **NoSQL Injection** | Malformed query injection | Mongoose schema casting and strict parameter sanitization. |
| **Data Leakage** | User inspecting another's tasks | Multi-tenant scoping filters all queries by `req.user.id` or assigned user ID. |
| **Prompt Injection** | User manipulating AI instructions | System prompt delimitation and confirmation-guarded schema extraction. |
| **Credential Theft** | Stolen client token | Tokens expire in 7 days; logout purges client storage immediately. |

---

## 📢 Reporting a Security Vulnerability

If you discover a security vulnerability within TaskFlow, please do **NOT** open a public GitHub issue.

Please report vulnerabilities privately:
- **Email**: [security@taskflow.dev](mailto:security@taskflow.dev) or contact the project maintainer directly.
- **Include**:
  - Description of the vulnerability.
  - Steps to reproduce or proof-of-concept script.
  - Potential impact assessment.
  - Your contact information for follow-up.

We acknowledge receipt of reports within 48 hours and work to provide a patch promptly.
