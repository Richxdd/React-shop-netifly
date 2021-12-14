import React from 'react';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title1">Nueva Cuenta</h1>
				<form action="/login" className="form">
					<div>
						<label htmlFor="name" className="label">Nombre</label>
						<input type="text" id="name" placeholder="Teff" className="input input-name" />
						<label htmlFor="email" className="label">Correo electrónico</label>
						<input type="text" id="email" placeholder="platzi@example.com" className="input input-email" />
						<label htmlFor="password" className="label">Contraseña</label>
						<input type="password" id="password" placeholder="*********" className="input input-password" />
					</div>
					
					<input type="submit" value="Crear Cuenta" className="primary-button login-button" />
					
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;
