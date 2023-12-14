type ListNumProps = {
    num: number;
}

export default function ListNum({ num }: ListNumProps) {
  return <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{num}</span></h1>;
}
