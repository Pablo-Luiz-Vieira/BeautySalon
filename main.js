/* Abre e fecha o menu ao clicar no icone hamburger e x */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll(' nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Quando clicar em um item do menu esconder todo o menu */

const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Mudar o header da pagina quando der scroll */
function changeHeaderWenScrool() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    //quando o scroll for maior executar isso
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}

/*Testimonial carousel slide swiper*/

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,

  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* reaveal: mostra objetos da pagigina ao dao o movimento de scroll*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonial header, #testimonial .testimonials,
#contact .text, #contact .links,
footer .brand , footer .social
`,
  { interval: 100 }
)

//Botão voltar para o topo

function backToTop() {
  const backToTopButtom = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButtom.classList.add('show')
  } else {
    backToTopButtom.classList.remove('show')
  }
}

// Menu ativo confeome a seção visivel na pagina //

const sections = document.querySelectorAll('main section[id]')

function activateMenuCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeigth = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeigth

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// Wen Scroll //
window.addEventListener('scroll', function () {
  changeHeaderWenScrool()
  backToTop()
  activateMenuCurrentSection()
})
