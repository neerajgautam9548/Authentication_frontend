const isProduction = import.meta.env.VITE_IS_PRODUCTION === "true";

export const API_URL = isProduction
  ? import.meta.env.VITE_API_PROD_URL
  : import.meta.env.VITE_API_URL;