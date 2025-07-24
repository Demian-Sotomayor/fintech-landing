// ———————————————————————————————
// Scroll Animation Controller
// ———————————————————————————————
class ScrollAnimationController {
  constructor() {
    this.init()
    this.setupEventListeners()
    this.animateOnLoad()
  }

  init() {
    this.navbar = document.querySelector('.navbar')
    this.benefitCards = document.querySelectorAll('.benefit-card')
    this.featureItems = document.querySelectorAll('.feature-item')
    this.scrollProgress = 0
    this.ticking = false

    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    this.benefitCards.forEach(c => this.observer.observe(c))
    this.featureItems.forEach(i => this.observer.observe(i))

    this.setupSmoothScrolling()
  }

  setupEventListeners() {
    window.addEventListener('scroll', this.onScroll.bind(this))
    window.addEventListener('resize', this.onResize.bind(this))

    this.benefitCards.forEach(card => {
      card.addEventListener('mouseenter', this.onBenefitHover.bind(this))
      card.addEventListener('mouseleave', this.onBenefitLeave.bind(this))
    })

    document.querySelectorAll('button').forEach(btn =>
      btn.addEventListener('click', this.onButtonClick.bind(this))
    )

    this.setupPhoneInteractions()
  }

  onScroll() {
    if (!this.ticking) {
      requestAnimationFrame(this.updateScrollEffects.bind(this))
      this.ticking = true
    }
  }

  updateScrollEffects() {
    const scrollTop = window.pageYOffset
    const docHeight = document.body.scrollHeight - window.innerHeight
    this.scrollProgress = scrollTop / docHeight

    this.updateNavbar(scrollTop)
    this.updateParallax(scrollTop)
    this.updatePhoneAnimation(scrollTop)

    this.ticking = false
  }

  updateNavbar(scrollTop) {
    if (scrollTop > 50) {
      this.navbar.style.background = 'rgba(0, 0, 0, 0.95)'
      this.navbar.style.boxShadow = '0 2px 20px rgba(18, 18, 18, 0.1)'
    } else {
      this.navbar.style.background = 'rgba(0, 0, 0, 0.95)'
      this.navbar.style.boxShadow = 'none'
    }
  }

  updateParallax(scrollTop) {
    const hero = document.getElementById('hero')

    const heroPhone = document.querySelector('.hero-visual .phone-mockup')
    if (heroPhone) {
      heroPhone.style.transform = `translateY(${scrollTop * -0.3}px)`
    }

    const productPhone = document.querySelector('.floating-phone')
    if (productPhone) {
      const rect = productPhone.getBoundingClientRect()
      const winH = window.innerHeight
      const prog = Math.max(0, Math.min(1, (winH - rect.top) / winH))
      const rot = (prog - 0.5) * 10
      const scale = 0.9 + prog * 0.1
      productPhone.style.transform = `rotate(${rot}deg) scale(${scale})`
    }
  }

