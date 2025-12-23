<template>
  <section id="solution" ref="sectionRef" class="solution-section">
    <div class="sticky-container">
      <div class="container">
        <p ref="nowWithRef" class="now-with">With Neptis</p>
        <h2 ref="titleRef" class="solution-title">Actually learn.</h2>

        <div ref="showcaseRef" class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </div>
            <h3>Expert-Designed Curriculum</h3>
            <p>Every lesson follows proven pedagogy. Quality-reviewed content that builds systematically.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <h3>Grammar Explained</h3>
            <p>Visual explanations that make complex rules clear. Understand why, not just what.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 20h9"/>
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
              </svg>
            </div>
            <h3>CEFR-Aligned</h3>
            <p>From A1 to B2, mapped to official proficiency descriptors. Know exactly where you stand.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              </svg>
            </div>
            <h3>Quality Audio</h3>
            <p>Professional pronunciation from native speakers. Hear how it's really spoken.</p>
          </div>
        </div>

        <div ref="kickerRef" class="kicker">
          <p>No lives. No leaderboards. No guilt.</p>
          <p class="emphasis">Just learning that works.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { animate, inView, stagger } from 'motion'

const sectionRef = ref(null)
const nowWithRef = ref(null)
const titleRef = ref(null)
const showcaseRef = ref(null)
const kickerRef = ref(null)

let stopInView = null

onMounted(() => {
  nowWithRef.value.style.opacity = '0'
  nowWithRef.value.style.transform = 'translateY(20px)'
  titleRef.value.style.opacity = '0'
  titleRef.value.style.transform = 'translateY(30px)'
  showcaseRef.value.style.opacity = '0'
  showcaseRef.value.style.transform = 'translateY(40px)'
  kickerRef.value.style.opacity = '0'
  kickerRef.value.style.transform = 'translateY(20px)'

  stopInView = inView(sectionRef.value, () => {
    animate(nowWithRef.value, {
      opacity: 1,
      transform: 'translateY(0px)'
    }, { duration: 0.6, easing: [0.22, 1, 0.36, 1] })

    animate(titleRef.value, {
      opacity: 1,
      transform: 'translateY(0px)'
    }, { duration: 0.8, delay: 0.2, easing: [0.22, 1, 0.36, 1] })

    animate(showcaseRef.value, {
      opacity: 1,
      transform: 'translateY(0px)'
    }, { duration: 0.8, delay: 0.3, easing: [0.22, 1, 0.36, 1] })

    animate(kickerRef.value, {
      opacity: 1,
      transform: 'translateY(0px)'
    }, { duration: 0.6, delay: 0.6, easing: [0.22, 1, 0.36, 1] })
  }, { margin: '-25% 0px' })
})

onUnmounted(() => {
  stopInView?.()
})
</script>

<style scoped>
.solution-section {
  background-color: var(--color-text-primary);
  color: white;
  padding: 100px 24px;
}

.sticky-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sticky-container .container {
  width: 100%;
}

.now-with {
  text-align: center;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
  font-weight: 400;
}

.solution-title {
  text-align: center;
  font-size: clamp(36px, 5vw, 48px);
  color: white;
  margin-bottom: var(--space-3xl);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
  max-width: 1100px;
  margin: 0 auto;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  text-align: center;
  transition: all var(--transition-normal);
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-4px);
}

.feature-icon {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-lg);
}

.feature-icon svg {
  width: 28px;
  height: 28px;
  color: white;
}

.feature-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin-bottom: var(--space-sm);
}

.feature-card p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.kicker {
  text-align: center;
  margin-top: var(--space-3xl);
  padding-top: var(--space-xl);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.kicker p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
}

.kicker .emphasis {
  font-size: 28px;
  font-weight: 600;
  color: white;
  font-family: var(--font-display);
}

@media (max-width: 1024px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .solution-section {
    padding: 60px 16px;
  }

  .feature-grid {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }

  .feature-card {
    padding: var(--space-lg);
  }

  .kicker .emphasis {
    font-size: 22px;
  }
}
</style>
