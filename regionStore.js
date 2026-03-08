// regionStore.js
// LocalStorage-backed "database" for Region Profiles

const ATIMP_RP_KEY = "ATIMP_REGION_PROFILES_v1";

function rp_nowISO() {
  return new Date().toISOString();
}

function rp_loadAll() {
  try {
    return JSON.parse(localStorage.getItem(ATIMP_RP_KEY) || "[]");
  } catch (e) {
    console.warn("RegionProfiles storage corrupted, resetting.", e);
    localStorage.removeItem(ATIMP_RP_KEY);
    return [];
  }
}

function rp_saveAll(list) {
  localStorage.setItem(ATIMP_RP_KEY, JSON.stringify(list));
}

// Get one profile by regionId
function rp_get(regionId) {
  const all = rp_loadAll();
  return all.find(p => p.regionId === regionId) || null;
}

// Upsert content for a specific language (draft by default)
function rp_upsertContent(regionId, lang, content, opts = {}) {
  const all = rp_loadAll();
  const idx = all.findIndex(p => p.regionId === regionId);

  const base = idx >= 0 ? all[idx] : {
    id: "rp_" + Math.random().toString(16).slice(2),
    regionId,
    status: "draft",          // "draft" | "published"
    createdAt: rp_nowISO(),
    updatedAt: rp_nowISO(),
    publishedAt: null,
    contentByLang: {}         // { en: {...}, fr: {...} }
  };

  base.contentByLang[lang] = {
    ...(base.contentByLang[lang] || {}),
    ...content
  };

  base.updatedAt = rp_nowISO();
  if (opts.status) base.status = opts.status;
  if (base.status !== "published") base.publishedAt = null;

  if (idx >= 0) all[idx] = base;
  else all.push(base);

  rp_saveAll(all);
  return base;
}

// Publish (keeps content; flips status)
function rp_publish(regionId) {
  const all = rp_loadAll();
  const idx = all.findIndex(p => p.regionId === regionId);
  if (idx < 0) return null;

  all[idx].status = "published";
  all[idx].publishedAt = rp_nowISO();
  all[idx].updatedAt = rp_nowISO();

  rp_saveAll(all);
  return all[idx];
}

// Only published profiles
function rp_listPublished() {
  return rp_loadAll().filter(p => p.status === "published");
}

function rp_pickLangContent(profile, lang) {
  if (!profile) return null;
  return (
    profile.contentByLang?.[lang] ||
    profile.contentByLang?.["en"] ||
    Object.values(profile.contentByLang || {})[0] ||
    null
  );
}

function rp_normalize(s) {
  return (s || "")
    .toString()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

// Search published profiles by text (across key fields)
function rp_searchPublished(query, lang, regionFilter = null) {
  const q = rp_normalize(query);
  const list = rp_listPublished().filter(p => !regionFilter || p.regionId === regionFilter);

  if (!q) return list;

  return list.filter(p => {
    const c = rp_pickLangContent(p, lang) || {};
    const haystack = rp_normalize([
      c.title,
      c.subtitle,
      c.overview,
      c.marketInsights,
      c.keySectors,
      c.incentives,
      c.risks,
      c.howAfreximbankHelps,
      (c.tags || []).join(" ")
    ].join(" "));

    return haystack.includes(q);
  });
}
