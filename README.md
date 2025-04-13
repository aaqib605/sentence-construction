# Sentence Construction Tool

This is a web-based application designed to help users improve their sentence construction skills. Users can arrange words to form correct sentences and receive feedback on their performance.

## Features

- Interactive quiz to arrange words into correct sentences.
- Feedback on performance with a detailed comparison of correct and incorrect answers.
- Timer for each question to enhance focus and challenge.
- Responsive design using Tailwind CSS.

## Prerequisites

To run this project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/aaqib605/sentence-construction
cd sentence-construction-tool
```

### 2. Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Running a Local JSON Server

This project includes a `db.json` file in the root folder, which can be used to run a local JSON Server for testing purposes. The JSON Server will serve the questions and other data defined in the `db.json` file.

### Steps to Run JSON Server

1. Install JSON Server globally if you haven't already:

   ```bash
   npm install -g json-server
   ```

2. Start the JSON Server:

   ```bash
   json-server --watch db.json --port 3001
   ```

3. Access the JSON Server at:

   ```
   http://localhost:3001
   ```

4. To fetch the questions, use the following endpoint:
   ```
   http://localhost:3001/data
   ```

This setup is optional and primarily for local development and testing. The application uses embedded questions in production.

### 4. Start the Development Server

Start the application in development mode:

```bash
npm run dev
```

This will start the development server. Open your browser and navigate to `http://localhost:5173` to view the application.

## Deployment

This application can be deployed on any static hosting platform, such as [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/). Simply upload the contents of the `dist` folder after building the project.
