document.addEventListener('scroll', (e) => {
  const btnScrollTop = document.querySelector('.scroll-top');
  if (this.scrollY >= 200) {
    btnScrollTop.classList.add('show')
  } else {
    btnScrollTop.classList.remove('show')
  }
})