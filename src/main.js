import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import './styles/main.css'

const routes = [
  {
    path: '/',
    component: () => import('./pages/Home.vue')
  },
  {
    path: '/slovak',
    component: () => import('./pages/Slovak.vue')
  },
  {
    path: '/french',
    component: () => import('./pages/French.vue')
  },
  {
    path: '/polish',
    component: () => import('./pages/Polish.vue')
  },
  {
    path: '/portuguese',
    component: () => import('./pages/Portuguese.vue')
  },
  {
    path: '/methodology',
    component: () => import('./pages/Methodology.vue')
  }
]

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, isClient }) => {
    if (isClient) {
      import('lenis').then(({ default: Lenis }) => {
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          infinite: false
        })

        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
        window.lenis = lenis
      })
    }
  }
)
