import { ConfigData } from "@/config";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



interface FlattenedConfig {
  configName?: string;
  enabled?: boolean;
  orgs?: string[];
  excludedOrgs?: string[]
  description?: string
}

export function flattenConfig(configs: any) {
  const flattened: FlattenedConfig[] = [];
  configs.forEach((config: { [key: string]: any})=> {
    Object.entries(config).forEach(([key, value]) => {
      flattened.push({
        configName: key,
        enabled: value.hasOwnProperty('enable') ? value.enable: '',
        orgs: value.orgs,
        excludedOrgs: value.excludedOrgs,
        description: value.description
      });
    });
  });

  return flattened;
}