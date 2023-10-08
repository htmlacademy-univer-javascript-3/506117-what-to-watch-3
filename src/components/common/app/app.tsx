import MainScreen from '../../../pages/main-screen/main-screen';
type AppProps = {
  promoInfo: {
    name: string;
    genre: string;
    releaseDate: Date;
    posterPath: string;
    backgroundPath: string;
  };
}

function App({ promoInfo }: AppProps): JSX.Element {
  return (
    <MainScreen promoInfo={promoInfo}/>
  );
}

export default App;
