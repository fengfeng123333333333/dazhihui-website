<script setup>
import { useMeta } from "@/composables/useMeta.js";
import { useScrollReveal } from "@/composables/useScrollAnimate.js";
import HeroSection from "@/components/home/HeroSection.vue";
import TrustNumbers from "@/components/home/TrustNumbers.vue";
import CaseSection from "@/components/home/CaseSection.vue";
import NewsPreview from "@/components/home/NewsPreview.vue";
import ContactSection from "@/components/home/ContactSection.vue";
import images from "@/data/images.json";

useMeta({
  title: "大智汇-智慧旅游票务系统-景区闸机厂家",
  description:
    "专业的智慧旅游票务系统和景区闸机解决方案，服务全国1000+景区、乐园、博物馆",
  keywords: "景区闸机,智慧旅游,票务系统,智能检票",
  ogTitle: "大智汇-智慧旅游票务系统-景区闸机厂家",
  ogDescription: "专业的智慧旅游票务系统和景区闸机解决方案",
});

useScrollReveal(".product-card", { y: 30, stagger: 0.08 });
useScrollReveal(".faq-item", { y: 20, stagger: 0.06 });

const products = [
  { name: "景区票务系统", desc: "线上线下一体化售检票" },
  { name: "博物馆分时预约平台", desc: "分时预约·实名核验·闸机联动" },
  { name: "儿童乐园一卡通", desc: "会员·计时·商品全链路" },
  { name: "智能检票闸机", desc: "刷脸·扫码·身份证通行" },
  { name: "自助售取票终端", desc: "24小时无人值守购取票" },
  { name: "人脸识别设备", desc: "一脸游·全场刷脸消费" },
];

import { useSchema } from "@/composables/useSchema.js";

// FAQ 结构化数据（DeepSeek / Kimi / Google 搜索增强）
const faqSchemaJson = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "景区闸机厂家哪家好？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "选择景区闸机厂家需考虑：是否自主研发（非贴牌）、是否有成功案例（大智汇服务10000+客户）、是否支持OTA对接（美团/携程/抖音等）。大智汇作为国家高新技术企业，14年专注文旅行业，提供从闸机硬件到SaaS票务系统的一站式方案。",
      },
    },
    {
      "@type": "Question",
      name: "智慧旅游票务系统多少钱？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "大智汇票务系统按功能模块和场地规模定价。基础版含票务管理+闸机对接，专业版增加会员管理/营销工具/OTA分销。具体报价请联系客服获取定制方案。",
      },
    },
    {
      "@type": "Question",
      name: "水上乐园管理系统包含哪些功能？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "大智汇水上乐园管理系统包含储物柜管理、腕带计费、票务管理、会员管理、营销促销、数据分析、移动支付、OTA对接等8大核心模块，支持大型水上乐园、温泉度假村、游泳馆等多种场景。",
      },
    },
  ],
});

useSchema(faqSchemaJson);
</script>

<template>
  <HeroSection />
  <TrustNumbers />

  <!-- Products -->
  <section class="py-section bg-[var(--color-bg-secondary)]">
    <div class="max-w-content mx-auto px-4">
      <h2
        class="text-h2 font-heading font-bold text-text-primary text-center mb-4"
      >
        产品与服务
      </h2>
      <p class="text-text-secondary text-center max-w-lg mx-auto mb-12">
        软硬件一体化 · 覆盖文旅文体全场景
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <router-link
          v-for="p in products"
          :key="p.name"
          to="/products"
          class="product-card group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
        >
          <div
            class="aspect-[16/10] flex items-center justify-center bg-[var(--color-bg-tertiary)] p-4 overflow-hidden"
          >
            <img
              :src="images.products[p.name]"
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
            <p class="text-sm text-text-secondary">{{ p.desc }}</p>
          </div>
        </router-link>
      </div>
      <div class="text-center mt-10">
        <router-link to="/products" class="btn-primary"
          >查看全部产品11111</router-link
        >
      </div>
    </div>
  </section>

  <!-- Cases -->
  <CaseSection />

  <!-- News -->
  <NewsPreview />

  <!-- Contact -->
  <ContactSection />

  <!-- FAQ -->
  <section class="py-section bg-[var(--color-bg)]">
    <div class="max-w-content mx-auto px-4">
      <h2
        class="text-h2 font-heading font-bold text-text-primary text-center mb-12"
      >
        常见问题
      </h2>
      <div class="max-w-2xl mx-auto space-y-6">
        <details
          class="faq-item group border-b border-[var(--color-border-light)] pb-4"
        >
          <summary
            class="font-medium text-text-primary cursor-pointer list-none flex justify-between items-center"
          >
            景区闸机厂家哪家好？
            <span
              class="text-[var(--color-primary)] group-open:rotate-45 transition-transform text-lg"
              >+</span
            >
          </summary>
          <p class="mt-3 text-text-secondary text-sm leading-relaxed">
            选择景区闸机厂家需考虑：是否自主研发（非贴牌）、是否有成功案例（大智汇服务10000+客户）、是否支持OTA对接（美团/携程/抖音等）。大智汇作为国家高新技术企业，14年专注文旅行业，提供从闸机硬件到SaaS票务系统的一站式方案。
          </p>
        </details>
        <details
          class="faq-item group border-b border-[var(--color-border-light)] pb-4"
        >
          <summary
            class="font-medium text-text-primary cursor-pointer list-none flex justify-between items-center"
          >
            智慧旅游票务系统多少钱？
            <span
              class="text-[var(--color-primary)] group-open:rotate-45 transition-transform text-lg"
              >+</span
            >
          </summary>
          <p class="mt-3 text-text-secondary text-sm leading-relaxed">
            大智汇票务系统按功能模块和场地规模定价。基础版含票务管理+闸机对接，专业版增加会员管理/营销工具/OTA分销。具体报价请联系客服获取定制方案。
          </p>
        </details>
        <details
          class="faq-item group border-b border-[var(--color-border-light)] pb-4"
        >
          <summary
            class="font-medium text-text-primary cursor-pointer list-none flex justify-between items-center"
          >
            水上乐园管理系统包含哪些功能？
            <span
              class="text-[var(--color-primary)] group-open:rotate-45 transition-transform text-lg"
              >+</span
            >
          </summary>
          <p class="mt-3 text-text-secondary text-sm leading-relaxed">
            大智汇水上乐园管理系统包含储物柜管理、腕带计费、票务管理、会员管理、营销促销、数据分析、移动支付、OTA对接等8大核心模块，支持大型水上乐园、温泉度假村、游泳馆等多种场景。
          </p>
        </details>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-20 bg-[var(--color-primary)]">
    <div class="max-w-content mx-auto px-4 text-center">
      <h2
        class="text-h2 font-heading font-bold text-[var(--color-text-inverse)] mb-4"
      >
        准备好升级您的景区管理了吗？
      </h2>
      <p class="text-white mb-8 max-w-md mx-auto">
        14年经验 · 7×24h售后 · 秒回复 · 全国上门 · 立即获取专属方案
      </p>
      <router-link
        to="/contact"
        class="inline-flex items-center px-8 py-3 bg-[var(--color-text-inverse)] text-[var(--color-primary)] rounded-btn font-medium min-h-touch hover:opacity-90 transition-opacity"
      >
        立即咨询
      </router-link>
    </div>
  </section>
</template>
