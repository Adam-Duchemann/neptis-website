<template>
  <section id="pricing" class="pricing-section">
    <div class="sticky-container">
      <div class="container">
        <div class="section-title">
          <h2>Simple, transparent pricing</h2>
          <p>Start free. Pay for what you need.</p>
        </div>

        <div class="pricing-grid">
          <!-- Free Plan -->
          <div class="pricing-card">
            <h3 class="plan-name">Free</h3>
            <div class="plan-audience">Try it out</div>

            <div class="plan-price">
              <span class="price-amount">0</span>
              <span class="price-period">forever</span>
            </div>
            <p class="plan-description">Get started with one language</p>

            <ul class="plan-features">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>1 language</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>A1 level access</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>Core lessons</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>Basic audio</li>
            </ul>

            <a href="https://app.neptis.tech" class="btn btn-secondary">Start Free</a>
          </div>

          <!-- Monthly Plan - Featured -->
          <div class="pricing-card featured">
            <div class="featured-badge">Most flexible</div>
            <h3 class="plan-name">Monthly</h3>
            <div class="plan-audience">Serious learners</div>

            <div class="plan-price">
              <span class="price-amount">9.99</span>
              <span class="price-period">/month</span>
            </div>
            <p class="plan-description">Full access, cancel anytime</p>

            <ul class="plan-features">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>All languages</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>All levels (A1-B2)</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>Grammar lessons</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>Premium audio</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>Offline access</li>
            </ul>

            <a href="https://app.neptis.tech" class="btn btn-primary">Subscribe</a>
          </div>

          <!-- Lifetime Plan -->
          <div class="pricing-card">
            <h3 class="plan-name">Lifetime</h3>
            <div class="plan-audience">Best value</div>

            <div class="plan-price">
              <span class="price-amount">199</span>
              <span class="price-period">one-time</span>
            </div>
            <p class="plan-description">Pay once, learn forever</p>

            <ul class="plan-features">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>Everything in Monthly</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>Lifetime updates</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>New languages included</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>Priority support</li>
            </ul>

            <a href="https://app.neptis.tech" class="btn btn-secondary">Get Lifetime</a>
          </div>
        </div>

        <p class="pricing-note">
          All plans: 7-day free trial. No credit card required to start.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.pricing-section {
  background-color: var(--color-bg-card);
  border-top: 1px solid var(--color-border-light);
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
  margin-bottom: var(--space-sm);
}

.section-title p {
  font-size: 17px;
  color: var(--color-text-muted);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  align-items: stretch;
  max-width: 1000px;
  margin: 0 auto;
}

.pricing-card {
  background-color: var(--color-bg-elevated);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all var(--transition-normal);
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.pricing-card.featured {
  border-color: var(--color-primary);
  border-width: 2px;
  transform: scale(1.03);
  z-index: 1;
}

.pricing-card.featured:hover {
  transform: scale(1.03) translateY(-4px);
}

.featured-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-primary);
  color: var(--color-text-primary);
  padding: 4px 14px;
  border-radius: var(--radius-pill);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  white-space: nowrap;
}

.plan-name {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 4px;
}

.plan-audience {
  font-size: 12px;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-lg);
}

.plan-price {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: var(--space-sm);
}

.price-amount {
  font-family: var(--font-display);
  font-size: 42px;
  font-weight: 600;
  color: var(--color-text-primary);
}

.price-amount::before {
  content: "EUR";
  font-size: 16px;
  vertical-align: super;
  margin-right: 4px;
}

.price-period {
  font-size: 14px;
  color: var(--color-text-muted);
}

.plan-description {
  font-size: 14px;
  color: var(--color-text-muted);
  margin-bottom: var(--space-lg);
}

.plan-features {
  list-style: none;
  flex: 1;
  margin-bottom: var(--space-lg);
}

.plan-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--color-text-secondary);
  margin-bottom: 10px;
}

.plan-features svg {
  width: 16px;
  height: 16px;
  color: var(--color-success);
  flex-shrink: 0;
}

.pricing-card .btn {
  width: 100%;
  justify-content: center;
}

.pricing-note {
  text-align: center;
  margin-top: var(--space-xl);
  font-size: 14px;
  color: var(--color-text-muted);
}

@media (max-width: 900px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
  }

  .pricing-card.featured {
    transform: none;
    order: -1;
  }

  .pricing-card.featured:hover {
    transform: translateY(-4px);
  }
}

@media (max-width: 640px) {
  .pricing-section {
    padding: 60px 16px;
  }

  .pricing-card {
    padding: var(--space-lg);
  }

  .price-amount {
    font-size: 36px;
  }
}
</style>
