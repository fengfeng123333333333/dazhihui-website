<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useMeta } from "@/composables/useMeta.js";
import { useScrollReveal } from "@/composables/useScrollAnimate.js";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-vue-next";
import company from "@/data/company.json";

useMeta({
  title: "联系我们-深圳大智汇信息科技有限公司",
  description:
    "联系大智汇，获取智慧旅游票务系统、景区闸机、水上乐园管理系统等产品方案。电话：18211559425，地址：深圳市龙华区。",
});

const form = ref({ name: "", company: "", phone: "", email: "", message: "" });
const submitted = ref(false);
const submitting = ref(false);
const error = ref("");

// Web3Forms 免费额度 250次/月，注册即用：https://web3forms.com/
// 如需更换为 formspree 等服务，只需改 endpoint + access_key
const WEB3FORMS_KEY = "150ef076-3fd0-4f42-a005-9f4482be025b";

async function handleSubmit() {
  error.value = "";
  if (!form.value.name || !form.value.phone || !form.value.message) {
    error.value = "请填写必填项（姓名、电话、留言内容）";
    return;
  }
  if (WEB3FORMS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY") {
    error.value = "表单服务尚未配置，请联系网站管理员。";
    return;
  }
  submitting.value = true;
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `【官网咨询】${form.value.name} - ${form.value.company || "个人"}`,
        from_name: form.value.name,
        phone: form.value.phone,
        email: form.value.email,
        company: form.value.company,
        message: form.value.message,
      }),
    });
    if (!res.ok) throw new Error("提交失败");
    submitted.value = true;
  } catch (e) {
    error.value = "提交失败，请稍后重试或直接拨打电话 18211559425";
  } finally {
    submitting.value = false;
  }
}

useScrollReveal(".contact-card", { y: 30, stagger: 0.1 });

// ── 高德地图（免费 JS API 2.0） ──
// 去 https://lbs.amap.com/ 注册 → 应用管理 → 创建应用 → 获取 Key
const AMAP_KEY = "2bb401736bda95fc758437be6b5d61cf";
const mapLoaded = ref(false);

