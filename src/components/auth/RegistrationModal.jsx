import './RegistrationModal.scss'
import React from "react";
import {Link} from "react-router-dom";
import {Loading} from "../generic/Loading";
import {FormInput} from "../generic/FormInput";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {registration} from "../../state/redux/actions";

export const RegistrationModal = () => {
	const dispatch = useDispatch()
	const isLoading = useSelector(state => state.registration.isLoading)
	const errorMessage = useSelector(state => state.registration.errorMsg)
	const isSuccess = useSelector(state => state.registration.isSuccess)
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();

	const onRegistartionSubmit = data => {
		const [name,surname] = data.userName.split(' ')
		console.log({email: data.email,
			password: data.password,
			name,
			surname})
		dispatch(registration({
			email: data.email,
			password: data.password,
			name,
			surname
		}))
	}

	return <div className='registration-window'>
		<div className='registration-modal'>
			<h2 className='registration-modal__title'>Регистрация</h2>
			{errorMessage && <h5 className='registration-modal__error'>{errorMessage}</h5>}
			{isSuccess && <h5 className='registration-modal__success'> Регистрация прошла успешно</h5>}
			<form className={'registration-modal__form registration-form'}
				  onSubmit={handleSubmit(onRegistartionSubmit)}>
				<FormInput
					title={'Email*'}
					className={'email-label'}
					register={register('email',
						{
							required: 'Введите адрес электронной почты',
							pattern: {
								value: /\S+@\S+.\S+/,
								message: "Неверный формат электронной почты"
							}
						})}
					errors={errors.email}
				/>
				<FormInput
					title={'Как вас зовут?*'}
					className={'userName-label'}
					register={register('userName', {
						required: 'Введите Имя и Фамилию',
						pattern: {
							value: /^\S+ \S+$/,
							message: "Введите Имя и Фамилию через пробел"
						}
					})}
					errors={errors.userName}
				/>
				<FormInput
					title={'Придумайте пароль'}
					className={'password-label'}
					type='password'
					register={register('password', {required: 'Введите пароль', minLength: {value: 8, message: 'Пароль слишком короткий'}})}
					errors={errors.password}
				/>
				<input type='submit' value='Зарегестрироваться' className={'login-form__submit'}/>
			</form>
			<span className={'login-modal__registration'}>Уже зарегестрированны?
					<Link to='/login' className={'login-modal__registration_link'}> Войти</Link></span>
		</div>
		{isLoading && <Loading/>}
	</div>
}