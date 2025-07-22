import { getAgentConfig, getThemeVariables } from './agent-config';

export class ThemeManager {
  private static instance: ThemeManager;
  private isInitialized = false;

  private constructor() {}

  public static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager();
    }
    return ThemeManager.instance;
  }

  public initialize(): void {
    if (this.isInitialized) return;

    this.injectThemeStyles();
    this.applyThemeClass();
    this.isInitialized = true;
  }

  private injectThemeStyles(): void {
    const themeVariables = getThemeVariables();
    const config = getAgentConfig();

    // Create or update theme style element
    let themeStyleElement = document.getElementById('agent-theme-variables') as HTMLStyleElement;
    
    if (!themeStyleElement) {
      themeStyleElement = document.createElement('style');
      themeStyleElement.id = 'agent-theme-variables';
      document.head.appendChild(themeStyleElement);
    }

    // Generate CSS custom properties
    const cssVariables = Object.entries(themeVariables)
      .map(([key, value]) => `  ${key}: ${value};`)
      .join('\n');

    // Generate theme-specific styles
    const themeStyles = `
      :root {
${cssVariables}
      }

      /* Dynamic theme classes */
      .theme-primary {
        color: var(--agent-primary);
      }

      .theme-primary-bg {
        background-color: var(--agent-primary);
      }

      .theme-secondary {
        color: var(--agent-secondary);
      }

      .theme-secondary-bg {
        background-color: var(--agent-secondary);
      }

      .theme-accent {
        color: var(--agent-accent, var(--agent-primary));
      }

      .theme-accent-bg {
        background-color: var(--agent-accent, var(--agent-primary));
      }

      /* Button variants */
      .btn-agent-primary {
        background-color: var(--agent-primary);
        border-color: var(--agent-primary);
      }

      .btn-agent-primary:hover {
        background-color: color-mix(in srgb, var(--agent-primary) 80%, black);
        border-color: color-mix(in srgb, var(--agent-primary) 80%, black);
      }

      .btn-agent-secondary {
        background-color: var(--agent-secondary);
        border-color: var(--agent-secondary);
      }

      .btn-agent-secondary:hover {
        background-color: color-mix(in srgb, var(--agent-secondary) 80%, black);
        border-color: color-mix(in srgb, var(--agent-secondary) 80%, black);
      }

      /* Border utilities */
      .border-agent-primary {
        border-color: var(--agent-primary);
      }

      .border-agent-secondary {
        border-color: var(--agent-secondary);
      }

      /* Ring utilities */
      .ring-agent-primary {
        --tw-ring-color: var(--agent-primary);
      }

      .ring-agent-secondary {
        --tw-ring-color: var(--agent-secondary);
      }

      /* Focus states */
      .focus-agent-primary:focus {
        --tw-ring-color: var(--agent-primary);
      }

      .focus-agent-secondary:focus {
        --tw-ring-color: var(--agent-secondary);
      }

      /* Agent-specific branding elements */
      .agent-brand-logo {
        content: url("${config.assets.logo}");
      }

      .agent-brand-banner {
        content: url("${config.assets.bannerLogo}");
      }
    `;

    themeStyleElement.textContent = themeStyles;
  }

  private applyThemeClass(): void {
    const config = getAgentConfig();
    document.documentElement.className = 
      document.documentElement.className.replace(/theme-\w+/g, '') + ` ${config.theme.themeName}`;
  }

  public updateTheme(): void {
    this.injectThemeStyles();
    this.applyThemeClass();
  }

  public getThemeClass(): string {
    return getAgentConfig().theme.themeName;
  }

  public getCSSVariables(): Record<string, string> {
    return getThemeVariables();
  }

  public applyThemeToElement(element: HTMLElement, themeClass: string): void {
    element.classList.add(themeClass);
  }

  // Utility method to generate dynamic colors
  public generateColorVariations(baseColor: string): Record<string, string> {
    return {
      50: `color-mix(in srgb, ${baseColor} 5%, white)`,
      100: `color-mix(in srgb, ${baseColor} 10%, white)`,
      200: `color-mix(in srgb, ${baseColor} 20%, white)`,
      300: `color-mix(in srgb, ${baseColor} 30%, white)`,
      400: `color-mix(in srgb, ${baseColor} 40%, white)`,
      500: baseColor,
      600: `color-mix(in srgb, ${baseColor} 80%, black)`,
      700: `color-mix(in srgb, ${baseColor} 70%, black)`,
      800: `color-mix(in srgb, ${baseColor} 60%, black)`,
      900: `color-mix(in srgb, ${baseColor} 50%, black)`,
    };
  }
}

// Client-side initialization hook
export const useThemeInitialization = () => {
  if (typeof window !== 'undefined') {
    const themeManager = ThemeManager.getInstance();
    themeManager.initialize();
    return themeManager;
  }
  return null;
};

// Export singleton instance
export const themeManager = ThemeManager.getInstance();

// Server-side theme variables for SSR
export const getServerThemeVariables = (): Record<string, string> => {
  return getThemeVariables();
};

// Generate theme CSS for server-side rendering
export const generateThemeCSS = (): string => {
  const themeVariables = getThemeVariables();
  const cssVariables = Object.entries(themeVariables)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join('\n');

  return `
    :root {
${cssVariables}
    }
  `;
};