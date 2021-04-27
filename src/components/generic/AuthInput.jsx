import React from 'react';
import PropTypes from 'prop-types'


export const AuthInput = ({className, register, errors, title, type='text'})=> {
	return (<label className={`login-form__input ${className}`}>
		<span className={`${className}__description`}>{title}</span>
		<input className={`${className}__input`} {...register} type={type}/>
		{errors && <span className={`${className}__error`}>{errors.message}</span>}
	</label>)
}
AuthInput.propTypes = {
	className: PropTypes.string.isRequired,
	register: PropTypes.object,
	error: PropTypes.object,
	title: PropTypes.string.isRequired,
	type: PropTypes.string
}
