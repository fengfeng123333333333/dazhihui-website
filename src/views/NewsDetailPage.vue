<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useMeta } from "@/composables/useMeta.js";
import { useScrollReveal } from "@/composables/useScrollAnimate.js";
import { useSchema } from "@/composables/useSchema.js";
import newsData from "@/data/news.json";

const route = useRoute();
const slug = computed(() => route.path.split("/news/")[1]?.split("/")[0] || "");
const article = computed(() =>
  newsData.articles.find((a) => a.slug === slug.value),
);

useMeta({
  title: article.value ? `${article.value.title}-大智汇` : "文章详情-大智汇",
  description: article.value?.summary || "大智汇新闻文章详情",
});

// Related articles (exclude current, latest 3)
const relatedArticles = computed(() =>
  newsData.articles
    .filter((a) => a.slug !== route.params.slug)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3),
);

// 面包屑结构化数据
const breadcrumbJson = computed(() =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "首页",
        item: "https://dzh-tourism.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "新闻资讯",
        item: "https://dzh-tourism.com/news",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.value?.title || "文章详情",
      },
    ],
  }),
);

useSchema(breadcrumbJson);

useScrollReveal(".article-body", { y: 30 });
</script>

<template>
  <!-- Not Found -->
  <div
    v-if="!article"
    class="min-h-screen pt-[var(--page-top-padding)] px-4 flex items-center justify-center bg-[var(--color-bg)]"
  >
    <div class="text-center py-20">
      <h1
        class="text-h1 font-heading font-bold text-[var(--color-text-primary)] mb-4"
      >
        文章未找到
      </h1>
      <p class="text-[var(--color-text-secondary)] mb-8">
        该文章不存在或已被移除。
      </p>
      <router-link to="/news" class="btn-primary">返回新闻列表</router-link>
    </div>
  </div>

  <!-- Article Detail -->
  <div v-else class="min-h-screen bg-[var(--color-bg)]">
    <!-- Hero -->
    <header class="pt-32 pb-12 bg-[var(--color-bg-secondary)]">
      <div class="max-w-3xl mx-auto px-4">
        <div class="flex items-center gap-2 mb-4">
          <span
            class="text-xs px-2 py-0.5 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)]"
          >
            {{ article.category }}
          </span>
          <span
            class="text-xs text-[var(--color-text-tertiary)] flex items-center gap-1"
          >
            <Calendar class="w-3 h-3" />
            {{ article.date }}
          </span>
          <span
            class="text-xs text-[var(--color-text-tertiary)] flex items-center gap-1"
          >
            <User class="w-3 h-3" />
            {{ article.author }}
          </span>
        </div>
        <h1
          class="text-hero font-heading font-bold text-[var(--color-text-primary)] mb-4 leading-tight"
        >
          {{ article.title }}
        </h1>
        <p class="text-lg text-[var(--color-text-secondary)]">
          {{ article.summary }}
        </p>
      </div>
    </header>

    <!-- Featured Image -->
    <section class="py-8 bg-[var(--color-bg)]">
      <div class="max-w-3xl mx-auto px-4">
        <img
          :src="article.image"
          :alt="article.title"
          class="w-full rounded-card shadow-card-hover"
          loading="eager"
        />
      </div>
    </section>

    <!-- Content -->
    <section class="py-section bg-[var(--color-bg)]">
      <div class="max-w-3xl mx-auto px-4">
        <div class="article-body">
          <div
            class="prose-custom text-[var(--color-text-secondary)] leading-relaxed text-base space-y-4"
          >
            {{ article.content }}
          </div>
        </div>

        <!-- Back link -->
        <div class="mt-12 pt-8 border-t border-[var(--color-border-light)]">
          <router-link
            to="/news"
            class="inline-flex items-center text-sm text-[var(--color-primary)] font-medium hover:underline"
          >
            ← 返回新闻列表
          </router-link>
        </div>
      </div>
    </section>

    <!-- Related Articles -->
    <section class="py-section bg-[var(--color-bg-secondary)]">
      <div class="max-w-content mx-auto px-4">
        <h2
          class="text-h2 font-heading font-bold text-[var(--color-text-primary)] text-center mb-8"
        >
          相关文章
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <router-link
            v-for="ra in relatedArticles"
            :key="ra.slug"
            :to="'/news/' + ra.slug"
            class="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card overflow-hidden hover:shadow-card-hover transition-all duration-300 group"
          >
            <img
              :src="ra.image"
              :alt="ra.title"
              class="w-full aspect-[16/10] object-cover"
              loading="lazy"
            />
            <div class="p-4">
              <span
                class="text-xs px-2 py-0.5 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)]"
              >
                {{ ra.category }}
              </span>
              <h3
                class="font-heading font-medium text-[var(--color-text-primary)] mt-2 line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors"
              >
                {{ ra.title }}
              </h3>
              <p class="text-xs text-[var(--color-text-tertiary)] mt-1">
                {{ ra.date }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
