import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';
// import Keyboard from '../Keyboard/Keyboard';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED, WIN, LOSE } from '../../constants'

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([])
  const [result, setResult] = useState({
    value: '',
    guesses: 0,
  })
  const [answer, setAnswer] = useState(() => {
    return sample(WORDS)
  })

  console.info({answer})
  
  function handleGuess(guess) {
    let guessStatus = checkGuess(guess,answer)
    let newGuess = {
      value: guess,
      id: crypto.randomUUID(),
      guessStatus,
    }
  
    let allGuesses = [...guesses, newGuess]
    
    if(guess === answer){
      setResult({
        value: WIN,
        guesses: allGuesses.length
      })
    }
    else if(allGuesses.length === NUM_OF_GUESSES_ALLOWED){
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

  function handleReset() {
    setAnswer(sample(WORDS))
    setGuesses([])
    setResult({
      value: '',
      guesses: 0,
    })
  }

  return (
    <>
      <GuessResults guesses={guesses}/>
      <GuessInput 
        handleGuess={handleGuess}
        handleReset={handleReset}
        result={result}
        answer={answer}
      />
    </>
  )
}

export default Game;
