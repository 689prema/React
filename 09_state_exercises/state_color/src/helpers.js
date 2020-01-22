function choice(allColors){
	let index = Math.floor(Math.random() * allColors.length);
	return allColors[index];
}

export {choice};