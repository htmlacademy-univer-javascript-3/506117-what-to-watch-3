import HeadUser from '../../components/common/head-user/head-user';

type MyListProps = {
  listFilms: { name: string; id: number; imagePath: string }[];
}


function MyList(props: MyListProps): JSX.Element {
  return (
    <div className="user-page">
      <HeadUser />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          {
            props.listFilms.map(
              (film) =>
                (
                  <article key={film.id} className="small-film-card catalog__films-card">
                    <div className="small-film-card__image">
                      <img src={film.imagePath} alt={film.name} width="280" height="175" />
                    </div>
                    <h3 className="small-film-card__title">
                      <a className="small-film-card__link" href="film-page.html">{film.name}</a>
                    </h3>
                  </article>
                )
            )
          }
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyList;
