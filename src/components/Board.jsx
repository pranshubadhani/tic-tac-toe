import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
    const initialState = Array(9).fill(null);
    const [squares, setSquares] = useState(initialState);
    const [isXTurn, setIsXTurn] = useState(true);

    const handleReset = () => {
        setSquares(initialState);
    };

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < winnerLogic.length; i++) {
            const [a, b, c] = winnerLogic[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
    }

    const isWinner = checkWinner();

    const handleClick = (index) => {
        if (squares[index] === null) {
            const copySquares = [...squares];
            copySquares[index] = isXTurn ? 'X' : 'O';
            setSquares(copySquares);
            setIsXTurn(!isXTurn);
        }
    };

    return (
        <>
            <div className="board">
                <div className="row">
                    <Square onClick={() => handleClick(0)} value={squares[0]} />
                    <Square onClick={() => handleClick(1)} value={squares[1]} />
                    <Square onClick={() => handleClick(2)} value={squares[2]} />
                </div>
                <div className="row">
                    <Square onClick={() => handleClick(3)} value={squares[3]} />
                    <Square onClick={() => handleClick(4)} value={squares[4]} />
                    <Square onClick={() => handleClick(5)} value={squares[5]} />
                </div>
                <div className="row">
                    <Square onClick={() => handleClick(6)} value={squares[6]} />
                    <Square onClick={() => handleClick(7)} value={squares[7]} />
                    <Square onClick={() => handleClick(8)} value={squares[8]} />
                </div>
            </div>
            <div className="info">
                {isWinner ? (`${isWinner} won the game`) : ({ isXTurn } ? "X's turn" : "O's turn")}

            </div>
            <div className='reset' onClick={() => handleReset()}> Reset</div>
        </>
    );
};

export default Board;
