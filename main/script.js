const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > 190) {
        nav.classList.add('active')
        console.log('active' + window.scrollY)
    } else {
        nav.classList.remove('active')
        console.log('not active' + window.scrollY)
    }
}
// Expanding panels  
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
   panels.forEach( panel =>{
      panel.classList.remove('active')
   })
}