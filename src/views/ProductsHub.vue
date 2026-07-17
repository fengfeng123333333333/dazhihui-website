<template>
  <div class="min-h-screen pt-[var(--page-top-padding)] bg-[var(--color-bg)]">
    <div class="max-w-content mx-auto px-4 py-20">
      <h1
        class="text-h1 font-heading font-bold text-text-primary text-center mb-4"
      >
        产品中心
      </h1>
      <p class="text-text-secondary text-center max-w-lg mx-auto mb-16">
        14年自主研发 · 软硬件一体化 · 覆盖文旅文体全场景
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <router-link
          to="/products/software"
          class="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card p-10 text-center transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
        >
          <div class="text-5xl mb-4">💻</div>
          <h2
            class="text-h2 font-heading font-bold text-text-primary mb-3 group-hover:text-[var(--color-primary)] transition-colors"
          >
            软件产品
          </h2>
          <p class="text-text-secondary mb-6">
            景区票务 · 水上乐园 · 一卡通<br />蹦床公园 · 博物馆预约
          </p>
          <span class="text-[var(--color-primary)] font-medium"
            >查看全部软件产品 →</span
          >
        </router-link>
        <router-link
          to="/products/hardware"
          class="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card p-10 text-center transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
        >
          <div class="text-5xl mb-4">🖥️</div>
          <h2
            class="text-h2 font-heading font-bold text-text-primary mb-3 group-hover:text-[var(--color-primary)] transition-colors"
          >
            硬件设备
          </h2>
          <p class="text-text-secondary mb-6">
            智能闸机 · 自助终端<br />人脸识别 · 消费机
          </p>
          <span class="text-[var(--color-primary)] font-medium"
            >查看全部硬件设备 →</span
          >
        </router-link>
      </div>
    </div>
  </div>
</template>
