import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBy6Oviebc33IQXiOKxjx6VRgEMpjhboMM',
  authDomain: 'the-conch-a1.firebaseapp.com',
  databaseURL: 'https://the-conch-a1.firebaseio.com',
  projectId: 'the-conch-a1',
  storageBucket: 'the-conch-a1.appspot.com',
  messagingSenderId: '1017061972440'
}

var fire = firebase.initializeApp(config)
export default fire