  updatePhoneAnimation() {
    const phoneContent = document.querySelector('.phone-ui')
    if (!phoneContent) return

    const rect = phoneContent.getBoundingClientRect()
    const prog = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))

    const balance = document.querySelector('.balance-amount')
    if (balance && prog > 0.5) {
      this.animateNumber(balance, 2_458_350, 1000)
    }

    document.querySelectorAll('.chart-bar').forEach((bar, i) => {
      setTimeout(() => {
        if (prog > 0.3) {
          bar.style.opacity = '1'
          bar.style.animation = 'growUp 1s ease-out forwards'
        }
      }, i * 100)
    })
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      if (entry.target.matches('.benefit-card')) {
        entry.target.classList.add('animate')
        this.animateBenefitCard(entry.target)
      }
      if (entry.target.matches('.feature-item')) {
        entry.target.classList.add('animate')
      }
    })
  }

  animateBenefitCard(card) {
    const icon = card.querySelector('.benefit-icon')
    if (!icon) return
    setTimeout(() => {
      icon.style.transform = 'scale(1.1) rotate(360deg)'
      setTimeout(() => (icon.style.transform = 'scale(1) rotate(0deg)'), 500)
    }, 300)
  }

  onBenefitHover(e) {
    const card = e.currentTarget
    const icon = card.querySelector('.benefit-icon')
    card.style.transform = 'translateY(-15px) scale(1.02)'
    card.style.boxShadow = '0 20px 40px rgba(0, 209, 122, 0.2)'
    if (icon) icon.style.transform = 'scale(1.2) rotate(10deg)'
  }

  onBenefitLeave(e) {
    const card = e.currentTarget
    const icon = card.querySelector('.benefit-icon')
    card.style.transform = 'translateY(-10px) scale(1)'
    card.style.boxShadow = '0 8px 32px rgba(18, 18, 18, 0.16)'
    if (icon) icon.style.transform = 'scale(1) rotate(0deg)'
  }

  onButtonClick(e) {
    const btn = e.currentTarget
    const ripple = document.createElement('div')
    Object.assign(ripple.style, {
      position: 'absolute',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.6)',
      transform: 'scale(0)',
      animation: 'ripple 0.6s linear',
      left: '50%',
      top: '50%',
      width: '20px',
      height: '20px',
      marginLeft: '-10px',
      marginTop: '-10px'
    })
    btn.style.position = 'relative'
    btn.style.overflow = 'hidden'
    btn.appendChild(ripple)

    btn.style.transform = 'scale(0.95)'
    setTimeout(() => (btn.style.transform = 'scale(1)'), 150)
    setTimeout(() => ripple.remove(), 600)
  }

  setupPhoneInteractions() {
    const phoneScreen = document.querySelector('.phone-screen')
    const actionItems = document.querySelectorAll('.action-item')
    actionItems.forEach(it => it.addEventListener('click', this.onActionClick.bind(this)))
  }

  onActionClick(e) {
    const item = e.currentTarget
    const icon = item.querySelector('.action-icon')
    item.style.transform = 'translateY(-5px) scale(1.05)'
    if (icon) icon.style.transform = 'scale(1.2) rotate(15deg)'
    setTimeout(() => {
      item.style.transform = 'translateY(-2px) scale(1)'
      if (icon) icon.style.transform = 'scale(1) rotate(0deg)'
    }, 200)
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor =>
      anchor.addEventListener('click', e => {
        e.preventDefault()
        const tgt = document.querySelector(anchor.getAttribute('href'))
        if (tgt) {
          const offset = tgt.getBoundingClientRect().top + window.pageYOffset - 70
          window.scrollTo({ top: offset, behavior: 'smooth' })
        }
      })
    )
  }

  animateNumber(el, target, duration) {
    if (el.dataset.animated) return
    el.dataset.animated = 'true'
    const increment = target / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      el.textContent = '$' + Math.floor(current).toLocaleString()
    }, 16)
  }

  animateOnLoad() {
    setTimeout(() => {
      document.querySelectorAll('.hero-title, .hero-description, .hero-buttons')
        .forEach(el => { if (el) el.style.opacity = '1' })
    }, 500)
  }

  onResize() {
    this.updateScrollEffects()
  }
}

// ———————————————————————————————
// Particle System for Background
// ———————————————————————————————
class ParticleSystem {
  constructor() {
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.particles = []
    this.init()
  }

  init() {
    Object.assign(this.canvas.style, {
      position: 'fixed',
      top: '0', left: '0',
      width: '100%', height: '100%',
      pointerEvents: 'none', zIndex: '-1',
      opacity: '0.1'
    })
    document.body.appendChild(this.canvas)
    this.resize()
    this.createParticles()
    this.animate()
    window.addEventListener('resize', this.resize.bind(this))
  }

  resize() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }

  createParticles() {
    const count = Math.floor((this.canvas.width * this.canvas.height) / 15000)
    this.particles = Array.from({ length: count }, () => ({
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2
    }))
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.particles.forEach(p => {
      p.x += p.speedX; p.y += p.speedY
      if (p.x < 0) p.x = this.canvas.width
      if (p.x > this.canvas.width) p.x = 0
      if (p.y < 0) p.y = this.canvas.height
      if (p.y > this.canvas.height) p.y = 0
      this.ctx.beginPath()
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      this.ctx.fillStyle = `rgba(0,209,122,${p.opacity})`
      this.ctx.fill()
    })
    requestAnimationFrame(this.animate.bind(this))
  }
}

// —————————————————————————————————— //
// Exported initialization functions  //
// —————————————————————————————————— //


// ———————————————————————————————
// Inicializar todas las animaciones de scroll, hover, click, parallax, etc.
// ———————————————————————————————
export function initScrollAnimations() {
  new ScrollAnimationController()
}

// ———————————————————————————————
// Inicializar el sistema de partículas de fondo.
// ———————————————————————————————
export function initParticleSystem() {
  new ParticleSystem()
}

// ———————————————————————————————
// Muestra pointer cursor en elementos interactivos.
// ———————————————————————————————
export function initCursorEffects() {
  document.querySelectorAll('button, .benefit-card, .action-item, .phone-screen')
    .forEach(el => {
      el.addEventListener('mouseenter', () => { document.body.style.cursor = 'pointer' })
      el.addEventListener('mouseleave', () => { document.body.style.cursor = 'default' })
    })

  document.addEventListener('keydown', e => {
    if (e.key === 'Tab') document.body.classList.add('keyboard-navigation')
  })
  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation')
  })
}

// ———————————————————————————————
// Anima los elementos hero (título, descripción, botones) tras un pequeño delay.
// ———————————————————————————————
export function initHeroAnimation() {
  setTimeout(() => {
    document.querySelectorAll('.hero-title, .hero-description, .hero-buttons')
      .forEach(el => { if (el) el.style.opacity = '1' })
  }, 500)
}
