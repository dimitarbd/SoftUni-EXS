# Car Parts Project Documentation

## Overview
The **Car Parts** project is a full-stack web application designed to manage and display car parts. It consists of a **Client** built with React and Vite for the front-end and a **Server** built with Node.js for the back-end. The project includes features such as authentication, CRUD operations for car parts, and dynamic UI components.

---

## Project Structure

### Root Directory
- **`.gitattributes`**: Defines Git attributes for the repository.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.
- **`BriefDocumentation.md`**: Brief documentation for the project.
- **`README.md`**: Main documentation for the project.

---

### Client
The **Client** folder contains the front-end application.

#### Key Files and Folders:
- **`.gitignore`**: Ignores client-specific files.
- **`eslint.config.js`**: Configuration for ESLint to enforce coding standards.
- **`index.html`**: The main HTML file for the application.
- **`package.json`**: Contains dependencies and scripts for the client.
- **`vite.config.js`**: Configuration for Vite, the build tool.
- **`old_html/`**: Contains legacy HTML files for reference.
  - `404.html`, `about-us.html`, `car-parts-index-2.html`, etc.
- **`public/`**: Static assets such as CSS, fonts, images, and JavaScript.
- **`src/`**: Source code for the client application.
  - **`App.jsx`**: Main application component.
  - **`main.jsx`**: Entry point for the React application.
  - **`api/`**: Contains API-related utilities (e.g., `parts-api.js`).
  - **`Components/`**: Reusable React components (e.g., `Product.jsx`, `PartEdit.jsx`).
  - **`contexts/`**: Context API implementations for state management.
  - **`hooks/`**: Custom React hooks (e.g., `useParts.js`).
  - **`utils/`**: Utility functions.

---

### Server
The **Server** folder contains the back-end application.

#### Key Files and Folders:
- **`package.json`**: Contains dependencies and scripts for the server.
- **`server.js`**: Entry point for the Node.js server.
- **`data/`**: JSON files containing mock data for the application.
  - `advanced.json`, `blog.json`, `car-parts.json`, etc.

---

## Key Features

### 1. Initialize Project
- Git repository initialized.
- Base Vite React project set up and cleaned.
- HTML templates converted to JSX and separated into components.

### 2. React Router
- React Router DOM installed and configured.
- Routes and navigation links added.

### 3. Service Layer
- Abstract requester implemented for API communication.
- Parts API integrated.
- Practice server pre-seeded with data.

### 4. Page Implementations
- Pages for part listing, details, and home (latest parts) implemented.

### 5. Comments (Advanced)
- Nested resource `comments` service created.
- Comments can be posted, read, and displayed in components.

### 6. API Hooks
- Custom hooks for forms, parts, and comments implemented.

### 7. Authentication
- Authentication API for login, register, and logout.
- Auth state managed with React context.
- Token management and authorized requests implemented.

### 8. UI Implementation
- Dynamic navigation.
- Create, edit, and latest parts functionality.

### 9. Refactoring
- Auth state extracted from the App component.
- Auth state persistence implemented.
- Ownership rendering for edit and delete operations pending.

---

## Development Workflow

### Client
1. Navigate to the `Client/` directory.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

### Server
1. Navigate to the `Server/` directory.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   node server.js
   ```

---

## Notes
- The **Client** uses React and Vite for a fast development experience.
- The **Server** is a lightweight Node.js application serving mock data.
- Legacy HTML files in `old_html/` can be used for reference or migration.
- **Latest Parts API**: `http://localhost:3030/data/parts?sortBy=_createdOn%20desc&pageSize=3`.

---

## Future Improvements
- Complete the "Latest part" and "Edit part" features.
- Implement ownership rendering for edit and delete operations.
- Add more robust form validation and error handling.
