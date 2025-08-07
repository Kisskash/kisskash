import { render, screen, fireEvent, act } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('shows confirmation message and hides it after 4 seconds', () => {
    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/Nom/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Message/i), {
      target: { value: 'Hello' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Envoyer/i }));

    expect(screen.getByText(/Merci pour votre message/i)).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(4000);
    });

    expect(screen.queryByText(/Merci pour votre message/i)).not.toBeInTheDocument();
  });
});
