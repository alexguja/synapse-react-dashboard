import { useCallback } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import AuthForm from '../../components/Auth/Forms/AuthForm';

const Login = ({ history }) => {
  const auth = getAuth();
  const handleSubmit = useCallback(async (e, email, password, auth) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password);
      history.push("/dashboard");
    } catch (e) {
      alert(e.message)
    }
  }, [history])

  return (
    <AuthForm
      handleSubmit={handleSubmit}
      formTitle={"Sign in"} 
      buttonText={"Sign in"}
      auth={auth}
    />
  )
}

export default Login;