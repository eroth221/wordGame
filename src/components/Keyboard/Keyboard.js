import React from 'react';
import { LETTERS } from '../../constants'

function Keyboard(){
    return(
        <div className="keyboard">
            <div className="first-row">
                {LETTERS["firstRow"].map(letter => {
                    return (
                        <button className="key-cell">
                            {letter}
                        </button>
                    )
                })}
            </div>
            <div className="second-row">
                {LETTERS["secondRow"].map(letter => {
                    return (
                        <button className="key-cell">
                            {letter}
                        </button>
                    )
                })}
            </div>
            <div className="thirdRow">
                {LETTERS["thirdRow"].map(letter => {
                    return (
                        <button className="key-cell">
                            {letter}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default Keyboard;