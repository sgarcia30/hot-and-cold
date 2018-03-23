import React from 'react';

import Banner from './banner.js';
import Instructions from './instructions.js';
import Game from './game.js';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 0,
			curGuess: '',
			historicalGuesses: [],
			curFeedback: '',
			possFeedback: ['hot', 'cold'],
			instrucButton: false
		}
	}

	setInstrucButt(instrucButton) {
		this.setState({
			instrucButton
		})
	}

	render() {		
		if (!this.state.instrucButton) {
			return (
				<div className='body'>
					<Banner setInstrucButt={(instrucButton) => this.setInstrucButt(instrucButton)}/>
					<Game />
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