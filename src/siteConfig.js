const CUSTOM_SITE_URL = "https://shpe-iit.org"; // if none leave null

const DEFAULT_SITE_URL = "https://shpeiit.github.io";

export const SITE_URL = CUSTOM_SITE_URL || DEFAULT_SITE_URL;
export const BASE_URL = SITE_URL.replace(/\/?$/, "");

// typically for social media previews
export const DEFAULT_IMAGE = `${BASE_URL}/favicon.png`;
