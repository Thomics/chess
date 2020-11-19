import React from 'react';
import '../style/App.css';
import Gameboard from '../containers/Gameboard';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Gameboard />
			</header>
		</div>
	);
}

export default App;
