import React, { createContext, Component } from 'react'
import firebase from 'firebase'
import {signInWithTwitter, getUserDoc} from '../components/firebase'

// Contains the user related information

export const UserContext = createContext({userData: null, userAuth: null, loading: new Set()})

export default class UserContextProvider extends Component {

	static contextType = UserContext;

	state = {
		userData: "",
		userAuth: null,
		loading: new Set(["user_auth_and_data"])
	}

	// Signifies the loading of 'data' 
	startLoading = (data) => {
		console.log("Started loading '" + data +"'");
		var newLoading = new Set(this.state.loading);
		newLoading.add(data);
		this.setState({...this.state, loading: newLoading})
	}

	// Signifies the completion of loading 'data'
	finishLoading = (data) => {
		console.log("Finished loading '" + data +"'");
		var newLoading = new Set(this.state.loading);
		newLoading.delete(data);
		this.setState({...this.state, loading: newLoading})
	}

	// When this component is initialized/rendered, create an Auth listener for firebase.
	componentDidMount = () => {
		firebase.auth().onAuthStateChanged(async userAuth => {
			this.startLoading("user_auth_and_data")
			console.log("Auth state changed.")

			var user = null;
			user = await getUserDoc(userAuth);
			this.setState({userData: user, userAuth: userAuth})
			this.finishLoading("user_auth_and_data")
		})
	}

	// This makes a Twitter sign in popup appear, and then will save the auth data here.
	signIn = async () => {
		const data = await signInWithTwitter()
		console.log("Sign in data: ", data);
	}

	render() {
		return (
			<UserContext.Provider value = {{...this.state, startLoading:this.startLoading, finishLoading: this.finishLoading, signIn: this.signIn}}>
				{this.props.children}
			</UserContext.Provider>
		)
	}
}
