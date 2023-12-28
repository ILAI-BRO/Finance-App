import React, { useState } from 'react'
import css from '../../styles/form.css'

// const object = {
// 	one: 40,
// 	two: 32,
// 	three: 12,
// }

// const example = object => {
// 	const { one, two, three } = object
// 	return one + two + three
// }

const { Input } = css

const InputComponent = props => {
	const { placeholder, maxLength, action, inputValue } = props

	const [countValue, setCountValue] = useState(maxLength)

	const count = () => {
		setCountValue(countValue - action.length)
		console.log(countValue)
	}

	return (
		<React.Fragment>
			<Input
				value={inputValue}
				type={'text'}
				placeholder={placeholder}
				maxLength={maxLength}
				onChange={event => {
					const newValue = event.target.value
					action(newValue)
					count(newValue)
				}}
			/>
		</React.Fragment>
	)
}

export default InputComponent
