const hamburger = document.querySelector('.ham')

// const target = document.querySelector('.main')
// const result = splitting({target:target, by: 'chars'})

const mobNavAnim = gsap.timeline()

let navOpen = false;
hamburger.addEventListener('click', ()=> {
    if (!navOpen){

        mobNavAnim.to('header', {
            x : 0,
            ease: 'power4'
        })
        mobNavAnim.from('.nav-links', {
            ease: 'power4',
            duration: .5,
            stagger: 0.5,
            opacity: 0,
            y: -10,
        })
        navOpen = true
    } else {
        gsap.to('header', {
            x : '100%',
            ease: 1
        })
        navOpen = false
    }
})