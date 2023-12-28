import React, { useState } from 'react'
import Head from '../src/components/views/global/Head.jsx'
import Main from './components/pages/Main.jsx'
import Stat from './components/pages/Stat.jsx'

function App() {
	const [showPage, setShowPage] = useState('main')
	return (
		<React.Fragment>
			<Head action={setShowPage}></Head>
			{showPage === 'main' ? <Main></Main> : <Stat></Stat>}
		</React.Fragment>
	)
}

export default App
