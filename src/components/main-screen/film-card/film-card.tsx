import { useState } from "react";

type FilmCardProps = {
  film: {
    id: string
    name: string
    previewImage: string
    previewVideoLink: string
    genre: string
  };
}

export default function FilmCard({ film }: FilmCardProps): JSX.Element {
  const [isActive, changeActive] = useState(false);
  
  return (
      <article 
        key={film.id} 
        className="small-film-card catalog__films-card"
        onMouseEnter={() => changeActive(true)} 
        onMouseLeave={() => changeActive(false)}
      >
        <div className="small-film-card__image">
          <img src={film.previewImage} alt={film.name} width="280" height="175" />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">{film.name}</a>
        </h3>
      </article>
  );
}