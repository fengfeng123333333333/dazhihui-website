<script setup>
import { useScrollReveal } from "@/composables/useScrollAnimate.js";
import { ArrowRight } from "lucide-vue-next";
import cases from "@/data/homecases.json";

useScrollReveal(".case-card", { y: 30, stagger: 0.1 });
</script>

<template>
  <section class="py-section bg-[var(--color-bg)]">
    <div class="max-w-content mx-auto px-4">
      <h2
        class="text-h2 font-heading font-bold text-text-primary text-center mb-4"
      >
        客户案例
      </h2>
      <p class="text-text-secondary text-center max-w-lg mx-auto mb-8">
        {{ cases.logoWall.length }}+行业标杆的共同选择
      </p>

      <!-- Logo Wall -->
      <div class="overflow-hidden mb-12 py-4">
        <div class="flex gap-8 animate-scroll">
          <img
            v-for="(logo, i) in [...cases.logoWall, ...cases.logoWall]"
            :key="i"
            :src="logo.image"
            :alt="logo.name"
            class="h-10 object-contain opacity-60 hover:opacity-100 transition-opacity flex-shrink-0"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Featured Cases -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <router-link
          v-for="item in cases.featured"
          :key="item.slug"
          :to="`/cases/${item.slug}`"
          class="case-card group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
        >
          <div
            class="aspect-[4/3] flex items-center justify-center bg-[var(--color-bg-tertiary)] p-4 overflow-hidden"
          >
            <img
              :src="item.image"
              :alt="`${item.clientName}案例`"
              class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div class="p-5">
            <span
              class="text-xs text-[var(--color-primary)] bg-[var(--color-primary-light)] px-2 py-0.5 rounded-full"
            >
              {{ item.category }}
            </span>
            <h3
              class="font-heading font-semibold text-text-primary mt-2 mb-1 group-hover:text-[var(--color-primary)] transition-colors"
            >
              {{ item.clientName }}
            </h3>
            <p class="text-sm text-text-secondary line-clamp-2">
              {{ item.summary }}
            </p>
            <p class="text-xs text-[var(--color-accent)] mt-2 font-medium">
              🏆 {{ item.result }}
            </p>
          </div>
        </router-link>
      </div>

      <div class="text-center mt-10">
        <router-link
          to="/cases"
          class="btn-secondary inline-flex items-center gap-2"
        >
          查看全部案例 <ArrowRight :size="16" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.animate-scroll {
  animation: scroll 25s linear infinite;
  width: max-content;
}
.animate-scroll:hover {
  animation-play-state: paused;
}
</style>
