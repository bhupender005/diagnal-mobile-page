import "./App.css";
import MovieContainer from "./components/MovieContainer";
import NavBar from "./components/NavBar";

//TODO move movie list inside component
const movies = Array(9).fill({
  name: "Abc",
  src: "http://",
});

function App() {
  return (
    <div className="App">
      <header className="">
        <NavBar />
      </header>
      <section>
        <MovieContainer movies={movies} />
      </section>
    </div>
  );
}

export default App;
