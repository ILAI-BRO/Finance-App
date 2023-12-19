import React from 'react'
import css from '../../styles/form.css'
import InputComponent from '../comps/Input'
import Foot from '../views/global/Foot'
import Head from '../views/global/Head'

const { FormContainer, Button } = css

const Main = () => {
	return (
		<React.Fragment>
			<Head></Head>
			<FormContainer>
				<InputComponent placeholder={'Введите сумму транзакций'} />
				<InputComponent placeholder={'Введите сумму транзакций'} />
				<InputComponent placeholder={'Введите комментарий'} />
				<Button backgroundColor={'rgb(229, 229, 229)'}>
					Сохранить транзакцию
				</Button>
			</FormContainer>
			<Foot></Foot>
		</React.Fragment>
	)
}

export default Main
