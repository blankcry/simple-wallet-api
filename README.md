# simple-wallet-api
Test Assessment show casing a simple wallet system with basic functionality to credit and debit a wallet account. 
Project Scope:

Simple wallet API providing core functionality:
Balance checks
Deposits
Withdrawals
# Key Technical Decisions:

Decision - ORM: Sequelize
Rationale - Sequelize abstracts SQL complexities, offering a structured way to interact with the database. It provides built-in parameterization and input sanitization to significantly reduce the risk of SQL injection attacks.


Decision - Row Locking: DB Transactions
Rationale: Guarantees data consistency during concurrent balance updates, preventing scenarios like overspending.
Implementation:
Begin database transactions before performing balance-altering operations. Commit transactions on success; roll back on errors to ensure consistency.

Decision - Rate Limiting
Rationale: Protects against excessive requests, preventing potential denial-of-service (DoS) attacks or brute force attempts.
Implementation:
Configure rate limits per endpoint/IP address/user, allowing legitimate traffic while throttling suspicious activity.
Provide clear error responses when limits are exceeded.

Additional Security Considerations:

Authentication and Authorization: Ensure robust authentication (e.g., JWTs) and implement fine-grained access control to protect wallet operations.
Input Validation: Thoroughly validate all user-supplied data with Joi, even with Sequelize & DB Checks, to prevent unexpected inputs.
Error Handling: Carefully manage error responses to avoid leaking sensitive information. Errors are categorized and handled properly.
