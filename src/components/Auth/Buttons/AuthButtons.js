import { getAuth, signOut } from 'firebase/auth';
import { useHistory } from 'react-router';
import StyledButton from './AuthButtonStyles';

const SignInButton = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/login");
  }
  return (
    <StyledButton onClick={handleClick}>
      Sign in
    </StyledButton>
  )
};

const SignOutButton = () => {
  const history = useHistory();
  const handleClick = () => {
    localStorage.setItem("user", "logged-out");
    signOut(getAuth());
    history.push("/");
  }
  return (
    <StyledButton onClick={handleClick}>
      Sign out
    </StyledButton>
  )
};


export {
  SignInButton,
  SignOutButton,
}