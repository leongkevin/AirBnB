import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import * as sessionActions from '../../store/session';
import './CreateSpots.css';

function CreateSpotsModal() {
	const dispatch = useDispatch();

	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [country, setCountry] = useState('');
	const [lat, setLat] = useState('');
	const [lng, setLng] = useState('');
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			setErrors([]);
			return dispatch(
				sessionActions.signup({
					email,
					username,
					firstName,
					lastName,
					password,
				})
			)
				.then(closeModal)
				.catch(async (res) => {
					const data = await res.json();
					if (data && data.errors) setErrors(data.errors);
				});
		}
		return setErrors([
			'Confirm Password field must be the same as the Password field',
		]);
	};

	return (
		<>
			<h1 className="welcome-header">Welcome to Bnb-hub</h1>
			<form onSubmit={handleSubmit}>
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
				<input
					type="text"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
					required
					placeholder="Address"
					className="profile-input"
				/>
				<input
					type="text"
					value={city}
					onChange={(e) => setCity(e.target.value)}
					required
					placeholder="City"
					className="profile-input"
				/>
				<input
					type="text"
					value={state}
					onChange={(e) => setAddress(e.target.value)}
					required
					placeholder="Address"
					className="profile-input"
				/>
				<input
					type="text"
					value={address}
					onChange={(e) => setState(e.target.value)}
					required
					placeholder="State"
					className="profile-input"
				/>
				<input
					type="text"
					value={country}
					onChange={(e) => setCountry(e.target.value)}
					required
					placeholder="Country"
					className="profile-input"
				/>
				<input
					type="text"
					value={address}
					onChange={(e) => setLat(e.target.value)}
					required
					placeholder="Lat"
					className="profile-input"
				/>
				<input
					type="text"
					value={lng}
					onChange={(e) => setLng(e.target.value)}
					required
					placeholder="Lng"
					className="profile-input"
				/>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
					placeholder="Name"
					className="profile-input"
				/>
				<input
					type="text"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					required
					placeholder="Description"
					className="profile-input"
				/>
				<input
					type="text"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					required
					placeholder="Price"
					className="profile-input"
				/>

				<button type="submit" className="profile-input submit">
					Sign Up
				</button>
			</form>
		</>
	);
}

export default CreateSpotsModal;
