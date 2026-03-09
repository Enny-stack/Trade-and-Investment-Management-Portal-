const $ = (sel, el=document) => el.querySelector(sel);
const $$ = (sel, el=document) => Array.from(el.querySelectorAll(sel));

function setToast(title, msg){
  const t = $("#toast");
  if(!t) return;
  $("#toastTitle").textContent = title;
  $("#toastMsg").textContent = msg;
  t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"), 3200);
}

/**
 * ✅ NEW: Convert a selected file to a base64 DataURL for demo storage in localStorage
 * - Used for event banners, PDF decks, programmes, prospectus, etc.
 */
function fileToDataUrl(file){
  return new Promise((resolve)=>{
    if(!file) return resolve("");
    const r = new FileReader();
    r.onload = ()=> resolve(String(r.result || ""));
    r.onerror = ()=> resolve("");
    r.readAsDataURL(file);
  });
}

function getDeals(){
  try{
    const x = JSON.parse(localStorage.getItem("timp_deals"));
    if(Array.isArray(x)) return x;
  }catch(e){}
  return (window.TIMP_DATA && Array.isArray(window.TIMP_DATA.deals)) ? window.TIMP_DATA.deals : [];
}

function saveDeals(deals){
  localStorage.setItem("timp_deals", JSON.stringify(deals));
}

function getEvents(){
  try{
    const x = JSON.parse(localStorage.getItem("timp_events") || "null");
    return Array.isArray(x) ? x : (TIMP_DATA.events || []);
  }catch(e){
    return (TIMP_DATA.events || []);
  }
}

function saveEvents(events){
  localStorage.setItem("timp_events", JSON.stringify(events));
}

function getRegistrations(){
  try{
    const x = JSON.parse(localStorage.getItem("timp_regs"));
    if(Array.isArray(x)) return x;
  }catch(e){}
  return (window.TIMP_DATA && Array.isArray(window.TIMP_DATA.registrations)) ? window.TIMP_DATA.registrations : [];
}

function saveRegistrations(rows){
  localStorage.setItem("timp_regs", JSON.stringify(rows));
}

function fmtMoney(m){
  const n = Number(m || 0);
  // keep your original style, but avoid "undefinedm"
  return `$${n}m`;
}

function badgeWarmth(w){
  if(w==="Hot") return `<span class="tag ok">Hot</span>`;
  if(w==="Warm") return `<span class="tag warn">Warm</span>`;
  return `<span class="tag muted">${w}</span>`;
}

function pickLang(){
  return localStorage.getItem("lang") || "en";
}

function pickRegion(){
  return localStorage.getItem("region") || "non_reg";
}

function applyDirForArabic(lang){
  document.documentElement.dir = (lang==="ar") ? "rtl" : "ltr";
}

function getNotifications(){
  try{
    const x = JSON.parse(localStorage.getItem("timp_notifs"));
    return Array.isArray(x) ? x : [];
  }catch(e){ return []; }
}

function saveNotifications(n){
  localStorage.setItem("timp_notifs", JSON.stringify(n));
}

function pushNotification(n){
  const all = getNotifications();
  all.unshift({
    id: "n" + Date.now(),
    ts: new Date().toISOString(),
    read: false,
    target: n.target || "admin", // "admin" | "public" | "public:<email>"
    title: n.title || "Notification",
    message: n.message || "",
    link: n.link || ""
  });
  saveNotifications(all);
}

function markNotifRead(id){
  const all = getNotifications();
  const i = all.findIndex(x=>x.id===id);
  if(i>=0){
    all[i].read = true;
    saveNotifications(all);
  }
}

function unreadCount(targetPrefix){
  return getNotifications().filter(n => !n.read && (!targetPrefix || String(n.target).startsWith(targetPrefix))).length;
}
// =========================
// Registrations (localStorage)
// =========================
function getRegistrations(){
  const x = JSON.parse(localStorage.getItem("timp_regs") || "null");
  return Array.isArray(x) ? x : (TIMP_DATA.registrations || []);
}
function saveRegistrations(r){
  localStorage.setItem("timp_regs", JSON.stringify(r || []));
}

// =========================
// Profile (single "current user" profile for demo)
// =========================
function getMyProfile(){
  const p = JSON.parse(localStorage.getItem("timp_profile") || "null");
  return p || {
    salutation: "Mr",
    first_name: "",
    last_name: "",
    org: "",
    position: "",
    email: "",
    phone: ""
  };
}
function saveMyProfile(p){
  localStorage.setItem("timp_profile", JSON.stringify(p || {}));
  if (p?.email) localStorage.setItem("timp_user_email", p.email);
}

// small helper (for older regs that only have "name")
function splitName(full){
  const s = String(full || "").trim().replace(/\s+/g, " ");
  if(!s) return { first_name:"", last_name:"" };
  const parts = s.split(" ");
  return { first_name: parts[0] || "", last_name: parts.slice(1).join(" ") || "" };
}
