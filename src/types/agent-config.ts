export interface AgentTheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor?: string;
  themeName: string;
}

export interface AgentAssets {
  logo: string;
  bannerLogo: string;
  loginImage?: string;
  favicon?: string;
  ogImage?: string;
}

export interface AgentContent {
  welcomeMessage: string;
  tagline: string;
  examplePrompts: string[];
  keywords: string[];
  aboutContent?: string;
}

export interface AgentSocial {
  x?: string;
  discord?: string;
  website?: string;
  github?: string;
}

export interface AgentFeatures {
  deepResearch: boolean;
  fileUpload: boolean;
  textToSpeech: boolean;
  voiceInput: boolean;
  voting: boolean;
}

export interface AgentApiConfig {
  elizaServerUrl: string;
  apiKey?: string;
  worldId: string;
}

export interface AgentConfig {
  // Core Identity
  id: string;
  name: string;
  displayName: string;
  description: string;
  shortDescription: string;
  domain?: string;

  // Visual & Branding
  theme: AgentTheme;
  assets: AgentAssets;

  // Content & Messaging
  content: AgentContent;

  // External Links
  social: AgentSocial;

  // Feature Flags
  features: AgentFeatures;

  // API Configuration
  api: AgentApiConfig;
}

export interface AgentEnvironmentVariables {
  // Core Agent Identity
  NEXT_PUBLIC_AGENT_ID: string;
  NEXT_PUBLIC_AGENT_NAME?: string;
  NEXT_PUBLIC_AGENT_DISPLAY_NAME?: string;
  NEXT_PUBLIC_AGENT_DESCRIPTION?: string;
  NEXT_PUBLIC_AGENT_SHORT_DESCRIPTION?: string;
  NEXT_PUBLIC_AGENT_DOMAIN?: string;

  // Branding & Theme
  NEXT_PUBLIC_AGENT_THEME?: string;
  NEXT_PUBLIC_PRIMARY_COLOR?: string;
  NEXT_PUBLIC_SECONDARY_COLOR?: string;
  NEXT_PUBLIC_ACCENT_COLOR?: string;

  // Assets
  NEXT_PUBLIC_AGENT_LOGO?: string;
  NEXT_PUBLIC_AGENT_BANNER_LOGO?: string;
  NEXT_PUBLIC_AGENT_LOGIN_IMAGE?: string;
  NEXT_PUBLIC_AGENT_FAVICON?: string;
  NEXT_PUBLIC_AGENT_OG_IMAGE?: string;

  // Content
  NEXT_PUBLIC_WELCOME_MESSAGE?: string;
  NEXT_PUBLIC_AGENT_TAGLINE?: string;
  NEXT_PUBLIC_EXAMPLE_PROMPTS?: string;
  NEXT_PUBLIC_AGENT_KEYWORDS?: string;
  NEXT_PUBLIC_ABOUT_CONTENT?: string;

  // Social Links
  NEXT_PUBLIC_AGENT_X_USERNAME?: string;
  NEXT_PUBLIC_AGENT_DISCORD_SERVER?: string;
  NEXT_PUBLIC_AGENT_WEBSITE_URL?: string;
  NEXT_PUBLIC_AGENT_GITHUB_URL?: string;

  // Features
  NEXT_PUBLIC_ENABLE_DEEP_RESEARCH?: string;
  NEXT_PUBLIC_ENABLE_FILE_UPLOAD?: string;
  NEXT_PUBLIC_ENABLE_TEXT_TO_SPEECH?: string;
  NEXT_PUBLIC_ENABLE_VOICE_INPUT?: string;
  NEXT_PUBLIC_ENABLE_VOTING?: string;

  // API Configuration
  NEXT_PUBLIC_SERVER_URL: string;
  NEXT_PUBLIC_API_KEY?: string;
  NEXT_PUBLIC_WORLD_ID: string;
}