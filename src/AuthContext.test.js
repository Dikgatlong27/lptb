import { act, render, screen, waitFor } from '@testing-library/react';
import { AuthProvider, useAuth } from './AuthContext';
import { subscribe } from './authClient';

jest.mock('./authClient', () => ({
  subscribe: jest.fn(),
  signup: jest.fn(),
  login: jest.fn(),
  logout: jest.fn(),
}));

function PublicPage() {
  const { currentUser, loading } = useAuth();
  return (
    <>
      <h1>Public homepage</h1>
      <p role="status">
        {loading ? 'Checking account' : currentUser?.displayName || 'Visitor'}
      </p>
    </>
  );
}

test('public content is visible while the separate auth client initializes', async () => {
  const unsubscribe = jest.fn();
  subscribe.mockReturnValue(unsubscribe);
  const view = render(
    <AuthProvider>
      <PublicPage />
    </AuthProvider>,
  );

  expect(screen.getByRole('heading').textContent).toBe('Public homepage');
  expect(screen.getByRole('status').textContent).toBe('Checking account');
  await waitFor(() => expect(subscribe).toHaveBeenCalledTimes(1));

  act(() => subscribe.mock.calls[0][0]({ uid: 'test-user', displayName: 'Tebogo' }));
  expect(screen.getByRole('status').textContent).toBe('Tebogo');

  view.unmount();
  expect(unsubscribe).toHaveBeenCalledTimes(1);
});
