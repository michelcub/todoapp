import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyD6srfGR3SrgFlh3QBpZ04eEjOd9T9pil0",
  authDomain: "todoapp-8f213.firebaseapp.com",
  projectId: "todoapp-8f213",
  storageBucket: "todoapp-8f213.appspot.com",
  messagingSenderId: "506930008687",
  appId: "1:506930008687:web:525f2a7782206c27e5b39a"
};

export let app;
try {
  // Intenta obtener la instancia de Firebase App
  app = getApp();
} catch (e) {
  // Si no existe ninguna instancia, inicializa Firebase App
  app = initializeApp(firebaseConfig);
}


