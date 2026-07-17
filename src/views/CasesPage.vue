<script setup>
import { ref, computed } from "vue";
import { useMeta } from "@/composables/useMeta.js";
import { useScrollReveal } from "@/composables/useScrollAnimate.js";
import { ArrowRight, MapPin, Building } from "lucide-vue-next";
import casesData from "@/data/cases.json";

useMeta({
  title: "客户案例-智慧旅游票务系统成功案例-大智汇",
  description:
    "大智汇客户案例展示，覆盖户外景区、水上乐园、无动力乐园、儿童乐园、博物馆、体育馆等行业的智慧票务系统成功案例。14年经验，10000+客户信赖。",
});

const allCases = casesData.featured;

// 固定分类顺序
const categoryOrder = [
  "户外景区",
  "水上乐园",
  "滑雪场",
  "无动力乐园",
  "儿童乐园",
  "博物馆",
  "体育馆",
];

const categories = computed(() => ["全部", ...categoryOrder]);

const activeCategory = ref("全部");
const filteredCases = computed(() => {
  if (activeCategory.value === "全部") {
    // 按分类顺序排列
    return [...allCases].sort((a, b) => {
      const ia = categoryOrder.indexOf(a.category);
      const ib = categoryOrder.indexOf(b.category);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    });
  }
  return allCases.filter((c) => c.category === activeCategory.value);
});

useScrollReveal(".case-card", { y: 30, stagger: 0.08 });
</script>

<template>
  <div class="min-h-screen pt-[var(--page-top-padding)] bg-[var(--color-bg)]">
    <!-- Hero -->
    <section class="py-section bg-[var(--color-bg-secondary)]">
      <div class="max-w-content mx-auto px-4 text-center">
        <h1
          class="text-h1 font-heading font-bold text-[var(--color-text-primary)] mb-4"
        >
          客户案例
        </h1>
        <p class="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
          {{ allCases.length }}+精选案例 · 覆盖{{ categories.length - 1 }}大行业
          · 真实效果数据
        </p>
      </div>
    </section>

    <!-- Category Filter -->
    <section
      class="py-8 bg-[var(--color-bg)] border-b border-[var(--color-border-light)] sticky top-[var(--header-height)] z-30 backdrop-blur-sm"
    >
      <div class="max-w-content mx-auto px-4">
        <div class="flex flex-wrap gap-2 justify-center">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="activeCategory = cat"
            class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 min-h-touch"
            :class="
              activeCategory === cat
                ? 'bg-[var(--color-primary)] text-[var(--color-text-inverse)]'
                : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)]'
            "
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Case Grid -->
    <section class="py-section bg-[var(--color-bg)]">
      <div class="max-w-content mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <router-link
            v-for="item in filteredCases"
            :key="item.slug"
            :to="'/cases/' + item.slug"
            class="case-card group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
          >
            <div
              class="aspect-[16/10] overflow-hidden bg-[var(--color-bg-tertiary)]"
            >
              <img
                :src="item.image"
                :alt="item.clientName + '案例'"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div class="p-5">
              <div class="flex items-center gap-2 mb-2">
                <span
                  class="text-xs px-2 py-0.5 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)]"
                >
                  {{ item.category }}
                </span>
                <span
                  v-if="item.level"
                  class="text-xs text-[var(--color-text-tertiary)]"
                  >{{ item.level }}</span
                >
              </div>
              <h2
                class="font-heading font-semibold text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--color-primary)] transition-colors"
              >
                {{ item.clientName }}
              </h2>
              <p
                class="text-xs text-[var(--color-text-tertiary)] flex items-center gap-1 mb-3"
              >
                <MapPin class="w-3 h-3" />
                {{ item.location }}
              </p>
              <p
                class="text-sm text-[var(--color-text-secondary)] line-clamp-2 mb-3"
              >
                {{ item.summary }}
              </p>
              <p class="text-xs text-[var(--color-primary)] font-medium">
                {{ item.result }}
              </p>
            </div>
          </router-link>
        </div>

        <!-- Empty -->
        <div v-if="filteredCases.length === 0" class="text-center py-20">
          <Building
            class="w-16 h-16 text-[var(--color-text-tertiary)] mx-auto mb-4"
          />
          <p class="text-[var(--color-text-secondary)]">
            该分类暂无案例，敬请期待
          </p>
        </div>

        <!-- 更多案例 -->
        <div v-if="filteredCases.length > 0" class="text-center mt-12">
          <router-link
            :to="
              '/cases/gallery' +
              (activeCategory !== '全部' ? '?cat=' + activeCategory : '')
            "
            class="inline-flex items-center px-8 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-btn font-medium min-h-touch hover:bg-[var(--color-primary)] hover:text-[var(--color-text-inverse)] transition-colors"
          >
            更多案例
            <ArrowRight class="w-4 h-4 ml-2" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-[var(--color-primary)]">
      <div class="max-w-content mx-auto px-4 text-center">
        <h2
          class="text-h2 font-heading font-bold text-[var(--color-text-inverse)] mb-4"
        >
          成为下一个成功案例
        </h2>
        <p class="text-white mb-8 max-w-md mx-auto">
          14年经验 · 10000+客户信赖 · 立即获取专属方案
        </p>
        <router-link
          to="/contact"
          class="inline-flex items-center px-8 py-3 bg-[var(--color-text-inverse)] text-[var(--color-primary)] rounded-btn font-medium min-h-touch hover:opacity-90 transition-opacity"
        >
          立即咨询
          <ArrowRight class="w-4 h-4 ml-2" />
        </router-link>
      </div>
    </section>
  </div>
</template>
