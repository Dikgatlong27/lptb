export const CONSENT_KEY = 'lptb-cookie-preferences';
export const CONSENT_VERSION = 1;
const CONSENT_LIFETIME = 180 * 24 * 60 * 60 * 1000;
const MEASUREMENT_ID = 'G-BWFZCE3K41';
const DISABLE_KEY = `ga-disable-${MEASUREMENT_ID}`;

export function readConsent() {
  try {
    const saved = JSON.parse(localStorage.getItem(CONSENT_KEY));
    const age = Date.now() - Date.parse(saved?.updatedAt);
    if (
      saved?.version !== CONSENT_VERSION ||
      typeof saved.analytics !== 'boolean' ||
      !Number.isFinite(age) ||
      age < 0 ||
      age > CONSENT_LIFETIME
    )
      return null;
    return saved;
  } catch {
    return null;
  }
}

export function saveConsent(analytics) {
  const preference = {
    version: CONSENT_VERSION,
    analytics,
    updatedAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(preference));
  } catch {
    // The choice still applies to this visit if browser storage is unavailable.
  }
  return preference;
}

export function disableAnalytics({ clearCookies = false } = {}) {
  window[DISABLE_KEY] = true;
  if (!clearCookies) return;
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.trim().split('=')[0];
    if (!/^(_ga(?:_|$)|_gid$|_gat(?:_|$))/.test(name)) continue;
    const domains = [
      '',
      window.location.hostname,
      `.${window.location.hostname}`,
      '.lptbsolutions.co.za',
    ];
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`;
    }
  }
}

export function trackPublicPage(pathname) {
  window[DISABLE_KEY] = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function () {
      window.dataLayer.push(arguments);
    };
  window.gtag('set', {
    page_location: `https://lptbsolutions.co.za${pathname}`,
    page_referrer: '',
  });

  if (!document.getElementById('lptb-analytics')) {
    window.gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    window.gtag('js', new Date());
    window.gtag('config', MEASUREMENT_ID, {
      send_page_view: false,
      allow_google_signals: false,
      page_location: `https://lptbsolutions.co.za${pathname}`,
      page_referrer: '',
      allow_ad_personalization_signals: false,
    });
    const script = document.createElement('script');
    script.id = 'lptb-analytics';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }
  // Exclude query strings, fragments, forms and account information from page views.
  window.gtag('event', 'page_view', {
    page_location: `https://lptbsolutions.co.za${pathname}`,
    page_path: pathname,
    page_referrer: '',
  });
}

export const openCookieSettings = () =>
  window.dispatchEvent(new Event('lptb:cookie-settings'));
