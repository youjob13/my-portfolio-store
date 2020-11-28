import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkgovCq95RaEEFv5VyzxkfD3x-4hDCmUM",
  authDomain: "db-for-store-test.firebaseapp.com",
  databaseURL: "https://db-for-store-test.firebaseio.com",
  projectId: "db-for-store-test",
  storageBucket: "db-for-store-test.appspot.com",
  messagingSenderId: "495919001327",
  appId: "1:495919001327:web:bceed7b480f6adc5f1f51a",
};
firebase.initializeApp(firebaseConfig);

let firestore = firebase.firestore();

const db = firestore.collection("goods").doc("bbh8FnoADhfhOo4yzg09");
export const goodsAPI = {
  getGoods() {
    return db.get();
  },
};
