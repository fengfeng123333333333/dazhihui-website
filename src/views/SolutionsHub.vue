<script setup>
import { useMeta } from "@/composables/useMeta.js";
import { ArrowRight } from "lucide-vue-next";
import solutionsData from "@/data/solutions.json";

useMeta({
  title: "解决方案-智慧旅游数字化解决方案-大智汇",
  description:
    "大智汇提供智慧景区票务、室内户外儿童乐园、博物馆预约、体育馆剧院选座四大行业解决方案，覆盖分时预约、OTA分销、智能检票、在线选座等全场景。14年经验，10000+客户信赖。",
});

const solutions = solutionsData.solutions;
</script>

<template>
  <div class="min-h-screen pt-[var(--page-top-padding)] bg-[var(--color-bg)]">
    <!-- Hero -->
    <section class="py-section bg-[var(--color-bg-secondary)]">
      <div class="max-w-content mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1
            class="text-h1 font-heading font-bold text-[var(--color-text-primary)] mb-4"
          >
            解决方案
          </h1>
          <p
            class="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto"
          >
            覆盖智慧景区、儿童乐园、博物馆、体育馆/剧院四大业态，提供软硬件一体化数字化解决方案
          </p>
        </div>
      </div>
    </section>

    <!-- Solution Cards -->
    <section class="py-section bg-[var(--color-bg)]">
      <div class="max-w-content mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <router-link
            v-for="sol in solutions"
            :key="sol.slug"
            :to="'/solutions/' + sol.slug"
            class="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
          >
            <div
              class="aspect-[16/9] overflow-hidden bg-[var(--color-bg-tertiary)]"
            >
              <img
                :src="sol.heroImage"
                :alt="sol.title + '-大智汇'"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div class="p-6">
              <h2
                class="text-xl font-heading font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors"
              >
                {{ sol.title }}
              </h2>
              <p class="text-sm text-[var(--color-text-secondary)] mb-4">
                {{ sol.tagline }}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="feat in sol.features.slice(0, 4)"
                  :key="feat.title"
                  class="text-xs px-2 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)]"
                >
                  {{ feat.title }}
                </span>
              </div>
              <span
                class="inline-flex items-center text-sm text-[var(--color-primary)] font-medium group-hover:gap-2 transition-all"
              >
                了解详情
                <ArrowRight class="w-4 h-4 ml-1" />
              </span>
            </div>
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
          不确定哪个方案适合您？
        </h2>
        <p class="text-white mb-8 max-w-md mx-auto">
          联系我们的解决方案专家，为您量身定制专属方案
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
