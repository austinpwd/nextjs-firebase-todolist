import { useState, useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "libs/firebase";

function useAuth() {
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            } else {
                setUser(null)
            }
        })
    })
    return {

    }
}

export {useAuth};