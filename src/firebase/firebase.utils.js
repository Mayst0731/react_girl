import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCq5vg-nrSU6-j8d-3m5k1Q8REi-rSvymE",
    authDomain: "xm-db-d0dd0.firebaseapp.com",
    databaseURL: "https://xm-db-d0dd0.firebaseio.com",
    projectId: "xm-db-d0dd0",
    storageBucket: "xm-db-d0dd0.appspot.com",
    messagingSenderId: "1009335352833",
    appId: "1:1009335352833:web:35973ffc27022419798a00",
    measurementId: "G-NR480FFHYS"
};

export const createUserProfileDocument = async(userAuth,additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth, uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) { 
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try { 
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        }catch (error) { 
            console.log('error creating user',error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
