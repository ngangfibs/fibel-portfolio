export type ProjectCategory = "Web" | "Bots & Automation" | "Mobile";

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  blurb: string;
  stack: string[];
  repo: string;
  mock: "editor" | "terminal" | "chat" | "comic" | "audio" | "astro" | "site" | "ngo";
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "4kvidoes",
    name: "4Kvidoes",
    category: "Web",
    blurb:
      "A clean video editor built in TypeScript — an interface that gets out of the way and lets the footage be the point.",
    stack: ["TypeScript", "Video", "Web App"],
    repo: "https://github.com/ngangfibs/4Kvidoes",
    mock: "editor",
    featured: true,
  },
  {
    id: "solana-trading-bot",
    name: "Solana Trading Bot",
    category: "Bots & Automation",
    blurb:
      "An AI-powered crypto trading chatbot on Solana — it watches the market so you don't have to.",
    stack: ["Python", "AI", "Solana"],
    repo: "https://github.com/ngangfibs/solana-trading-bot",
    mock: "terminal",
    featured: true,
  },
  {
    id: "inkwave",
    name: "InkWave",
    category: "Mobile",
    blurb:
      "A comic book reader for Android that treats every panel with respect — built in Kotlin.",
    stack: ["Kotlin", "Android", "Reader"],
    repo: "https://github.com/ngangfibs/InkWave",
    mock: "comic",
    featured: true,
  },
  {
    id: "telegram-trading-bot",
    name: "Telegram Trading Bot",
    category: "Bots & Automation",
    blurb:
      "A Solana trading bot that lives in a Telegram chat — check positions and place trades without leaving the conversation.",
    stack: ["Telegram API", "Solana", "Bot"],
    repo: "https://github.com/ngangfibs/telegram-trading-bot",
    mock: "chat",
  },
  {
    id: "voiced-scripture",
    name: "Voiced Scripture",
    category: "Mobile",
    blurb:
      "Scripture you can listen to — an audio-first mobile app built with Flutter.",
    stack: ["Dart", "Flutter", "Audio"],
    repo: "https://github.com/ngangfibs/voiced_scripture",
    mock: "audio",
  },
  {
    id: "vibecheck",
    name: "VibeCheck",
    category: "Web",
    blurb:
      "A playful riff on ClarityCheck with an astronomical theme — because a reading hits different under starlight.",
    stack: ["Python", "Astronomy", "Fun"],
    repo: "https://github.com/ngangfibs/VibeCheck",
    mock: "astro",
  },
  {
    id: "visnet-global",
    name: "Visnet Global",
    category: "Web",
    blurb:
      "A website for an NGO, designed to make the mission legible at a glance and donating feel easy.",
    stack: ["TypeScript", "NGO", "Website"],
    repo: "https://github.com/ngangfibs/visnet_global",
    mock: "ngo",
  },
  {
    id: "bridgework",
    name: "Bridgework",
    category: "Web",
    blurb:
      "A company site built fast and kept light — no bloat, no waiting, just the point.",
    stack: ["TypeScript", "Company Site"],
    repo: "https://github.com/ngangfibs/bridgework-site",
    mock: "site",
  },
];

export const featured = projects.filter((p) => p.featured);
