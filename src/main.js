import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { routes as staticRoutes } from "./router";
import solutionsData from "./data/solutions.json";
import casesData from "./data/cases.json";
import newsData from "./data/news.json";
import "./styles/main.css";

// 动态生成所有具体路径（SSG每个都生成独立HTML）
const dynamicRoutes = [
  ...solutionsData.solutions.map((s) => ({
    path: `/solutions/${s.slug}`,
    component: () => import("./views/SolutionPage.vue"),
    name: `sol-${s.slug}`,
  })),
  ...casesData.featured.map((c) => ({
    path: `/cases/${c.slug}`,
    component: () => import("./views/CaseDetailPage.vue"),
    name: `case-${c.slug}`,
  })),
  ...newsData.articles.map((n) => ({
    path: `/news/${n.slug}`,
    component: () => import("./views/NewsDetailPage.vue"),
    name: `news-${n.slug}`,
  })),
];

// 静态路由去掉参数化 :slug（由上面具体路径替代）
const baseRoutes = staticRoutes.filter((r) => !r.path.includes(":slug"));

export const createApp = ViteSSG(
  App,
  {
    routes: [...baseRoutes, ...dynamicRoutes],
  },
  ({ router, isClient }) => {
    if (isClient) {
      router.afterEach(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      });
    }
  },
);
