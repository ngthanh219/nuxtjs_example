import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCj49J9KuZ2-BLEknVUmvLvHp-6ZFgqFcM',
  authDomain: 'water-monitoring-test.firebaseapp.com',
  databaseURL: 'https://water-monitoring-test-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'water-monitoring-test',
  storageBucket: 'water-monitoring-test.appspot.com',
  messagingSenderId: '729118892550',
  appId: '1:729118892550:web:ecc025b5efe89817cc9987',
  measurementId: 'G-9TBB7036VG'
};

const firebase = initializeApp(firebaseConfig);

export default firebase;