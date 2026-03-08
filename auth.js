/* auth.js - simple demo auth gate using localStorage */
(function () {
  const AUTH_KEY = "timp_auth"; // session marker

  function getAuth() {
    try {
      return JSON.parse(localStorage.getItem(AUTH_KEY) || "null");
    } catch (e) {
      return null;
    }
  }

  function isAuthed() {
    const a = getAuth();
    return !!(a && a.email);
  }

  function login(email) {
    localStorage.setItem(
      AUTH_KEY,
      JSON.stringify({ email: String(email || "").trim(), at: new Date().toISOString() })
    );
  }

  function logout() {
    localStorage.removeItem(AUTH_KEY);
  }

  function requireAuth(redirectUrl) {
    if (isAuthed()) return true;
    const target = redirectUrl || "index.html";
    // add a small marker so you can show a message if you want
    location.replace(target + "#login_required");
    return false;
  }

  window.TIMP_AUTH = { getAuth, isAuthed, login, logout, requireAuth };
})();
