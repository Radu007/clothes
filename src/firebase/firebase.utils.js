import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: "AIzaSyBYTm0nKUbRcQpzhUlPsg98XlDQQKmxoas",
	authDomain: "crows-f85d6.firebaseapp.com",
	databaseURL: "https://crows-f85d6.firebaseio.com",
	projectId: "crows-f85d6",
	storageBucket: "crows-f85d6.appspot.com",
	messagingSenderId: "160442928276",
	appId: "1:160442928276:web:244b75e036d095bb297881",
	measurementId: "G-2Y09SE0R7G"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`)
	const snapShot = await userRef.get()

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (e) {
			console.log('error creating user',e);
		}
	}

	return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;