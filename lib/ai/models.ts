export const DEFAULT_CHAT_MODEL: string = "chat-model";

export type ChatModel = {
  id: string;
  name: string;
  description: string;
};

export const chatModels: ChatModel[] = [
  {
    id: "chat-model",
    name: "GPT-4.5 Preview",
    description: "OpenAI's latest and most capable model",
  },
  {
    id: "chat-model-gpt4o",
    name: "GPT-4o",
    description: "High-intelligence flagship model for complex tasks",
  },
  {
    id: "chat-model-mini",
    name: "GPT-4o Mini",
    description: "Fast, capable OpenAI model for everyday tasks",
  },
  {
    id: "chat-model-reasoning",
    name: "o1",
    description: "Flagship model using advanced chain-of-thought reasoning",
  },
];
