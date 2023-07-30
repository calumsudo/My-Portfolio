import React from 'react'
import './project.scss'

const Project = ({
  imageUrl,
  title,
  description,
  github,
  weblink,
  liveDemo,
}) => {
  return (
    <div class="card">
      <img src={imageUrl} alt={title} />
      <div class="card__content">
        <p class="card__title">{title}</p>
        <p class="card__description">{description}</p>
        <div class="card-button-container">
          {liveDemo ? (
            <a
              class="card__button"
              href={weblink}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          ) : (
            <a class="card__button__no" href="none">
              Live Demo
            </a>
          )}
          <a
            class="card__button secondary"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
