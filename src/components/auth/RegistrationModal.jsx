import './RegistrationModal.scss'
import React from "react";
import {Link} from "react-router-dom";
import {Loading} from "../generic/Loading";
import {AuthInput} from "../generic/AuthInput";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";

export const RegistrationModal = () => {
	const dispatch = useDispatch()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onRegistartionSubmit = data => {

	}

	return <div className='registration-window'>
		<div className='registration-modal'>
			<h2 className={'registration-modal__title'}>Регистрация</h2>
			<h5 className={'registration-modal__error'}></h5>
			<form className={'registration-modal__form registration-form'} onSubmit={handleSubmit(onRegistartionSubmit)}>
				<AuthInput
					title={'Email*'}
					className={'email-label'}
				/>
				<AuthInput
					title={'Как вас зовут?*'}
					className={'userName-label'}
				/>
				<AuthInput
					title={'Придумайте пароль'}
					className={'password-label'}
					type='password'
					register={register('password', {required: 'Введите пароль', minLength: 8})}
					errors={errors.password}
				/>
				<input type='submit' value='Зарегестрироваться' className={'login-form__submit'}/>
			</form>
			<span className={'login-modal__registration'}>Уже зарегестрированны?
					<Link to='/login'	className={'login-modal__registration_link'}> Войти</Link></span>
		</div>
	</div>
}