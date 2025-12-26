<template>
  <div>
    <NavBar />
    <main>
      <section class="language-hero">
        <div class="container">
          <div class="hero-content">
            <div class="language-badge">🇵🇹</div>
            <h1>Learn European Portuguese</h1>
            <p class="hero-subtitle">
              A complete A1 curriculum designed by language experts. From "Bom dia" to confident conversations. European Portuguese.
            </p>
            <div class="hero-stats">
              <div class="stat">
                <span class="stat-value">10</span>
                <span class="stat-label">Units</span>
              </div>
              <div class="stat">
                <span class="stat-value">18</span>
                <span class="stat-label">Grammar Topics</span>
              </div>
              <div class="stat">
                <span class="stat-value">A1</span>
                <span class="stat-label">CEFR Level</span>
              </div>
            </div>
            <a href="https://app.neptis.tech/pt" class="btn btn-primary btn-large">Start Learning European Portuguese</a>
          </div>
        </div>
      </section>

      <section class="curriculum-section">
        <div class="container">
          <h2>What You'll Learn</h2>
          <div class="curriculum-grid">
            <div class="curriculum-card">
              <h3>Pronunciation</h3>
              <p>Master European Portuguese sounds including nasal vowels, the unique "lh" and "nh", and stressed syllables.</p>
            </div>
            <div class="curriculum-card">
              <h3>Grammar</h3>
              <p>Gendered nouns, verb conjugations, personal infinitive, and the subjunctive mood explained visually.</p>
            </div>
            <div class="curriculum-card">
              <h3>Vocabulary</h3>
              <p>Essential Portuguese words organized by theme - daily life, travel, food, social situations in Portugal.</p>
            </div>
            <div class="curriculum-card">
              <h3>Conversations</h3>
              <p>Real dialogues for Lisbon and beyond. Order pastéis de nata, ask for directions, make friends.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="sample-section">
        <div class="container">
          <h2>Sample Lesson</h2>
          <div class="sample-card">
            <div class="sample-header">
              <span class="sample-level">A1 - Unit 1</span>
              <span class="sample-title">Saudações</span>
            </div>
            <div class="sample-content">
              <div class="phonetic-example">
                <div class="phonetic-display">
                  <span class="word">
                    <span class="phonetic-letter" style="color: #2563EB; background: #DBEAFE; border: 1px solid #BFDBFE;">B</span>
                    <span class="phonetic-letter" style="color: #DC2626; background: #FEE2E2; border: 1px solid #FECACA;">o</span>
                    <span class="phonetic-letter" style="color: #2563EB; background: #DBEAFE; border: 1px solid #BFDBFE;">m</span>
                  </span>
                  <span class="word">
                    <span class="phonetic-letter" style="color: #2563EB; background: #DBEAFE; border: 1px solid #BFDBFE;">d</span>
                    <span class="phonetic-letter" style="color: #DC2626; background: #FEE2E2; border: 1px solid #FECACA;">i</span>
                    <span class="phonetic-letter" style="color: #DC2626; background: #FEE2E2; border: 1px solid #FECACA;">a</span>
                  </span>
                </div>
                <p class="translation">Good morning / Hello</p>
                <button class="audio-btn" @click="playAudio" :class="{ playing: isPlaying }">
                  <svg v-if="!isPlaying" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <svg v-else viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                  </svg>
                  <span>Listen</span>
                </button>
                <div class="color-guide">
                  <div class="color-guide-title">Color Guide</div>
                  <div class="color-guide-grid">
                    <span class="color-chip consonant">Consonant</span>
                    <span class="color-chip vowel">Vowel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </main>
    <FooterSection />
    <audio ref="audioRef" :src="audioSrc" @ended="isPlaying = false"></audio>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import FinalCTASection from '../components/FinalCTASection.vue'
import FooterSection from '../components/FooterSection.vue'

const audioRef = ref(null)
const isPlaying = ref(false)
const audioSrc = '/audio/pt/female-normal/bom_dia_39cae1.mp3'

