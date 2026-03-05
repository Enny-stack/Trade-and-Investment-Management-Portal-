const $ = (sel, el=document) => el.querySelector(sel);
const $$ = (sel, el=document) => Array.from(el.querySelectorAll(sel));

function setToast(title, msg){
  const t = $("#toast");
  $("#toastTitle").textContent = title;
  $("#toastMsg").textContent = msg;
  t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"), 3200);
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
// ---------- Events ----------
function getEvents(){
  try{
    const x = JSON.parse(localStorage.getItem("timp_events"));
    if(Array.isArray(x)) return x;
  }catch(e){}
  return (window.TIMP_DATA && Array.isArray(window.TIMP_DATA.events)) ? window.TIMP_DATA.events : [];
}
function saveEvents(events){
  localStorage.setItem("timp_events", JSON.stringify(events));
}

// ---------- Registrations ----------
function getRegistrations(){
  try{
    const x = JSON.parse(localStorage.getItem("timp_regs"));
    if(Array.isArray(x)) return x;
  }catch(e){}
  return (window.TIMP_DATA && Array.isArray(window.TIMP_DATA.registrations)) ? window.TIMP_DATA.registrations : [];
}
function saveRegistrations(regs){
  localStorage.setItem("timp_regs", JSON.stringify(regs));
}

// ---------- Public Profile ----------
function getProfile(){
  try{
    return JSON.parse(localStorage.getItem("timp_profile")) || null;
  }catch(e){
    return null;
  }
}
function saveProfile(p){
  localStorage.setItem("timp_profile", JSON.stringify(p));
}

function currentEmail(){
  const p = getProfile();
  return (p && p.email) ? String(p.email).trim().toLowerCase() : "";
}

function myRegistrationFor(eventId){
  const email = currentEmail();
  if(!email) return null;
  return getRegistrations().find(r => r.event_id === eventId && (r.email || "").toLowerCase() === email) || null;
}

function isApprovedFor(eventId){
  const r = myRegistrationFor(eventId);
  return !!(r && r.state === "Approved");
}
function fmtMoney(m){
  return `$${m}m`;
}
function getEvents(){
  try{
    const x = JSON.parse(localStorage.getItem("timp_events"));
    if(Array.isArray(x)) return x;
  }catch(e){}
  return (window.TIMP_DATA && Array.isArray(window.TIMP_DATA.events)) ? window.TIMP_DATA.events : [];
}

function saveEvents(events){
  localStorage.setItem("timp_events", JSON.stringify(events));
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
