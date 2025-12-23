<template>
  <div>
    <NavBar />
    <main>
      <section class="methodology-hero">
        <div class="container">
          <div class="hero-content">
            <h1>How Neptis Works</h1>
            <p class="hero-subtitle">
              Expert-designed curriculum based on proven learning science. Here's what makes us different.
            </p>
          </div>
        </div>
      </section>

      <section class="dupar-section">
        <div class="container">
          <h2>The DUPAR Learning Cycle</h2>
          <p class="section-intro">Every unit follows our proven five-phase learning cycle:</p>

          <div class="dupar-grid">
            <div class="dupar-card">
              <div class="dupar-number">1</div>
              <h3>Discover</h3>
              <p>New content introduced in context. See words and grammar in natural situations before drilling.</p>
            </div>
            <div class="dupar-card">
              <div class="dupar-number">2</div>
              <h3>Understand</h3>
              <p>Visual explanations that make patterns clear. Know why, not just what.</p>
            </div>
            <div class="dupar-card">
              <div class="dupar-number">3</div>
              <h3>Practice</h3>
              <p>Varied exercises reinforce learning. Multiple interaction types prevent rote memorization.</p>
            </div>
            <div class="dupar-card">
              <div class="dupar-number">4</div>
              <h3>Apply</h3>
              <p>Use what you've learned in realistic scenarios. Bridge the gap between study and real use.</p>
            </div>
            <div class="dupar-card">
              <div class="dupar-number">5</div>
              <h3>Review</h3>
              <p>Spaced repetition ensures retention. Content returns at optimal intervals for memory.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="cefr-section">
        <div class="container">
          <h2>CEFR-Aligned Curriculum</h2>
          <p class="section-intro">Our curriculum maps to the Common European Framework of Reference for Languages.</p>

          <div class="cefr-grid">
            <div class="cefr-card">
              <div class="cefr-level">A1</div>
              <h3>Beginner</h3>
              <p>Understand and use familiar everyday expressions. Introduce yourself and ask basic questions.</p>
            </div>
            <div class="cefr-card coming-soon">
              <div class="cefr-level">A2</div>
              <h3>Elementary</h3>
              <p>Communicate in simple, routine tasks. Describe your background and immediate environment.</p>
              <span class="badge">Coming Soon</span>
            </div>
            <div class="cefr-card coming-soon">
              <div class="cefr-level">B1</div>
              <h3>Intermediate</h3>
              <p>Deal with most travel situations. Describe experiences, events, dreams, and ambitions.</p>
              <span class="badge">Coming Soon</span>
            </div>
            <div class="cefr-card coming-soon">
              <div class="cefr-level">B2</div>
              <h3>Upper Intermediate</h3>
              <p>Interact fluently with native speakers. Produce clear, detailed text on various subjects.</p>
              <span class="badge">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      <section class="features-section">
        <div class="container">
          <h2>What's Included</h2>

          <div class="features-grid">
            <div class="feature-item">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div class="feature-text">
                <h4>Structured Units</h4>
                <p>Systematic progression with clear learning objectives for each unit.</p>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <div class="feature-text">
                <h4>Visual Grammar</h4>
                <p>Complex rules made clear through diagrams and color-coded explanations.</p>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                </svg>
              </div>
              <div class="feature-text">
                <h4>Native Audio</h4>
                <p>Professional-quality recordings from native speakers for authentic pronunciation.</p>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div class="feature-text">
                <h4>Real Conversations</h4>
                <p>Dialogues for practical situations you'll actually encounter.</p>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div class="feature-text">
                <h4>Spaced Repetition</h4>
                <p>Intelligent review scheduling based on memory science.</p>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div class="feature-text">
                <h4>Quality Assured</h4>
                <p>Every lesson reviewed by language experts for accuracy and pedagogy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import FinalCTASection from '../components/FinalCTASection.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<style scoped>
.methodology-hero {
  background: linear-gradient(135deg, var(--color-bg-page) 0%, var(--color-primary-bg) 100%);
  padding: calc(var(--nav-height) + 80px) 24px 80px;
}

.hero-content {
  max-width: 700px;
  text-align: center;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: clamp(36px, 5vw, 56px);
  margin-bottom: var(--space-lg);
}

.hero-subtitle {
  font-size: 20px;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

/* DUPAR Section */
.dupar-section {
  padding: 100px 24px;
  background: var(--color-bg-card);
}

.dupar-section h2,
.cefr-section h2,
.features-section h2 {
  text-align: center;
  margin-bottom: var(--space-md);
}

.section-intro {
  text-align: center;
  font-size: 17px;
  color: var(--color-text-muted);
  margin-bottom: var(--space-3xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.dupar-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-md);
  max-width: 1100px;
  margin: 0 auto;
}

.dupar-card {
  background: var(--color-bg-page);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  text-align: center;
  border: 1px solid var(--color-border-light);
  position: relative;
}

.dupar-number {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  margin: 0 auto var(--space-md);
}

.dupar-card h3 {
  font-size: 18px;
  margin-bottom: var(--space-sm);
  color: var(--color-primary);
}

.dupar-card p {
  font-size: 13px;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* CEFR Section */
.cefr-section {
  padding: 100px 24px;
  background: var(--color-bg-section-muted);
}

.cefr-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
  max-width: 1100px;
  margin: 0 auto;
}

.cefr-card {
  background: var(--color-bg-card);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  text-align: center;
  border: 1px solid var(--color-border);
  position: relative;
}

.cefr-card.coming-soon {
  opacity: 0.6;
}

.cefr-level {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--space-sm);
}

.cefr-card h3 {
  font-size: 16px;
  margin-bottom: var(--space-sm);
}

.cefr-card p {
  font-size: 13px;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.cefr-card .badge {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  background: var(--color-warning-bg);
  color: var(--color-warning);
  font-size: 10px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  text-transform: uppercase;
}

/* Features Section */
.features-section {
  padding: 100px 24px;
  background: var(--color-bg-card);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
  max-width: 1000px;
  margin: var(--space-3xl) auto 0;
}

.feature-item {
  display: flex;
  gap: var(--space-md);
}

.feature-icon {
  width: 48px;
  height: 48px;
  background: var(--color-primary-bg);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-icon svg {
  width: 24px;
  height: 24px;
  color: var(--color-primary);
}

.feature-text h4 {
  font-size: 16px;
  margin-bottom: 4px;
}

.feature-text p {
  font-size: 14px;
  color: var(--color-text-muted);
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .dupar-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .cefr-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .methodology-hero {
    padding: calc(var(--nav-height) + 40px) 16px 60px;
  }

  .dupar-section,
  .cefr-section,
  .features-section {
    padding: 60px 16px;
  }

  .dupar-grid,
  .cefr-grid,
  .features-grid {
    grid-template-columns: 1fr;
  }

  .dupar-card,
  .cefr-card {
    padding: var(--space-lg);
  }
}
</style>
