import React, {useState} from 'react'
import {useAuth} from "./AuthProvider";

export const LoginModal = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const {login} = useAuth()

	const handleChange = e => {
		if (e.target.name === 'email') {
			setEmail(e.target.value)
		}
		if (e.target.name === 'password') {
			setPassword(e.target.value)
		}
	}
	const auth = (e) => {
		e.preventDefault()
		login(email, password)
	}
	return (
		<div className="login-window">
			<div className={'login-modal'}>
				<h2 className={'login-modal__title'}>Войти</h2>
				<form className={'login-modal__form login-form'} onSubmit={e => e.preventDefault()}>
					<label className={'login-form__email email-label'}>
						<span className={'email-label__description'}>Email</span>
						<input className={'email-label__input'}
							   type="text"
							   name='email'
							   value={email}
							   onChange={handleChange}/>
						<span className={'email-label__error'}></span>
					</label>
					<label className={'login-form__password password-label'}>
						<span className={'password-label__description'}>Пароль</span>
						<input className={'password-label__input'} type="text"
							   name='password'
							   value={password}
							   onChange={handleChange}/>
						<span className={'password-label__error'}></span>
					</label>
					<a className={'login-form__forget-password'}>Забыли пароль?</a>
					<button onClick={auth} className={'login-form__submit'}>Войти</button>
				</form>
				<span className={'login-modal__registration'}>Новый пользователь? <a
					className={'login-modal__registration_link'}>Регистрация</a></span>
			</div>
		</div>
	)
}