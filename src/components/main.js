import React from 'react';

import Banner from './banner.js';
import Instructions from './instructions.js';
import Game from './game.js';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			number: this.randomNum(),
			curGuess: '',
			historicalGuesses: [],
			curFeedback: '',
			possFeedback: ['hot', 'cold'],
			instrucButton: false
		}
	}

	setCurGuess(curGuess) {
		this.setState({
			curGuess
		})
	}

	randomNum() {
		let randVal = 0+(Math.random()*(100-0));
		return Math.round(randVal);
	}

	setNumber() {
		this.setState({
			number: this.randomNum()
		})
	}

	setInstrucButt(instrucButton) {
		console.log(instrucButton);
		this.setState({
			instrucButton
		})
	}

	render() {		
		if (!this.state.instrucButton) {
			return (
				<div className='body'>
					<Banner 
					setNumber={() => this.setNumber()}
					setInstrucButt={(instrucButton) => this.setInstrucButt(instrucButton)}
					/>
					<Game 
					number={this.state.number}
					setCurGuess={(curGuess) => this.setCurGuess(curGuess)}
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