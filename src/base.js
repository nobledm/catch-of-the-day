import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAnsPTplTO5zII_CHGHeTncDGH1horP4n4",
    authDomain: "catch-of-the-day-dnoble.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-dnoble.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;