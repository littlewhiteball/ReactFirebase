import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyALV40uPVPrAC38yMTR5puq_eo_Pn87XzA',
    authDomain: 'freepolls-2a96d.firebaseapp.com',
    databaseURL: 'https://freepolls-2a96d.firebaseio.com',
    projectId: 'freepolls-2a96d',
    storageBucket: 'freepolls-2a96d.appspot.com',
    messagingSenderId: '883434414954',
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
