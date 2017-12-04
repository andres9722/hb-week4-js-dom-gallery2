export class Lightbox {
  constructor (container) {
    this.container = container,
    this.lightbox(container)
  }

  lightbox (container) {
    let images = this.getImages(container),
      larges = this.getLargeImages(images),
      descriptions = this.getDescriptions(images), 
      i = 0
    this.openLightBox(images, i, larges, descriptions)
  }

  getImages (container) {
    return [...container.querySelectorAll('img')]
  }

  getLargeImages (gallery) {
    return gallery.map(el => el.src)
  }

  getDescriptions (gallery) {
    return gallery.map(el => el.alt)
  }

  openLightBox (gallery, i, larges, descriptions) {
    let lightboxEl = document.createElement('div')

    let lightBoxContent = `
      <div class="lightbox-overlay">
        <figure class="lightbox-container">
          <img src="${larges[i]}" class="lightbox-image">
          <figcaption>
            <p class="lightbox-description">Imagen ${descriptions[i]} de ${descriptions.length}</p>
          </figcaption>
          <nav class="class="lightbox-navigation"">
            <a href="" class="lightbox-navigation__button prev"></a>
            <a href="" class="lightbox-navigation__button next"></a>
          </nav>
        </figure>
      </div>
    `

    lightboxEl.innerHTML = lightBoxContent
    lightboxEl.id = 'lightbox'
    document.body.appendChild(lightboxEl)
    this.navigateLightBox(lightboxEl, i, larges, descriptions)
  }

  navigateLightBox (lightboxEl, i, larges, descriptions) {
    let prev = lightboxEl.querySelector('.prev'),
      next = lightboxEl.querySelector('.next'),
      image = lightboxEl.querySelector('img'),
      description = lightboxEl.querySelector('p')

    window.addEventListener('keyup', e => {
      if (e.key === 'ArrowRight') next.click()
      if (e.key === 'ArrowLeft') prev.click()
    })

    lightboxEl.addEventListener('click', e => {
      e.preventDefault()
      let target = e.target

      if (target === prev) {
        if (i > 0) {
          image.src = larges[i - 1]
          i--
          image.classList.add('animated')
          setTimeout(() => {
            image.classList.remove('animated')
          }, 500)
        }
      } else if (target === next) {
        if (i < larges.length - 1) {
          image.src = larges[i + 1]
          i++
          image.classList.add('animated')
          setTimeout(() => {
            image.classList.remove('animated')
          }, 500)
        }
      }

      description.textContent = `Imagen ${descriptions[i]} de ${descriptions.length}`
    })
  }
}
