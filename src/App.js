import './App.css';
import Movie_rows from './Movieapp/Movie_rows';
import requests from './Movieapp/requests';
import Banner from './Movieapp/Banner';
import Nav from './Movieapp/Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Movie_rows title="NETFLIX ORIGINALS" fetchURL={requests.NetflixOriginals} isLarge={true} />
      <Movie_rows title="Trending" fetchURL={requests.Trending} />
      <Movie_rows title="Toprated" fetchURL={requests.Toprated} />
      <Movie_rows title="Action" fetchURL={requests.Action} />
      <Movie_rows title="Comedy" fetchURL={requests.Comedy} />
      <Movie_rows title="Horror" fetchURL={requests.Horror} />
      <Movie_rows title="Romance" fetchURL={requests.Romance} />
      <Movie_rows title="Documentries" fetchURL={requests.Documentries} />
    </div>
  );
}

export default App;
