
import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS } from "../constants";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Budi", the friendly AI Waiter for "Warung Makan Lezat".
Your goal is to help customers choose food from the menu.

Menu Data:
${JSON.stringify(MENU_ITEMS, null, 2)}

Instructions:
1. Be polite, warm, and use occasional Indonesian expressions like "Selamat datang!", "Tentu kak,", "Silakan diorder!".
2. Only recommend items that are in the Menu Data.
3. If they ask for something not on the menu, politely say we don't have it but suggest the closest alternative.
4. Keep responses concise and appetizing.
5. If the user asks about spicy food, mention the "spicyLevel" (1-3).
6. Always end with a helpful question or a cheerful remark.
`;

export const getAIRecommendation = async (history: ChatMessage[]) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    // We only send the last user message to keep it simple, 
    // but in a real app, we might send the whole history.
    const lastUserMessage = history[history.length - 1].text;
    const response = await chat.sendMessage({ message: lastUserMessage });
    
    return response.text || "Maaf kak, saya sedang sedikit bingung. Bisa diulang pertanyaannya?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Maaf kak, koneksi saya sedang terganggu. Ada yang bisa saya bantu lainnya?";
  }
};
