<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import { Menu, X } from "lucide-vue-next";
import { useRoute } from "vue-router";
import company from "@/data/company.json";

const companyData = company;

const route = useRoute();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const navRef = ref(null);
const barStyle = ref({ left: "0px", width: "0px", opacity: "0" });

const navItems = [
  { label: "首页", path: "/" },
  { label: "产品中心", path: "/products" },
  { label: "解决方案", path: "/solutions" },
  { label: "客户案例", path: "/cases" },
  { label: "新闻资讯", path: "/news" },
  { label: "关于我们", path: "/about" },
];

function isActive(path) {
  if (path === "/solutions") return route.path.startsWith("/solutions");
  if (path === "/products") return route.path.startsWith("/products");
  if (path === "/cases") return route.path.startsWith("/cases");
  if (path === "/news") return route.path.startsWith("/news");
  return route.path === path;
}

function activeIndex() {
  return navItems.findIndex((item) => isActive(item.path));
}

function updateBar(targetIndex) {
  nextTick(() => {
    const el = navRef.value?.children[targetIndex];
    if (!el) return;
    const navRect = navRef.value.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    barStyle.value = {
      left: `${elRect.left - navRect.left}px`,
      width: `${elRect.width}px`,
      opacity: "1",
    };
  });
}

onMounted(() => updateBar(activeIndex()));
watch(
  () => route.path,
  () => updateBar(activeIndex()),
);

if (typeof window !== "undefined") {
  window.addEventListener(
    "scroll",
    () => {
      isScrolled.value = window.scrollY > 32;
    },
    { passive: true },
  );
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
    :class="{
      'bg-transparent': !isScrolled,
      'bg-[var(--header-bg-scrolled)] backdrop-blur-md shadow-header':
        isScrolled,
    }"
  >
    <div
      class="max-w-content mx-auto px-5 h-16 flex items-center justify-between"
    >
      <router-link
        to="/"
        class="flex items-center flex-shrink-0"
        aria-label="大智汇首页"
      >
        <img :src="companyData.logo" alt="大智汇" class="h-9 object-contain" />
      </router-link>

      <nav ref="navRef" class="hidden md:flex items-center gap-1 relative">
        <router-link
          v-for="(item, i) in navItems"
          :key="item.path"
          :to="item.path"
          class="relative px-3 py-2 text-sm font-medium rounded-btn transition-colors duration-200"
          :class="
            isActive(item.path)
              ? 'text-[var(--color-primary)]'
              : 'text-[var(--header-text)] hover:text-[var(--color-primary)]'
          "
          @mouseenter="updateBar(i)"
          @mouseleave="updateBar(activeIndex())"
        >
          {{ item.label }}
        </router-link>
        <span
          class="absolute bottom-0 h-0.5 bg-[var(--color-primary)] rounded-full transition-all duration-300 ease-out"
          :style="{
            left: barStyle.left,
            width: barStyle.width,
            opacity: barStyle.opacity,
          }"
        />
      </nav>

      <div class="flex items-center gap-3">
        <router-link
          to="/contact"
          class="hidden sm:inline-flex btn-primary text-sm !py-2 !px-4 !min-h-0"
        >
          免费咨询
        </router-link>
        <button
          class="md:hidden min-h-touch min-w-[44px] flex items-center justify-center text-[var(--header-text)]"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          aria-label="菜单"
        >
          <Menu v-if="!isMobileMenuOpen" :size="22" />
          <X v-else :size="22" />
        </button>
      </div>
    </div>

    <Transition name="drawer">
      <nav
        v-if="isMobileMenuOpen"
        class="md:hidden bg-[var(--color-bg)] border-t border-[var(--color-border-light)]"
      >
        <div class="px-5 py-3 space-y-1">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="block px-3 py-2.5 rounded-btn text-text-primary text-base font-medium transition-colors duration-150"
            :class="
              isActive(item.path)
                ? 'bg-[var(--color-primary-light)] text-[var(--color-primary)]'
                : 'hover:bg-[var(--color-bg-tertiary)]'
            "
            @click="isMobileMenuOpen = false"
          >
            {{ item.label }}
          </router-link>
          <router-link
            to="/contact"
            class="block mt-3 text-center btn-primary text-sm !py-2.5"
            @click="isMobileMenuOpen = false"
          >
            免费咨询
          </router-link>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.drawer-enter-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.drawer-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 1, 1);
}
.drawer-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
