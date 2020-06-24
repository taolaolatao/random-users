export const addUsers = (users) => {
	return {
		type: 'ADD_USERS',
		users,
	};
};

export const randomUsers = (users) => {
	return {
		type: 'RANDOM_USERS',
		users,
	};
};
