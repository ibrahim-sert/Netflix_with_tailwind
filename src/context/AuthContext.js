import { createContext,useContext,useEffect,useState } from "react";
import {auth,db} from "../firebase"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth"
import {setDoc,doc} from "firebase/firestore"

const AuthContext=createContext()

export const AuthContextProvider=({children})=>{

    const [user, setUser] = useState({})

    const signUp=(email,password)=>{
         createUserWithEmailAndPassword(auth,email,password)
         setDoc(doc(db,"users",email),{
            savedShows:[]
         })
    }

    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(() => {
        const likedSub = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        });
        return ()=>{
            likedSub()
        }
        }, [])
    
    return(
        <AuthContext.Provider value={{signUp,logIn, logOut,user}}>
            {children}
        </AuthContext.Provider>
    )

}

export const UserAuth=()=>{
    return useContext(AuthContext)
}