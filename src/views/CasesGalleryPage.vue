<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useMeta } from "@/composables/useMeta.js";

const route = useRoute();
const filterCat = computed(() => route.query.cat || "");
const lightboxSrc = ref("");

useMeta({
  title: "更多案例-客户案例图集-大智汇",
  description:
    "大智汇客户案例图集展示，覆盖户外景区、水上乐园、无动力乐园、儿童乐园、博物馆、体育馆等行业的智慧票务系统成功案例。",
});

// 图片路径函数
const img = (name) => `/anli/${name}`;

const categories = [
  {
    name: "户外景区",
    images: [
      img("户外景区1.png"),
      img("户外景区2.png"),
      img("户外景区3.png"),
      img("户外景区4.png"),
      img("户外景区5.png"),
      img("户外景区6.png"),
      img("户外景区7.png"),
      img("户外景区8.png"),
      img("户外景区9.png"),
      img("户外景区10.png"),
      img("户外景区11.png"),
      img("户外景区12.png"),
      img("户外景区13.png"),
      img("户外景区14.png"),
    ],
  },
  {
    name: "水上乐园",
    images: [
      img("水上乐园1.png"),
      img("水上乐园2.png"),
      img("水上乐园3.png"),
      img("水上乐园4.png"),
      img("水上乐园5.png"),
    ],
  },
  {
    name: "滑雪场",
    images: [img("滑雪场1.png"), img("滑雪场2.png"), img("滑雪场3.png")],
  },
  {
    name: "无动力乐园",
    images: [
      img("无动力乐园1.png"),
      img("无动力乐园2.png"),
      img("无动力乐园3.png"),
      img("无动力乐园4.png"),
      img("无动力乐园5.png"),
      img("无动力乐园6.png"),
      img("无动力乐园7.png"),
      img("无动力乐园8.png"),
      img("无动力乐园9.png"),
      img("无动力乐园10.png"),
      img("无动力乐园11.png"),
      img("无动力乐园12.png"),
      img("无动力乐园13.png"),
      img("无动力乐园14.png"),
    ],
  },
  {
    name: "儿童乐园",
    images: [
      img("儿童乐园1.png"),
      img("儿童乐园2.png"),
      img("儿童乐园3.png"),
      img("儿童乐园4.png"),
      img("儿童乐园5.png"),
    ],
  },
  {
    name: "博物馆",
    images: [img("博物馆和体育馆1.png"), img("博物馆和体育馆2.png")],
  },
  {
    name: "体育馆",
    images: [img("博物馆和体育馆3.png"), img("博物馆和体育馆4.png")],
  },
];
</script>

<template>
  <div class="min-h-screen pt-[var(--page-top-padding)] bg-[var(--color-bg)]">
    <!-- Hero -->
    <section class="py-section bg-[var(--color-bg-secondary)]">
      <div class="max-w-content mx-auto px-4 text-center">
        <h1
          class="text-h1 font-heading font-bold text-[var(--color-text-primary)] mb-4"
        >
          案例图集
        </h1>
        <p class="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
          覆盖7大行业 · 纯图片展示
        </p>
      </div>
    </section>

    <!-- 分类图片区 -->
    <section
      v-for="cat in categories"
      v-show="!filterCat || cat.name === filterCat"
      :key="cat.name"
      class="pb-16 bg-[var(--color-bg)]"
    >
      <div class="max-w-content mx-auto px-4">
        <h2
          class="text-h2 font-heading font-bold text-[var(--color-text-primary)] text-center mb-8 pt-16"
        >
          {{ cat.name }}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div
            v-for="(src, i) in cat.images"
            :key="i"
            class="aspect-[4/3] overflow-hidden rounded-card bg-[var(--color-bg-tertiary)]"
          >
            <img
              :src="src"
              :alt="cat.name + '案例' + (i + 1)"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-zoom-in"
              loading="lazy"
              @click="lightboxSrc = src"
            />
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Lightbox -->
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="lightboxSrc"
        class="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
        @click="lightboxSrc = ''"
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
.fade-enter-active {
  transition: opacity 0.2s ease-out;
}
.fade-leave-active {
  transition: opacity 0.15s ease-in;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
