import MainScreen from '../../../pages/main-screen/main-screen';
type AppProps = {
  promoInfo: {
    name: string;
    genre: string;
    releaseDate: Date;
    posterPath: string;
    backgroundPath: string;
  };

  filmsInfo: {
    id: number;
    name: string;
    imagePath: string;
  }[];

  userInfo: {
    listCount: number;
  };
}

function App({ promoInfo, filmsInfo, userInfo}: AppProps): JSX.Element {
  return (
    <MainScreen promoInfo={promoInfo} filmsInfo={filmsInfo} userInfo={userInfo}/>
  );
}

export default App;
