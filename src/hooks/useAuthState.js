import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

const useAuthState = () => {
    const auth = useContext(AuthContext);
    if (auth.user != null) {localStorage.setItem("user", "logged-in")} 
    return { ...auth, isAuthenticated: auth.user != null };
  };


export { useAuthState };