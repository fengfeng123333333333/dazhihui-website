<script setup>
import { ref, computed } from "vue";
import { useMeta } from "@/composables/useMeta.js";
import { useScrollReveal } from "@/composables/useScrollAnimate.js";
import { ArrowRight, Calendar, Newspaper } from "lucide-vue-next";
import newsData from "@/data/news.json";

useMeta({
  title: "新闻资讯-大智汇公司动态-行业资讯",
  description:
    "大智汇新闻资讯，涵盖公司动态、产品发布、成功案例、展会资讯。14年深耕智慧文旅行业，了解最新行业趋势。",
});

const articles = newsData.articles.sort(
  (a, b) => new Date(b.date) - new Date(a.date),
);
const categories = computed(() => {
  const cats = [...new Set(articles.map((a) => a.category))];
  return ["全部", ...cats];
});
const activeCategory = ref("全部");
const filteredArticles = computed(() =>
  activeCategory.value === "全部"
    ? articles
    : articles.filter((a) => a.category === activeCategory.value),
);

useScrollReveal(".news-card", { y: 30, stagger: 0.08 });
</script>

<template>
  <div class="min-h-screen pt-[var(--page-top-padding)] bg-[var(--color-bg)]">
    <!-- Hero -->
    <section class="py-section bg-[var(--color-bg-secondary)]">
      <div class="max-w-content mx-auto px-4 text-center">
        <h1
          class="text-h1 font-heading font-bold text-[var(--color-text-primary)] mb-4"
        >
          新闻资讯
        </h1>
        <p class="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
          {{ articles.length }}篇文章 · 产品发布 · 行业洞察 · 成功案例
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

    <!-- News List -->
    <section class="py-section bg-[var(--color-bg)]">
      <div class="max-w-4xl mx-auto px-4">
        <div class="space-y-6">
          <router-link
            v-for="item in filteredArticles"
            :key="item.slug"
            :to="'/news/' + item.slug"
            class="news-card group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 flex flex-col sm:flex-row"
          >
            <div
              class="sm:w-48 flex-shrink-0 overflow-hidden bg-[var(--color-bg-tertiary)]"
            >
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-36 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div class="p-5 flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-2">
                <span
                  class="text-xs px-2 py-0.5 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)]"
                >
                  {{ item.category }}
                </span>
                <span
                  class="text-xs text-[var(--color-text-tertiary)] flex items-center gap-1"
                >
                  <Calendar class="w-3 h-3" />
                  {{ item.date }}
                </span>
              </div>
              <h2
                class="font-heading font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors line-clamp-2 mb-2"
              >
                {{ item.title }}
              </h2>
              <p
                class="text-sm text-[var(--color-text-secondary)] line-clamp-2"
              >
                {{ item.summary }}
              </p>
            </div>
          </router-link>
        </div>

        <!-- Empty -->
        <div v-if="filteredArticles.length === 0" class="text-center py-20">
          <Newspaper
            class="w-16 h-16 text-[var(--color-text-tertiary)] mx-auto mb-4"
          />
          <p class="text-[var(--color-text-secondary)]">
            该分类暂无文章，敬请期待
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-[var(--color-primary)]">
      <div class="max-w-content mx-auto px-4 text-center">
        <h2
          class="text-h2 font-heading font-bold text-[var(--color-text-inverse)] mb-4"
        >
          关注大智汇，了解行业前沿
        </h2>
        <p class="text-white mb-8 max-w-md mx-auto">
          14年深耕 · 10000+客户 · 持续创新
        </p>
        <router-link
          to="/contact"
          class="inline-flex items-center px-8 py-3 bg-[var(--color-text-inverse)] text-[var(--color-primary)] rounded-btn font-medium min-h-touch hover:opacity-90 transition-opacity"
        >
          联系我们
          <ArrowRight class="w-4 h-4 ml-2" />
        </router-link>
      </div>
    </section>
  </div>
</template>
