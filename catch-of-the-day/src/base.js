// firebase  package of React that mirrows our state changes to the DB
import Rebase from "re-base";

// for everything else not related with mirrowing state
import firebase from "firebase";

// we get this from Firebase web page
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB6_zErBYvUaDA14Ji4X81QYMIYYyMh0Ts",
  authDomain: "catch-of-the-day-ari.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ari.firebaseio.com",
});

// rebase bindings
const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
