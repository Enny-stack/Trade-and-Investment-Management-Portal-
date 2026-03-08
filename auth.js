/* auth.js - simple demo auth gate using localStorage (improved) */
(function () {
  const AUTH_KEY = "timp_auth";        // session marker
  const RETURN_KEY = "timp_return_to"; // where to go after login

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

  function setReturnTo(url) {
    try {
      if (url) localStorage.setItem(RETURN_KEY, String(url));
    } catch (e) {}
  }

  function consumeReturnTo() {
    try {
      const u = localStorage.getItem(RETURN_KEY);
      localStorage.removeItem(RETURN_KEY);
      return u;
    } catch (e) {
      return null;
    }
  }

  function login(email, redirectAfter) {
    const clean = String(email || "").trim();
    if (!clean) return false;

    localStorage.setItem(
      AUTH_KEY,
      JSON.stringify({ email: clean, at: new Date().toISOString() })
    );

    // optional: also keep a convenience email key used elsewhere
    localStorage.setItem("timp_user_email", clean);

    // redirect user back to where they wanted, otherwise to public portal
    const back = redirectAfter || consumeReturnTo();
    if (back) {
      location.replace(back);
    } else {
      location.replace("public.html#events");
    }
    return true;
  }

  function logout() {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(RETURN_KEY);

    // optional cleanup (keeps your demo tidy)
    // localStorage.removeItem("timp_user_email");
    // localStorage.removeItem("timp_profile");
  }

  function requireAuth(redirectUrl) {
    if (isAuthed()) return true;

    // store where user was trying to go (so we can return after login)
    setReturnTo(location.href);

    // default redirect should be Welcome (your flow)
    const target = redirectUrl || "welcome.html";
    location.replace(target + "#login_required");
    return false;
  }

  window.TIMP_AUTH = {
    getAuth,
    isAuthed,
    login,
    logout,
    requireAuth,
    setReturnTo,
    consumeReturnTo
  };
})();
