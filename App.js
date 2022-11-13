import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
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
    <div ClassName="App">
        <p>{quote_str}</p>
        <button onClick={setQuote}>Quote</button>
        <img src={imageURL} alt="Pic" />
        <button onClick={setImage}>Cat</button>
        <p>{joke}</p>
        <button onClick={setJoke}>Joke</button>
        <button onClick={response}>Answer</button>
    </div>
  );
}

export default App;
