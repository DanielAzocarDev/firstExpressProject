# Backend Project with Express and TypeScript

This project is a practical exercise to learn how **Express** works in combination with **TypeScript**, exploring concepts such as routing, controllers, services, and documentation with Swagger.

## Motivation

I'm a developer with frontend experience exploring the backend world. To speed up the learning process and resolve doubts efficiently, I am using **ChatGPT** as an assistant, as traditional courses can become slow for those who already have development experience.

## Technologies Used

- **Node.js** + **Express**: For the backend server
- **TypeScript**: For more robust and typed code
- **Swagger**: For API documentation and testing
- **Zod** (optional): For data validation

## Project Structure

```
my-backend
 ├── src
 │   ├── products
 │   │    ├── products.controller.ts
 │   │    ├── products.routes.ts
 │   │    └── products.service.ts
 │   ├── swagger.ts
 │   └── index.ts
 ├── package.json
 ├── tsconfig.json
 └── README.md
```

## Installation and Execution

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/my-backend.git
   cd my-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server in development mode:
   ```bash
   npm run dev
   ```
4. Access the API at: `http://localhost:3000`
5. Swagger documentation at: `http://localhost:3000/docs`

## Endpoints

### Get all products

- **URL:** `GET /api/products`
- **Response:**
  ```json
  [
    { "id": 1, "name": "Product A", "price": 100 },
    { "id": 2, "name": "Product B", "price": 150 }
  ]
  ```

## Conclusion

This project serves as a foundation for understanding the fundamental concepts of a backend with Node.js and Express using best practices with TypeScript.

Any suggestions or feedback are welcome. 🚀
