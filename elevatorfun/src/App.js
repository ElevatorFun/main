import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios';
import './index.css';
import Navbar from './Navbar';

function App() {
  let [quote_str, setQuoteStr] = useState(null);
  let [imageURL, setImageURL] = useState(null);
  let [joke, setJokeStr] = useState(null);
  let [punch, getJokeStr] = useState(null);
  
  useEffect(setQuote, [])
  useEffect(setImage, [])
  useEffect(setJoke, [])
  
  function setQuote() {
    setQuoteStr(null);
    axios.get("https://api.adviceslip.com/advice").then(({data}) => {
      setQuoteStr(data.slip.advice);
    })
  }

  function setJoke() {
    setJokeStr(null);
    getJokeStr(null);
    axios.get("https://official-joke-api.appspot.com/random_joke").then(({data}) => {
      setJokeStr(data.setup);
      getJokeStr(data.punchline);
    })
  }

  function setImage() {
    setImageURL(null);
    axios.get("https://api.thecatapi.com/v1/images/search").then(({data}) => {
      setImageURL(data[0].url);
    })
  } 

  function response() {
    alert(punch)
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className="quotes">
        <p>{quote_str}</p>
        <button onClick={setQuote}>Quote</button>
      </div>
      <div className="cats">
        <img src={imageURL} alt="Pic" />
        <button onClick={setImage}>Cat</button>
      </div>
      <div className="jokes">
        <p>{joke}</p>
        <button onClick={setJoke}>Joke</button>
        <button onClick={response}>Answer</button>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

