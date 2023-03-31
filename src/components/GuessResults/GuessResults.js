import React, { useState } from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED, LENGTH_OF_WORDS } from '../../constants'

function GuessResults({guesses}) {
  return (
    <div className="guess-results">
      {
        range(0,NUM_OF_GUESSES_ALLOWED).map(guessCount => {
          return (
            <p key={guessCount} className="guess">{
              range(0,LENGTH_OF_WORDS).map(index => (
                <span 
                  key={index}
                  className={
                    `cell ${!!guesses[guessCount] ? 
                      guesses[guessCount].guessStatus[index].status :
                      ''
                    }`
                  }
                >{
                  !!guesses[guessCount] ? 
                    guesses[guessCount].value[index] :
                    ''
                }</span>
              ))
            }</p>
          )
        })
      }
    </div>
  );
}

export default GuessResults;
