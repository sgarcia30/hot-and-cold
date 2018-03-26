import React from 'react';

import Banner from './banner.js';
import Instructions from './instructions.js';
import Game from './game.js';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			answer: this.randomNum(),
			curGuess: '',
			historicalGuesses: [],
			curFeedback: '',
			possFeedback: ['hot', 'cold', 'Winner!'],
			instrucButton: false
		}
	}

	userGuess(curGuess) {
		this.setState({
			curGuess,
			historicalGuesses: [...this.state.historicalGuesses, curGuess],
			curFeedback: this.setFeedBack(curGuess)
		})
	}

	resetGame() {
		this.setState({
			curFeedback: '',
			historicalGuesses: [],
			curGuess: ''
		})
	}

	randomNum() {
		let randVal = 0+(Math.random()*(100-0));
		return Math.round(randVal);
	}

	setNumber() {
		this.setState({
			answer: this.randomNum()
		})
	}

	setInstrucButt(instrucButton) {
		console.log(instrucButton);
		this.setState({
			instrucButton
		})
	}

	setFeedBack(curGuess) {
		const answerMinus10 = this.state.answer - 10;
		const answerPlus10 = this.state.answer + 10;
		if (curGuess == this.state.answer) {
			return 'Winner!'
		}
		else if ( answerMinus10 <= curGuess && curGuess <= answerPlus10) {
			return 'hot'
		}
		else {
			return 'cold'
		}
	}

	render() {		
		if (!this.state.instrucButton) {
			return (
				<div className='body'>
					<Banner 
					setNumber={() => this.setNumber()}
					setInstrucButt={(instrucButton) => this.setInstrucButt(instrucButton)}
					resetGame={() => this.resetGame()}
					/>
					<Game 
					number={this.state.number}
					userGuess={(curGuess) => this.userGuess(curGuess)}
					guessCount={this.state.historicalGuesses.length}
					curFeedback={this.state.curFeedback}
					historicalGuesses={this.state.historicalGuesses}
					/>
				</div>
			)
		}
		return (
			<div className='instructs'>
				<Instructions setInstrucButt={(instrucButton) => this.setInstrucButt(instrucButton)}/>
			</div>
		)
	}
}