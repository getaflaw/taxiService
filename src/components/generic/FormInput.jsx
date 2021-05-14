import React from 'react';
import PropTypes from 'prop-types'


export const FormInput = ({className, register, errors, title, type='text', onchange})=> {
	return (<label className={`login-form__input ${className}`}>
		<span className={`${className}__description`}>{title}</span>
		<input className={`${className}__input`} {...register} type={type} onChange={onchange}/>
		{errors && <span className={`${className}__error`}>{errors.message}</span>}
	</label>)
}
FormInput.propTypes = {
	className: PropTypes.string.isRequired,
	register: PropTypes.object,
	error: PropTypes.object,
	title: PropTypes.string.isRequired,
	type: PropTypes.string,
	pattern: PropTypes.string
}
