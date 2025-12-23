<template>
  <div>
    <NavBar />
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

// Critical above-fold components
import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'

// Below-fold components - lazy load
const ProblemSection = defineAsyncComponent(() => import('../components/ProblemSection.vue'))
const SolutionSection = defineAsyncComponent(() => import('../components/SolutionSection.vue'))
const PricingSection = defineAsyncComponent(() => import('../components/PricingSection.vue'))
const FAQSection = defineAsyncComponent(() => import('../components/FAQSection.vue'))
const FinalCTASection = defineAsyncComponent(() => import('../components/FinalCTASection.vue'))
const FooterSection = defineAsyncComponent(() => import('../components/FooterSection.vue'))
</script>
