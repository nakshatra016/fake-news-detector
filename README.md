# 📰 Fake News Detector – Chrome Extension

## 🔍 Project Description

**Fake News Detector** is a lightweight Chrome extension designed to help users identify potentially harmful or misleading content in real-time. With the rise of misinformation online, our extension empowers users to paste or highlight suspicious text and instantly analyze it using AI.

This tool leverages **Azure AI Content Safety** to assess the safety of input content, providing users with immediate feedback on whether the text contains harmful, hate, sexual, or violent elements—often indicators of fake or malicious news.

> Target Users: Fact-checkers, journalists, educators, students, and everyday internet users.

---

## ☁️ Azure Services Used

- **Azure AI Content Safety 🔐**  
  Used to evaluate content risk and flag harmful/misleading text based on AI models.

- **Azure Functions (Optional for Teams using Azure as backend)**  
  Serverless backend that receives user input from the Chrome extension, calls the Content Safety API, and returns results.

> ⚠️ Note: Teams could optionally use **Google Cloud Functions** for hosting while still calling Azure AI.

---

## 🛠️ Setup Instructions

### 📦 1. Install the Chrome Extension Locally

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** (top-right).
4. Click **"Load unpacked"** and select the project folder.

### 🧪 2. Try it Out

- Click the extension icon in Chrome.
- Paste any content or suspected news article text.
- Click **Analyze**.
- View results directly in the popup.

### 🌐 3. Backend Setup (Azure Function)

> Skip this if using the sample function URL.

1. Create a new Azure Function App (Node.js).
2. Add an HTTP trigger function that:
   - Accepts text input
   - Calls Azure AI Content Safety API
   - Returns analysis results
3. Deploy it using Azure CLI or VS Code extension.
4. Replace the API endpoint in `popup.js`:
   ```js
   const apiUrl = "https://<your-function>.azurewebsites.net/api/analyzeNews?text=";


