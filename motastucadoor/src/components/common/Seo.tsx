import { useEffect } from "react";

const siteUrl = "https://motastucadoor.nl";
const siteName = "Mota Stucadoor";

type SeoProps = {
  description: string;
  path: string;
  title: string;
};

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

function upsertCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }

  element.href = url;
}

function Seo({ description, path, title }: SeoProps) {
  useEffect(() => {
    const pageTitle = `${title} | ${siteName}`;
    const url = `${siteUrl}${path}`;

    document.title = pageTitle;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:site_name", siteName);
    upsertMeta("property", "og:locale", "nl_NL");
    upsertCanonical(url);
  }, [description, path, title]);

  return null;
}

export default Seo;
