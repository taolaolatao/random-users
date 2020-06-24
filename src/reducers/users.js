function shuffle(array) {
	let currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_USERS':
			return [...state, ...action.users];
		case 'RANDOM_USERS':
			return shuffle([...action.users]);
		default:
			throw new Error('Not found type of action');
	}
};
