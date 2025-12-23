<template>
  <section id="hero" ref="heroRef" class="hero">
    <div class="hero-container">
      <div class="hero-section title-section">
        <div class="sticky-wrapper">
          <!-- Left: Text Content -->
          <div class="hero-content">
            <h1 ref="titleRef" class="hero-title">
              Learn Languages for Real,
              <br />
              <span class="text-primary">Stop Playing Games</span>
            </h1>

            <p ref="subtitleRef" class="hero-subtitle">
              Expert-designed courses with real curriculum. Structured progression, grammar explained, quality audio. Learn the right way.
            </p>

            <div ref="ctaRef" class="cta-group">
              <a href="https://app.neptis.tech" class="btn btn-primary btn-large">
                Start Your Course
              </a>
              <a href="/methodology" class="btn btn-secondary btn-large">
                See the Curriculum
              </a>
            </div>

            <p ref="trustRef" class="trust-line">
              <span>CEFR-Aligned</span>
              <span>Expert-Designed</span>
              <span>No Credit Card</span>
            </p>
          </div>

          <!-- Right: Visual -->
          <div ref="sceneContainerRef" class="perspective-container">
            <div ref="sceneRef" class="scene">
              <!-- Layer 0: Background glow -->
              <div class="layer layer-0">
                <div class="glow-bg"></div>
              </div>

              <!-- Layer 1: Main card -->
              <div class="layer layer-1">
                <div ref="cardRef" class="lesson-card">
                  <!-- Lesson header -->
                  <div class="lesson-header">
                    <div class="lesson-level">A1 - Unit 3</div>
                    <div class="lesson-progress">
                      <div class="progress-bar">
                        <div class="progress-fill" style="width: 65%"></div>
                      </div>
                      <span>65%</span>
                    </div>
                  </div>

                  <!-- Lesson content carousel -->
                  <div class="lesson-content">
                    <div class="lesson-slide" :class="{ active: currentSlide === 0 }">
                      <div class="phonetic-display">
                        <span class="phonetic-letter phonetic-consonant">D</span>
                        <span class="phonetic-letter phonetic-vowel">o</span>
                        <span class="phonetic-letter phonetic-consonant">b</span>
                        <span class="phonetic-letter phonetic-consonant">r</span>
                        <span class="phonetic-letter phonetic-long-vowel">ý</span>
                        <span class="phonetic-space"></span>
                        <span class="phonetic-letter phonetic-consonant">d</span>
                        <span class="phonetic-letter phonetic-vowel">e</span>
                        <span class="phonetic-letter phonetic-hacik">ň</span>
                      </div>
                      <div class="lesson-translation">Good day / Hello</div>
                      <div class="lesson-type">Vocabulary</div>
                    </div>

                    <div class="lesson-slide" :class="{ active: currentSlide === 1 }">
                      <div class="grammar-rule">
                        <span class="rule-label">Present Tense</span>
                        <div class="rule-example">
                          <span class="subject">Ja</span>
                          <span class="verb">hovor<strong>im</strong></span>
                        </div>
                      </div>
                      <div class="lesson-translation">I speak</div>
                      <div class="lesson-type">Grammar</div>
                    </div>

                    <div class="lesson-slide" :class="{ active: currentSlide === 2 }">
                      <div class="conversation-bubble">
                        <div class="speaker">Anna:</div>
                        <div class="text">"Ako sa máš?"</div>
                      </div>
                      <div class="lesson-translation">How are you?</div>
                      <div class="lesson-type">Conversation</div>
                    </div>
                  </div>

                  <!-- Slide indicators -->
                  <div class="slide-indicators">
                    <button
                      v-for="i in 3"
                      :key="i"
                      class="indicator"
                      :class="{ active: currentSlide === i - 1 }"
                      @click="currentSlide = i - 1"
                    ></button>
                  </div>
                </div>
              </div>

              <!-- Layer 2: Floating badges -->
              <div class="layer layer-2">
                <div class="floating-element badge-cefr">
                  <span class="badge-icon">A1</span>
                  <span class="badge-text">CEFR</span>
                </div>
                <div class="floating-element badge-grammar">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3v18M3 12h18"/>
                  </svg>
                  <span class="badge-text">Grammar</span>
                </div>
                <div class="floating-element badge-audio">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                  </svg>
                  <span class="badge-text">Audio</span>
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
import { ref, onMounted, onUnmounted } from 'vue'
import { animate, stagger } from 'motion'

