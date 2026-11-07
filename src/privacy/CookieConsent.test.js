/* eslint-disable testing-library/no-node-access, testing-library/prefer-find-by -- Analytics script tags live in document.head and are not accessible UI elements. */
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CookieConsent from './CookieConsent';
import { CONSENT_KEY, readConsent, saveConsent } from './consent';

beforeEach(() => {
  localStorage.clear();
  document.getElementById('lptb-analytics')?.remove();
  delete window.gtag;
  delete window.dataLayer;
});

function renderConsent(route = '/') {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <CookieConsent />
    </MemoryRouter>,
  );
}

test('does not load analytics before a choice or when optional analytics is rejected', async () => {
  renderConsent();
  await screen.findByRole('button', { name: 'No thanks' });
  expect(document.getElementById('lptb-analytics')).toBeNull();
  fireEvent.click(screen.getByRole('button', { name: 'No thanks' }));
  expect(readConsent().analytics).toBe(false);
  expect(document.getElementById('lptb-analytics')).toBeNull();
});

test('loads analytics after opt-in and disables it after withdrawal', async () => {
  renderConsent();
  fireEvent.click(await screen.findByRole('button', { name: 'Allow cookies' }));
  await waitFor(() => expect(document.getElementById('lptb-analytics')).not.toBeNull());
  expect(readConsent().analytics).toBe(true);
  expect(window['ga-disable-G-BWFZCE3K41']).toBe(false);

  act(() => window.dispatchEvent(new Event('lptb:cookie-settings')));
  expect(screen.getByRole('dialog')).toBeTruthy();
  fireEvent.click(screen.getByRole('button', { name: 'No thanks' }));
  expect(readConsent().analytics).toBe(false);
  expect(window['ga-disable-G-BWFZCE3K41']).toBe(true);
});

test('does not enable analytics on account or quotation routes even after opt-in', async () => {
  saveConsent(true);
  renderConsent('/quotation');
  await waitFor(() => expect(window['ga-disable-G-BWFZCE3K41']).toBe(true));
  expect(document.getElementById('lptb-analytics')).toBeNull();
});

test('expired or invalid consent does not silently enable analytics', () => {
  localStorage.setItem(CONSENT_KEY, '{broken');
  expect(readConsent()).toBeNull();
  localStorage.setItem(
    CONSENT_KEY,
    JSON.stringify({ version: 1, analytics: true, updatedAt: '2020-01-01T00:00:00Z' }),
  );
  expect(readConsent()).toBeNull();
});
