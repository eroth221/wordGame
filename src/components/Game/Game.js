import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED, WIN, LOSE } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([])
  const [result, setResult] = useState({
    value: '',
    guesses: 0,
  })
  
  function handleGuess(guess) {
    console.log("guess:",guess)
    let guessStatus = checkGuess(guess,answer)
    let newGuess = {
      value: guess,
      id: crypto.randomUUID(),
      guessStatus,
    }
  
    let allGuesses = [...guesses, newGuess]
    
    if(guess == answer){
      setResult({
        value: WIN,
        guesses: allGuesses.length
      })
    }
    else if(allGuesses.length == NUM_OF_GUESSES_ALLOWED){
      setResult({
        value: LOSE,
        guesses: allGuesses.length
      })
    }
    else{
      setResult({
        value: '',
        guesses: allGuesses.length
      })
    }
    setGuesses(allGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses}/>
      <GuessInput 
        handleGuess={handleGuess}
        result={result}
        answer={answer}
      />
    </>
  )
}

export default Game;