const playAudio = () => {
  if (isPlaying.value) {
    audioRef.value.pause()
    audioRef.value.currentTime = 0
    isPlaying.value = false
  } else {
    audioRef.value.play()
    isPlaying.value = true
  }
}
</script>

<style scoped>
.language-hero {
  background: linear-gradient(135deg, var(--color-bg-page) 0%, var(--color-primary-bg) 100%);
  padding: calc(var(--nav-height) + 80px) 24px 80px;
}

.hero-content {
  max-width: 700px;
  text-align: center;
  margin: 0 auto;
}

.language-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  font-size: 56px;
  margin-bottom: var(--space-lg);
}

.hero-content h1 {
  font-size: clamp(36px, 5vw, 56px);
  margin-bottom: var(--space-lg);
}

.hero-subtitle {
  font-size: 20px;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2xl);
  line-height: 1.7;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: var(--space-2xl);
  margin-bottom: var(--space-2xl);
}

.stat {
  text-align: center;
}

.stat-value {
  display: block;
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 600;
  color: var(--color-primary);
}

.stat-label {
  font-size: 14px;
  color: var(--color-text-muted);
}

.curriculum-section {
  padding: 100px 24px;
  background: var(--color-bg-card);
}

.curriculum-section h2 {
  text-align: center;
  margin-bottom: var(--space-3xl);
}

.curriculum-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
  max-width: 1100px;
  margin: 0 auto;
}

.curriculum-card {
  background: var(--color-bg-page);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  border: 1px solid var(--color-border-light);
}

.curriculum-card h3 {
  font-size: 18px;
  margin-bottom: var(--space-sm);
  color: var(--color-primary);
}

.curriculum-card p {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.sample-section {
  padding: 100px 24px;
  background: var(--color-bg-section-muted);
}

.sample-section h2 {
  text-align: center;
  margin-bottom: var(--space-2xl);
}

.sample-card {
  max-width: 500px;
  margin: 0 auto;
  background: var(--color-bg-card);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.sample-header {
  background: var(--color-primary);
  color: white;
  padding: var(--space-md) var(--space-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sample-level {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.sample-title {
  font-size: 16px;
  font-weight: 500;
}

.sample-content {
  padding: var(--space-2xl);
  text-align: center;
}

.phonetic-display {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: var(--space-lg);
  flex-wrap: wrap;
  align-items: center;
}

.word {
  display: flex;
  flex-wrap: nowrap; /* Keep letters in a word together */
  gap: 3px;
}

.phonetic-letter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 20px;
  flex-shrink: 0;
}

@media (max-width: 480px) {
  .phonetic-display {
    gap: 8px;
  }

  .word {
    gap: 2px;
  }

  .phonetic-letter {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
}

.translation {
  font-size: 16px;
  color: var(--color-text-muted);
  font-style: italic;
  margin-bottom: var(--space-lg);
}

.audio-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.audio-btn:hover {
  background: var(--color-primary-hover);
  transform: translateY(-1px);
}

.audio-btn.playing {
  background: var(--color-secondary);
}

.audio-btn svg {
  width: 18px;
  height: 18px;
}

.color-guide {
  margin-top: var(--space-lg);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-border-light);
}

.color-guide-title {
  font-size: 14px;
  color: var(--color-text-muted);
  margin-bottom: var(--space-sm);
}

.color-guide-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.color-chip {
  display: inline-flex;
  align-items: center;
  padding: 4px 16px;
  border-radius: var(--radius-full);
  font-size: 13px;
  font-weight: 500;
}

.color-chip.consonant {
  color: #2563EB;
  background: #DBEAFE;
  border: 1px solid #BFDBFE;
}

.color-chip.vowel {
  color: #DC2626;
  background: #FEE2E2;
  border: 1px solid #FECACA;
}

@media (max-width: 1024px) {
  .curriculum-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .language-hero {
    padding: calc(var(--nav-height) + 40px) 16px 60px;
  }

  .hero-stats {
    flex-direction: column;
    gap: var(--space-lg);
  }

  .curriculum-section,
  .sample-section {
    padding: 60px 16px;
  }

  .curriculum-grid {
    grid-template-columns: 1fr;
  }
}
</style>
