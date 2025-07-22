# Agent Configuration Examples

This document provides example environment configurations for different types of agents using the multi-agent template system.

## Aubrai (Longevity Research Agent)

```bash
# === AUBRAI CONFIGURATION ===
NEXT_PUBLIC_AGENT_ID=bcdebbee-f7d1-0ec4-ab62-dbdd92105226
NEXT_PUBLIC_AGENT_NAME=Aubrai
NEXT_PUBLIC_AGENT_DISPLAY_NAME=AUBRAI - Longevity Lab AI
NEXT_PUBLIC_AGENT_DESCRIPTION=AI science agent inspired by Dr. Aubrey de Grey for longevity research and biomedical analysis
NEXT_PUBLIC_AGENT_SHORT_DESCRIPTION=Aubrai is your AI science agent ready to answer questions about aging, longevity, and biomedical research.
NEXT_PUBLIC_AGENT_DOMAIN=longevity research

# Aubrai Branding
NEXT_PUBLIC_AGENT_THEME=aubrai-theme
NEXT_PUBLIC_PRIMARY_COLOR=#FF6E71
NEXT_PUBLIC_SECONDARY_COLOR=#FF9494
NEXT_PUBLIC_ACCENT_COLOR=#FFB3B5

# Aubrai Assets
NEXT_PUBLIC_AGENT_LOGO=/assets/aubrai_logo_white.png
NEXT_PUBLIC_AGENT_BANNER_LOGO=/assets/aubrai.png
NEXT_PUBLIC_AGENT_LOGIN_IMAGE=/assets/aubrai-login-image.png

# Aubrai Content
NEXT_PUBLIC_WELCOME_MESSAGE=I'm AUBRAI, here to help with longevity research and biological aging interventions. What research question can I explore for you today?
NEXT_PUBLIC_AGENT_TAGLINE=Your AI research assistant for longevity science and anti-aging research
NEXT_PUBLIC_EXAMPLE_PROMPTS=Who is Aubrey De Grey?,Give me a hypothesis on Alzheimer's,Can you tell me about Aubrey's recent research?,What are the latest advances in anti-aging?
NEXT_PUBLIC_AGENT_KEYWORDS=longevity,aging,biogerontology,anti-aging,research,Aubrey de Grey

# Aubrai Social Links
NEXT_PUBLIC_AGENT_X_USERNAME=aubreydegrey
NEXT_PUBLIC_AGENT_DISCORD_SERVER=https://discord.gg/elizaos
NEXT_PUBLIC_AGENT_WEBSITE_URL=https://aubr.ai
```

## Research Assistant Agent

```bash
# === RESEARCH ASSISTANT CONFIGURATION ===
NEXT_PUBLIC_AGENT_ID=your-research-agent-id-here
NEXT_PUBLIC_AGENT_NAME=ResearchBot
NEXT_PUBLIC_AGENT_DISPLAY_NAME=ResearchBot - AI Research Assistant
NEXT_PUBLIC_AGENT_DESCRIPTION=Intelligent AI assistant specialized in academic research, data analysis, and scientific literature review
NEXT_PUBLIC_AGENT_SHORT_DESCRIPTION=Your intelligent research companion for academic analysis and scientific discovery
NEXT_PUBLIC_AGENT_DOMAIN=academic research

# Research Assistant Branding
NEXT_PUBLIC_AGENT_THEME=research-theme
NEXT_PUBLIC_PRIMARY_COLOR=#3B82F6
NEXT_PUBLIC_SECONDARY_COLOR=#10B981
NEXT_PUBLIC_ACCENT_COLOR=#F59E0B

# Research Assistant Assets
NEXT_PUBLIC_AGENT_LOGO=/assets/research-logo.png
NEXT_PUBLIC_AGENT_BANNER_LOGO=/assets/research-banner.png
NEXT_PUBLIC_AGENT_LOGIN_IMAGE=/assets/research-login.png

# Research Assistant Content
NEXT_PUBLIC_WELCOME_MESSAGE=Hello! I'm ResearchBot, your AI research assistant. I can help you analyze data, review literature, and conduct academic research. What would you like to explore today?
NEXT_PUBLIC_AGENT_TAGLINE=Your intelligent companion for academic research and analysis
NEXT_PUBLIC_EXAMPLE_PROMPTS=Analyze this dataset,Find papers about machine learning,Summarize recent research trends,Help me write a literature review
NEXT_PUBLIC_AGENT_KEYWORDS=research,academic,analysis,literature review,data science,scientific

# Research Assistant Social Links
NEXT_PUBLIC_AGENT_X_USERNAME=researchbot_ai
NEXT_PUBLIC_AGENT_DISCORD_SERVER=https://discord.gg/research
NEXT_PUBLIC_AGENT_WEBSITE_URL=https://research-bot.ai
```

