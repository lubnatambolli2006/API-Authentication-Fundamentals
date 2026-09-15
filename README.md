# API Authentication Fundamentals

## Introduction

API authentication is used to verify the identity of a user or application before allowing access to protected resources.

This project demonstrates token-based authentication using Node.js and Express.js.

## Technologies Used

- Node.js
- Express.js
- REST API
- Token-based Authentication
- Postman

## Authentication Method

This project uses a simple token-based authentication method.

After successful login, the API provides an authentication token. The token must be sent in the Authorization header to access protected resources.

Example:

Authorization: Bearer my-secret-token

## API Endpoints

### 1. Home

**GET /**

This is a public endpoint.

### 2. Login

**POST /login**

Example request:

```json
{
  "username": "admin",
  "password": "1234"
}
