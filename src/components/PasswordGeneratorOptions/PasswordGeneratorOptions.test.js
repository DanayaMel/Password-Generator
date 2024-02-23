import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

import PasswordGeneratorOptions from './PasswordGeneratorOptions';

describe('PasswordGeneratorOptions', () => {
  it('renders without crashing', () => {
    const updatePasswordMock = jest.fn();
    render(<PasswordGeneratorOptions password="test123" updatePassword={updatePasswordMock} />);
  });

  it('regenerates password when "Generate" button is clicked', () => {
    const updatePasswordMock = jest.fn();
    render(
      <PasswordGeneratorOptions password="test123" updatePassword={updatePasswordMock} />
    );

    fireEvent.click(screen.getByText('Generate Password'));
    expect(updatePasswordMock).toHaveBeenCalled();
  });

  it('copies password to clipboard when "Copy Secure Password" button is clicked', async () => {
    const updatePasswordMock = jest.fn();
    render(<PasswordGeneratorOptions password="test123" updatePassword={updatePasswordMock} />);
    const copyPasswordButton = screen.getByText('Copy Secure Password');

    // Mock the clipboard API
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn(() => Promise.resolve()),
      },
    });

    fireEvent.click(copyPasswordButton);

    // Wait for the asynchronous operation to complete
    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('test123');
    });
  });
});