import { useCallback } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import AuthForm from '../../components/Auth/Forms/AuthForm';

const Signup = ({ history }) => {
  const auth = getAuth();
  const handleSubmit = useCallback(async (e, email, password, auth) => {
    e.preventDefault()
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      signOut(auth);
      history.push("/login");
    } catch (e) {
      alert(e.message)
    }
  }, [history])

  return (
    <AuthForm
      handleSubmit={handleSubmit}
      formTitle={"Sign Up"} 
      buttonText={"Sign up"}
      auth={auth}
    />
  )
};

export default Signup;