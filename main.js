window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuActCurrentSection(home)
  activateMenuActCurrentSection(services)
  activateMenuActCurrentSection(about)
  activateMenuActCurrentSection(contact)
}

function activateMenuActCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seçao pasou da linha
  // quais dados vou precisar
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // verificar a base da linha a baixo

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
  const sectionId = section.getAttribute('id')
  const menuElemnet = document.querySelector(`.menu a[href*=${sectionId}]`)
  menuElemnet.classList.remove('active')
  if (sectionBoundaries) {
    menuElemnet.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content`)
