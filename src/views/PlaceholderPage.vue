<template>
  <div
    class="min-h-screen pt-[var(--page-top-padding)] px-4 bg-[var(--color-bg)]"
  >
    <div class="max-w-content mx-auto text-center py-20">
      <h1 class="text-h1 font-heading font-bold text-text-primary mb-4">
        {{ page }}
      </h1>
      <p class="text-text-secondary">页面开发中...</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  page: String,
});
</script>
