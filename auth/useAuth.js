import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect, useMemo } from "react"
import { auth } from "../utils/firebase";


export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
      const unSub = onAuthStateChanged(auth, user => {

        if(user) {
            setIsLoggedIn(true);
            setUser(user)
        } else {
            setIsLoggedIn(false);
            setUser({});
        }
      });

      return unSub;
    }, []);

    const values = {
        user, isLoggedIn
    }

    return useMemo(() => values, [values]);
}