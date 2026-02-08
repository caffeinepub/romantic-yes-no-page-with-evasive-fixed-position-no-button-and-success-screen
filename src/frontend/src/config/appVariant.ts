// Build-time configuration for standalone version deployments
// This module determines which variant (v1 or v2) is being built
// based on the VITE_APP_VARIANT environment variable

type AppVariant = 'v1' | 'v2';

const variant = (import.meta.env.VITE_APP_VARIANT || 'v1') as AppVariant;

const variantConfig = {
  v1: {
    heading: "Cia will you be mine forever or will stay for lifetime? ❤️",
  },
  v2: {
    heading: "Khusnul will you be mine forever or will stay for lifetime? ❤️",
  },
};

export const APP_VARIANT = variant;
export const APP_CONFIG = variantConfig[variant];
