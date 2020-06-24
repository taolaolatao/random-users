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
			const response = await axios.get('http://localhost:1002/users');
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
