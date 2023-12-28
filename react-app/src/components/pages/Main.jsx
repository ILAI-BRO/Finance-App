import React, { useState } from 'react'
import css from '../../styles/form.css'
import InputComponent from '../comps/Input'
import Foot from '../views/global/Foot'
import DataList from '../views/local/DataList'

const { FormContainer, Button } = css

const params = {
	placeSum: 'Введите сумму транзакций',
	placeType: 'Введите тип транзакций',
	placeComm: 'Введите комментарий',
	maxLength: 100,
}
const { placeSum, placeType, placeComm, maxLength } = params

const Main = () => {
	const [value, setValue] = useState('')
	const [type, setType] = useState('')
	const [comment, setComment] = useState('')

	const [data, setData] = useState([])

	/////////////////////////////////////////////////////
	const validation = () => {
		if (value.length > 2 && type) {
			console.log('валидация прошла успешно')

			const dataLine = `${value}::${type}::${comment}`
			setData(prev => [...prev, dataLine])

			setValue('')
			setType('')
			setComment('')
		} else console.log('ошибка валидации')
	}
	////////////////////////////////////////////////////
	return (
		<React.Fragment>
			<FormContainer>
				<InputComponent
					inputValue={value}
					action={setValue}
					placeholder={placeSum}
					maxLength={maxLength}
				/>
				<InputComponent
					inputValue={type}
					action={setType}
					placeholder={placeType}
				/>
				<InputComponent
					inputValue={comment}
					action={setComment}
					placeholder={placeComm}
				/>
				<Button
					backgroundColor={
						value.length > 3 && type
							? 'rgb(176, 243, 71)'
							: 'rgb(229, 229, 229)'
					}
					onClick={validation}
				>
					Сохранить транзакцию
				</Button>
			</FormContainer>
			<DataList data={data}></DataList>
			<Foot></Foot>
		</React.Fragment>
	)
}

export default Main