## Medical AI Agent

```bash
# === MEDICAL AI CONFIGURATION ===
NEXT_PUBLIC_AGENT_ID=medical-ai-agent-id-here
NEXT_PUBLIC_AGENT_NAME=MedAssist
NEXT_PUBLIC_AGENT_DISPLAY_NAME=MedAssist - Medical AI Advisor
NEXT_PUBLIC_AGENT_DESCRIPTION=AI medical advisor providing information about medical conditions, treatments, and health optimization
NEXT_PUBLIC_AGENT_SHORT_DESCRIPTION=Your AI medical advisor for health information and medical research insights
NEXT_PUBLIC_AGENT_DOMAIN=medical information

# Medical AI Branding
NEXT_PUBLIC_AGENT_THEME=medical-theme
NEXT_PUBLIC_PRIMARY_COLOR=#DC2626
NEXT_PUBLIC_SECONDARY_COLOR=#059669
NEXT_PUBLIC_ACCENT_COLOR=#D97706

# Medical AI Assets
NEXT_PUBLIC_AGENT_LOGO=/assets/medical-logo.png
NEXT_PUBLIC_AGENT_BANNER_LOGO=/assets/medical-banner.png
NEXT_PUBLIC_AGENT_LOGIN_IMAGE=/assets/medical-login.png

# Medical AI Content
NEXT_PUBLIC_WELCOME_MESSAGE=I'm MedAssist, your AI medical advisor. I can help you understand medical conditions, treatments, and health optimization strategies. What medical topic can I help you with?
NEXT_PUBLIC_AGENT_TAGLINE=Your AI medical advisor for health information and insights
NEXT_PUBLIC_EXAMPLE_PROMPTS=Explain diabetes management,What are the symptoms of hypertension?,Tell me about preventive medicine,Drug interactions for common medications
NEXT_PUBLIC_AGENT_KEYWORDS=medical,health,medicine,treatment,diagnosis,healthcare,prevention

# Medical AI Social Links
NEXT_PUBLIC_AGENT_WEBSITE_URL=https://medassist.ai
```

## Finance AI Agent

```bash
# === FINANCE AI CONFIGURATION ===
NEXT_PUBLIC_AGENT_ID=finance-ai-agent-id-here
NEXT_PUBLIC_AGENT_NAME=FinanceGuru
NEXT_PUBLIC_AGENT_DISPLAY_NAME=FinanceGuru - AI Financial Advisor
NEXT_PUBLIC_AGENT_DESCRIPTION=AI financial advisor specializing in investment analysis, market trends, and financial planning
NEXT_PUBLIC_AGENT_SHORT_DESCRIPTION=Your AI financial advisor for investment insights and market analysis
NEXT_PUBLIC_AGENT_DOMAIN=financial analysis

# Finance AI Branding
NEXT_PUBLIC_AGENT_THEME=finance-theme
NEXT_PUBLIC_PRIMARY_COLOR=#059669
NEXT_PUBLIC_SECONDARY_COLOR=#DC2626
NEXT_PUBLIC_ACCENT_COLOR=#D97706

# Finance AI Assets
NEXT_PUBLIC_AGENT_LOGO=/assets/finance-logo.png
NEXT_PUBLIC_AGENT_BANNER_LOGO=/assets/finance-banner.png
NEXT_PUBLIC_AGENT_LOGIN_IMAGE=/assets/finance-login.png

# Finance AI Content
NEXT_PUBLIC_WELCOME_MESSAGE=Hello! I'm FinanceGuru, your AI financial advisor. I can help you analyze investments, understand market trends, and plan your financial future. What financial topic interests you?
NEXT_PUBLIC_AGENT_TAGLINE=Your AI financial advisor for smart investment decisions
NEXT_PUBLIC_EXAMPLE_PROMPTS=Analyze Tesla stock,What's the outlook for crypto?,Explain portfolio diversification,Compare index funds vs ETFs
NEXT_PUBLIC_AGENT_KEYWORDS=finance,investment,stocks,crypto,portfolio,market analysis,financial planning

# Finance AI Social Links
NEXT_PUBLIC_AGENT_X_USERNAME=financeguru_ai
NEXT_PUBLIC_AGENT_WEBSITE_URL=https://finance-guru.ai
```

