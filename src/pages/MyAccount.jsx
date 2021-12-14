import React from 'react';
import '@styles/MyAccount.scss';

const MyAccount = () => {
	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="title1">Mi Cuenta</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Nombre</label>
						<p className="value">Camila Yokoo</p>
						<label for="email" className="label">Correo electrónico</label>
						<p className="value">camilayokoo@gmail.com</p>
						<label for="password" className="label">Contraseña</label>
						<p className="value">*********</p>
					</div>
					<input type="submit" value="Editar" className="secondary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default MyAccount;
