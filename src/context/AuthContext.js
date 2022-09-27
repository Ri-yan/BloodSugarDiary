import React,{useContext,useEffect,useState,createContext} from "react";
import { auth, db }  from '../firebase/firebase'
import { onAuthStateChanged,createUserWithEmailAndPassword,
    signInWithEmailAndPassword,signOut,sendPasswordResetEmail } from "firebase/auth";
import { addDoc, collection, serverTimestamp,query,updateDoc,where,doc,deleteDoc } from "firebase/firestore";
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
      function resetPassword(email) {
        return sendPasswordResetEmail(auth,email)
      }
      function addUser(user){
        return addDoc(collection(db, "user"),{...user,jointime:new serverTimestamp(),uid:auth.currentUser.uid});
      }
// All Records CRUD Section ///////////////////////////////////////////////////////////////////////



      function addRecord(record){
        let defaultDate = new Date()
        defaultDate.setDate(defaultDate.getDate() + 3)
        let d = defaultDate.toLocaleDateString('en-CA')
        return addDoc(collection(doc(db, "allRecord",auth.currentUser.uid),'records'),{...record,creationDate:d,lastUpdated:d})
      }

      function updateRecord(record){
        let defaultDate = new Date()
        defaultDate.setDate(defaultDate.getDate() + 3)
        const recRef = doc(db, "allRecord",auth.currentUser.uid,'records',record.docId);
        // const q = query(recRef, where("id", "==", `${record.d}`));
        return updateDoc(recRef, {...record,lastUpdated:defaultDate.toLocaleDateString('en-CA')})
      }
      function deleteRecord(record){
        const docRef = doc(db, "allRecord",auth.currentUser.uid,'records', record);
        return deleteDoc(docRef)
      }


// Routine Record Table CRUD Section ///////////////////////////////////////////////////////////////////////

      function addRoutineResult(record){
        let defaultDate = new Date()
        defaultDate.setDate(defaultDate.getDate() + 3)
        let d = defaultDate.toLocaleDateString('en-CA')
        return addDoc(collection(doc(db, "allRoutineResult",auth.currentUser.uid),'result'),{...record,creationDate:d,lastUpdated:d})
      }

      function updateRoutineResult(record){
        let defaultDate = new Date()
        defaultDate.setDate(defaultDate.getDate() + 3)
        const recRef = doc(db, "allRecord",auth.currentUser.uid,'records',record.docId);
        // const q = query(recRef, where("id", "==", `${record.d}`));
        return updateDoc(recRef, {...record,lastUpdated:defaultDate.toLocaleDateString('en-CA')})
      }
      function deleteRoutineResult(record){
        const docRef = doc(db, "allRecord",auth.currentUser.uid,'records', record);
        return deleteDoc(docRef)
      }












  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,user => {
        setCurrentUser(user)
        setLoading(false)
      })

      return unsubscribe
    }, [])

  const value = {
    signUp,logIn,logOut,currentUser,addUser,resetPassword,addRecord,updateRecord,deleteRecord,addRoutineResult,updateRoutineResult,deleteRoutineResult
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