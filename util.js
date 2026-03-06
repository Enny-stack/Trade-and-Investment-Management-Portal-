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
function getEvents(){
  try{
    const x = JSON.parse(localStorage.getItem("timp_events"));
    if(Array.isArray(x)) return x;
  }catch(e){}
  return (window.TIMP_DATA && Array.isArray(window.TIMP_DATA.events)) ? window.TIMP_DATA.events : [];
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
function saveEvents(events){
  localStorage.setItem("timp_events", JSON.stringify(events));
}
function fmtMoney(m){
  return `$${m}m`;
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
  if(i>=0){ all[i].read = true; saveNotifications(all); }
}

function unreadCount(targetPrefix){
  return getNotifications().filter(n => !n.read && (!targetPrefix || String(n.target).startsWith(targetPrefix))).length;
}
