import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://singhealthid.azurewebsites.net',
  clientId: 'mycare', // The "Auth Code + PKCE" client
  responseType: 'code',
  dummyClientSecret: '511536EF-F270-4058-80CA-1C89C192F69A',
  redirectUri: window.location.origin + '/#/test',
  silentRefreshRedirectUri: window.location.origin + '/callback.html',
  scope: 'openid offline_access', // Ask offline_access to support refresh token refreshes
  useSilentRefresh: false, // Needed for Code Flow to suggest using iframe-based refreshes
  silentRefreshTimeout: 5000, // For faster testing
  timeoutFactor: 0.25, // For faster testing
  sessionChecksEnabled: true,
  showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
  clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
  nonceStateSeparator: 'semicolon', // Real semicolon gets mangled by IdentityServer's URI encoding,
  customQueryParams: {
    'client_secret': '511536EF-F270-4058-80CA-1C89C192F69A',
    'grant_type': 'patient'
  }
};
