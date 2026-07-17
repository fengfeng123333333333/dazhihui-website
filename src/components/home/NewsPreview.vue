<script setup>
import { useScrollReveal } from "@/composables/useScrollAnimate.js";
import news from "@/data/news.json";

useScrollReveal(".news-card", { y: 20, stagger: 0.08 });
</script>

<template>
  <section class="py-section bg-[var(--color-bg-secondary)]">
    <div class="max-w-content mx-auto px-4">
      <h2
        class="text-h2 font-heading font-bold text-text-primary text-center mb-4"
      >
        新闻动态
      </h2>
      <p class="text-text-secondary text-center max-w-lg mx-auto mb-10">
        了解大智汇最新产品发布与行业洞察
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <router-link
          v-for="item in news.articles.slice(0, 3)"
          :key="item.slug"
          :to="`/news/${item.slug}`"
          class="news-card group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card p-6 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
        >
          <span
            class="text-xs text-[var(--color-primary)] bg-[var(--color-primary-light)] px-2 py-0.5 rounded-full"
          >
            {{ item.category }}
          </span>
          <span class="text-xs text-text-tertiary ml-2">{{ item.date }}</span>
          <h3
            class="font-medium text-text-primary mt-3 mb-2 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2"
          >
            {{ item.title }}
          </h3>
          <p class="text-sm text-text-secondary line-clamp-2">
            {{ item.summary }}
          </p>
        </router-link>
      </div>
      <div class="text-center mt-8">
        <router-link
          to="/news"
          class="text-sm text-[var(--color-text-link)] hover:underline"
        >
          查看更多新闻 →
        </router-link>
      </div>
    </div>
  </section>
</template>
