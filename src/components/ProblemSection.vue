<template>
  <section id="problem" ref="sectionRef" class="problem-section">
    <div class="sticky-container">
      <div class="container">
        <div class="problem-grid">
          <!-- Left: Narrative -->
          <div ref="contentRef" class="problem-content">
            <h2 class="problem-title">
              "500 days on Duolingo and
              <br />
              <span class="highlight">I still can't speak"</span>
            </h2>

            <div class="problem-text">
              <p>
                You've tried the apps. You've kept your streak. You've earned your badges. But when someone speaks to you in the language...
              </p>
            </div>

            <h3 class="problem-subtitle">
              <span class="highlight">Sound familiar?</span>
            </h3>
          </div>

          <!-- Right: Pain points visual -->
          <div ref="visualRef" class="pain-visual">
            <div ref="pain1" class="pain-card pain-1">
              <div class="pain-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 15s1.5-2 4-2 4 2 4 2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
              </div>
              <div class="pain-text">
                <strong>Random words, no structure</strong>
                <span>"I know 'apple' in 5 languages but can't order food"</span>
              </div>
            </div>

            <div ref="pain2" class="pain-card pain-2">
              <div class="pain-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v20M2 12h20"/>
                </svg>
              </div>
              <div class="pain-text">
                <strong>Grammar? What grammar?</strong>
                <span>"The app just shows me sentences to repeat"</span>
              </div>
            </div>

            <div ref="pain3" class="pain-card pain-3">
              <div class="pain-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <div class="pain-text">
                <strong>Streaks over substance</strong>
                <span>"I feel guilty if I miss a day, not smarter if I play"</span>
              </div>
            </div>

            <div ref="xmarkRef" class="x-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M15 9l-6 6M9 9l6 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { animate, inView } from 'motion'

const sectionRef = ref(null)
const contentRef = ref(null)
const visualRef = ref(null)
const pain1 = ref(null)
const pain2 = ref(null)
const pain3 = ref(null)
const xmarkRef = ref(null)

let stopInView1, stopInView2
let floatAnimations = []

onMounted(() => {
  contentRef.value.style.opacity = '0'
  contentRef.value.style.transform = 'translateX(-30px)'

  ;[pain1.value, pain2.value, pain3.value].forEach(el => {
    el.style.opacity = '0'
  })
  xmarkRef.value.style.opacity = '0'
  xmarkRef.value.style.transform = 'translate(-50%, -50%) scale(0)'

  stopInView1 = inView(sectionRef.value, () => {
    animate(contentRef.value, {
      opacity: 1,
      transform: 'translateX(0px)'
    }, { duration: 0.8, easing: [0.22, 1, 0.36, 1] })
  }, { margin: '-25% 0px' })

  stopInView2 = inView(visualRef.value, async () => {
    animate(pain1.value, {
      opacity: 1,
      transform: 'rotate(-2deg)'
    }, { duration: 0.7, easing: [0.22, 1, 0.36, 1] })

    await new Promise(r => setTimeout(r, 200))

    animate(pain2.value, {
      opacity: 1,
      transform: 'rotate(2deg)'
    }, { duration: 0.7, easing: [0.22, 1, 0.36, 1] })

    await new Promise(r => setTimeout(r, 200))

    animate(pain3.value, {
      opacity: 1,
      transform: 'rotate(-1deg)'
    }, { duration: 0.7, easing: [0.22, 1, 0.36, 1] })

    await new Promise(r => setTimeout(r, 300))

    animate(xmarkRef.value, {
      opacity: 0.6,
      transform: 'translate(-50%, -50%) scale(1)'
    }, { duration: 0.5, easing: [0.34, 1.56, 0.64, 1] })

    floatAnimations.push(
      animate(pain1.value, {
        transform: ['rotate(-2deg) translateY(0px)', 'rotate(-2deg) translateY(-4px)', 'rotate(-2deg) translateY(0px)']
      }, { duration: 3, easing: [0.37, 0, 0.63, 1], repeat: Infinity }),

      animate(pain2.value, {
        transform: ['rotate(2deg) translateY(0px)', 'rotate(2deg) translateY(-6px)', 'rotate(2deg) translateY(0px)']
      }, { duration: 3.5, delay: 0.5, easing: [0.37, 0, 0.63, 1], repeat: Infinity }),

      animate(pain3.value, {
        transform: ['rotate(-1deg) translateY(0px)', 'rotate(-1deg) translateY(-3px)', 'rotate(-1deg) translateY(0px)']
      }, { duration: 2.8, delay: 1, easing: [0.37, 0, 0.63, 1], repeat: Infinity })
    )
  }, { margin: '-20% 0px' })
})

onUnmounted(() => {
  stopInView1?.()
  stopInView2?.()
  floatAnimations.forEach(a => a?.stop())
})
</script>

<style scoped>
.problem-section {
  background-color: var(--color-bg-section-muted);
  border-top: 1px solid var(--color-border-light);
  padding: 100px 24px;
}

.sticky-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.problem-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4xl);
  align-items: center;
}

.problem-content {
  max-width: 520px;
}

.problem-title {
  font-size: clamp(28px, 4vw, 36px);
  margin-bottom: var(--space-xl);
  line-height: 1.2;
}

.highlight {
  color: var(--color-error);
  font-style: italic;
}

.problem-text p {
  font-size: 17px;
  line-height: 1.7;
  margin-bottom: var(--space-md);
  color: var(--color-text-secondary);
}

.problem-subtitle {
  font-size: clamp(24px, 3vw, 28px);
  line-height: 1.2;
  margin-top: var(--space-lg);
  color: var(--color-text-primary);
}

/* Pain cards visual */
.pain-visual {
  position: relative;
  height: 420px;
}

.pain-card {
  position: absolute;
  background-color: var(--color-bg-elevated);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: var(--space-md);
  border: 1px solid var(--color-border);
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
  max-width: 320px;
}

.pain-1 {
  top: 0;
  left: 0;
  transform: rotate(-2deg);
}

.pain-2 {
  top: 140px;
  right: 0;
  transform: rotate(2deg);
}

.pain-3 {
  bottom: 20px;
  left: 40px;
  transform: rotate(-1deg);
}

.pain-icon {
  width: 40px;
  height: 40px;
  background-color: var(--color-error-bg);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.pain-icon svg {
  width: 20px;
  height: 20px;
  color: var(--color-error);
}

.pain-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.pain-text strong {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-primary);
}

.pain-text span {
  font-size: 13px;
  color: var(--color-text-muted);
  font-style: italic;
}

/* X Mark */
.x-mark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  color: var(--color-error);
  opacity: 0.6;
  z-index: 5;
}

/* Responsive */
@media (max-width: 1024px) {
  .problem-grid {
    gap: var(--space-2xl);
  }

  .pain-visual {
    height: 380px;
  }
}

@media (max-width: 768px) {
  .problem-section {
    padding: 60px 16px;
  }

  .problem-grid {
    grid-template-columns: 1fr;
    gap: var(--space-3xl);
  }

  .problem-content {
    max-width: 100%;
  }

  .problem-title {
    font-size: 28px;
  }

  .pain-visual {
    height: 360px;
    max-width: 100%;
    margin: 0 auto;
  }

  .pain-card {
    max-width: 280px;
    padding: var(--space-sm) var(--space-md);
  }

  .pain-1 { top: 0; left: 0; }
  .pain-2 { top: 120px; right: 0; }
  .pain-3 { bottom: 0; left: 20px; }

  .x-mark {
    width: 50px;
    height: 50px;
  }
}
</style>
