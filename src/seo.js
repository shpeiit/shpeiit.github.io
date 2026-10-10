import { BASE_URL, DEFAULT_IMAGE } from "./siteConfig";

export function buildMeta({ title, description, pathname, noindex = false }) {
  const absoluteUrl = `${BASE_URL}${pathname}`;
  const robots = noindex ? "noindex, nofollow" : "index, follow";

  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: robots },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: absoluteUrl },
    { property: "og:image", content: DEFAULT_IMAGE },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: DEFAULT_IMAGE },
  ];
}

export { BASE_URL, DEFAULT_IMAGE };