import { AgentEnvironmentVariables } from '@/types/agent-config';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export class EnvironmentValidator {
  private static instance: EnvironmentValidator;

  private constructor() {}

  public static getInstance(): EnvironmentValidator {
    if (!EnvironmentValidator.instance) {
      EnvironmentValidator.instance = new EnvironmentValidator();
    }
    return EnvironmentValidator.instance;
  }

  public validate(): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];
    const env = process.env as unknown as AgentEnvironmentVariables;

    // Required environment variables
    const required = [
      'NEXT_PUBLIC_AGENT_ID',
      'NEXT_PUBLIC_SERVER_URL',
      'NEXT_PUBLIC_WORLD_ID',
    ];

    // Check required variables
    required.forEach(key => {
      if (!env[key as keyof AgentEnvironmentVariables]) {
        errors.push(`Missing required environment variable: ${key}`);
      }
    });

    // Recommended variables (warnings if missing)
    const recommended = [
      'NEXT_PUBLIC_AGENT_NAME',
      'NEXT_PUBLIC_AGENT_DESCRIPTION',
      'NEXT_PUBLIC_PRIMARY_COLOR',
      'NEXT_PUBLIC_EXAMPLE_PROMPTS',
    ];

    recommended.forEach(key => {
      if (!env[key as keyof AgentEnvironmentVariables]) {
        warnings.push(`Recommended environment variable missing: ${key}`);
      }
    });

    // Validate color formats
    this.validateColorFormat(env.NEXT_PUBLIC_PRIMARY_COLOR, 'NEXT_PUBLIC_PRIMARY_COLOR', errors);
    this.validateColorFormat(env.NEXT_PUBLIC_SECONDARY_COLOR, 'NEXT_PUBLIC_SECONDARY_COLOR', warnings);
    this.validateColorFormat(env.NEXT_PUBLIC_ACCENT_COLOR, 'NEXT_PUBLIC_ACCENT_COLOR', warnings);

    // Validate URLs
    this.validateUrl(env.NEXT_PUBLIC_APP_URL, 'NEXT_PUBLIC_APP_URL', warnings);
    this.validateUrl(env.NEXT_PUBLIC_SERVER_URL, 'NEXT_PUBLIC_SERVER_URL', errors);
    this.validateUrl(env.NEXT_PUBLIC_AGENT_WEBSITE_URL, 'NEXT_PUBLIC_AGENT_WEBSITE_URL', warnings);
    this.validateUrl(env.NEXT_PUBLIC_AGENT_DISCORD_SERVER, 'NEXT_PUBLIC_AGENT_DISCORD_SERVER', warnings);

    // Validate boolean flags
    const booleanFlags = [
      'NEXT_PUBLIC_ENABLE_DEEP_RESEARCH',
      'NEXT_PUBLIC_ENABLE_FILE_UPLOAD',
      'NEXT_PUBLIC_ENABLE_TEXT_TO_SPEECH',
      'NEXT_PUBLIC_ENABLE_VOICE_INPUT',
      'NEXT_PUBLIC_ENABLE_VOTING',
    ];

    booleanFlags.forEach(flag => {
      this.validateBoolean(env[flag as keyof AgentEnvironmentVariables], flag, warnings);
    });

    // Validate asset paths
    this.validateAssetPath(env.NEXT_PUBLIC_AGENT_LOGO, 'NEXT_PUBLIC_AGENT_LOGO', warnings);
    this.validateAssetPath(env.NEXT_PUBLIC_AGENT_BANNER_LOGO, 'NEXT_PUBLIC_AGENT_BANNER_LOGO', warnings);

    // Validate UUID format for agent ID and world ID
    this.validateUUID(env.NEXT_PUBLIC_AGENT_ID, 'NEXT_PUBLIC_AGENT_ID', errors);
    this.validateUUID(env.NEXT_PUBLIC_WORLD_ID, 'NEXT_PUBLIC_WORLD_ID', errors);

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }

  private validateColorFormat(color: string | undefined, fieldName: string, errorArray: string[]): void {
    if (!color) return;

    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const rgbColorRegex = /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/;
    const hslColorRegex = /^hsl\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*\)$/;

    if (!hexColorRegex.test(color) && !rgbColorRegex.test(color) && !hslColorRegex.test(color)) {
      errorArray.push(`Invalid color format for ${fieldName}: ${color}. Expected hex (#RRGGBB), rgb(r,g,b), or hsl(h,s%,l%) format.`);
    }
  }

  private validateUrl(url: string | undefined, fieldName: string, errorArray: string[]): void {
    if (!url) return;

    try {
      new URL(url);
    } catch {
      errorArray.push(`Invalid URL format for ${fieldName}: ${url}`);
    }
  }

  private validateBoolean(value: string | undefined, fieldName: string, errorArray: string[]): void {
    if (!value) return;

    if (!['true', 'false'].includes(value.toLowerCase())) {
      errorArray.push(`Invalid boolean value for ${fieldName}: ${value}. Expected 'true' or 'false'.`);
    }
  }

  private validateAssetPath(path: string | undefined, fieldName: string, errorArray: string[]): void {
    if (!path) return;

    if (!path.startsWith('/') && !path.startsWith('http')) {
      errorArray.push(`Invalid asset path for ${fieldName}: ${path}. Expected path starting with '/' or 'http'.`);
    }
  }

  private validateUUID(uuid: string | undefined, fieldName: string, errorArray: string[]): void {
    if (!uuid) return;

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(uuid)) {
      errorArray.push(`Invalid UUID format for ${fieldName}: ${uuid}`);
    }
  }

  public logValidationResults(result: ValidationResult): void {
    if (result.errors.length > 0) {
      console.error('[Environment Validation] Errors found:');
      result.errors.forEach(error => console.error(`  ❌ ${error}`));
    }

    if (result.warnings.length > 0) {
      console.warn('[Environment Validation] Warnings:');
      result.warnings.forEach(warning => console.warn(`  ⚠️ ${warning}`));
    }

    if (result.isValid && result.warnings.length === 0) {
      console.log('[Environment Validation] ✅ All environment variables are valid');
    }
  }

  public getEnvironmentSummary(): Record<string, any> {
    const env = process.env;
    const agentVars = Object.keys(env).filter(key => 
      key.startsWith('NEXT_PUBLIC_AGENT_') || 
      key.startsWith('NEXT_PUBLIC_PRIMARY_') ||
      key.startsWith('NEXT_PUBLIC_SECONDARY_') ||
      key.startsWith('NEXT_PUBLIC_ACCENT_') ||
      key.startsWith('NEXT_PUBLIC_ENABLE_')
    ).reduce((acc, key) => {
      acc[key] = env[key];
      return acc;
    }, {} as Record<string, any>);

    return {
      nodeEnv: env.NODE_ENV,
      agentConfiguration: agentVars,
      timestamp: new Date().toISOString(),
    };
  }
}

// Export singleton instance and utility functions
export const envValidator = EnvironmentValidator.getInstance();
export const validateEnvironment = () => envValidator.validate();
export const logEnvironmentValidation = () => {
  const result = envValidator.validate();
  envValidator.logValidationResults(result);
  return result;
};