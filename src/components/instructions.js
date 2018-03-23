import React from 'react';
import './instructions.css';

export default function instructions(props) {
	return(
		<div className="instructs">
			<h2>What do I do?</h2>
			<p>This is a Hot or Cold Number Guessing Game.  The game goes like this:</p>
			<ul>
				<li>I pick a <u>random secret number</u> between 1 to 100 and keep it hidden.</li>
				<li>You need to <u>guess</u> until you can find the hidden secret number.</li>
				<li> You will <u>get feedback</u> on how close ("hot") or far ("cold") your guess is.</li>
			</ul>
			<p>So, Are you ready?</p>
			<button onClick={() => props.setInstrucButt(false)}>Got it!</button>
		</div>
	)
}