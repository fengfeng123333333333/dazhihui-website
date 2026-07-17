<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useMeta } from "@/composables/useMeta.js";
import { useScrollReveal } from "@/composables/useScrollAnimate.js";
import { useSchema } from "@/composables/useSchema.js";
import casesData from "@/data/cases.json";

const route = useRoute();
const slug = computed(
  () => route.path.split("/cases/")[1]?.split("/")[0] || "",
);
const item = computed(() =>
  casesData.featured.find((c) => c.slug === slug.value),
);

useMeta({
  title: item.value
    ? `${item.value.clientName}-${item.value.category}-大智汇智慧票务案例`
    : "案例详情-大智汇",
  description: item.value?.summary || "大智汇客户成功案例详情",
});

// Related cases (exclude current)
const relatedCases = computed(() =>
  casesData.featured.filter((c) => c.slug !== route.params.slug).slice(0, 3),
);

// 面包屑结构化数据（Google 搜索结果增强）
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
        name: "客户案例",
        item: "https://dzh-tourism.com/cases",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: item.value?.clientName || "案例详情",
      },
    ],
  }),
);
useSchema(breadcrumbJson);
useScrollReveal(".detail-section", { y: 30, stagger: 0.1 });
</script>

<template>
  <!-- Not Found -->
  <div
    v-if="!item"
    class="min-h-screen pt-[var(--page-top-padding)] px-4 flex items-center justify-center bg-[var(--color-bg)]"
  >
    <div class="text-center py-20">
      <h1
        class="text-h1 font-heading font-bold text-[var(--color-text-primary)] mb-4"
      >
        案例未找到
      </h1>
      <p class="text-[var(--color-text-secondary)] mb-8">
        该案例页面不存在或已被移除。
      </p>
      <router-link to="/cases" class="btn-primary">返回案例列表</router-link>
    </div>
  </div>

  <!-- Case Detail -->
  <div v-else class="min-h-screen bg-[var(--color-bg)]">
    <!-- Hero -->
    <header class="relative pt-32 pb-12 bg-[var(--color-bg-secondary)]">
      <div class="max-w-content mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div class="flex items-center gap-2 mb-4">
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
          <h1
            class="text-hero font-heading font-bold text-[var(--color-text-primary)] mb-4"
          >
            {{ item.clientName }}
          </h1>
          <p
            class="text-[var(--color-text-tertiary)] flex items-center gap-1 mb-4"
          >
            <MapPin class="w-4 h-4" />
            {{ item.location }}
          </p>
          <p class="text-lg text-[var(--color-text-secondary)] max-w-xl">
            {{ item.summary }}
          </p>
          <div class="mt-6 flex items-center gap-3">
            <router-link to="/contact" class="btn-primary text-sm">
              获取类似方案
              <ArrowRight class="w-4 h-4 ml-1" />
            </router-link>
            <router-link to="/cases" class="btn-secondary text-sm">
              查看更多案例
            </router-link>
          </div>
        </div>
      </div>
    </header>

    <!-- Case Image -->
    <section class="py-8 bg-[var(--color-bg)]">
      <div class="max-w-content mx-auto px-4">
        <img
          :src="item.image"
          :alt="item.clientName + '案例图片'"
          class="w-full max-w-3xl mx-auto rounded-card shadow-card-hover"
          loading="eager"
        />
      </div>
    </section>

    <!-- Background -->
    <section class="py-section bg-[var(--color-bg)]">
      <div class="max-w-2xl mx-auto px-4">
        <div class="detail-section">
          <div class="flex items-center gap-3 mb-6">
            <h2
              class="text-h2 font-heading font-bold text-[var(--color-text-primary)]"
            >
              客户背景
            </h2>
          </div>
          <p class="text-[var(--color-text-secondary)] leading-relaxed">
            {{ item.background }}
          </p>
        </div>
      </div>
    </section>

    <!-- Solution -->
    <section class="py-section bg-[var(--color-bg-secondary)]">
      <div class="max-w-2xl mx-auto px-4">
        <div class="detail-section">
          <div class="flex items-center gap-3 mb-6">
            <h2
              class="text-h2 font-heading font-bold text-[var(--color-text-primary)]"
            >
              解决方案
            </h2>
          </div>
          <p class="text-[var(--color-text-secondary)] leading-relaxed">
            {{ item.solution }}
          </p>
        </div>
      </div>
    </section>

    <!-- Result -->
    <section class="py-section bg-[var(--color-bg)]">
      <div class="max-w-2xl mx-auto px-4">
        <div class="detail-section">
          <div class="flex items-center gap-3 mb-6">
            <h2
              class="text-h2 font-heading font-bold text-[var(--color-text-primary)]"
            >
              实施效果
            </h2>
          </div>
          <div
            class="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card p-6 mb-6"
          >
            <p class="text-lg font-semibold text-[var(--color-primary)]">
              {{ item.result }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial -->
    <section
      v-if="item.testimonial"
      class="py-section bg-[var(--color-bg-secondary)]"
    >
      <div class="max-w-2xl mx-auto px-4">
        <div class="detail-section">
          <div class="flex items-center gap-3 mb-6">
            <h2
              class="text-h2 font-heading font-bold text-[var(--color-text-primary)]"
            >
              客户评价
            </h2>
          </div>
          <blockquote
            class="relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card p-6"
          >
            <Quote class="w-8 h-8 text-[var(--color-primary)]/30 mb-3" />
            <p
              class="text-[var(--color-text-secondary)] leading-relaxed italic"
            >
              "{{ item.testimonial }}"
            </p>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Related Cases -->
    <section class="py-section bg-[var(--color-bg)]">
      <div class="max-w-content mx-auto px-4">
        <h2
          class="text-h2 font-heading font-bold text-[var(--color-text-primary)] text-center mb-8"
        >
          更多案例
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <router-link
            v-for="rc in relatedCases"
            :key="rc.slug"
            :to="'/cases/' + rc.slug"
            class="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card p-4 hover:shadow-card-hover transition-all duration-300 group"
          >
            <img
              :src="rc.image"
              :alt="rc.clientName"
              class="w-full aspect-[16/10] object-cover rounded-lg mb-3"
              loading="lazy"
            />
            <span
              class="text-xs px-2 py-0.5 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)]"
            >
              {{ rc.category }}
            </span>
            <h3
              class="font-heading font-semibold text-[var(--color-text-primary)] mt-2 group-hover:text-[var(--color-primary)] transition-colors"
            >
              {{ rc.clientName }}
            </h3>
            <p
              class="text-xs text-[var(--color-text-secondary)] mt-1 line-clamp-2"
            >
              {{ rc.summary }}
            </p>
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
          准备好成为下一个标杆案例了吗？
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
