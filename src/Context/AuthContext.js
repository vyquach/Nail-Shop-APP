import React, {useContext, useEffect, useState} from 'react'
import {auth} from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [userInfo, setUserInfo] = useState()

    function logIn(userName, password){
        return auth.signInWithEmailAndPassword(userName, password)
    }

    function logOut(){
        return auth.signOut()
    }

    function initUserInfo(user){
        setUserInfo(user)
    }

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubcribe
    },[])

    const value = {
        currentUser, userInfo, initUserInfo, logIn, logOut
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}