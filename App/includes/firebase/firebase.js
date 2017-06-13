import * as firebase from "firebase";

class Firebase {

  /**
   * Initialises Firebase
   */
  static initialize() {
    firebase.initializeApp({
      apiKey: "AIzaSyBTY7VHohrdcfodcg9NsFAErZY-_qHKeEI",
      authDomain: "applogin-d5b02.firebaseapp.com",
      databaseURL: "https://applogin-d5b02.firebaseio.com",
      projectId: "applogin-d5b02",
      storageBucket: "applogin-d5b02.appspot.com",
      messagingSenderId: "261976937293"
    });
  }

}

export default Firebase;
