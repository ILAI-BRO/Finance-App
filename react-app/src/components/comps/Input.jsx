import React from 'react'
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
	const { placeholder } = props
	return (
		<React.Fragment>
			<Input type={'text'} placeholder={placeholder} maxLength={'100'} />
		</React.Fragment>
	)
}

export default InputComponent
