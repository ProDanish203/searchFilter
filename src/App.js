import { useState } from 'react';
import './App.css';
import { SearchBar } from "./Components/SearchBar";
import { Results } from './Components/Results';

function App() {

  const [results, setResults] = useState([])

  return (
    <>
    <div className="search-container">
      <SearchBar setResults={setResults}/>
      <Results results={results}/>
    </div>
    </>
  );
}

export default App;
