# Resumelytics

**Resumelytics** is an AI-powered resume analysis tool designed to help candidates optimize their CVs. Leveraging Google Gemini AI, it provides detailed feedback, scoring, and actionable improvement suggestions.

## 📋 Table of Contents

  - [Features](https://www.google.com/search?q=%23features)
  - [Tech Stack](https://www.google.com/search?q=%23tech-stack)
  - [Getting Started](https://www.google.com/search?q=%23getting-started)
  - [Environment Configuration](https://www.google.com/search?q=%23environment-configuration)

## ✨ Features

  * **PDF Parsing:** Robust text extraction from uploaded resume files.
  * **AI Analysis:** Deep semantic analysis using **Google Gemini Pro**.
  * **Smart Scoring:** Calculates suitability scores (0-10) and estimates seniority levels.
  * **Actionable Feedback:** Highlights strengths, weaknesses, and improvement tips.

## 🛠 Tech Stack

  * **Backend:** Java 21, Spring Boot 3.5, Spring AI, Maven.
  * **Frontend:** React 19, TypeScript, Vite, Tailwind CSS, TanStack Query.

## 🚀 Getting Started

### Prerequisites

  * Java JDK 21+
  * Node.js (v18+)
  * Google AI Studio API Key

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/ThuatPhan/resumelytics.git
    ```

2.  **Setup Backend**

    ```bash
    cd backend
    # Configure .env (see below) then run:
    ./mvnw spring-boot:run
    ```

3.  **Setup Frontend**

    ```bash
    cd frontend
    # Configure .env (see below) then run:
    npm install
    npm run dev
    ```

## 🔐 Environment Configuration

Create a `.env` file in the root of both the **backend** and **frontend** directories using the formats below:

### Backend (`backend/.env`)

```env
GEN_AI_API_KEY=AIzaSy...YourKeyHere...
ALLOWED_ORIGIN=http://localhost:5173
```

*(Note: `GEN_AI_API_KEY` is required for Spring AI)*

### Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:8080/api
```

*(Note: Matches the variable used in `axios.ts`)*

-----

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)
