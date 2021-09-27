import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuthForm from '../AuthForm';

describe('testing the form inputs', () => {
    it('should show the e-mail input', () => {
        render(<AuthForm/>);
        const Email = screen.getByText("Email address")
        expect(Email).toBeInTheDocument();
      });

     it('should show the password input', () => {
        render(<AuthForm/>);
        const Password = screen.getByText('Password')
        expect(Password).toBeInTheDocument();
      });

      it('should show the sign-in button', () => {
        render(<AuthForm/>);
        const Button = screen.getByRole('button')
        expect(Button).toBeInTheDocument();
      });
});