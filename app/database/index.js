import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDmTXbjE-BcPqjQbPxGoM6PPr9RpmA2rSc",
  authDomain: "reactandom.firebaseapp.com",
  databaseURL: "https://reactandom.firebaseio.com",
  storageBucket: "reactandom.appspot.com",
};

const app = firebase.initializeApp(config);

export default {
  database: app.database(),
  auth: app.auth(),
  providers: {
    facebook: new firebase.auth.FacebookAuthProvider(),
    google: new firebase.auth.GoogleAuthProvider(),
    github: new firebase.auth.GithubAuthProvider()
  }
};
