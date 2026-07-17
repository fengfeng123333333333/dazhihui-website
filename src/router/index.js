import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("@/views/ProductsHub.vue"),
  },
  {
    path: "/products/software",
    name: "software",
    component: () => import("@/views/SoftwarePage.vue"),
  },
  {
    path: "/products/hardware",
    name: "hardware",
    component: () => import("@/views/HardwarePage.vue"),
  },
  {
    path: "/solutions",
    name: "solutions",
    component: () => import("@/views/SolutionsHub.vue"),
  },
  {
    path: "/solutions/:slug",
    name: "solution",
    component: () => import("@/views/SolutionPage.vue"),
  },
  {
    path: "/cases",
    name: "cases",
    component: () => import("@/views/CasesPage.vue"),
  },
  {
    path: "/cases/gallery",
    name: "cases-gallery",
    component: () => import("@/views/CasesGalleryPage.vue"),
  },
  {
    path: "/cases/:slug",
    name: "case-detail",
    component: () => import("@/views/CaseDetailPage.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () => import("@/views/NewsPage.vue"),
  },
  {
    path: "/news/:slug",
    name: "news-detail",
    component: () => import("@/views/NewsDetailPage.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutPage.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/ContactPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/NotFoundPage.vue"),
  },
];

export { routes };

const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