const heroRef = ref(null)
const titleRef = ref(null)
const subtitleRef = ref(null)
const ctaRef = ref(null)
const trustRef = ref(null)
const sceneContainerRef = ref(null)
const sceneRef = ref(null)
const cardRef = ref(null)

const currentSlide = ref(0)
let slideInterval = null

// Parallax config
const parallaxConfig = {
  maxRotationX: 18,
  maxRotationY: 18,
  easing: 0.08,
  scale: 1.06
}

let currentX = 0
let currentY = 0
let targetX = 0
let targetY = 0
let currentScale = 1
let targetScale = 1
let rafId = null
let isParallaxRunning = false
let idleFrames = 0
const MAX_IDLE_FRAMES = 60

const handleMouseMove = (e) => {
  if (!heroRef.value || !sceneContainerRef.value) return

  const heroRect = heroRef.value.getBoundingClientRect()
  const isInHero = e.clientY >= heroRect.top && e.clientY <= heroRect.bottom

  if (!isInHero) {
    targetX = 0
    targetY = 0
    targetScale = 1
    return
  }

  const sceneRect = sceneContainerRef.value.getBoundingClientRect()
  const centerX = sceneRect.left + sceneRect.width / 2
  const centerY = sceneRect.top + sceneRect.height / 2

  const mouseX = e.clientX - centerX
  const mouseY = e.clientY - centerY

  const normalizedX = mouseX / (window.innerWidth / 2)
  const normalizedY = mouseY / (window.innerHeight / 2)

  const clampedX = Math.max(-1, Math.min(1, normalizedX))
  const clampedY = Math.max(-1, Math.min(1, normalizedY))

  targetY = clampedX * parallaxConfig.maxRotationY
  targetX = -clampedY * parallaxConfig.maxRotationX
  targetScale = parallaxConfig.scale

  startParallax()
}

const handleMouseLeave = () => {
  targetX = 0
  targetY = 0
  targetScale = 1
  startParallax()
}

const startParallax = () => {
  if (!isParallaxRunning) {
    isParallaxRunning = true
    idleFrames = 0
    animateParallax()
  }
}

