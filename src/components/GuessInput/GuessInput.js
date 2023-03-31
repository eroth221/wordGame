import React, { useState } from 'react';
import { WIN, LOSE } from '../../constants'


function GuessInput({handleGuess, result, answer}) {
    const [guess, setGuess] = useState('')

  return (
    <>
        <form className="guess-input-wrapper" onSubmit={(e) => {
            e.preventDefault();
            console.log(guess)
            if(!!guess){
                console.log("hello")
                handleGuess(guess);
                setGuess('');
            }
        }}>
        <label htmlFor="guess-input">Enter Guess:</label>
        <input
            id="guess-input"
            type="text"
            value={guess}
            pattern={`^[A-Z]{5,5}$`}
            maxLength={5}
            title="Only letters allowed and must be length of 5."
            disabled={result.value == '' ? false : true}
            onChange={(e) => setGuess(e.target.value.toUpperCase())}    
        >
        </input>
        </form>
        {result.value == WIN &&
            <div className="happy banner">
                <p>
                    <strong>Congratulations!</strong> Got it in <strong>{result.guesses} guesses</strong>.
                </p>
            </div>
        }
        {result.value == LOSE &&
            <div className="sad banner">
                <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
            </div>
        }
    </>
  )
}
/*

*/

export default GuessInput;
