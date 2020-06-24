import React from 'react';

const User = ({ name, location, picture, email, gender, dob }) => {
	return (
		<div className="random-user">
			<div className="user-image">
				<img src={picture.medium} alt={name.first} />
			</div>
			<div>
				<strong>Name:</strong>{' '}
				<b>
					{name.first} {name.last}
				</b>
			</div>
			<div>
				<strong>Country:</strong> <b>{location.country}</b>
			</div>
			<div>
				<strong>Gender:</strong> <b>{gender}</b>
			</div>
			<div>
				<strong>Age:</strong> <b>{dob.age}</b>
			</div>
			<div>
				<strong>Email:</strong> <b>{email}</b>
			</div>
		</div>
	);
};

export default User;
