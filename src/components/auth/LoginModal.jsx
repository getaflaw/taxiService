import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {loggedIn} from '../../state/redux/actions'
import {useForm} from 'react-hook-form';
import {Loading} from "../generic/Loading";
import {Link} from "react-router-dom";
import {FormInput} from "../generic/FormInput";

const LoginModal = () => {

	const isLoading = useSelector(state => state.login.isLoading)
	const dispatch = useDispatch()
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();

	const onAuthSubmit = (data) => {
		dispatch(loggedIn({email: data.email, password: data.password}))
	}

	return (
		<div className="login-window">
			<div className={'login-modal'}>
				<h2 className={'login-modal__title'}>Войти</h2>
				<h5 className={'login-modal__error'}></h5>
				<form className={'login-modal__form login-form'} onSubmit={handleSubmit(onAuthSubmit)}>
					<FormInput
						className='email-label'
						title='Email'
						errors={errors.email}
						register={register('email',
							{
								required: 'Введите адрес электронной почты',
								pattern: {
									value: /\S+@\S+.\S+/,
									message: "Неверный формат электронной почты"
								}
							})}
					/>
					<FormInput
						title='Пароль'
						className={'password-label'}
						type='password'
						register={register('password', {required: 'Введите пароль'})}
						errors={errors.password}
					/>

					<a className={'login-form__forget-password'}>Забыли пароль?</a>
					<input type='submit' value='Войти' className={'login-form__submit'}/>
				</form>
				<span className={'login-modal__registration'}>Новый пользователь?
					<Link to='/login/registration'
						  className={'login-modal__registration_link'}> Регистрация</Link></span>
			</div>
			{isLoading && <Loading/>}
		</div>
	)
}


export default LoginModal