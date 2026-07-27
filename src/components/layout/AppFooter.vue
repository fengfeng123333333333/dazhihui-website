<script setup>
import company from "@/data/company.json";
</script>

<template>
  <footer class="bg-[var(--footer-bg)] text-[var(--footer-text)] py-16">
    <div class="max-w-content mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div>
          <img
            src="/logo.png"
            alt="大智汇"
            class="h-8 object-contain mb-3 brightness-0 invert"
          />
          <p class="text-sm leading-relaxed">
            {{ company.stats.yearsOfExperience }}年深耕 ·
            {{ company.stats.totalCustomers.toLocaleString() }}+客户 ·
            国家高新技术企业
          </p>
        </div>
        <!-- Products -->
        <div>
          <h5 class="text-[var(--color-text-inverse)] font-medium mb-3">
            产品
          </h5>
          <ul class="space-y-2 text-sm">
            <li>
              <router-link
                to="/products"
                class="hover:text-[var(--footer-link)] transition-colors"
                >软件产品</router-link
              >
            </li>
            <li>
              <router-link
                to="/products"
                class="hover:text-[var(--footer-link)] transition-colors"
                >硬件产品</router-link
              >
            </li>
          </ul>
        </div>
        <!-- Solutions -->
        <div>
          <h5 class="text-[var(--color-text-inverse)] font-medium mb-3">
            解决方案
          </h5>
          <ul class="space-y-2 text-sm">
            <li>
              <router-link
                to="/solutions/scenic"
                class="hover:text-[var(--footer-link)] transition-colors"
                >智慧景区</router-link
              >
            </li>
            <li>
              <router-link
                to="/solutions/theme-park"
                class="hover:text-[var(--footer-link)] transition-colors"
                >儿童乐园</router-link
              >
            </li>
            <li>
              <router-link
                to="/solutions/museum"
                class="hover:text-[var(--footer-link)] transition-colors"
                >博物馆预约</router-link
              >
            </li>
            <li>
              <router-link
                to="/solutions/stadium-theater"
                class="hover:text-[var(--footer-link)] transition-colors"
                >体育馆/剧院</router-link
              >
            </li>
          </ul>
        </div>
        <!-- Contact -->
        <div>
          <h5 class="text-[var(--color-text-inverse)] font-medium mb-3">
            联系
          </h5>
          <ul class="space-y-2 text-sm">
            <li>📞 15986812063&nbsp;13246678606&nbsp;15817218178</li>
            <li>📞 15817232978&nbsp;18319068636</li>
            <li>📍 {{ company.address }}</li>
          </ul>
        </div>
      </div>
      <div
        class="mt-12 pt-6 border-t border-[var(--color-neutral-700)] text-sm text-center"
      >
        <p class="mb-2">
          © {{ new Date().getFullYear() }} {{ company.name }}. All rights
          reserved.
        </p>
        <p>
          <a
            href="https://beian.miit.gov.cn"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-[var(--footer-link)] transition-colors"
          >
            湘ICP备2026029253号-1
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.text-sm {
  font-size: 0.775rem;
}
</style>
