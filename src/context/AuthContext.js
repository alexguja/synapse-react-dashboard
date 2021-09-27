import { getAuth, onAuthStateChanged} from '@firebase/auth'
import { useState, useEffect, createContext } from 'react'
import { firebaseApp } from '../lib/firebase';

const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser, setError);
    return () => unsubscribe();
  }, [auth])
 
  return <AuthContext.Provider value={{ user, error}} {...props} />;
}

export {
    AuthContext,
    AuthContextProvider,
}