<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useMeta } from "@/composables/useMeta.js";
import { useScrollReveal } from "@/composables/useScrollAnimate.js";
import { useSchema } from "@/composables/useSchema.js";
import solutionsData from "@/data/solutions.json";
import casesData from "@/data/cases.json";

const route = useRoute();
const slug = computed(
  () => route.path.split("/solutions/")[1]?.split("/")[0] || "",
);
const solution = computed(() =>
  solutionsData.solutions.find((s) => s.slug === slug.value),
);

useMeta({
  title: solution.value?.seo?.title || "解决方案-大智汇",
  description:
    solution.value?.seo?.description ||
    "大智汇智慧旅游解决方案，为景区、乐园提供一站式数字化管理平台",
});

const relatedCases = computed(() =>
  (solution.value?.relatedCases || [])
    .map((slug) => casesData.featured.find((c) => c.slug === slug))
    .filter(Boolean),
);

// FAQ 结构化数据（DeepSeek / Kimi / Google 搜索增强）
const faqSchemaJson = computed(() => {
  if (!solution.value?.faqs?.length) return "";
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solution.value.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  });
});

useSchema(faqSchemaJson);

const lightboxSrc = ref("");
const openLightbox = (src) => {
  lightboxSrc.value = src;
};
const closeLightbox = () => {
  lightboxSrc.value = "";
};

useScrollReveal(".pain-point-card", { y: 30, stagger: 0.1 });
useScrollReveal(".feature-card", { y: 30, stagger: 0.06 });
useScrollReveal(".scenario-card", { y: 30, stagger: 0.12 });
useScrollReveal(".faq-item", { y: 20, stagger: 0.06 });
</script>

