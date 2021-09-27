import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from '../Hero';

describe('testing the hero content', () => {
    it('should show the company name', () => {
      render(<Hero/>);
      const company= screen.getByText('Synapse Marine');
      expect(company).toBeInTheDocument();
    });
    
    it('should show the company description', () => {
        render(<Hero/>);
        const company= screen.getByText('Synapse takes you to the future of sailing technology. Monitor every minute adjustment with real-time load data at your fingertips.');
        expect(company).toBeInTheDocument();
      });
});