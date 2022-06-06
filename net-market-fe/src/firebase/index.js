import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/storage";
import 'firebase/compat/firestore';

const envApiKey= process.env.NODE_ENV;
console.log(envApiKey);

const firebaseConfig = {
	apiKey: envApiKey,
	authDomain: "netmarketfbase.firebaseapp.com",
	projectId: "netmarketfbase",
	storageBucket: "netmarketfbase.appspot.com",
	messagingSenderId: "300242435283",
	appId: "1:300242435283:web:fee772f7ef89e3bfaca826",
	measurementId: "G-F873SHPX68",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export const uploadImage = (file) => {
	return new Promise((resolve, reject) => {
		const uploadProcess = storage
			.ref(`images/${file.name}-${file.lastModified}`)
			.put(file);

		uploadProcess.on(
			"state_changed",
			(snapshot) => console.log("uploading image", snapshot),
			reject,
			() => {
				console.log("enter", file);
				storage
					.ref("images")
					.child(`${file.name}-${file.lastModified}`)
					.getDownloadURL()
					.then(resolve);
			}
		);
	});
};
