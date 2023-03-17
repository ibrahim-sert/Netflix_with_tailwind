import { createContext,useContext,useEffect,useState } from "react";
import {auth} from "../firebase"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth"

const AuthContext=createContext()

export const AuthContextProvider=({children})=>{

    const [user, setUser] = useState({})

    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
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
    
    const values ={signUp,logIn,logOut,user}
    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )

}

export const UserAuth=()=>{
    return useContext(AuthContext)
}