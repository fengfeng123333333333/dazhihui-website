<script setup>
import { ref } from "vue";
import { useMeta } from "@/composables/useMeta.js";
import { useScrollReveal } from "@/composables/useScrollAnimate.js";
import {
  ArrowRight,
  Award,
  Building,
  MapPin,
  Phone,
  Mail,
} from "lucide-vue-next";
import company from "@/data/company.json";

useMeta({
  title: "关于我们-深圳大智汇信息科技有限公司",
  description:
    "深圳大智汇信息科技有限公司，2012年成立，国家高新技术企业，专注智慧文旅和智慧文体领域14年。自主研发软件50+项、硬件30+种，服务客户10000+。",
});

const milestones = [
  {
    year: "2012",
    title: "公司成立",
    desc: "深圳大智汇信息科技有限公司正式成立运营，专注文旅文体领域产品研发",
  },
  {
    year: "2019",
    title: "工程技术研究中心成立",
    desc: "广东省高校大数据处理与分析工程技术研究中心成立",
  },
  {
    year: "2020",
    title: "技术突破",
    desc: "被选入国家高新企业培育库；获发明专利1项；获深圳市企业发展资金资助",
  },
  {
    year: "2022",
    title: "国家高新技术企业",
    desc: "荣获国家高新技术企业认证；获发明专利3项；软件著作权累计16项",
  },
  {
    year: "至今",
    title: "持续创新",
    desc: `累计服务客户${company.stats.totalCustomers.toLocaleString()}+，软件产品${company.stats.softwareProducts}+项，硬件产品${company.stats.hardwareProducts}+种`,
  },
];

const stats = [
  { value: company.stats.yearsOfExperience, unit: "年", label: "行业深耕" },
  { value: "国家", unit: "级", label: "高新技术企业" },
  {
    value: company.stats.totalCustomers.toLocaleString() + "+",
    unit: "",
    label: "服务客户",
  },
  { value: company.stats.patents, unit: "项", label: "发明专利" },
];

const honors = [
  { name: "国家高新技术企业", year: "2022" },
  { name: "创新型中小企业", year: "2023-2026" },
  { name: "发明专利", year: "4项" },
  { name: "实用新型专利", year: "3项" },
  { name: "软件著作权", year: "16项" },
  { name: "国家检测机构认证", year: "3项" },
];

useScrollReveal(".stat-card", { y: 30, stagger: 0.1 });
useScrollReveal(".timeline-item", { y: 30, stagger: 0.15 });
const lightboxSrc = ref("");

const certImages = [
  { src: "/rongyu/高新技术企业.jpg", name: "高新技术企业" },
  { src: "/rongyu/创新型中小企业.jpg", name: "创新型中小企业" },
  { src: "/rongyu/企业荣誉.jpg", name: "企业荣誉" },
  { src: "/rongyu/专利1.jpg", name: "专利证书" },
  { src: "/rongyu/专利2.jpg", name: "专利证书" },
];

useScrollReveal(".honor-card", { y: 20, stagger: 0.08 });
</script>

