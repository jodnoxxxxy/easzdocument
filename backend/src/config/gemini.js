const { GoogleGenerativeAI } = require("@google/generative-ai");

let model;

if (process.env.GEMINI_API_KEY) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    generationConfig: {
      temperature: 0.3,
      topP: 0.95,
      maxOutputTokens: 8192,
    },
  });
} else {
  model = {
    generateContent: async () => {
      throw new Error("GEMINI_API_KEY is not set in backend/.env. Please provide a valid Gemini API key to use AI features.");
    },
  };
}

module.exports = { model };
