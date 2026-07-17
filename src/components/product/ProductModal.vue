<script setup>
import { X } from "lucide-vue-next";

const props = defineProps({
  product: { type: Object, required: true },
  visible: { type: Boolean, default: false },
});
const emit = defineEmits(["close"]);

const iconMap = {
  Ticket: "🎫",
  Globe: "🌐",
  Smartphone: "📱",
  Shield: "🛡️",
  BarChart: "📊",
  Users: "👥",
  Lock: "🔒",
  Watch: "⌚",
  Megaphone: "📣",
  Clock: "⏱️",
  ShoppingCart: "🛒",
  Gift: "🎁",
  FileText: "📄",
  CreditCard: "💳",
  Calendar: "📅",
  Monitor: "🖥️",
  DollarSign: "💰",
  Anchor: "⚓",
  Map: "🗺️",
  Home: "🏠",
  Package: "📦",
  UserCheck: "✅",
  BookOpen: "📖",
  Trophy: "🏆",
  Zap: "⚡",
  Video: "📹",
  Scan: "📷",
};
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="visible"
        class="fixed inset-0 z-[100] flex items-start justify-center pt-20 pb-10 px-4 overflow-y-auto"
        @click.self="emit('close')"
      >
        <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <div
          class="relative bg-[var(--color-bg)] rounded-xl max-w-2xl w-full shadow-xl"
        >
          <button
            class="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-border)] transition-colors"
            @click="emit('close')"
          >
            <X :size="18" />
          </button>

          <!-- Product image -->
          <div
            class="flex items-center justify-center rounded-t-xl bg-[var(--color-bg-tertiary)] p-6"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="max-w-full max-h-full object-contain"
            />
          </div>

          <div class="p-6 md:p-8">
            <h2 class="text-h2 font-heading font-bold text-text-primary mb-1">
              {{ product.name }}
            </h2>
            <p class="text-text-secondary mb-6">{{ product.subtitle }}</p>

            <!-- Description -->
            <p class="text-text-secondary leading-relaxed mb-8">
              {{ product.desc }}
            </p>

            <!-- Features -->
            <h3 class="font-heading font-semibold text-text-primary mb-4">
              核心功能
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div
                v-for="f in product.features"
                :key="f.text"
                class="flex gap-3 p-3 rounded-card bg-[var(--color-bg-secondary)]"
              >
                <span class="text-lg flex-shrink-0">{{
                  iconMap[f.icon] || "•"
                }}</span>
                <p class="text-sm text-text-secondary leading-relaxed">
                  {{ f.text }}
                </p>
              </div>
            </div>

            <!-- Specs -->
            <h3 class="font-heading font-semibold text-text-primary mb-4">
              技术规格
            </h3>
            <div
              class="overflow-hidden rounded-card border border-[var(--color-border-light)] mb-8"
            >
              <table class="w-full text-sm">
                <tbody>
                  <tr
                    v-for="s in product.specs"
                    :key="s.label"
                    class="border-b border-[var(--color-border-light)] last:border-0"
                  >
                    <td
                      class="py-2.5 px-4 font-medium text-text-primary bg-[var(--color-bg-secondary)] w-1/3"
                    >
                      {{ s.label }}
                    </td>
                    <td class="py-2.5 px-4 text-text-secondary">
                      {{ s.value }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Scenarios -->
            <h3 class="font-heading font-semibold text-text-primary mb-4">
              适用场景
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              <div
                v-for="s in product.scenarios"
                :key="s.name"
                class="p-4 rounded-card border border-[var(--color-border-light)]"
              >
                <h4 class="font-medium text-text-primary text-sm mb-1">
                  {{ s.name }}
                </h4>
                <p class="text-xs text-text-secondary leading-relaxed">
                  {{ s.desc }}
                </p>
              </div>
            </div>

            <!-- CTA -->
            <div
              class="flex gap-3 pt-4 border-t border-[var(--color-border-light)]"
            >
              <router-link
                to="/contact"
                class="btn-primary text-sm"
                @click="emit('close')"
                >获取报价</router-link
              >
              <router-link
                to="/cases"
                class="btn-secondary text-sm"
                @click="emit('close')"
                >查看案例</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.modal-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 1, 1);
}
.modal-enter-from {
  opacity: 0;
}
.modal-enter-from > div:last-child {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}
.modal-leave-to {
  opacity: 0;
}
.modal-leave-to > div:last-child {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}
.modal-enter-active > div:last-child {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.modal-leave-active > div:last-child {
  transition: all 0.2s cubic-bezier(0.4, 0, 1, 1);
}
</style>
