import { firebaseApp } from './../firebase';

export default () => firebaseApp.database().ref();
