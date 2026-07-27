<script setup>
import { useHeroEntrance } from "@/composables/useScrollAnimate.js";
import company from "@/data/company.json";

useHeroEntrance(".hero-section");
</script>

<template>
  <section
    class="hero-section relative min-h-screen flex items-center bg-[var(--hero-bg)] pt-16"
  >
    <div class="max-w-content mx-auto px-4 w-full">
      <div class="max-w-3xl">
        <!-- 品牌陈述句 -->
        <h1
          class="text-hero font-heading font-bold text-text-primary leading-[1.05] mb-6"
        >
          智慧旅游数字化<br />解决方案提供商
        </h1>
        <p
          class="text-lg md:text-xl text-text-secondary mb-8 max-w-xl leading-relaxed"
        >
          {{ company.stats.yearsOfExperience }}年深耕 ·
          {{ company.stats.totalCustomers.toLocaleString() }}+客户 ·
          国家高新技术企业
        </p>

        <!-- CTA -->
        <div class="cta-group flex flex-wrap gap-4">
          <router-link to="/products" class="btn-primary">
            了解产品
          </router-link>
          <router-link to="/contact" class="btn-secondary">
            联系我们
          </router-link>
        </div>

        <!-- 信任数字 -->
        <div class="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          <dl class="text-center md:text-left">
            <dt class="text-sm text-text-tertiary mb-1">行业深耕</dt>
            <dd class="text-3xl font-heading font-bold text-text-primary">
              {{ company.stats.yearsOfExperience }}
            </dd>
            <dd class="text-xs text-text-tertiary mt-0.5">年</dd>
          </dl>
          <dl class="text-center md:text-left">
            <dt class="text-sm text-text-tertiary mb-1">资质认证</dt>
            <dd class="text-3xl font-heading font-bold text-text-primary">
              国家级
            </dd>
            <dd class="text-xs text-text-tertiary mt-0.5">高新技术企业</dd>
          </dl>
          <dl class="text-center md:text-left">
            <dt class="text-sm text-text-tertiary mb-1">企业认定</dt>
            <dd class="text-3xl font-heading font-bold text-text-primary">
              省市级
            </dd>
            <dd class="text-xs text-text-tertiary mt-0.5">创新型中小企业</dd>
          </dl>
          <dl class="text-center md:text-left">
            <dt class="text-sm text-text-tertiary mb-1">服务客户</dt>
            <dd class="text-3xl font-heading font-bold text-text-primary">
              {{ (company.stats.totalCustomers / 10000).toFixed(0) }}万+
            </dd>
            <dd class="text-xs text-text-tertiary mt-0.5">遍布全国及海外</dd>
          </dl>
          <dl class="text-center md:text-left">
            <dt class="text-sm text-text-tertiary mb-1">自主知识产权</dt>
            <dd class="text-3xl font-heading font-bold text-text-primary">
              {{ company.stats.softwareProducts }}+
            </dd>
            <dd class="text-xs text-text-tertiary mt-0.5">软著与专利</dd>
          </dl>
        </div>

        <!-- 品牌理念 -->
        <div class="mt-14 pt-6 border-t border-[var(--color-border-light)]">
          <p
            class="text-base md:text-lg text-[var(--color-primary)] font-medium tracking-wide"
          >
            质量优秀 · 价格合理 · 服务高效 · 持续自主创新掌握核心技术
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
