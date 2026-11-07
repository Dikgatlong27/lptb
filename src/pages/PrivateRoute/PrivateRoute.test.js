import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import PrivateRoute from './PrivateRoute';

jest.mock('../../AuthContext', () => ({ useAuth: jest.fn() }));

function renderAccountRoute(authState) {
  useAuth.mockReturnValue(authState);
  render(
    <MemoryRouter initialEntries={['/dashboard']}>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <h1>Account content</h1>
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<h1>Sign in</h1>} />
      </Routes>
    </MemoryRouter>,
  );
}

test('waits for authentication before redirecting or exposing account content', () => {
  renderAccountRoute({ loading: true, currentUser: null });
  expect(screen.getByRole('status').textContent).toContain('Loading your account');
  expect(screen.queryByRole('heading')).toBeNull();
});

test('redirects a signed-out visitor after authentication resolves', () => {
  renderAccountRoute({ loading: false, currentUser: null });
  expect(screen.getByRole('heading', { name: 'Sign in' })).toBeTruthy();
});

test('allows a signed-in visitor to access their account', () => {
  renderAccountRoute({ loading: false, currentUser: { uid: 'test-user' } });
  expect(screen.getByRole('heading', { name: 'Account content' })).toBeTruthy();
});
