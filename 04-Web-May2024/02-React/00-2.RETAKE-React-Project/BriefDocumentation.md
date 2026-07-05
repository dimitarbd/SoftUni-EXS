# Project Documentation

## Overview
This project consists of a **Client** and a **Server** that together form a full-stack application. The **Client** is built using modern front-end technologies, while the **Server** provides APIs and data handling for the application.

---

## Project Structure

### Root Directory
- **`.gitattributes`**: Defines Git attributes for the repository.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.
- **`README.md`**: Documentation for the project.

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
  - `404.html`, `about-us.html`, etc.
- **`public/`**: Static assets such as CSS, fonts, images, and JavaScript.
- **`src/`**: Source code for the client application.
  - **`App.jsx`**: Main application component.
  - **`main.jsx`**: Entry point for the React application.
  - **`api/`**: Contains API-related utilities.
  - **`Components/`**: Reusable React components.
  - **`contexts/`**: Context API implementations for state management.
  - **`hooks/`**: Custom React hooks.
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

```# Project Documentation

## Overview
This project consists of a **Client** and a **Server** that together form a full-stack application. The **Client** is built using modern front-end technologies, while the **Server** provides APIs and data handling for the application.

---

## Project Structure

### Root Directory
- **`.gitattributes`**: Defines Git attributes for the repository.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.
- **`README.md`**: Documentation for the project.

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
  - `404.html`, `about-us.html`, etc.
- **`public/`**: Static assets such as CSS, fonts, images, and JavaScript.
- **`src/`**: Source code for the client application.
  - **`App.jsx`**: Main application component.
  - **`main.jsx`**: Entry point for the React application.
  - **`api/`**: Contains API-related utilities.
  - **`Components/`**: Reusable React components.
  - **`contexts/`**: Context API implementations for state management.
  - **`hooks/`**: Custom React hooks.
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