const animateParallax = () => {
  currentX += (targetX - currentX) * parallaxConfig.easing
  currentY += (targetY - currentY) * parallaxConfig.easing
  currentScale += (targetScale - currentScale) * parallaxConfig.easing

  const threshold = 0.001
  const hasChanged = Math.abs(targetX - currentX) > threshold ||
                     Math.abs(targetY - currentY) > threshold ||
                     Math.abs(targetScale - currentScale) > threshold

  if (sceneRef.value && hasChanged) {
    idleFrames = 0
    sceneRef.value.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg) scale3d(${currentScale}, ${currentScale}, ${currentScale})`
  } else {
    idleFrames++
  }

  if (idleFrames >= MAX_IDLE_FRAMES) {
    isParallaxRunning = false
    rafId = null
    return
  }

  rafId = requestAnimationFrame(animateParallax)
}

onMounted(async () => {
  // Start slide carousel
  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % 3
  }, 3000)

  // Set initial states
  titleRef.value.style.opacity = '0'
  titleRef.value.style.transform = 'translateY(30px)'
  subtitleRef.value.style.opacity = '0'
  subtitleRef.value.style.transform = 'translateY(20px)'
  Array.from(ctaRef.value.children).forEach(el => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
  })
  trustRef.value.style.opacity = '0'
  trustRef.value.style.transform = 'translateY(10px)'
  cardRef.value.style.opacity = '0'
  cardRef.value.style.transform = 'translateY(40px) scale(0.95)'

  await new Promise(r => setTimeout(r, 300))

  // Animate title
  await animate(titleRef.value, {
    opacity: 1,
    transform: 'translateY(0px)'
  }, { duration: 0.8, easing: [0.22, 1, 0.36, 1] }).finished

  // Animate subtitle
  animate(subtitleRef.value, {
    opacity: 1,
    transform: 'translateY(0px)'
  }, { duration: 0.6, easing: [0.22, 1, 0.36, 1] })

  await new Promise(r => setTimeout(r, 200))

  // Animate CTAs
  animate(Array.from(ctaRef.value.children), {
    opacity: 1,
    transform: 'translateY(0px)'
  }, { duration: 0.5, delay: stagger(0.1), easing: [0.22, 1, 0.36, 1] })

  await new Promise(r => setTimeout(r, 200))

  // Animate trust line
  animate(trustRef.value, {
    opacity: 1,
    transform: 'translateY(0px)'
  }, { duration: 0.4, easing: [0.22, 1, 0.36, 1] })

  // Animate card
  animate(cardRef.value, {
    opacity: 1,
    transform: 'translateY(0px) scale(1)'
  }, { duration: 0.8, easing: [0.22, 1, 0.36, 1] })

  // Start parallax
  startParallax()

  document.addEventListener('mousemove', handleMouseMove, { passive: true })
  document.addEventListener('mouseleave', handleMouseLeave)
})

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval)
  if (rafId) cancelAnimationFrame(rafId)
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseleave', handleMouseLeave)
})
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, var(--color-bg-page) 0%, var(--color-primary-bg) 100%);
}

.hero-container {
  width: 100%;
  max-width: 100%;
  padding: 0;
}

.hero-section {
  min-height: 100vh;
  position: relative;
}

.sticky-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 0 var(--space-xl);
  max-width: 1400px;
  margin: 0 auto;
}

.hero-content {
  flex: 0 0 45%;
  max-width: 550px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.perspective-container {
  flex: 1;
  max-width: 55%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1200px;
}

.hero-title {
  font-size: clamp(36px, 5vw, 48px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: var(--space-lg);
}

.text-primary {
  color: var(--color-primary);
}

.hero-subtitle {
  font-size: 20px;
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-xl);
  max-width: 600px;
}

.cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: var(--space-md);
}

.cta-group .btn {
  height: 52px;
}

.trust-line {
  display: flex;
  justify-content: flex-start;
  gap: var(--space-lg);
  margin-top: var(--space-md);
  font-size: 14px;
  color: var(--color-text-muted);
}

.trust-line span::before {
  content: "✓ ";
  color: var(--color-success);
}

.scene {
  position: relative;
  width: 480px;
  height: 400px;
  transform-style: preserve-3d;
  margin-top: -40px;
  will-change: transform;
}

.layer {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: transform;
}

.layer-0 { transform: translateZ(-20px); }
.layer-1 { transform: translateZ(40px); pointer-events: auto; }
.layer-2 { transform: translateZ(80px); }

/* Background glow */
.glow-bg {
  position: absolute;
  width: 120%;
  height: 120%;
  background:
    radial-gradient(ellipse at 30% 40%, rgba(228, 174, 81, 0.4) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 60%, rgba(206, 148, 32, 0.3) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 80%, rgba(228, 174, 81, 0.25) 0%, transparent 40%);
  filter: blur(50px);
  pointer-events: none;
  animation: glowPulse 4s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

/* Lesson card */
.lesson-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-2xl);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.15);
  padding: var(--space-lg);
  width: 400px;
  max-width: 90vw;
  position: relative;
  z-index: 2;
}

.lesson-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-lg);
  padding-bottom: var(--space-md);
  border-bottom: 1px solid var(--color-border-light);
}

.lesson-level {
  font-weight: 600;
  color: var(--color-primary);
  font-size: 14px;
}

.lesson-progress {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--color-text-muted);
}

.progress-bar {
  width: 80px;
  height: 6px;
  background: var(--color-border-light);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border-radius: 3px;
}

.lesson-content {
  min-height: 160px;
  position: relative;
}

.lesson-slide {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.lesson-slide.active {
  opacity: 1;
}

/* Phonetic display */
.phonetic-display {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
}

.phonetic-letter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 18px;
}

.phonetic-space {
  width: 16px;
}

.phonetic-vowel { color: #DC2626; background: #FEE2E2; }
.phonetic-long-vowel { color: #D97706; background: #FEF3C7; }
.phonetic-consonant { color: #2563EB; background: #DBEAFE; }
.phonetic-hacik { color: #059669; background: #D1FAE5; }

/* Grammar rule */
.grammar-rule {
  text-align: center;
}

.rule-label {
  font-size: 12px;
  color: var(--color-text-muted);
  margin-bottom: 8px;
  display: block;
}

.rule-example {
  font-size: 24px;
  font-weight: 500;
}

.subject {
  color: var(--color-primary);
}

.verb strong {
  color: var(--color-secondary);
}

/* Conversation */
.conversation-bubble {
  background: var(--color-primary-bg);
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-lg);
  max-width: 280px;
}

.speaker {
  font-size: 12px;
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 4px;
}

.conversation-bubble .text {
  font-size: 18px;
  color: var(--color-text-primary);
}

.lesson-translation {
  font-size: 14px;
  color: var(--color-text-muted);
  font-style: italic;
}

.lesson-type {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-primary);
  font-weight: 600;
}

/* Slide indicators */
.slide-indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: var(--space-lg);
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-border);
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  padding: 0;
}

.indicator.active {
  background: var(--color-primary);
  width: 24px;
  border-radius: 4px;
}

/* Floating badges */
.floating-element {
  position: absolute;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-md);
  padding: 10px 14px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 500;
}

.badge-icon {
  background: var(--color-primary);
  color: white;
  padding: 4px 8px;
  border-radius: var(--radius-xs);
  font-weight: 700;
  font-size: 11px;
}

.badge-text {
  color: var(--color-text-secondary);
}

.floating-element svg {
  width: 18px;
  height: 18px;
  color: var(--color-primary);
}

.badge-cefr {
  top: 10%;
  right: 0;
  animation: floatRight 4s ease-in-out infinite;
}

.badge-grammar {
  bottom: 20%;
  left: 0;
  animation: floatLeft 4.5s ease-in-out infinite;
}

.badge-audio {
  bottom: 5%;
  right: 20%;
  animation: floatBottom 5s ease-in-out infinite;
}

@keyframes floatRight {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(6px); }
}

@keyframes floatLeft {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-6px); }
}

@keyframes floatBottom {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

/* Responsive */
@media (max-width: 1024px) {
  .sticky-wrapper {
    flex-direction: column;
    justify-content: center;
    gap: 60px;
    padding: 100px var(--space-lg) 60px;
  }

  .hero-content {
    flex: none;
    max-width: 600px;
    text-align: center;
    align-items: center;
  }

  .perspective-container {
    flex: none;
    max-width: 100%;
    width: 100%;
  }

  .trust-line {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: auto;
  }

  .sticky-wrapper {
    padding: 80px 24px 40px;
    gap: 40px;
  }

  .hero-content {
    text-align: left;
    align-items: flex-start;
  }

  .hero-title {
    font-size: 32px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .cta-group {
    width: 100%;
    flex-direction: column;
  }

  .cta-group .btn {
    width: 100%;
    height: 44px;
  }

  .trust-line {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-sm);
  }

  .perspective-container {
    perspective: none;
    padding: 20px 0;
  }

  .scene {
    width: 100%;
    height: auto;
    transform: none !important;
  }

  .layer {
    position: relative;
    transform: none !important;
  }

  .layer-0, .layer-2 {
    display: none;
  }

  .layer-1 {
    position: relative;
    inset: auto;
  }

  .lesson-card {
    max-width: 100%;
    transform: none !important;
  }
}
</style>
