import React from 'react';
import {FormInput} from "../generic/FormInput";
import {Logo} from "../generic/svg-logo";
import './ProfileDetail.scss'
import {MasterCardIcon} from "../generic/mastercard-logo";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setCardData} from "../../state/redux/actions";
import {dateToExpiryDate} from "../../helper/formatDate";



export const ProfileDetail = () => {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();
	const cardData = useSelector(state=> state.card.dataCard)
	const dispatch = useDispatch()

	const submitCardData = (data) => {
		dispatch(setCardData(data))
	}

	return (
			<div className='profile-modal'>
				<h2 className='profile-modal__title'>Профиль</h2>
				<h5 className='profile-modal__subtitle'>Введите платежные данные</h5>
				<form className='profile-modal__form profile-form inner-form' onSubmit={handleSubmit(submitCardData)}>

					<div className='inner-form__left'>
						<FormInput
							title='Имя Владельца'
							className='profile-userName'
							errors={errors.cardName}
							register={register('cardName', {required: 'Введите Имя и Фамилию',
								pattern: {
									value: /\S+/,
									message: "Введите Имя и Фамилию через пробел"
								}})}
						/>
						<FormInput
							title='Номер карты'
							className='profile-card'
							errors={errors.cardNumber}
							register={register('cardNumber',
								{required: 'Введите номер карты',
									minLength:{value:16, message:'Неверный формат номера карты'},
									maxLength:{value:20, message:'Неверный формат номера карты'}
								})}
						/>
						<FormInput
							title='MM/YY'
							className='profile-date'
							errors={errors.expiryDate}
							register={register('expiryDate', {required: 'Введите Месяц/Год'})}
						/>
						<FormInput
							title='CVC'
							className='profile-cvc'
							errors={errors.cvc}
							register={register('cvc', {required: 'Введите CVC код'})}
							type='number'
						/>
					</div>
					<div className='inner-form__right card-data'>
						<Logo width='34' height='34'/>
						<span className='card-data__date'>{cardData.expiryDate? cardData.expiryDate : '00/00'}</span>
						<span className='card-data__card'>{cardData.cardNumber? cardData.cardNumber : '0000 0000 0000 0000'}</span>
						<span className='card-data__mastercard'>
							<MasterCardIcon />
						</span>

					</div>
					<div className='inner-form__submit'>
						<input type='submit' value='Сохранить'/>
					</div>

				</form>
			</div>
	)
}