<template>
  <div class="min-h-screen pt-[var(--page-top-padding)] bg-[var(--color-bg)]">
    <!-- Hero -->
    <header class="py-section bg-[var(--color-bg-secondary)]">
      <div class="max-w-content mx-auto px-4 text-center">
        <h1
          class="text-h1 font-heading font-bold text-[var(--color-text-primary)] mb-4"
        >
          关于大智汇
        </h1>
        <p class="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
          {{ company.tagline }} · 让管理更轻松
        </p>
      </div>
    </header>

    <!-- Company Intro + Stats -->
    <section class="py-section bg-[var(--color-bg)]">
      <div class="max-w-content mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <p class="text-[var(--color-text-secondary)] leading-relaxed">
            {{ company.name }}于{{
              company.foundedYear
            }}年正式成立运营，专注文旅和文体领域产品的研发{{
              company.stats.yearsOfExperience
            }}年，是一家立足于云平台大数据应用的研发型国家级高新技术企业、创新型企业。公司集研发、销售及服务于一体，总部位于被誉为中国"硅谷"之称的深圳市。我们始终坚持自主创新，掌握核心技术。经过十多年的发展，成功研发了软件产品超过{{
              company.stats.softwareProducts
            }}项、硬件产品超过{{
              company.stats.hardwareProducts
            }}个种类，成功案例超过{{
              company.stats.totalCustomers.toLocaleString()
            }}家，遍布全国以及世界各地。
          </p>
        </div>

        <!-- Stats -->
        <dl class="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div
            v-for="(stat, i) in stats"
            :key="i"
            class="stat-card bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card p-6 text-center"
          >
            <dt
              class="text-3xl font-heading font-bold text-[var(--color-primary)] mb-1"
            >
              {{ stat.value }}<span class="text-lg">{{ stat.unit }}</span>
            </dt>
            <dd class="text-sm text-[var(--color-text-secondary)]">
              {{ stat.label }}
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Timeline -->
    <section class="py-section bg-[var(--color-bg-secondary)]">
      <div class="max-w-content mx-auto px-4">
        <h2
          class="text-h2 font-heading font-bold text-[var(--color-text-primary)] text-center mb-12"
        >
          发展历程
        </h2>
        <div class="max-w-2xl mx-auto relative">
          <!-- Vertical line -->
          <div
            class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-border)] -translate-x-1/2"
          />
          <div
            v-for="(m, i) in milestones"
            :key="m.year"
            class="timeline-item relative flex flex-col md:flex-row gap-6 mb-10 last:mb-0"
            :class="i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
          >
            <!-- Dot -->
            <div
              class="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[var(--color-primary)] border-2 border-[var(--color-bg-secondary)] -translate-x-1/2 z-10"
            />
            <!-- Content -->
            <div
              class="ml-10 md:ml-0 md:w-1/2"
              :class="i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'"
            >
              <span class="text-sm font-bold text-[var(--color-primary)]">{{
                m.year
              }}</span>
              <h3
                class="font-heading font-semibold text-[var(--color-text-primary)] mt-1"
              >
                {{ m.title }}
              </h3>
              <p class="text-sm text-[var(--color-text-secondary)] mt-1">
                {{ m.desc }}
              </p>
            </div>
            <!-- Spacer for alternating -->
            <div class="hidden md:block md:w-1/2" />
          </div>
        </div>
      </div>
    </section>

    <!-- Honors -->
    <section class="py-section bg-[var(--color-bg)]">
      <div class="max-w-content mx-auto px-4">
        <h2
          class="text-h2 font-heading font-bold text-[var(--color-text-primary)] text-center mb-4"
        >
          资质荣誉
        </h2>
        <p
          class="text-[var(--color-text-secondary)] text-center max-w-lg mx-auto mb-12"
        >
          核心资质：{{ company.stats.patents }}项发明专利 ·
          {{ company.stats.softwareCopyrights }}项软件著作权 · 3项国家检测认证
        </p>
        <div
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto"
        >
          <div
            v-for="h in honors"
            :key="h.name"
            class="honor-card relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card p-4 text-center hover:shadow-card-hover transition-all duration-300"
          >
            <Award class="w-8 h-8 text-[var(--color-primary)] mx-auto mb-2" />
            <h3 class="text-xs font-medium text-[var(--color-text-primary)]">
              {{ h.name }}
            </h3>
            <p class="text-xs text-[var(--color-text-tertiary)] mt-1">
              {{ h.year }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 荣誉证书 -->
    <section class="py-section bg-[var(--color-bg)]">
      <div class="max-w-content mx-auto px-4">
        <h2
          class="text-h2 font-heading font-bold text-[var(--color-text-primary)] text-center mb-4"
        >
          荣誉证书
        </h2>
        <p
          class="text-[var(--color-text-secondary)] text-center max-w-lg mx-auto mb-10"
        >
          国家高新技术企业 · 创新型中小企业 · 多项专利认证
        </p>
        <div
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
        >
          <div
            v-for="img in certImages"
            :key="img.name"
            class="aspect-[3/4] overflow-hidden rounded-card bg-[var(--color-bg-tertiary)] cursor-zoom-in group"
            @click="lightboxSrc = img.src"
          >
            <img
              :src="img.src"
              :alt="img.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Team (placeholder) -->
    <section class="py-section bg-[var(--color-bg-secondary)]">
      <div class="max-w-content mx-auto px-4 text-center">
        <h2
          class="text-h2 font-heading font-bold text-[var(--color-text-primary)] mb-4"
        >
          团队介绍
        </h2>
        <p class="text-[var(--color-text-secondary)] max-w-lg mx-auto mb-8">
          公司总部位于深圳，团队规模100+人，涵盖研发、销售、技术支持、售后服务等专业团队。
        </p>
        <div
          class="flex items-center justify-center gap-2 text-sm text-[var(--color-text-tertiary)]"
        >
          <Building class="w-4 h-4" />
          <span>核心团队信息待补充</span>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-[var(--color-primary)]">
      <div class="max-w-content mx-auto px-4 text-center">
        <h2
          class="text-h2 font-heading font-bold text-[var(--color-text-inverse)] mb-4"
        >
          加入我们，一起创造未来
        </h2>
        <p class="text-white mb-8 max-w-md mx-auto">
          {{ company.stats.yearsOfExperience }}年深耕 ·
          {{ company.stats.totalCustomers.toLocaleString() }}+客户 ·
          国家级高新技术企业
        </p>
        <router-link
          to="/contact"
          class="inline-flex items-center px-8 py-3 bg-[var(--color-text-inverse)] text-[var(--color-primary)] rounded-btn font-medium min-h-touch hover:opacity-90 transition-opacity"
        >
          联系我们
          <ArrowRight class="w-4 h-4 ml-2" />
        </router-link>
      </div>
    </section>
  </div>

  <!-- Lightbox -->
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="lightboxSrc"
        class="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
        @click="lightboxSrc = ''"
      >
        <img
          :src="lightboxSrc"
          class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
          @click.stop
        />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active {
  transition: opacity 0.2s ease-out;
}
.fade-leave-active {
  transition: opacity 0.15s ease-in;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
