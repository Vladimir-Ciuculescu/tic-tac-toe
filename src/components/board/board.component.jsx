import React from 'react';
import './board.styles.css';
import Square from '../square/square.component';

class Board extends React.Component {
    

    constructor(props) {
        super(props);

        this.state = {
            squares: Array(10).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        
        const squares = this.state.squares.slice();

        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }

        if (this.state.xIsNext == true) {
            squares[i] = 'X';
        }
        else {
            squares[i] = 'O';
        }

        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });

        console.log(squares);
    }

    rendersquare(i) {
        return (
            <Square value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            ></Square>
        )
    }

    calculateWinner(squares) {
        const lines = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7],
            
        ];
        
        for (let i = 0; i < lines.length; i++){
            const [a, b, c] = lines[i];

            if (squares[a] !== '.' && squares[a] == squares[b] && squares[a]== squares[c]) {
                return squares[a];
            }
        }

        return null;
      }

    

    render() {

        let status;

        const winner = this.calculateWinner(this.state.squares);


        if (winner) {
            status = "Winner : " + winner;
        }
        else {
            status = "Next player:" + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            
            <div className="board">
                <div>
                    <h1 className = "turn">{status}</h1>
                </div>
                <div className = "board-row">
                    {this.rendersquare(1)}
                    {this.rendersquare(2)}
                    {this.rendersquare(3)}
                </div>
                <div className = "board-row">
                    {this.rendersquare(4)}
                    {this.rendersquare(5)}
                    {this.rendersquare(6)}
                </div>
                <div className = "board-row">
                    {this.rendersquare(7)}
                    {this.rendersquare(8)}
                    {this.rendersquare(9)}
                    
                </div>
            </div>
            

        )
    }
}

export default Board;

