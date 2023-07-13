const listItem = document.querySelectorAll('#landingHeader li')
    const menuBackDrop = document.querySelector('#menu-backdrop')

    listItem.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            const { left, top, width, height } = item.getBoundingClientRect()
            const { clientHeight, clientWidth } = item

            menuBackDrop.style.setProperty('--left', `${left}px`)
            menuBackDrop.style.setProperty('--top', `${top}px`)
            menuBackDrop.style.setProperty('--width', `${width}px`)
            menuBackDrop.style.setProperty('--height', `${height}px`)

            menuBackDrop.style.opacity = '1'
            menuBackDrop.style.visibility = 'visible'
        })
    })

    const header = document.querySelector('#landingHeader')
    const observerOptions = {
        root: null,
        rootMargin: '0px', // en cuanto se vea el elemento
        threshold: 0.90 // porcentaje de visibilidad
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const { isIntersecting } = entry
            if(isIntersecting) {
                const color = entry.target.getAttribute('data-header-color')
                header.style.color = color 
            }
        })
    }, observerOptions)

    const sections = document.querySelectorAll('.landing-section')
    sections.forEach((section)=> observer.observe(section))