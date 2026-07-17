import { onMounted } from "vue";

/**
 * 注入 JSON-LD 结构化数据到 <head>
 * 搜索引擎（Google/Bing/DeepSeek）的 JS 渲染阶段会抓取
 * @param {string} json - JSON 字符串
 */
export function useSchema(json) {
  onMounted(() => {
    if (!json) return;
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.textContent = json;
    document.head.appendChild(el);
  });
}
