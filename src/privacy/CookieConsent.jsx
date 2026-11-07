import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { publicPages } from '../seo/metadata';
import { disableAnalytics, readConsent, saveConsent, trackPublicPage } from './consent';
import './Privacy.css';

export default function CookieConsent() {
  const { pathname } = useLocation();
  const [ready, setReady] = useState(false);
  const [preference, setPreference] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const dialog = useRef(null);

  useEffect(() => {
    const saved = readConsent();
    if (!saved?.analytics) disableAnalytics({ clearCookies: true });
    setPreference(saved);
    setAnalytics(saved?.analytics || false);
    setReady(true);
    const open = () => setSettingsOpen(true);
    window.addEventListener('lptb:cookie-settings', open);
    return () => window.removeEventListener('lptb:cookie-settings', open);
  }, []);

  useEffect(() => {
    if (ready && preference?.analytics && publicPages[pathname])
      trackPublicPage(pathname);
    else disableAnalytics();
  }, [ready, preference, pathname]);

  useEffect(() => {
    if (!settingsOpen) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current?.querySelector('button')?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [settingsOpen]);

  function choose(allowAnalytics) {
    if (!allowAnalytics) disableAnalytics({ clearCookies: true });
    setPreference(saveConsent(allowAnalytics));
    setAnalytics(allowAnalytics);
    setSettingsOpen(false);
  }

  function handleDialogKey(event) {
    if (event.key === 'Escape') setSettingsOpen(false);
    if (event.key !== 'Tab') return;
    const controls = dialog.current.querySelectorAll(
      'button, a[href], input:not(:disabled)',
    );
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  if (!ready) return null;
  return (
    <>
      {!preference && !settingsOpen && (
        <section className="cookie-banner" aria-labelledby="cookie-title">
          <p className="section-eyebrow">MAKE YOURSELF AT HOME</p>
          <h2 id="cookie-title">A quick cookie check.</h2>
          <p>
            We save the basics to keep you signed in and remember your quote. Can we also
            use optional analytics cookies to see what’s working? It’s completely up to
            you.
          </p>
          <div className="cookie-actions">
            <button onClick={() => choose(false)}>No thanks</button>
            <button onClick={() => choose(true)}>Allow cookies</button>
          </div>
          <div className="cookie-links">
            <button onClick={() => setSettingsOpen(true)}>Let me choose</button>
            <Link to="/cookies">Cookie policy</Link>
            <Link to="/privacy">Privacy notice</Link>
          </div>
        </section>
      )}
      {settingsOpen && (
        <div className="cookie-overlay">
          <section
            className="cookie-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
            ref={dialog}
            onKeyDown={handleDialogKey}
          >
            <button
              className="cookie-close"
              aria-label="Close cookie settings"
              onClick={() => setSettingsOpen(false)}
            >
              ×
            </button>
            <p className="section-eyebrow">YOU’RE IN CONTROL</p>
            <h2 id="cookie-settings-title">Cookies, your way.</h2>
            <label className="cookie-option">
              <input type="checkbox" checked disabled />
              <span>
                <strong>The basics — always on</strong>
                <small>
                  These keep you signed in, remember your quote and save your cookie
                  choice.
                </small>
              </span>
            </label>
            <label className="cookie-option">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
              />
              <span>
                <strong>Help us improve — optional</strong>
                <small>
                  Google Analytics helps us see how people use our public pages. We’ll
                  only switch it on if you say yes.
                </small>
              </span>
            </label>
            <p>
              You can change this choice at any time using Cookie settings in the footer.{' '}
              <Link to="/cookies" onClick={() => setSettingsOpen(false)}>
                Read the cookie policy.
              </Link>
            </p>
            <div className="cookie-actions">
              <button onClick={() => choose(false)}>No thanks</button>
              <button onClick={() => choose(analytics)}>Save my choices</button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
