import { getAgentConfig } from '@/lib/agent-config';

const agentConfig = getAgentConfig();

export const siteConfig = {
  name: agentConfig.displayName,
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:4000',
  description: agentConfig.description,
  ogImage: agentConfig.assets.ogImage,
  creator: `${agentConfig.name} Team`,
  keywords: agentConfig.content.keywords,
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: agentConfig.assets.favicon,
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
};
