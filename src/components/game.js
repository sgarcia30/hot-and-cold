import React from 'react';

import './game.css';

export default function Game(props) {
	return (
		<section className="game">
			<h2>Make your Guess!</h2>
			<form>
				<input type='text' name='userGuess' id='userGuess' maxLength='3' autoComplete='off' placeholder='Enter your Guess' required></input>
				<input type='submit' id='guessButton' className='button' name='submit' value='Guess'></input>
			</form>
			<p>
				<span id='count'>0</span>!
			</p>
			<ul id='guessList' className='guessBox'>
			</ul>
		</section>
	)
}