import React from 'react';

import './banner.css';

export default function Banner(props) {
	return(
		<header className='banner'>
			<nav>
				<ul>
					<li>
						<a 
						className='what' 
						href='#' 
						onClick={() => props.setInstrucButt(true)}
						>
						What?
						</a>
					</li>
					<li>
						<a 
						className='new-game' 
						href='#'
						onClick={() => {
							props.setNumber();
							props.resetGame();
						}}
						>
						+ New Game
						</a>
					</li>
				</ul>
			</nav>
			<h1>HOT or COLD</h1>
		</header>
	)
}