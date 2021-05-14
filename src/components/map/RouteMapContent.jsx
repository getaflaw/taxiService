import React, {useEffect, useState} from "react";
import {RouteMapLayout} from "./RouteMapLayout";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {requestRouterWay} from "../../state/redux/actions";

export const RouteMapContent = () => {
	const ArrayAddressList = useSelector(state => state.mapRoute.addressList)
	const dispatch = useDispatch();
	const [startingPoint, setStartingPoint] = useState('')
	const [endingPoint, setEndingPoint] = useState('')
	const { register, handleSubmit, formState: {errors}, } = useForm();
	const selecterChange = e => {
		if (e.target.name === 'address1') {
			setStartingPoint(e.target.value)
		}
		if (e.target.name === 'address2') {
			setEndingPoint(e.target.value)
		}
	}
	const StartingAddressList = ArrayAddressList.filter(value => value !== endingPoint)
	const EndingAddressList = ArrayAddressList.filter(value => value !== startingPoint)

	const onSubmit = (data) => {
		console.log([data.address1,data.address2])
		dispatch(requestRouterWay([data.address1,data.address2]))
	}
	return (
		<RouteMapLayout className='route-window'>
			<form className='route-way' onSubmit={handleSubmit(onSubmit)}>
				<select className='route-way__starting'
						{...register('address1', {required: 'Точка отправления не выбрана'})}
						name='address1'
						onChange={selecterChange}
				>
					<option value=''>Откуда</option>
					{StartingAddressList.map(value => <option value={value} key={value}>{value}</option>)}
				</select>
				{errors.address1 && <span>{errors.address1.message}</span>}
				<select className='route-way__ending'
						{...register('address2', {required: 'Точка назначения не выбрана'})}
						name='address2'
						onChange={selecterChange}
				>

					<option value=''>Куда</option>
					{EndingAddressList.map(value => <option value={value} key={value}>{value}</option>)}
				</select>
				{errors.address2 && <span>{errors.address2.message}</span>}
				<div className='route-way__taxi-type'>Quality: {startingPoint}</div>
				<input type='submit' value='Заказать' className='route-way__submit'/>
			</form>
		</RouteMapLayout>
	)
}
