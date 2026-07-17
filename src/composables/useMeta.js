import { watch, onMounted } from "vue";

/** 将相对路径转为绝对 URL，og 标签需要完整域名 */
function absUrl(path) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return (typeof window !== "undefined" ? window.location.origin : "") + path;
}

/**
 * @param {Object} options
 * @param {string} [options.title]
 * @param {string} [options.description]
 * @param {string} [options.keywords]
 * @param {string} [options.ogTitle]
 * @param {string} [options.ogDescription]
 * @param {string} [options.ogImage]       // 默认 /logo.png，自动补全为绝对 URL
 * @param {string} [options.twitterCard]   // 默认 summary_large_image
 */
export function useMeta(options) {
  const apply = () => {
    const ogImg = absUrl(options.ogImage || "/logo.png");
    if (options.title) document.title = options.title;
    setMeta("description", options.description);
    setMeta("keywords", options.keywords);
    setMeta("og:title", options.ogTitle, "property");
    setMeta("og:description", options.ogDescription, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:image", ogImg, "property");
    setMeta("og:image:width", "1200", "property");
    setMeta("og:image:height", "630", "property");
    setMeta(
      "twitter:card",
      options.twitterCard || "summary_large_image",
      "name",
    );
    setMeta("twitter:title", options.ogTitle || options.title, "name");
    setMeta(
      "twitter:description",
      options.ogDescription || options.description,
      "name",
    );
    setMeta("twitter:image", ogImg, "name");
  };

  onMounted(apply);
  watch(() => options, apply, { deep: true });
}

function setMeta(name, content, attr = "name") {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}
