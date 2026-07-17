<script setup>
import { ref } from "vue";
import { useMeta } from "@/composables/useMeta.js";
import { useScrollReveal } from "@/composables/useScrollAnimate.js";
import { ArrowRight } from "lucide-vue-next";
import ProductModal from "@/components/product/ProductModal.vue";
import products from "@/data/products.json";

useMeta({
  title:
    "软件产品-景区票务-乐园一卡通-水乐园-滑雪场-温泉-博物馆-球馆-大智汇15大系统",
  description:
    "旅游景区云票务系统、儿童游乐场一卡通系统、剧场影院选座购票、游船码头计时收费、水乐园游泳馆管理、无动力乐园票务、儿童电玩城管理、蹦床公园系统、温泉度假村管理、滑雪场运营管理、博物馆分时预约、体育场馆/球馆/无人值守系统——大智汇SaaS云平台15大产品线",
});
useScrollReveal(".product-card", { y: 30, stagger: 0.08 });

const modalVisible = ref(false);
const selectedProduct = ref(null);
function openModal(p) {
  selectedProduct.value = p;
  modalVisible.value = true;
}
</script>

<template>
  <div class="min-h-screen pt-[var(--page-top-padding)] bg-[var(--color-bg)]">
    <div class="max-w-content mx-auto px-4 py-12">
      <h1
        class="text-h1 font-heading font-bold text-text-primary text-center mb-4"
      >
        软件产品
      </h1>
      <p class="text-text-secondary text-center max-w-lg mx-auto mb-12">
        SaaS云平台 · 15大产品线 · 覆盖景区/乐园/博物馆/体育场馆全业态 ·
        14年自主研发
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div
          v-for="p in products.software"
          :key="p.slug"
          class="product-card group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
          @click="openModal(p)"
        >
          <div
            class="aspect-[16/10] flex items-center justify-center bg-[var(--color-bg-tertiary)] p-4 overflow-hidden"
          >
            <img
              :src="p.image"
              :alt="p.name"
              class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div class="p-5">
            <h3
              class="font-heading font-semibold text-text-primary mb-1 group-hover:text-[var(--color-primary)] transition-colors"
            >
              {{ p.name }}
            </h3>
            <p class="text-sm text-text-secondary mb-3">{{ p.subtitle }}</p>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="f in p.features.slice(0, 3)"
                :key="f.icon"
                class="text-xs px-2 py-0.5 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)]"
                >{{ f.text.split("：")[0] }}</span
              >
              <span
                class="text-xs px-2 py-0.5 rounded-full bg-[var(--color-bg-tertiary)] text-text-tertiary"
                >+{{ p.features.length - 3 }}项</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom: category overview -->
      <div class="border-t border-[var(--color-border-light)] pt-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="font-heading font-semibold text-text-primary mb-4">
              景区票务类
            </h3>
            <ul class="space-y-2 text-sm text-text-secondary">
              <li>旅游景区云票务系统</li>
              <li>剧场影院选座购票系统</li>
              <li>游船码头计时收费系统</li>
              <li>博物馆分时预约平台</li>
            </ul>
          </div>
          <div>
            <h3 class="font-heading font-semibold text-text-primary mb-4">
              乐园游乐类
            </h3>
            <ul class="space-y-2 text-sm text-text-secondary">
              <li>儿童游乐场一卡通系统</li>
              <li>儿童电玩城管理系统</li>
              <li>蹦床公园系统</li>
              <li>无动力乐园票务系统</li>
            </ul>
          </div>
          <div>
            <h3 class="font-heading font-semibold text-text-primary mb-4">
              水冰雪温泉类
            </h3>
            <ul class="space-y-2 text-sm text-text-secondary">
              <li>水乐园游泳馆管理系统</li>
              <li>滑雪场运营管理系统</li>
              <li>温泉度假村管理系统</li>
            </ul>
          </div>
          <div>
            <h3 class="font-heading font-semibold text-text-primary mb-4">
              体育场馆类
            </h3>
            <ul class="space-y-2 text-sm text-text-secondary">
              <li>体育场馆运营管理系统</li>
              <li>球馆运营管理系统</li>
              <li>无人值守球馆订场系统</li>
              <li>无人值守健身房系统</li>
            </ul>
          </div>
        </div>
        <div class="mt-10 text-center">
          <router-link
            to="/products/hardware"
            class="text-[var(--color-text-link)] hover:underline text-sm inline-flex items-center gap-1"
          >
            查看配套硬件设备 <ArrowRight :size="14" />
          </router-link>
        </div>
      </div>

      <!-- FAQ -->
      <div class="max-w-2xl mx-auto mt-16">
        <h2
          class="text-h2 font-heading font-bold text-text-primary text-center mb-8"
        >
          常见问题
        </h2>
        <details
          class="group border-b border-[var(--color-border-light)] pb-4 mb-4"
        >
          <summary
            class="font-medium text-text-primary cursor-pointer list-none flex justify-between"
          >
            软件产品是SaaS还是本地部署？<span
              class="text-[var(--color-primary)]"
              >+</span
            >
          </summary>
          <p class="mt-3 text-sm text-text-secondary">
            大智汇全系软件产品均为SaaS云平台部署，无需本地架设服务器，开通即用。同时支持混合部署方案，数据可存在客户指定服务器。
          </p>
        </details>
        <details
          class="group border-b border-[var(--color-border-light)] pb-4 mb-4"
        >
          <summary
            class="font-medium text-text-primary cursor-pointer list-none flex justify-between"
          >
            支持对接哪些OTA平台？<span class="text-[var(--color-primary)]"
              >+</span
            >
          </summary>
          <p class="mt-3 text-sm text-text-secondary">
            支持美团、携程、同程、驴妈妈、飞猪、抖音等主流OTA平台对接，实现多平台票务统一管理、库存同步、订单自动处理。
          </p>
        </details>
        <details
          class="group border-b border-[var(--color-border-light)] pb-4 mb-4"
        >
          <summary
            class="font-medium text-text-primary cursor-pointer list-none flex justify-between"
          >
            是否支持定制开发？<span class="text-[var(--color-primary)]">+</span>
          </summary>
          <p class="mt-3 text-sm text-text-secondary">
            大智汇为自主研发源头厂家，50+项软件产品均掌握核心技术，支持按需定制功能模块。可根据不同业态（景区/乐园/博物馆/体育场馆）提供个性化方案。
          </p>
        </details>
        <details class="group border-b border-[var(--color-border-light)] pb-4">
          <summary
            class="font-medium text-text-primary cursor-pointer list-none flex justify-between"
          >
            系统的售后服务如何？<span class="text-[var(--color-primary)]"
              >+</span
            >
          </summary>
          <p class="mt-3 text-sm text-text-secondary">
            提供四大服务保障：技术服务（7×24小时）、售后服务（远程+现场）、KA服务（大客户专属经理）、增值服务（运营指导）。深圳总部+广州营销中心双点覆盖。
          </p>
        </details>
      </div>
    </div>
  </div>

  <ProductModal
    :product="selectedProduct"
    :visible="modalVisible"
    @close="modalVisible = false"
  />
</template>
