import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LandingPage from './pages/LandingPage';
import './index.css';
import './styles/tokens.css';
import { bindCta, bindTel, bindNav, initScrollDepth, persistUtms, wireForms } from './utils/analytics';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>
);

window.addEventListener('DOMContentLoaded', () => {
  bindNav();
  bindCta('[data-cta="book"]', 'book_exotic', 'hero');
  bindCta('[data-cta="fleet"]', 'view_fleet', 'hero');
  bindCta('[data-cta="fleet_view_all"]', 'fleet_view_all', 'fleet');
  bindCta('[data-cta="call"]', 'sticky_call', 'sticky_cta');
  bindCta('[data-cta="text"]', 'sticky_text', 'sticky_cta');
  bindCta('[data-cta="reserve"]', 'sticky_reserve', 'sticky_cta');
  bindTel('a[href^="tel:"]', 'header');
  initScrollDepth();
  persistUtms();
  wireForms();
});
