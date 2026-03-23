// lib/ai/providers.ts
import { customProvider } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { isTestEnvironment } from "../constants";

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY!, // comes from .env.local
});

export const myProvider = isTestEnvironment
  ? (() => {
      const {
        artifactModel,
        chatModel,
        reasoningModel,
        titleModel,
      } = require("./models.mock");
      return customProvider({
        languageModels: {
          "chat-model": chatModel,
          "chat-model-gpt4o": chatModel,
          "chat-model-mini": chatModel,
          "chat-model-reasoning": reasoningModel,
          "title-model": titleModel,
          "artifact-model": artifactModel,
        },
      });
    })()
  : customProvider({
      languageModels: {
        "chat-model": openai("gpt-4.5-preview"),
        "chat-model-gpt4o": openai("gpt-4o"),
        "chat-model-mini": openai("gpt-4o-mini"),
        "chat-model-reasoning": openai("o1"),
        "title-model": openai("gpt-4.5-preview"),
        "artifact-model": openai("gpt-4.5-preview"),
      },
    });


