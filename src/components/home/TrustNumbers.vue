<script setup>
import { useScrollReveal } from "@/composables/useScrollAnimate.js";
import { Shield, Users, Clock, Lightbulb } from "lucide-vue-next";
import company from "@/data/company.json";

useScrollReveal(".trust-card", { y: 30, stagger: 0.1 });

const advantages = [
  {
    icon: Clock,
    title: `${company.stats.yearsOfExperience}年行业经验`,
    desc: "2012年成立，深耕文旅文体领域，对行业需求理解深刻",
  },
  {
    icon: Shield,
    title: "国家高新技术企业",
    desc: `拥有${company.stats.patents}项发明专利、${company.stats.softwareCopyrights}项软件著作权`,
  },
  {
    icon: Users,
    title: `${company.stats.totalCustomers.toLocaleString()}+客户案例`,
    desc: "遍布全国及世界各地，涵盖景区、乐园、博物馆、体育场馆",
  },
  {
    icon: Lightbulb,
    title: "自主研发源头厂家",
    desc: `软件${company.stats.softwareProducts}+项、硬件${company.stats.hardwareProducts}+种类，掌握核心技术`,
  },
];
</script>

<template>
  <section class="py-section bg-[var(--color-bg)]">
    <div class="max-w-content mx-auto px-4">
      <h2
        class="text-h2 font-heading font-bold text-text-primary text-center mb-4"
      >
        为什么选择大智汇
      </h2>
      <p class="text-text-secondary text-center max-w-lg mx-auto mb-12">
        14年专注一件事——让文旅和文体行业的管理运营更智能、更简单
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="item in advantages"
          :key="item.title"
          class="trust-card bg-[var(--card-bg)] border border-[var(--card-border)] rounded-card p-6 transition-shadow duration-300 hover:shadow-card-hover"
        >
          <component
            :is="item.icon"
            :size="28"
            class="text-[var(--color-primary)] mb-4"
          />
          <h3 class="font-heading font-semibold text-text-primary mb-2">
            {{ item.title }}
          </h3>
          <p class="text-sm text-text-secondary leading-relaxed">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
