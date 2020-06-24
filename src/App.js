import React, { useReducer } from 'react';
import 'regenerator-runtime';
import { addUsers, randomUsers } from './actions/users';
import usersReducer from './reducers/users';
import axios from 'axios';
import UsersList from './components/UsersList';

import './App.css';

const App = () => {
	const [state, dispatch] = useReducer(usersReducer);

	const loadUsers = async () => {
		try {
			const response = await axios.get(
				'https://randomuser.me/api/?page=1&results=10'
			);
			dispatch(addUsers(response.data.results));
		} catch (error) {
			console.error(error);
		}
	};

	const random = () => {
		dispatch(randomUsers(state));
	};

	React.useEffect(() => {
		loadUsers();
	}, []);

	return (
		<div>
			<h1 className="header">Random Users Application</h1>
			<div className="root">
				<button className="customButton" onClick={random}>
					Random User
				</button>
			</div>
			<UsersList users={state} />
			<div className="root">
				<button className="customButton" onClick={loadUsers}>
					Load More
				</button>
			</div>
		</div>
	);
};

export default App;
