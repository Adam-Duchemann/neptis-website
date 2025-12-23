<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="/" class="footer-logo">
            <img src="/images/logo.png" alt="" class="logo-img" aria-hidden="true" />
            <span>Neptis</span>
          </a>
          <div class="tagline-poem">
            <p>Learn Languages,</p>
            <p>Not Just Play Games.</p>
          </div>
          <p class="brand-description">Expert-designed language courses.</p>
        </div>

        <div class="footer-links">
          <div class="link-group">
            <h3 class="link-title">Languages</h3>
            <a href="/slovak">Slovak</a>
            <a href="/french">French</a>
            <a href="/polish">Polish</a>
            <a href="/portuguese">Portuguese</a>
          </div>

          <div class="link-group">
            <h3 class="link-title">Product</h3>
            <a href="/methodology">How It Works</a>
            <a href="/#pricing">Pricing</a>
            <a href="/#faq">FAQ</a>
          </div>

          <div class="link-group">
            <h3 class="link-title">Legal</h3>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">&copy; {{ currentYear }} Neptis. All rights reserved.</p>
        <div class="social-links">
          <a href="https://twitter.com/neptisapp" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://instagram.com/neptisapp" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background-color: var(--color-text-primary);
  color: white;
  padding: 80px 0 40px;
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-brand {
  max-width: 280px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 600;
  color: white;
  text-decoration: none;
  margin-bottom: 24px;
}

.logo-img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.tagline-poem {
  margin-bottom: 16px;
}

.tagline-poem p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 4px;
  line-height: 1.6;
}

.brand-description {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.link-title {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 16px;
}

.link-group a {
  display: block;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin-bottom: 12px;
  transition: color var(--transition-fast);
}

.link-group a:hover {
  color: white;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
}

.copyright {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-links a {
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  transition: all var(--transition-fast);
}

.social-links a:hover {
  background-color: var(--color-primary);
  color: white;
}

.social-links svg {
  width: 18px;
  height: 18px;
}

@media (max-width: 768px) {
  .footer {
    padding: 60px 0 32px;
  }

  .footer-top {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .footer-brand {
    max-width: 100%;
    text-align: center;
  }

  .footer-logo {
    justify-content: center;
  }

  .footer-links {
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    gap: 24px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 24px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-links {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
