function choice(coins){
	let randomIndex = Math.floor(Math.random() * coins.length);
	return coins[randomIndex];
}

export {choice};