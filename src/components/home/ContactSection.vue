<script setup>
import company from "@/data/company.json";
</script>

<template>
  <section class="py-section bg-[var(--color-bg)]">
    <div class="max-w-content mx-auto px-4">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-h2 font-heading font-bold text-text-primary mb-4">
          联系我们
        </h2>
        <p class="text-text-secondary mb-8">
          获取专属智慧旅游解决方案，14年经验团队为您服务
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div
            class="p-5 border border-[var(--color-border-light)] rounded-card"
          >
            <div class="text-2xl mb-2">📞</div>
            <h4 class="font-medium text-text-primary mb-1">服务热线</h4>
            <p class="text-sm text-[var(--color-primary)] font-medium">
              {{ company.phone }}
            </p>
          </div>
          <div
            class="p-5 border border-[var(--color-border-light)] rounded-card"
          >
            <div class="text-2xl mb-2">📍</div>
            <h4 class="font-medium text-text-primary mb-1">公司地址</h4>
            <p class="text-sm text-text-secondary">{{ company.address }}</p>
          </div>
          <div
            class="p-5 border border-[var(--color-border-light)] rounded-card"
          >
            <div class="text-2xl mb-2">✉️</div>
            <h4 class="font-medium text-text-primary mb-1">电子邮箱</h4>
            <p class="text-sm text-[var(--color-primary)] font-medium">
              {{ company.email }}
            </p>
          </div>
        </div>

        <router-link to="/contact" class="btn-primary"> 立即咨询 </router-link>
      </div>
    </div>
  </section>
</template>
