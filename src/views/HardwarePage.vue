<script setup>
import { ref } from "vue";
import { useMeta } from "@/composables/useMeta.js";
import { useScrollReveal } from "@/composables/useScrollAnimate.js";
import { ArrowRight } from "lucide-vue-next";
import ProductModal from "@/components/product/ProductModal.vue";
import products from "@/data/products.json";

useMeta({
  title: "硬件产品-闸机-人脸识别-售票机-消费机-卡头-腕带-大智汇14大品类",
  description:
    "智能通道门禁闸机、闸机验票模组、人脸识别机、人脸识别检票终端、智能手持终端机、自助售票取票机（6款）、门票打印机、自助刷卡收费终端机、立式户外自助消费机、迷你消费机、电玩城卡头（3款）、手腕芯片卡、一次性防水手腕带——大智汇13大硬件品类一站式票务终端",
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
        硬件产品
      </h1>
      <p class="text-text-secondary text-center max-w-lg mx-auto mb-12">
        自主研发 · 工业级品质 · 14大硬件品类 · 一站式解决景区票务硬件需求
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
        <div
          v-for="p in products.hardware"
          :key="p.slug"
          class="product-card group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
          @click="openModal(p)"
        >
          <div class="flex flex-col md:flex-row">
            <div
              class="md:w-2/5 aspect-[4/3] md:aspect-auto md:min-h-[240px] flex items-center justify-center bg-[var(--color-bg-tertiary)] p-4 overflow-hidden"
            >
              <img
                :src="p.image"
                :alt="p.name"
                class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div class="p-6 md:w-3/5 flex flex-col">
              <h3
                class="font-heading font-semibold text-text-primary text-lg mb-1 group-hover:text-[var(--color-primary)] transition-colors"
              >
                {{ p.name }}
              </h3>
              <p class="text-sm text-text-secondary mb-3">{{ p.subtitle }}</p>
              <ul class="space-y-1 flex-1">
                <li
                  v-for="s in p.specs.slice(0, 3)"
                  :key="s.label"
                  class="text-sm text-text-secondary flex gap-2"
                >
                  <span class="text-[var(--color-primary)] flex-shrink-0"
                    >•</span
                  >{{ s.label }}：{{
                    s.value.split("：")[0] || s.value.substring(0, 30)
                  }}
                </li>
              </ul>
              <p class="text-xs text-text-tertiary mt-2">
                点击查看完整规格（{{ p.specs.length }}项参数 +
                {{ p.scenarios.length }}场景）
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom recommendations -->
      <div class="border-t border-[var(--color-border-light)] pt-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="font-heading font-semibold text-text-primary mb-4">
              票务入口
            </h3>
            <ul class="space-y-2 text-sm">
              <li>智能通道门禁闸机</li>
              <li>闸机验票模组</li>
              <li>人脸识别机</li>
              <li>人脸识别检票终端</li>
              <li>智能手持终端机</li>
            </ul>
          </div>
          <div>
            <h3 class="font-heading font-semibold text-text-primary mb-4">
              售票出票
            </h3>
            <ul class="space-y-2 text-sm">
              <li>自助售票取票机（6款）</li>
              <li>门票打印机</li>
            </ul>
          </div>
          <div>
            <h3 class="font-heading font-semibold text-text-primary mb-4">
              消费终端
            </h3>
            <ul class="space-y-2 text-sm">
              <li>自助刷卡收费终端机</li>
              <li>立式户外自助消费机</li>
              <li>迷你消费机</li>
              <li>手腕芯片卡</li>
              <li>一次性防水手腕带</li>
            </ul>
          </div>
          <div>
            <h3 class="font-heading font-semibold text-text-primary mb-4">
              电玩城终端
            </h3>
            <ul class="space-y-2 text-sm">
              <li>电玩城卡头（3款）</li>
            </ul>
          </div>
        </div>
        <div class="mt-10 text-center">
          <router-link
            to="/products/software"
            class="text-[var(--color-text-link)] hover:underline text-sm inline-flex items-center gap-1"
          >
            查看配套软件系统 <ArrowRight :size="14" />
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
            景区闸机厂家哪家好？<span class="text-[var(--color-primary)]"
              >+</span
            >
          </summary>
          <p class="mt-3 text-sm text-text-secondary">
            大智汇为自主研发源头厂家（非贴牌），14年行业经验，10000+客户案例。提供从闸机硬件到SaaS票务系统一站式方案，深圳总部+广州双点售后。
          </p>
        </details>
        <details
          class="group border-b border-[var(--color-border-light)] pb-4 mb-4"
        >
          <summary
            class="font-medium text-text-primary cursor-pointer list-none flex justify-between"
          >
            闸机支持哪些验票方式？<span class="text-[var(--color-primary)]"
              >+</span
            >
          </summary>
          <p class="mt-3 text-sm text-text-secondary">
            支持纸质二维码、电子二维码、IC卡、身份证、人脸识别等。兼容美团/携程/抖音等OTA电子票核销。
          </p>
        </details>
        <details
          class="group border-b border-[var(--color-border-light)] pb-4 mb-4"
        >
          <summary
            class="font-medium text-text-primary cursor-pointer list-none flex justify-between"
          >
            硬件质保和售后？<span class="text-[var(--color-primary)]">+</span>
          </summary>
          <p class="mt-3 text-sm text-text-secondary">
            标准1年质保，终身技术支持。提供四大服务保障：技术/售后/KA/增值。深圳+广州双营销中心，3名专职售后技术人员。
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