## Docker Deployment Examples

### Single Agent Deployment

```yaml
# docker-compose.yml for Aubrai
version: '3.8'
services:
  aubrai-ui:
    build: 
      context: .
      args:
        # Core Identity
        - NEXT_PUBLIC_AGENT_ID=bcdebbee-f7d1-0ec4-ab62-dbdd92105226
        - NEXT_PUBLIC_AGENT_NAME=Aubrai
        - NEXT_PUBLIC_AGENT_DISPLAY_NAME=AUBRAI - Longevity Lab AI
        
        # Theme Colors
        - NEXT_PUBLIC_PRIMARY_COLOR=#FF6E71
        - NEXT_PUBLIC_SECONDARY_COLOR=#FF9494
        - NEXT_PUBLIC_ACCENT_COLOR=#FFB3B5
        
        # Content
        - NEXT_PUBLIC_WELCOME_MESSAGE=I'm AUBRAI, here to help with longevity research...
    environment:
      - NEXT_PUBLIC_APP_URL=https://aubr.ai
      - NEXT_PUBLIC_SERVER_URL=https://api.aubr.ai
    ports:
      - "4000:3000"
    volumes:
      - ./assets/aubrai:/app/public/assets
```

### Multi-Agent Deployment

```yaml
# docker-compose.multi-agent.yml
version: '3.8'
services:
  aubrai-ui:
    build: 
      context: .
      dockerfile: Dockerfile
      args:
        - NEXT_PUBLIC_AGENT_NAME=Aubrai
        - NEXT_PUBLIC_PRIMARY_COLOR=#FF6E71
    ports:
      - "4001:3000"
    volumes:
      - ./assets/aubrai:/app/public/assets

  research-ui:
    build: 
      context: .
      dockerfile: Dockerfile
      args:
        - NEXT_PUBLIC_AGENT_NAME=ResearchBot
        - NEXT_PUBLIC_PRIMARY_COLOR=#3B82F6
    ports:
      - "4002:3000"
    volumes:
      - ./assets/research:/app/public/assets

  medical-ui:
    build: 
      context: .
      dockerfile: Dockerfile
      args:
        - NEXT_PUBLIC_AGENT_NAME=MedAssist
        - NEXT_PUBLIC_PRIMARY_COLOR=#DC2626
    ports:
      - "4003:3000"
    volumes:
      - ./assets/medical:/app/public/assets
```

## Asset Structure

```
assets/
├── aubrai/
│   ├── aubrai_logo_white.png
│   ├── aubrai.png
│   └── aubrai-login-image.png
├── research/
│   ├── research-logo.png
│   ├── research-banner.png
│   └── research-login.png
└── medical/
    ├── medical-logo.png
    ├── medical-banner.png
    └── medical-login.png
```

## Environment Variable Validation

The system automatically validates:

- ✅ **Required variables**: `NEXT_PUBLIC_AGENT_ID`, `NEXT_PUBLIC_SERVER_URL`, `NEXT_PUBLIC_WORLD_ID`
- ⚠️ **Recommended variables**: Agent name, description, colors, example prompts
- 🎨 **Color format validation**: Hex (#RRGGBB), RGB, HSL
- 🔗 **URL validation**: All URL fields
- 🔤 **UUID validation**: Agent and World IDs
- ✅ **Boolean validation**: Feature flags

## Quick Setup Commands

```bash
# Copy configuration for new agent
cp .env.aubrai .env.your-agent

# Build for specific agent
docker build --build-arg NEXT_PUBLIC_AGENT_NAME=YourAgent .

# Validate environment
npm run validate-env  # (if you add this script)
```