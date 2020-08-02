import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyDFyOASdZfYkIELD8utZ-0IhYa6xvMb_bU",
	authDomain: "twivia.firebaseapp.com",
	databaseURL: "https://twivia.firebaseio.com",
	projectId: "twivia",
	storageBucket: "twivia.appspot.com",
	messagingSenderId: "218327495804",
	appId: "1:218327495804:web:de865c8a2d296daa6cc5f9"
  };

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

var provider = auth.TwitterAuthProvider();
auth.useDeviceLanguage()

firebase.auth().signInWithPopup(provider).then(function(result) {
	var token = result.credential.token;
	var secret = result.credential.secret;
	var user = result.user;
}).catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	// The email of the user's account used.
	var email = error.email;
	// The firebase.auth.AuthCredential type that was used.
	var credential = error.credential;
	// ...
  });

export const signInWithTwitter = () => {
	
}

export const signOut = () => {
	firebase.auth().signOut().then(function() {
		// Sign-out successful.
	}).catch(function(error) {
		// An error happened.
	});
}