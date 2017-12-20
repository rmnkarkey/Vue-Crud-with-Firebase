import { initializeApp } from 'firebase';

const app = initializeApp({
	apiKey: "AIzaSyA5D255xKqe8xE67glwJvIJi8B5wv4AR7g",
    authDomain: "second-project-bbc9d.firebaseapp.com",
    databaseURL: "https://second-project-bbc9d.firebaseio.com",
    projectId: "second-project-bbc9d",
    storageBucket: "second-project-bbc9d.appspot.com",
    messagingSenderId: "877569537668"
});

export const db = app.database();
export const namesRef = db.ref('names');
