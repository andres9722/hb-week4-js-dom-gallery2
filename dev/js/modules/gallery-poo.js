export class Gallery {
  constructor (container, data) {
    this.i = 0
    this.openGallery(container, this.i, data)
  }

  openGallery (container, i, data) {
    let galleryEl = document.createElement('div')

    console.log(container)
    
    let galleryContent = `
      <figure class="gallery-figure">
        <img src="${data[i]}" class="gallery-image">
        <figcaption>
          <p class="gallery-description">${i + 1}</p>
        </figcaption>
        <nav class="class="gallery-navigation"">
          <a href="" class="gallery-navigation__button prev"></a>
          <a href="" class="gallery-navigation__button next"></a>
        </nav>
      </figure>
    `

    galleryEl.innerHTML = galleryContent
    galleryEl.id = 'gallery'
    document.body.appendChild(galleryEl)
    this.navigateGallery(galleryEl, i, data)
  }

  navigateGallery (galleryEl, i, data) {
    let prev = galleryEl.querySelector('.prev')
    let next = galleryEl.querySelector('.next')
    let image = galleryEl.querySelector('img')
    let description = galleryEl.querySelector('p')

    window.addEventListener('keyup', e => {
      if (e.key === 'ArrowRight') next.click()
      if (e.key === 'ArrowLeft') prev.click()
    })

    galleryEl.addEventListener('click', e => {
      e.preventDefault()
      let target = e.target

      if (target === prev) {
        if (i > 0) {
          image.src = data[i - 1]
          i--
          image.classList.add('animated')
          setTimeout(() => {
            image.classList.remove('animated')
          }, 500)
        }
      } else if (target === next) {
        if (i < data.length - 1) {
          image.src = data[i + 1]
          i++
          image.classList.add('animated')
          setTimeout(() => {
            image.classList.remove('animated')
          }, 500)
        }
      }

      description.textContent = i + 1
    })
  }
}