<template>
  <!-- Not Found -->
  <div
    v-if="!solution"
    class="min-h-screen pt-[var(--page-top-padding)] px-4 flex items-center justify-center bg-[var(--color-bg)]"
  >
    <div class="text-center py-20">
      <h1
        class="text-h1 font-heading font-bold text-[var(--color-text-primary)] mb-4"
      >
        方案未找到
      </h1>
      <p class="text-[var(--color-text-secondary)] mb-8">
        该解决方案页面不存在或已被移除。
      </p>
      <router-link to="/" class="btn-primary"> 返回首页 </router-link>
    </div>
  </div>

  <!-- Solution Page -->
  <div v-else class="min-h-screen bg-[var(--color-bg)]">
    <!-- ===== Hero ===== -->
    <header class="relative pt-32 pb-section bg-[var(--color-bg-secondary)]">
      <div class="max-w-content mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1
            class="text-hero font-heading font-bold text-[var(--color-text-primary)] mb-6 leading-tight"
          >
            {{ solution.title }}
          </h1>
          <p
            class="text-lg text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto"
          >
            {{ solution.tagline }}
          </p>
          <!-- Scale Tags -->
          <div class="flex flex-wrap gap-2 justify-center mb-6">
            <span
              v-for="tag in solution.scaleTags"
              :key="tag"
              class="text-xs px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] font-medium"
            >
              适用：{{ tag }}
            </span>
          </div>
          <p
            class="text-sm text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto leading-relaxed"
          >
            {{ solution.scaleDescription }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contact" class="btn-primary">
              获取专属方案
              <ArrowRight class="w-4 h-4 ml-2" />
            </router-link>
            <router-link to="/products" class="btn-secondary">
              查看相关产品
            </router-link>
          </div>
        </div>
        <div class="mt-12 max-w-2xl mx-auto">
          <img
            :src="solution.heroImage"
            :alt="solution.title + '-大智汇'"
            class="w-full h-auto rounded-card shadow-card-hover cursor-zoom-in"
            loading="eager"
            @click="openLightbox(solution.heroImage)"
          />
        </div>
      </div>
    </header>

    <!-- ===== Pain Points ===== -->
    <section class="py-section bg-[var(--color-bg)]">
      <div class="max-w-content mx-auto px-4">
        <h2
          class="text-h2 font-heading font-bold text-[var(--color-text-primary)] text-center mb-4"
        >
          行业痛点
        </h2>
        <p
          class="text-[var(--color-text-secondary)] text-center max-w-lg mx-auto mb-12"
        >
          大智汇专注解决以下核心难题
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div
            v-for="(pain, i) in solution.painPoints"
            :key="i"
            class="pain-point-card bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card p-6"
          >
            <div
              class="w-12 h-12 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center mb-4"
            >
              <Shield class="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h3
              class="font-heading font-semibold text-[var(--color-text-primary)] mb-2"
            >
              {{ pain.title }}
            </h3>
            <p
              class="text-sm text-[var(--color-text-secondary)] leading-relaxed"
            >
              {{ pain.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Features ===== -->
    <section class="py-section bg-[var(--color-bg-secondary)]">
      <div class="max-w-content mx-auto px-4">
        <h2
          class="text-h2 font-heading font-bold text-[var(--color-text-primary)] text-center mb-4"
        >
          功能矩阵
        </h2>
        <p
          class="text-[var(--color-text-secondary)] text-center max-w-lg mx-auto mb-12"
        >
          {{ solution.features.length }}大核心模块，覆盖全场景需求
        </p>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-5xl mx-auto"
        >
          <div
            v-for="(feat, i) in solution.features"
            :key="i"
            class="feature-card bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card p-5 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
          >
            <div
              class="w-10 h-10 rounded-lg bg-[var(--color-primary-light)] flex items-center justify-center mb-4"
            >
              <CheckCircle class="w-5 h-5 text-[var(--color-primary)]" />
            </div>
            <h3
              class="font-heading font-semibold text-[var(--color-text-primary)] mb-2 text-sm"
            >
              {{ feat.title }}
            </h3>
            <p
              class="text-xs text-[var(--color-text-secondary)] leading-relaxed"
            >
              {{ feat.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Scenarios ===== -->
    <section class="py-section bg-[var(--color-bg)]">
      <div class="max-w-content mx-auto px-4">
        <h2
          class="text-h2 font-heading font-bold text-[var(--color-text-primary)] text-center mb-4"
        >
          应用场景
        </h2>
        <p
          class="text-[var(--color-text-secondary)] text-center max-w-lg mx-auto mb-12"
        >
          适配多种业态，灵活部署
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div
            v-for="(scene, i) in solution.scenarios"
            :key="i"
            class="scenario-card bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card overflow-hidden group"
          >
            <div
              class="aspect-[16/10] overflow-hidden bg-[var(--color-bg-tertiary)]"
            >
              <img
                :src="scene.image"
                :alt="scene.name + '-大智汇' + solution.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div class="p-5">
              <h3
                class="font-heading font-semibold text-[var(--color-text-primary)] mb-2"
              >
                {{ scene.name }}
              </h3>
              <p
                class="text-sm text-[var(--color-text-secondary)] leading-relaxed"
              >
                {{ scene.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Related Cases ===== -->
    <section
      v-if="relatedCases.length"
      class="py-section bg-[var(--color-bg-secondary)]"
    >
      <div class="max-w-content mx-auto px-4">
        <h2
          class="text-h2 font-heading font-bold text-[var(--color-text-primary)] text-center mb-4"
        >
          客户案例
        </h2>
        <p
          class="text-[var(--color-text-secondary)] text-center max-w-lg mx-auto mb-12"
        >
          看看谁在使用大智汇
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <router-link
            v-for="c in relatedCases"
            :key="c.slug"
            :to="'/cases/' + c.slug"
            class="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card p-5 flex gap-4 hover:shadow-card-hover transition-all duration-300 group"
          >
            <img
              :src="c.image"
              :alt="c.clientName + '案例'"
              class="w-16 h-16 rounded-lg object-cover flex-shrink-0"
              loading="lazy"
            />
            <div class="min-w-0">
              <h3
                class="font-heading font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors"
              >
                {{ c.clientName }}
              </h3>
              <p class="text-xs text-[var(--color-text-tertiary)] mb-1">
                {{ c.location }} · {{ c.category }}
              </p>
              <p
                class="text-sm text-[var(--color-text-secondary)] line-clamp-2"
              >
                {{ c.summary }}
              </p>
              <p
                v-if="c.result"
                class="text-xs text-[var(--color-primary)] mt-1 font-medium"
              >
                {{ c.result }}
              </p>
            </div>
          </router-link>
        </div>
        <div v-if="relatedCases.length > 2" class="text-center mt-8">
          <router-link
            to="/cases"
            class="inline-flex items-center text-[var(--color-primary)] font-medium hover:underline"
          >
            查看全部案例
            <ArrowRight class="w-4 h-4 ml-1" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- ===== Specs ===== -->
    <section class="py-section bg-[var(--color-bg)]">
      <div class="max-w-content mx-auto px-4">
        <h2
          class="text-h2 font-heading font-bold text-[var(--color-text-primary)] text-center mb-12"
        >
          技术参数
        </h2>
        <dl
          class="max-w-2xl mx-auto divide-y divide-[var(--color-border-light)] border border-[var(--color-border-light)] rounded-card overflow-hidden bg-[var(--card-bg)]"
        >
          <div
            v-for="(spec, i) in solution.specs"
            :key="i"
            class="flex flex-col sm:flex-row sm:items-center px-6 py-4 gap-1 sm:gap-4"
          >
            <dt
              class="text-sm font-medium text-[var(--color-text-primary)] sm:w-32 flex-shrink-0"
            >
              {{ spec.label }}
            </dt>
            <dd class="text-sm text-[var(--color-text-secondary)]">
              {{ spec.value }}
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- ===== FAQ ===== -->
    <section class="py-section bg-[var(--color-bg-secondary)]">
      <div class="max-w-content mx-auto px-4">
        <h2
          class="text-h2 font-heading font-bold text-[var(--color-text-primary)] text-center mb-12"
        >
          常见问题
        </h2>
        <div class="max-w-2xl mx-auto space-y-4">
          <details
            v-for="(faq, i) in solution.faqs"
            :key="i"
            class="faq-item group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card px-6 py-4"
          >
            <summary
              class="font-medium text-[var(--color-text-primary)] cursor-pointer list-none flex justify-between items-center gap-4"
            >
              {{ faq.q }}
              <span
                class="text-[var(--color-primary)] group-open:rotate-45 transition-transform text-lg flex-shrink-0"
              >
                +
              </span>
            </summary>
            <p
              class="mt-4 text-sm text-[var(--color-text-secondary)] leading-relaxed border-t border-[var(--color-border-light)] pt-4"
            >
              {{ faq.a }}
            </p>
          </details>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="py-20 bg-[var(--color-primary)]">
      <div class="max-w-content mx-auto px-4 text-center">
        <h2
          class="text-h2 font-heading font-bold text-[var(--color-text-inverse)] mb-4"
        >
          准备好升级您的管理方案了吗？
        </h2>
        <p class="text-white mb-8 max-w-md mx-auto">
          14年经验 · 10000+客户信赖 · 立即获取专属方案
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/contact"
            class="inline-flex items-center px-8 py-3 bg-[var(--color-text-inverse)] text-[var(--color-primary)] rounded-btn font-medium min-h-touch hover:opacity-90 transition-opacity"
          >
            立即咨询
          </router-link>
          <a
            href="tel:15986812063"
            class="inline-flex items-center px-8 py-3 border border-[var(--color-text-inverse)]/30 text-[var(--color-text-inverse)] rounded-btn font-medium min-h-touch hover:bg-[var(--color-text-inverse)]/10 transition-colors"
          >
            致电 15986812063
            <ExternalLink class="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  </div>

  <!-- Lightbox -->
  <Teleport to="body">
    <Transition name="zoom">
      <div
        v-if="lightboxSrc"
        class="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
        @click="closeLightbox"
      >
        <img
          :src="lightboxSrc"
          class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
          @click.stop
        />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.zoom-enter-active {
  transition: opacity 0.2s ease-out;
}
.zoom-leave-active {
  transition: opacity 0.15s ease-in;
}
.zoom-enter-from,
.zoom-leave-to {
  opacity: 0;
}
</style>
