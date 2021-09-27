import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('testing the Navbar content', () => {
    it('should show the Home link', () => {
      render(<App/>);
      const HomeLink = screen.getByText('Home')
      expect(HomeLink).toBeInTheDocument();
    });

    it('should show the Dashboard link', () => {
      render(<App/>);
      const DashboardLink = screen.getAllByText('Dashboard')[0];
      expect(DashboardLink).toBeInTheDocument();
    });

    it('should show the sign-in button', () => {
        render(<App/>);
        const AuthLink = screen.getByText("Sign in")
        expect(AuthLink).toBeInTheDocument();
      });
});