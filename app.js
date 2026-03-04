function t(key){
  const lang = pickLang();
  return (window.TIMP_I18N[lang] && window.TIMP_I18N[lang][key]) ? window.TIMP_I18N[lang][key] : (window.TIMP_I18N["en"][key] || key);
}

function regionLabel(regionId){
  const lang = pickLang();
  const r = window.TIMP_REGIONS.find(x=>x.id===regionId);
  return r ? r.name[lang] : regionId;
}

function initTopbar(){
  const lang = pickLang();
  const region = pickRegion();
  applyDirForArabic(lang);

  const langSel = $("#langSel");
  const regionSel = $("#regionSel");

  if(langSel){
    langSel.value = lang;
    langSel.addEventListener("change", ()=>{
      localStorage.setItem("lang", langSel.value);
      location.reload();
    });
  }
  if(regionSel){
    regionSel.value = region;
    regionSel.addEventListener("change", ()=>{
      localStorage.setItem("region", regionSel.value);
      location.reload();
    });
  }

  // translate static labels
  $$(".i18n").forEach(el=>{
    const key = el.getAttribute("data-key");
    if(key) el.textContent = t(key);
  });
}

function initSidebar(activeKey){
  const el = $("#sidebarNav");
  if(!el) return;
  $$("#sidebarNav a").forEach(a=>{
    if(a.getAttribute("data-nav")===activeKey) a.classList.add("active");
  });

  // label translate
  $$("#sidebarNav span.i18n").forEach(s=>{
    const key = s.getAttribute("data-key");
    s.textContent = t(key);
  });
}

function filterByRegion(items){
  const r = pickRegion();
  if(r === "non_reg") return items; // non-regional = show all in demo
  return items.filter(x => x.region === r);
}
