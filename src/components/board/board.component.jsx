
import React from 'react';
import './board.styles.css';
import Square from '../square/square.component';

class Board extends React.Component {
    

    constructor(props) {
        super(props);

        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            solutions : [],
        };
    }

    handleClick(i) {
        
        const squares = this.state.squares.slice();

        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }

        if (this.state.xIsNext === true) {
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
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              
              
              
              return squares[a];
          }
        }
        return null;
    }
    
    positions(squares) {
         
        if (squares[1] &&  squares[1] == squares[2] && squares[1] == squares[3]) {
            return 1;
        }
        else if (squares[4] && squares[4] == squares[5] && squares[4] == squares[6]) {
            return 2;
        }
        else if (squares[7] && squares[7] == squares[8] && squares[7] == squares[9]) {
            return 3;
        }
        else if (squares[1] && squares[1] == squares[4] && squares[1] == squares[7]) {
            return 4;
        }
        else if (squares[2] &&  squares[2] == squares[5] && squares[2] == squares[8]) {
            return 5;
        }
        else if (squares[3] && squares[3] ==  squares[6] &&  squares[3] == squares[9]) {
            return 6;
        }
        else if (squares[1] && squares[1] == squares[5] && squares[1] == squares[9]) {
            return 7;
        }
        else if (squares[3] && squares[3] == squares[5] && squares[3] == squares[7]) {
            return 8;
        }
        
     }

    ResetGame() {
        
        var squares = Array(9).fill(null);

        this.setState({
            squares:squares
        })


    }
    
    

    render() {

        let status;

        var winner = this.calculateWinner(this.state.squares);

        var solution = this.positions(this.state.squares);

        console.log(solution);

        console.log(this.state.solutions);

        if (winner) {
            status = "Winner : " + winner ;
        }
        else {
            status = "Next player : " + (this.state.xIsNext ? 'X' : 'O');
        }

        var line;

        if (this.positions(this.state.squares) == 1) {
            line =  <hr className="horizontal-line hr1"></hr>
        }
        else if (this.positions(this.state.squares) == 2) {
            line =  <hr className = "horizontal-line hr2 two" ></hr>
        }
        
        else if (this.positions(this.state.squares) == 3) {
            line =  <hr  className = "horizontal-line hr3 three"></hr>
        }
        else if (this.positions(this.state.squares) == 4) {
            line =   <hr  className = "vertical-line vr1 four"></hr>
        }
        else if (this.positions(this.state.squares) == 6) {
            line =   <hr className = "vertical-line vr2 five"></hr>
        }
        else if (this.positions(this.state.squares) == 5) {
            line =   <hr  className = "vertical-line vr3 six"></hr>
        }
        else if (this.positions(this.state.squares) == 7) {
            line =    <hr className="diagonal-line dl1"></hr>
        }

        else if (this.positions(this.state.squares) == 8) {
            line =    <hr className="diagonal-line dl2"></hr>
        }

        return (
            
            <div className="board">
                <div>
                    <h1 className="turn">{status}</h1>
                </div>

                {line}                
               
                
                
                
                
                
                <div className = "board-row">
                    
                <Square className = "top-left-square"  value={this.state.squares[1]} onClick={() => this.handleClick(1)}></Square>
                <Square className = "top-middle-square" value={this.state.squares[2]}onClick={() => this.handleClick(2)}></Square>
                <Square className = "top-right-square" value={this.state.squares[3]}onClick={() => this.handleClick(3)}></Square>
                </div>
                <div className = "board-row">
                <Square className = "middle-left-square" value={this.state.squares[4]}onClick={() => this.handleClick(4)}></Square>
                <Square className = "middle-square" value={this.state.squares[5]}onClick={() => this.handleClick(5)}></Square>
                <Square className = "middle-right-square" value={this.state.squares[6]}onClick={() => this.handleClick(6)}></Square>
                </div>
                <div className = "board-row">
                <Square className = "bottom-left-square" value={this.state.squares[7]}onClick={() => this.handleClick(7)}></Square>
                <Square className = "bottom-middle-square" value={this.state.squares[8]}onClick={() => this.handleClick(8)}></Square>
                <Square className = "bottom-right-square" value={this.state.squares[9]}onClick={() => this.handleClick(9)}></Square>
                </div>

                <div className = "play-again">
                    <button onClick = {() => this.ResetGame()} className = "button-play-again">Play again</button>
                </div>

            </div>

            
            

        )
    }
}

export default Board;



