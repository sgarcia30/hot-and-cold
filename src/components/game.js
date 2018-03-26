import React from 'react';

import './game.css';

export default function Game(props) {
	return (
		<section className="game">
			<h2>Make your Guess!</h2>
			<span id='feedback'>{props.curFeedback}</span>
			<form 
			onSubmit={(event) => {
				event.preventDefault();
				props.userGuess(event.target.userGuess.value);
				event.target.userGuess.value = '';
			}}
			>
				<input 
				type='text' 
				name='userGuess' 
				id='userGuess' 
				maxLength='3' 
				autoComplete='off' 
				placeholder='Enter your Guess' 
				required
				>
				</input>
				<input 
				type='submit' 
				id='guessButton' 
				className='button' 
				name='submit' 
				value='Guess'
				>
				</input>
			</form>
			<p>
				<span id='count'>Guess #{props.guessCount}</span>!
			</p>
			<ul id='guessList' className='guessBox'>
			</ul>
		</section>
	)
}