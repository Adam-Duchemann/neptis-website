<template>
  <section id="faq" class="faq-section">
    <div class="sticky-container">
      <div class="container">
        <div class="section-title">
          <h2>Frequently asked questions</h2>
        </div>

        <div class="faq-columns">
          <!-- Left Column -->
          <div class="faq-column">
            <div
              v-for="(item, index) in leftItems"
              :key="item.originalIndex"
              class="faq-item"
              :class="{ 'is-open': openIndices.includes(item.originalIndex) }"
            >
              <button class="faq-question" @click="toggle(item.originalIndex)">
                <span>{{ item.question }}</span>
                <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6,9 12,15 18,9"/>
                </svg>
              </button>
              <div class="faq-answer">
                <div class="faq-answer-inner">
                  <p>{{ item.answer }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="faq-column">
            <div
              v-for="(item, index) in rightItems"
              :key="item.originalIndex"
              class="faq-item"
              :class="{ 'is-open': openIndices.includes(item.originalIndex) }"
            >
              <button class="faq-question" @click="toggle(item.originalIndex)">
                <span>{{ item.question }}</span>
                <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6,9 12,15 18,9"/>
                </svg>
              </button>
              <div class="faq-answer">
                <div class="faq-answer-inner">
                  <p>{{ item.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const openIndices = ref([0])
const isMobile = ref(false)

const faqItems = [
  {
    question: 'How is Neptis different from Duolingo?',
    answer: 'Neptis focuses on real curriculum over gamification. Where Duolingo optimizes for daily engagement with streaks and XP, we optimize for actual learning with expert-designed lessons, proper grammar explanations, and structured progression based on the CEFR framework.'
  },
  {
    question: 'What languages are available?',
    answer: 'Currently we offer Slovak, French, Polish, and European Portuguese — all at A1 level. We\'re continuously expanding our language offerings. Subscribers get access to all new languages as they\'re added.'
  },
  {
    question: 'What does CEFR-aligned mean?',
    answer: 'CEFR (Common European Framework of Reference) is the international standard for language proficiency. Our curriculum is mapped to official CEFR descriptors, so you know exactly what level you\'re at and what you can do at each stage.'
  },
  {
    question: 'Is there a mobile app?',
    answer: 'Yes! Neptis works on web, iOS, and Android. Your progress syncs across all devices, and premium subscribers get offline access for learning anywhere.'
  },
  {
    question: 'How long does it take to complete a level?',
    answer: 'A typical A1 level takes 2-3 months with consistent practice of 20-30 minutes daily. We don\'t promise "fluency in 30 days" because real learning takes time. Our curriculum is honest about what it takes.'
  },
  {
    question: 'Can I try before I subscribe?',
    answer: 'Absolutely. The free tier gives you access to A1 level content for one language, forever. You can also start a 7-day free trial of premium features with no credit card required.'
  },
  {
    question: 'What\'s included in the grammar lessons?',
    answer: 'Each grammar topic includes visual explanations, example sentences, practice exercises, and audio. We don\'t just show you rules — we help you understand why the language works the way it does.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. Monthly subscribers can cancel anytime and keep access until the end of their billing period. Lifetime purchases are one-time and include all future updates.'
  }
]

const leftItems = computed(() => faqItems.map((item, index) => ({ ...item, originalIndex: index })).filter((_, index) => index % 2 === 0))
const rightItems = computed(() => faqItems.map((item, index) => ({ ...item, originalIndex: index })).filter((_, index) => index % 2 !== 0))

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

const toggle = (index) => {
  const isOpen = openIndices.value.includes(index)
  const isLeftColumn = index % 2 === 0

  if (isMobile.value) {
    if (isOpen) {
      openIndices.value = []
    } else {
      openIndices.value = [index]
    }
  } else {
    const otherColumnIndices = openIndices.value.filter(i => (i % 2 === 0) !== isLeftColumn)

    if (isOpen) {
      openIndices.value = [...otherColumnIndices]
    } else {
      openIndices.value = [...otherColumnIndices, index]
    }
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.faq-section {
  background-color: var(--color-bg-page);
  padding: 100px 24px;
}

.sticky-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-title {
  text-align: center;
  margin-bottom: var(--space-3xl);
}

.section-title h2 {
  font-size: clamp(28px, 4vw, 36px);
}

.faq-columns {
  display: flex;
  gap: var(--space-lg);
  align-items: flex-start;
  max-width: 1000px;
  margin: 0 auto;
}

.faq-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.faq-item {
  background-color: var(--color-bg-elevated);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: border-color var(--transition-fast);
}

.faq-item:hover {
  border-color: var(--color-border);
}

.faq-item.is-open {
  border-color: var(--color-primary-muted);
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-lg);
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text-primary);
  transition: color var(--transition-fast);
}

.faq-item.is-open .faq-question {
  color: var(--color-primary);
}

.faq-chevron {
  width: 20px;
  height: 20px;
  color: var(--color-text-muted);
  flex-shrink: 0;
  transition: transform var(--transition-fast);
}

.faq-item.is-open .faq-chevron {
  transform: rotate(180deg);
  color: var(--color-primary);
}

.faq-answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}

.faq-item.is-open .faq-answer {
  grid-template-rows: 1fr;
}

.faq-answer-inner {
  overflow: hidden;
  padding: 0 var(--space-lg);
}

.faq-item.is-open .faq-answer-inner {
  padding-bottom: var(--space-lg);
}

.faq-answer p {
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin: 0;
}

@media (max-width: 768px) {
  .faq-section {
    padding: 60px 16px;
  }

  .faq-columns {
    flex-direction: column;
  }

  .faq-question {
    padding: var(--space-md);
    font-size: 14px;
  }

  .faq-answer-inner {
    padding: 0 var(--space-md);
  }

  .faq-item.is-open .faq-answer-inner {
    padding-bottom: var(--space-md);
  }
}
</style>
