import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../Footer';

describe('testing the footer content', () => {
    it('should show trade mark', () => {
      render(<Footer/>);
      const tradeMark = screen.getByText('Synapse © 2021');
      expect(tradeMark).toBeInTheDocument();
    });
});