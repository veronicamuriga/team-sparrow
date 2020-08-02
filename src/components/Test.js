import React, {useContext} from 'react'
import { UserContext } from '../contexts/UserContext'
import {signOut} from './firebase'


export default function Test() {

	const {signIn} = useContext(UserContext);

	const signInTest = (event) => {
		event.preventDefault();
		signIn();
	}

	const signOutTest = (event) => {
		event.preventDefault();
		signOut();
	}


	return (
		<div>
			<button onClick={event => signInTest(event)}>Sign In</button><br/>
			<button onClick={event => signOutTest(event)}>Sign Out</button>
		</div>
	)
}

