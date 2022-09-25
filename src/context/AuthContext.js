import React,{useContext,useEffect,useState,createContext} from "react";
import { auth, db }  from '../firebase/firebase'
import { onAuthStateChanged,createUserWithEmailAndPassword,
    signInWithEmailAndPassword,signOut } from "firebase/auth";
import { addDoc, collection, Timestamp } from "firebase/firestore";
const AuthContext = createContext()
export const  AuthProvider=({ children })=>{
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signUp(email, password) {
      return createUserWithEmailAndPassword(auth,email, password)
    }
    
      function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
      }
    
      function logOut() {
        return signOut(auth)
      }

      function addUser(user){
        return addDoc(collection(db, "user"),{...user});
      }



  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,user => {
        setCurrentUser(user)
        setLoading(false)
      })

      return unsubscribe
    }, [])

  const value = {
    signUp,logIn,logOut,currentUser,addUser
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
export function useAuth() {
  return useContext(AuthContext)
}