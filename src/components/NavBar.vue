<template>
  <nav ref="navRef" class="nav" :class="{ 'nav-scrolled': isScrolled }">
    <!-- Scroll Progress Bar -->
    <div class="scroll-progress-container">
      <div class="scroll-progress-bar" :style="{ width: scrollProgress + '%' }"></div>
    </div>
    <div class="nav-container">
      <!-- Logo -->
      <a href="/" class="logo">
        <span class="logo-mark">N</span>
        <span>Neptis</span>
      </a>

      <!-- Desktop Links -->
      <div class="nav-links">
        <div class="nav-dropdown">
          <button class="nav-dropdown-trigger" @click="toggleLanguagesDropdown">
            Languages
            <svg class="dropdown-chevron" :class="{ 'is-open': isLanguagesDropdownOpen }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6,9 12,15 18,9"/>
            </svg>
          </button>
          <div class="nav-dropdown-menu" :class="{ 'is-open': isLanguagesDropdownOpen }">
            <a href="/slovak" @click="closeLanguagesDropdown">
              <span class="dropdown-flag">🇸🇰</span>
              <span>
                <strong>Slovak</strong>
                <small>A1 Available</small>
              </span>
            </a>
            <a href="/french" @click="closeLanguagesDropdown">
              <span class="dropdown-flag">🇫🇷</span>
              <span>
                <strong>French</strong>
                <small>A1 Available</small>
              </span>
            </a>
            <a href="/polish" @click="closeLanguagesDropdown">
              <span class="dropdown-flag">🇵🇱</span>
              <span>
                <strong>Polish</strong>
                <small>A1 Available</small>
              </span>
            </a>
            <a href="/portuguese" @click="closeLanguagesDropdown">
              <span class="dropdown-flag">🇵🇹</span>
              <span>
                <strong>Portuguese</strong>
                <small>A1 Available</small>
              </span>
            </a>
          </div>
        </div>
        <a href="/methodology">How It Works</a>
        <a href="/#pricing">Pricing</a>
      </div>

      <!-- CTAs -->
      <div class="nav-ctas">
        <a href="https://app.neptis.tech" class="btn btn-nav">Start Your Course</a>
      </div>

      <!-- Mobile menu button -->
      <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="Toggle menu">
        <span class="hamburger" :class="{ 'is-open': isMobileMenuOpen }"></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div class="mobile-menu" :class="{ 'is-open': isMobileMenuOpen }">
      <button class="mobile-menu-item mobile-accordion-trigger" @click="toggleMobileLanguages">
        Languages
        <svg class="mobile-chevron" :class="{ 'is-open': isMobileLanguagesOpen }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6,9 12,15 18,9"/>
        </svg>
      </button>
      <div class="mobile-accordion-content" :class="{ 'is-open': isMobileLanguagesOpen }">
        <a href="/slovak" @click="closeMobileMenu" class="mobile-section-link">🇸🇰 Slovak</a>
        <a href="/french" @click="closeMobileMenu" class="mobile-section-link">🇫🇷 French</a>
        <a href="/polish" @click="closeMobileMenu" class="mobile-section-link">🇵🇱 Polish</a>
        <a href="/portuguese" @click="closeMobileMenu" class="mobile-section-link">🇵🇹 Portuguese</a>
      </div>
      <a href="/methodology" @click="closeMobileMenu" class="mobile-menu-item">How It Works</a>
      <a href="/#pricing" @click="closeMobileMenu" class="mobile-menu-item">Pricing</a>
      <hr />
      <a href="https://app.neptis.tech" class="btn btn-primary btn-mobile">Start Your Course</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { animate } from 'motion'

const navRef = ref(null)
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isLanguagesDropdownOpen = ref(false)
const isMobileLanguagesOpen = ref(false)
const scrollProgress = ref(0)

let scrollRafId = null

