import './App.css';
import Row from './Row'
import requests from './requests';
import Banner from './Banner'

function App() {
  return (
    <div className="App">
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.Trending} />
      <Row title="Top Rated" fetchUrl={requests.TopRated} />
      <Row title="Action" fetchUrl={requests.Action} />
      <Row title="Adventure" fetchUrl={requests.Adventure} />
      <Row title="Animation" fetchUrl={requests.Animation} />
      <Row title="Comedy" fetchUrl={requests.Comedy} />
      <Row title="Crime" fetchUrl={requests.Crime} />
      {/* <Row title="Documentary" fetchUrl={requests.Documentary} /> */}
      <Row title="Drama" fetchUrl={requests.Drama} />
      <Row title="Family" fetchUrl={requests.Family} />
      <Row title="Fantasy" fetchUrl={requests.Fantasy} />
      <Row title="History" fetchUrl={requests.History} />
      <Row title="Horror" fetchUrl={requests.Horror} />
      <Row title="Music" fetchUrl={requests.Music} />
      <Row title="Mystery" fetchUrl={requests.Mystery} />
      <Row title="Netflix Originals" fetchUrl={requests.NetflixOriginals} />
      <Row title="Romance" fetchUrl={requests.Romance} />
      <Row title="Science Fiction" fetchUrl={requests.ScienceFiction} />
      <Row title="TV" fetchUrl={requests.TVMovie} />
      <Row title="Thriller" fetchUrl={requests.Thriller} />
      <Row title="War" fetchUrl={requests.War} />
      <Row title="Western" fetchUrl={requests.Western} />
    </div>
  );
}

export default App;
