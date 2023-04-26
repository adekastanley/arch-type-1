const hamburger = document.querySelector('.ham')

// const target = document.querySelector('.main')
// const result = splitting({target:target, by: 'chars'})


let navOpen = false;
hamburger.addEventListener('click', ()=> {
    if (!navOpen){

        gsap.to('header', {
            x : 0,
            ease: 'power4'
        })
        navOpen = true
    } else {
        gsap.to('header', {
            x : '100%',
            ease: 'power4'
        })
        navOpen = false
    }
})