const handleScroll = () => {
  if (scrollRafId) return
  scrollRafId = requestAnimationFrame(() => {
    isScrolled.value = window.scrollY > 20

    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    scrollProgress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
    scrollRafId = null
  })
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const toggleLanguagesDropdown = () => {
  isLanguagesDropdownOpen.value = !isLanguagesDropdownOpen.value
}

const closeLanguagesDropdown = () => {
  isLanguagesDropdownOpen.value = false
}

const toggleMobileLanguages = () => {
  isMobileLanguagesOpen.value = !isMobileLanguagesOpen.value
}

const handleClickOutside = (e) => {
  if (isLanguagesDropdownOpen.value && !e.target.closest('.nav-dropdown')) {
    isLanguagesDropdownOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('click', handleClickOutside)

  navRef.value.style.opacity = '0'
  navRef.value.style.transform = 'translateY(-20px)'

  animate(navRef.value, {
    opacity: 1,
    transform: 'translateY(0px)'
  }, { duration: 0.6, easing: [0.22, 1, 0.36, 1] })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--nav-height);
  background-color: rgba(248, 250, 252, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

.scroll-progress-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background-color: transparent;
}

.scroll-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  will-change: width;
  transition: width 0.1s ease-out;
  border-radius: 0 2px 2px 0;
}

.nav-scrolled {
  height: var(--nav-height-scrolled);
  background-color: rgba(255, 255, 255, 0.95);
  border-bottom-color: var(--color-border-light);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width);
  height: 100%;
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 600;
  color: var(--color-text-primary);
  text-decoration: none;
}

.logo-mark {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 42px;
}

.nav-links a {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color var(--transition-fast);
}

.nav-links a:hover {
  color: var(--color-primary);
}

/* Dropdown */
.nav-dropdown {
  position: relative;
}

.nav-dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  color: var(--color-text-secondary);
  font-size: 14px;
  font-weight: 500;
  font-family: var(--font-body);
  cursor: pointer;
  padding: 0;
  transition: color var(--transition-fast);
}

.nav-dropdown-trigger:hover {
  color: var(--color-primary);
}

.dropdown-chevron {
  width: 16px;
  height: 16px;
  transition: transform var(--transition-fast);
}

.dropdown-chevron.is-open {
  transform: rotate(180deg);
}

.nav-dropdown-menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  min-width: 220px;
  padding: var(--space-sm);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-fast);
}

.nav-dropdown-menu.is-open {
  opacity: 1;
  visibility: visible;
}

.nav-dropdown-menu a {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: background-color var(--transition-fast);
}

.nav-dropdown-menu a:hover {
  background-color: var(--color-bg-section-muted);
}

.dropdown-flag {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
}

.nav-dropdown-menu a span {
  display: flex;
  flex-direction: column;
}

.nav-dropdown-menu a strong {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-primary);
}

.nav-dropdown-menu a small {
  font-size: 12px;
  color: var(--color-text-muted);
}

.nav-ctas {
  display: flex;
  align-items: center;
  gap: 16px;
}

.btn-nav {
  padding: 10px 20px;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: all var(--transition-fast);
  height: 40px;
}

.btn-nav:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-1px);
}

/* Mobile menu button */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--color-text-primary);
  position: relative;
  transition: all var(--transition-fast);
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: var(--color-text-primary);
  left: 0;
  transition: all var(--transition-fast);
}

.hamburger::before { top: -7px; }
.hamburger::after { bottom: -7px; }

.hamburger.is-open {
  background-color: transparent;
}

.hamburger.is-open::before {
  transform: rotate(45deg);
  top: 0;
}

.hamburger.is-open::after {
  transform: rotate(-45deg);
  bottom: 0;
}

/* Mobile menu */
.mobile-menu {
  display: none;
  flex-direction: column;
  padding: var(--space-md) var(--space-lg) var(--space-lg);
  background-color: var(--color-bg-elevated);
  border-top: 1px solid var(--color-border-light);
}

.mobile-menu a {
  padding: 12px 0;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
}

.mobile-menu hr {
  border: none;
  border-top: 1px solid var(--color-border-light);
  margin: 8px 0;
}

.btn-mobile {
  margin-top: 8px;
  text-align: center;
  color: white !important;
}

.mobile-menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  font-family: var(--font-body);
  background: none;
  border: none;
  width: 100%;
  cursor: pointer;
  transition: color var(--transition-fast);
}

.mobile-menu-item:hover {
  color: var(--color-text-primary);
}

.mobile-accordion-trigger {
  text-align: left;
}

.mobile-chevron {
  width: 18px;
  height: 18px;
  transition: transform var(--transition-fast);
}

.mobile-chevron.is-open {
  transform: rotate(180deg);
}

.mobile-accordion-content {
  display: none;
  flex-direction: column;
  padding-left: var(--space-md);
  overflow: hidden;
}

.mobile-accordion-content.is-open {
  display: flex;
}

.mobile-section-link {
  padding: 10px 0 !important;
  font-size: 15px !important;
  color: var(--color-text-muted) !important;
}

.mobile-section-link:hover {
  color: var(--color-text-secondary) !important;
}

@media (max-width: 768px) {
  .nav-links,
  .nav-ctas {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .mobile-menu.is-open {
    display: flex;
  }
}
</style>
