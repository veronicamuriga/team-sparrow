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

//THIS CONNECTS WITH FIREBASE EMULATORS. ONLY FOR TESTING PURPOSES!! COMMENT OUT WHEN PUSHING!!
//

// var db = firebase.firestore();
// db.settings({
// 	host: "localhost:8080",
// 	ssl: false
// });

//
//THIS CONNECTS WITH FIREBASE EMULATORS. ONLY FOR TESTING PURPOSES!! COMMENT OUT WHEN PUSHING!!


export const firestore = firebase.firestore();
export const auth = firebase.auth();

var provider = new firebase.auth.TwitterAuthProvider();
auth.useDeviceLanguage()

// Used to display a popup Twitter sign in page
export const signInWithTwitter = async () => {
	return firebase.auth().signInWithPopup(provider).then(function(result) {
		var token = result.credential.token;
		var secret = result.credential.secret;
		var user = result.user;
		alert("Signed in.")
		return user;
	}).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		console.log(errorMessage)
		// The email of the user's account used.
		var email = error.email;
		// The firebase.auth.AuthCredential type that was used.
		var credential = error.credential;
		// ...
	});
}

// Called when a user wants to sign out
export const signOut = () => {
	firebase.auth().signOut().then(function() {
		// Sign-out successful.
		alert("Signed out.")
	}).catch(function(error) {
		// An error happened.
	});
}

// Gets the associated user data from firestore.
// Returns null if the user does not have a document.
export const getUserDoc = async (user, additionalData) => {
	if(!user){
		return null;
	}

	const providerData = user.providerData[0];
	const uid = user.uid;

	console.log(user)

	const userDoc = firestore.doc('users/' + uid);
	const snapshot = await userDoc.get().catch(error => {
		console.error("Error fetching user doc.")
		return null;
	})

	if(snapshot == null || !snapshot.exists) {
		console.log("New user detected! Generating a user document...")
		//Create the document
		await userDoc.set({
			id: uid,
			twitter_id: providerData.uid,
			name: providerData.displayName,
			photoURL: providerData.photoURL,
			role: 'user',
			stats: {
				who_has_more_followers: {
					correct_answers: 0,
					incorrect_answers: 0,
					games_played: 0,
					score: 0
				},
				guess_who_tweeted: {
					correct_answers: 0,
					incorrect_answers: 0,
					games_played: 0,
					score: 0
				},
				total: {
					correct_answers: 0,
					incorrect_answers: 0,
					games_played: 0,
					score: 0
				}
			},
			time_created: firebase.firestore.FieldValue.serverTimestamp(),
			last_updated: firebase.firestore.FieldValue.serverTimestamp()
		}).catch(e => {
			console.error("Error creating the user document", e)
			alert(e.message)
			return null;
		});
		console.log("Successfully generated a user document.")
	}
	return getUserData(uid);
}

// Returns the data from a users document
const getUserData = async (uid) => {
	if(!uid){
		return null;
	}

	try {
		const userDocument = await firestore.doc(`users/${uid}`).get();
		console.log("GOT USER DATA.", userDocument.data());

		return {
			uid,
			...userDocument.data()
		}
	}
	catch (e){
		console.error("Error", e);
		return null;
	}
}