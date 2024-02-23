import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

import Password from './Password';

describe('Password', () => {
  it('renders without crashing', () => {
    render(<Password />);
    expect(screen.getByText('Generated password:')).toBeInTheDocument();
  });
});