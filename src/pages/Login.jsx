import React, { useEffect, useRef, useState } from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg'
import axios from 'axios';



const Login = () => {

	const form = useRef(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(form.current);
		const datos = {
			email: formData.get('email'),
			password: formData.get('password')
		}
		console.log(datos);
		try{
			const API = 'https://tranquil-ravine-83407.herokuapp.com/api/v1/auth/login';
            const respuesta = await fetch(API,{
                method: 'POST',
                body: JSON.stringify(datos),
				headers:{
					'Content-Type': 'application/json'
			}
            })
            console.log(respuesta);
            const resultado = await respuesta.json()
            console.log(resultado);
        }catch(error){
            console.log(error);
        }
	}	



	return (
		<div className="Login">
			
			<div className="Login-container">
			<h1 className="title1">Incio de Sesión</h1>
				<img src={logo} alt="logo" className="logo" />
				<form  className="form" ref={form}>
					<label htmlFor="email" className="label">Dirección de correo electrónico</label>
					<input type="text" name="email" 
					
					placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Contraseña</label>
					<input type="password" name="password"
					
					placeholder="*********" className="input input-password" />
					<a href="/">
					<button
						onClick={handleSubmit}
						
						className="primary-button login-button"
						  
						>
						Iniciar sesión
					</button>
					</a>
					<a href="/password-recovery">Olvidé mi contraseña</a>
				</form>
				<a href="/signup">
				<button
					className="secondary-button signup-button">
					Registrarse
				</button>
				</a>
			</div>
		</div >
	);
}

export default Login;