function loadAmapScript(key) {
  return new Promise((resolve, reject) => {
    if (window.AMap) return resolve();
    const script = document.createElement("script");
    script.src = `https://webapi.amap.com/maps?v=2.0&key=${key}`;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

onMounted(async () => {
  if (AMAP_KEY === "YOUR_AMAP_KEY") return;
  try {
    await loadAmapScript(AMAP_KEY);
    const el = document.getElementById("amap-container");
    if (!el || !window.AMap) return;
    const map = new AMap.Map(el, {
      zoom: 16,
      center: [114.035, 22.665], // 深圳市龙华区清湖金鼎盛科创园
      viewMode: "3D",
    });
    const marker = new AMap.Marker({
      position: [114.035, 22.665],
      title: "深圳大智汇信息科技有限公司",
    });
    map.add(marker);
    mapLoaded.value = true;
  } catch {
    // 地图加载失败，保持静态占位
  }
});
</script>

<template>
  <div class="min-h-screen pt-[var(--page-top-padding)] bg-[var(--color-bg)]">
    <!-- Hero -->
    <header class="py-section bg-[var(--color-bg-secondary)]">
      <div class="max-w-content mx-auto px-4 text-center">
        <h1
          class="text-h1 font-heading font-bold text-[var(--color-text-primary)] mb-4"
        >
          联系我们
        </h1>
        <p class="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
          获取专属方案 · 技术咨询 · 售后服务
        </p>
      </div>
    </header>

    <section class="py-section bg-[var(--color-bg)]">
      <div class="max-w-content mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <!-- Left: Contact Info + Form (60%) -->
          <div class="lg:col-span-3 space-y-8">
            <!-- Contact Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                class="contact-card bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card p-5 flex gap-3 items-start"
              >
                <Phone
                  class="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3
                    class="text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    联系电话
                  </h3>
                  <a
                    href="tel:18211559425"
                    class="text-sm text-[var(--color-primary)] hover:underline"
                    >{{ company.phone }}</a
                  >
                </div>
              </div>
              <div
                class="contact-card bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card p-5 flex gap-3 items-start"
              >
                <Mail
                  class="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3
                    class="text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    电子邮箱
                  </h3>
                  <a
                    :href="'mailto:' + company.email"
                    class="text-sm text-[var(--color-primary)] hover:underline break-all"
                    >{{ company.email }}</a
                  >
                </div>
              </div>
              <div
                class="contact-card bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card p-5 flex gap-3 items-start"
              >
                <MapPin
                  class="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3
                    class="text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    公司地址
                  </h3>
                  <p class="text-sm text-[var(--color-text-secondary)]">
                    {{ company.address }}
                  </p>
                </div>
              </div>
              <div
                class="contact-card bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card p-5 flex gap-3 items-start"
              >
                <Clock
                  class="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3
                    class="text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    工作时间
                  </h3>
                  <p class="text-sm text-[var(--color-text-secondary)]">
                    周一至周五 9:00-18:00
                  </p>
                </div>
              </div>
            </div>

            <!-- 服务承诺 -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                class="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card p-5"
              >
                <h3
                  class="font-heading font-semibold text-[var(--color-text-primary)] mb-2"
                >
                  🛡️ 售后与培训
                </h3>
                <ul
                  class="space-y-1.5 text-sm text-[var(--color-text-secondary)]"
                >
                  <li>· 免费远程安装、培训操作、咨询售后</li>
                  <li>· 工程安装实施、培训操作上门服务</li>
                  <li>· 售后服务覆盖全国各个城市</li>
                </ul>
              </div>
              <div
                class="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card p-5"
              >
                <h3
                  class="font-heading font-semibold text-[var(--color-text-primary)] mb-2"
                >
                  💬 7×24h 售后服务
                </h3>
                <ul
                  class="space-y-1.5 text-sm text-[var(--color-text-secondary)]"
                >
                  <li>· 100% 响应率，以"秒回复"为目标</li>
                  <li>· 每个问题积极跟进，直到完全解决</li>
                  <li>· 7×24 小时全天候技术支持</li>
                </ul>
              </div>
            </div>

            <!-- Form -->
            <div
              class="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card p-6"
            >
              <!-- Success -->
              <div v-if="submitted" class="text-center py-8">
                <CheckCircle
                  class="w-12 h-12 text-[var(--color-success)] mx-auto mb-4"
                />
                <h2
                  class="text-xl font-heading font-bold text-[var(--color-text-primary)] mb-2"
                >
                  提交成功
                </h2>
                <p class="text-sm text-[var(--color-text-secondary)]">
                  感谢您的留言，我们将尽快与您联系。
                </p>
              </div>

              <!-- Form -->
              <form v-else @submit.prevent="handleSubmit" class="space-y-4">
                <h2
                  class="text-xl font-heading font-bold text-[var(--color-text-primary)] mb-2"
                >
                  在线留言
                </h2>
                <p class="text-sm text-[var(--color-text-secondary)] mb-4">
                  留下联系方式，我们的解决方案专家将在24小时内与您联系
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      class="block text-sm font-medium text-[var(--color-text-primary)] mb-1"
                    >
                      姓名 <span class="text-[var(--color-error)]">*</span>
                    </label>
                    <input
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full px-3 py-2 border border-[var(--color-border)] rounded-btn text-sm bg-[var(--color-bg)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors"
                      placeholder="您的姓名"
                    />
                  </div>
                  <div>
                    <label
                      class="block text-sm font-medium text-[var(--color-text-primary)] mb-1"
                    >
                      公司名称
                    </label>
                    <input
                      v-model="form.company"
                      type="text"
                      class="w-full px-3 py-2 border border-[var(--color-border)] rounded-btn text-sm bg-[var(--color-bg)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors"
                      placeholder="您的公司（选填）"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      class="block text-sm font-medium text-[var(--color-text-primary)] mb-1"
                    >
                      联系电话 <span class="text-[var(--color-error)]">*</span>
                    </label>
                    <input
                      v-model="form.phone"
                      type="tel"
                      required
                      class="w-full px-3 py-2 border border-[var(--color-border)] rounded-btn text-sm bg-[var(--color-bg)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors"
                      placeholder="您的手机号"
                    />
                  </div>
                  <div>
                    <label
                      class="block text-sm font-medium text-[var(--color-text-primary)] mb-1"
                    >
                      邮箱
                    </label>
                    <input
                      v-model="form.email"
                      type="email"
                      class="w-full px-3 py-2 border border-[var(--color-border)] rounded-btn text-sm bg-[var(--color-bg)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors"
                      placeholder="your@email.com（选填）"
                    />
                  </div>
                </div>

                <div>
                  <label
                    class="block text-sm font-medium text-[var(--color-text-primary)] mb-1"
                  >
                    留言内容 <span class="text-[var(--color-error)]">*</span>
                  </label>
                  <textarea
                    v-model="form.message"
                    rows="4"
                    required
                    class="w-full px-3 py-2 border border-[var(--color-border)] rounded-btn text-sm bg-[var(--color-bg)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors resize-none"
                    placeholder="请描述您的需求，例如：景区规模、所需功能模块、预算范围等"
                  />
                </div>

                <!-- Error -->
                <div
                  v-if="error"
                  class="flex items-center gap-2 text-sm text-[var(--color-error)] bg-[var(--color-error)]/5 rounded-btn px-3 py-2"
                >
                  <AlertCircle class="w-4 h-4 flex-shrink-0" />
                  {{ error }}
                </div>

                <button
                  type="submit"
                  :disabled="submitting"
                  class="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <span
                    v-if="submitting"
                    class="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
                  />
                  <Send v-else class="w-4 h-4" />
                  {{ submitting ? "提交中..." : "提交留言" }}
                </button>
              </form>
            </div>
          </div>

          <!-- Right: Map (40%) -->
          <div class="lg:col-span-2">
            <div
              class="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card overflow-hidden h-full min-h-[400px] relative"
            >
              <!-- 高德地图 -->
              <div id="amap-container" class="absolute inset-0" />
              <!-- Key 未配置时显示占位 -->
              <div
                class="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
              >
                <MapPin
                  class="w-10 h-10 text-[var(--color-text-tertiary)] mb-3"
                />
                <p
                  class="text-sm text-[var(--color-text-secondary)] mb-1 font-medium"
                >
                  深圳大智汇信息科技有限公司
                </p>
                <p class="text-xs text-[var(--color-text-tertiary)] mb-4">
                  {{ company.address }}
                </p>
                <p
                  v-if="!mapLoaded"
                  class="text-xs text-[var(--color-text-tertiary)] border border-dashed border-[var(--color-border)] rounded-btn px-3 py-2"
                >
                  地图加载中…
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
