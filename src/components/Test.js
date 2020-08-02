import React, {useContext} from 'react'
import { getGameData } from '../components/utilities'


export default function Test() {

	const getData = async (event) => {
		event.preventDefault();
		console.log(await getGameData("whoHasMoreFollowers", "beyonce"));
	}


	return (
		<div>
			<button onClick={event => getData(event)}>Get data!</button><br/>
		</div>
	)
}

