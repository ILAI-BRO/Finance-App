import React from 'react'
import Foot from '../views/global/Foot'

import DataList from '../views/local/DataList'

const Stat = () => {
	return (
		<React.Fragment>
			<DataList data={[]} />
			<Foot></Foot>
		</React.Fragment>
	)
}

export default Stat
