// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAbBZlfY9X66CF8hD4bX50GBwA85R_EIe8",
	authDomain: "slack-clone-456e2.firebaseapp.com",
	databaseURL: "https://slack-clone-456e2.firebaseio.com",
	projectId: "slack-clone-456e2",
	storageBucket: "slack-clone-456e2.appspot.com",
	messagingSenderId: "882068764933",
	appId: "1:882068764933:web:a987db3b98a7125d4e9f6c",
	measurementId: "G-ZHH1ZWSNN8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
