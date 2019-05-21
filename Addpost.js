import Firebase from 'firebase';
import firebaseConfig from './Config.js';
firebase.initializeApp(firebaseConfig);

export const addPost = (item) ={
	db.ref('/items').push({
		desc : item
	});
}