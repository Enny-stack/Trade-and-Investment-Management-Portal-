const $ = (sel, el=document) => el.querySelector(sel);
const $$ = (sel, el=document) => Array.from(el.querySelectorAll(sel));

function setToast(title, msg){
  const t = $("#toast");
  $("#toastTitle").textContent = title;
  $("#toastMsg").textContent = msg;
  t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"), 3200);
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
