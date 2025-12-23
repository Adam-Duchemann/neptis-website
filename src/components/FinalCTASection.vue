<template>
  <section class="final-cta-section">
    <div class="container">
      <div ref="contentRef" class="cta-content">
        <h2>Ready to actually learn?</h2>
        <p>Start with a free A1 level. No credit card required.</p>
        <div class="cta-buttons">
          <a href="https://app.neptis.tech" class="btn btn-primary btn-large">Start Your Course</a>
          <a href="/methodology" class="btn btn-ghost btn-large">See the Curriculum</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { animate, inView } from 'motion'

const contentRef = ref(null)
let stopInView = null

onMounted(() => {
  contentRef.value.style.opacity = '0'
  contentRef.value.style.transform = 'translateY(30px)'

  stopInView = inView(contentRef.value, () => {
    animate(contentRef.value, {
      opacity: 1,
      transform: 'translateY(0px)'
    }, { duration: 0.8, easing: [0.22, 1, 0.36, 1] })
  }, { margin: '-20% 0px' })
})

onUnmounted(() => {
  stopInView?.()
})
</script>

<style scoped>
.final-cta-section {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  padding: 100px 24px;
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: clamp(28px, 4vw, 40px);
  color: white;
  margin-bottom: var(--space-md);
}

.cta-content p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: var(--space-xl);
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.cta-buttons .btn-primary {
  background-color: white;
  color: var(--color-primary);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
}

.cta-buttons .btn-primary:hover {
  background-color: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.cta-buttons .btn-ghost {
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.cta-buttons .btn-ghost:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .final-cta-section {
    padding: 60px 16px;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .cta-buttons .btn {
    width: 100%;
  }
}
</style>
