import { create } from "zustand";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { app } from "../firebaseConfig";
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const useAuthStore = create((set) => ({
    user: null,
    is_login: false,
    login: (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          const user = userCredential.user;
          set({ user });
          set({is_login:true})
          alert('login')
        })
        .catch(error => {
          alert('error')
          console.error('Error al iniciar sesión:', error);
        });
    },
    register: (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          const user = userCredential.user;
          set({ user });
          set({is_login:true})

        })
        .catch(error => {
          console.error('Error al registrarse:', error);
          alert('error')
        });
    },
    logout: () => {
      auth.signOut()
        .then(() => {
          set({ user: null });
          set({is_login:false})
        })
        .catch(error => {
          console.error('Error al cerrar sesión:', error);
        });
    }
  }));
  
  export default useAuthStore;