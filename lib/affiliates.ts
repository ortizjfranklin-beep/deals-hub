// lib/affiliates.ts

export const AFFILIATES = {
  shein: "https://us.shein.com/",
  fashionnova: "https://www.fashionnova.com/",
  victoriassecret: "https://www.victoriassecret.com/",
  bathandbodyworks: "https://www.bathandbodyworks.com/",
  amazon: "https://amazon.com/",
  sephora: "https://www.sephora.com/",
  nike: "https://www.nike.com/",
  adidas: "https://www.adidas.com/",
  zara: "https://www.zara.com/",
  hm: "https://www.hm.com/",
  // Add more here later
} as const;

export type Brand = keyof typeof AFFILIATES;

/** Main function - accepts any string and falls back safely */
export function getAffiliateLink(brand: string, url: string): string {
  const normalized = brand.toLowerCase().replace(/\s+/g, '').replace(/[^a-z]/g, '') as Brand;

  // If we recognize the brand, we can add tracking later
  if (normalized in AFFILIATES) {
    return url;
  }
  return url;
}
