import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBLb2gaL1LGmaK56KOA4B2DkMsTtbVOldo',
  authDomain: 'crypto-gt.firebaseapp.com',
  projectId: 'crypto-gt',
  storageBucket: 'crypto-gt.appspot.com',
  messagingSenderId: '706250025149',
  appId: '1:706250025149:web:9179dd5e9a367f5bbeefd4',
  measurementId: 'G-Q4YFJ8WQWC',
  databaseURL: 'https://crypto-gt-default-rtdb.firebaseio.com',
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
