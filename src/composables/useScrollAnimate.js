import { onMounted, onUnmounted } from "vue";

/**
 * 元素进入视口时触发渐入动画（基于 IntersectionObserver，零依赖）
 * @param {string|Element} target - CSS选择器或DOM元素
 * @param {Object} [options]
 * @param {number} [options.y=20] - 初始Y偏移(px)
 * @param {number} [options.duration=0.7] - 动画时长(秒)
 * @param {number} [options.stagger=0.1] - 多元素时的间隔(秒)
 */
export function useScrollReveal(target, options = {}) {
  const { duration = 0.7, stagger = 0.1 } = options;
  let observer = null;

  onMounted(() => {
    const els =
      typeof target === "string"
        ? [...document.querySelectorAll(target)]
        : [target];

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const i = Number(el.dataset.srIndex ?? 0);
          const delay = i * stagger;
          el.style.transition = `opacity ${duration}s ease-out ${delay}s, transform ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          // 动画结束后清除 inline style，交还 CSS
          setTimeout(
            () => {
              el.style.opacity = "";
              el.style.transform = "";
              el.style.transition = "";
            },
            (duration + delay) * 1000 + 100,
          );
          observer.unobserve(el);
        });
      },
      { threshold: 0.1 },
    );

    els.forEach((el, i) => {
      if (!el) return;
      el.dataset.srIndex = i;
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      observer.observe(el);
    });
  });

  onUnmounted(() => {
    observer?.disconnect();
  });
}

/**
 * Hero区域入场动画（CSS animation + staggered delay）
 * 给容器加 .hero-animate，子元素用 animation-delay 实现 stagger
 * @param {string} selector - Hero 容器选择器
 */
export function useHeroEntrance(selector) {
  onMounted(() => {
    const el = document.querySelector(selector);
    if (el) el.classList.add("hero-animate");
  });
}
