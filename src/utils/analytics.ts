export type Ctx = { section?: string; label?: string };

export const track = (name: string, ctx: Ctx = {}) => {
  (window as any).__track?.(name, {
    event_category: 'ui',
    event_label: ctx.label || '',
    section: ctx.section || '',
    page_location: location.href
  });
};

export const bindCta = (selector: string, label: string, section?: string) => {
  document.querySelectorAll<HTMLElement>(selector).forEach(el => {
    el.addEventListener('click', () => track('cta_click', { label, section }));
  });
};

export const bindTel = (selector: string, section?: string) => {
  document.querySelectorAll<HTMLAnchorElement>(selector).forEach(a => {
    a.addEventListener('click', () => track('tel_click', { label: a.getAttribute('href') || '', section }));
  });
};

export const bindNav = () => {
  document.querySelectorAll('nav a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => (window as any).__track?.('nav_link', { section: a.getAttribute('href') }));
  });
};

export const initScrollDepth = () => {
  let fired25 = false, fired50 = false, fired75 = false;
  const onScroll = () => {
    const y = (window.scrollY + window.innerHeight) / document.body.scrollHeight * 100;
    if (!fired25 && y >= 25) { fired25 = true; track('scroll_depth', { label: '25' }); }
    if (!fired50 && y >= 50) { fired50 = true; track('scroll_depth', { label: '50' }); }
    if (!fired75 && y >= 75) { fired75 = true; track('scroll_depth', { label: '75' }); }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
};

export const persistUtms = () => {
  const p = new URLSearchParams(location.search);
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  let changed = false;
  keys.forEach(k => { const v = p.get(k); if (v) { localStorage.setItem(k, v); changed = true; } });
  if (changed) {
    document.querySelectorAll('input[name^="utm_"]').forEach((i: any) => { const v = localStorage.getItem(i.name); if (v) i.value = v; });
  }
};

export const wireForms = () => {
  document.querySelectorAll('form').forEach(f => {
    f.addEventListener('submit', () => track('form_submit', { section: f.getAttribute('id') || 'contact' }));
    f.querySelectorAll('input,textarea,select').forEach((el: any) => {
      el.addEventListener('invalid', () => track('form_error', { label: el.name, section: f.getAttribute('id') || 'contact' }));
    });
  });
};
