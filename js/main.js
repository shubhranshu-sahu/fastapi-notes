/* ====================================
   FastAPI Notes — Main JavaScript
==================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Scroll Progress Bar ----
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? (window.scrollY / docH) * 100 : 0;
      progressBar.style.width = pct + '%';
    }, { passive: true });
  }

  // ---- Sidebar Toggle (Mobile) ----
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.querySelector('.nb-sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      if (overlay) overlay.classList.toggle('active');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    });
  }

  // ---- Theme Toggle ----
  const themeBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('nb-theme') || 'light';
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeBtn) themeBtn.textContent = '☀️';
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('nb-theme', 'light');
        themeBtn.textContent = '🌙';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('nb-theme', 'dark');
        themeBtn.textContent = '☀️';
      }
    });
  }

  // ---- Active Sidebar Link highlighting ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || href.endsWith('/' + currentPage) ||
        (currentPage === '' && href === 'index.html'))) {
      link.classList.add('active');
    }
  });

  // ---- Copy to Clipboard ----
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const wrapper = btn.closest('.code-wrapper');
      const code = wrapper ? wrapper.querySelector('code') : null;
      if (code) {
        navigator.clipboard.writeText(code.textContent).then(() => {
          const orig = btn.innerHTML;
          btn.innerHTML = '✓ Copied!';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.innerHTML = orig;
            btn.classList.remove('copied');
          }, 2000);
        }).catch(() => {
          btn.textContent = 'Error';
        });
      }
    });
  });

  // ---- Search Modal ----
  const searchData = [
    { title: 'Introduction to FastAPI', sub: 'Chapter 1', url: 'pages/chapter1.html' },
    { title: 'Concept — What is FastAPI?', sub: 'Chapter 1', url: 'pages/chapter1.html' },
    { title: 'Why FastAPI Exists?', sub: 'Chapter 1', url: 'pages/chapter1.html' },
    { title: 'Key Features of FastAPI', sub: 'Chapter 1', url: 'pages/chapter1.html' },
    { title: 'FastAPI vs Flask (High-Level)', sub: 'Chapter 1', url: 'pages/chapter1.html' },
    { title: 'Real-World Use Case', sub: 'Chapter 1', url: 'pages/chapter1.html' },
    { title: 'Installation', sub: 'Chapter 2', url: 'pages/chapter2.html' },
    { title: 'Basic Installation — pip install fastapi', sub: 'Chapter 2', url: 'pages/chapter2.html' },
    { title: 'ASGI Server — Uvicorn', sub: 'Chapter 2', url: 'pages/chapter2.html' },
    { title: 'Full Installation pip install fastapi[all]', sub: 'Chapter 2', url: 'pages/chapter2.html' },
    { title: 'First Minimal App', sub: 'Chapter 2', url: 'pages/chapter2.html' },
    { title: 'Run the App — uvicorn', sub: 'Chapter 2', url: 'pages/chapter2.html' },
    { title: 'When to Use Flask vs FastAPI', sub: 'Chapter 3', url: 'pages/chapter3.html' },
    { title: 'Core Philosophy Difference', sub: 'Chapter 3', url: 'pages/chapter3.html' },
    { title: 'When to Use Flask', sub: 'Chapter 3', url: 'pages/chapter3.html' },
    { title: 'When to Use FastAPI', sub: 'Chapter 3', url: 'pages/chapter3.html' },
    { title: 'Real-World Decision Scenarios', sub: 'Chapter 3', url: 'pages/chapter3.html' },
    { title: 'Interview-Ready Answer Flask vs FastAPI', sub: 'Chapter 3', url: 'pages/chapter3.html' },
    { title: 'What is Async (Asynchronous Programming)?', sub: 'Chapter 4', url: 'pages/chapter4.html' },
    { title: 'Synchronous vs Asynchronous', sub: 'Chapter 4', url: 'pages/chapter4.html' },
    { title: 'Real-Life Analogy — Coffee Shop', sub: 'Chapter 4', url: 'pages/chapter4.html' },
    { title: 'async def and await', sub: 'Chapter 4', url: 'pages/chapter4.html' },
    { title: 'Event Loop', sub: 'Chapter 4', url: 'pages/chapter4.html' },
    { title: 'asyncio.gather — concurrent tasks', sub: 'Chapter 4', url: 'pages/chapter4.html' },
    { title: 'Creating First FastAPI App', sub: 'Chapter 5', url: 'pages/chapter5.html' },
    { title: 'FastAPI() Instance', sub: 'Chapter 5', url: 'pages/chapter5.html' },
    { title: 'Running with Uvicorn', sub: 'Chapter 5', url: 'pages/chapter5.html' },
    { title: 'First Endpoint — /', sub: 'Chapter 5', url: 'pages/chapter5.html' },
    { title: 'Swagger UI /docs', sub: 'Chapter 5', url: 'pages/chapter5.html' },
    { title: 'Path Operations (HTTP Methods)', sub: 'Chapter 6', url: 'pages/chapter6.html' },
    { title: 'GET — Fetch Data', sub: 'Chapter 6', url: 'pages/chapter6.html' },
    { title: 'POST — Create Data', sub: 'Chapter 6', url: 'pages/chapter6.html' },
    { title: 'PUT — Update Data', sub: 'Chapter 6', url: 'pages/chapter6.html' },
    { title: 'DELETE — Remove Data', sub: 'Chapter 6', url: 'pages/chapter6.html' },
    { title: 'REST Concept', sub: 'Chapter 6', url: 'pages/chapter6.html' },
    { title: 'Path Parameters', sub: 'Chapter 7', url: 'pages/chapter7.html' },
    { title: 'Dynamic URLs — /items/{id}', sub: 'Chapter 7', url: 'pages/chapter7.html' },
    { title: 'Type Conversion in Path Parameters', sub: 'Chapter 7', url: 'pages/chapter7.html' },
    { title: 'Validation via Type Hints', sub: 'Chapter 7', url: 'pages/chapter7.html' },
    { title: 'Error Handling Invalid Types', sub: 'Chapter 7', url: 'pages/chapter7.html' },
    { title: 'Multiple Path Parameters', sub: 'Chapter 7', url: 'pages/chapter7.html' },
    { title: 'Path Parameter Order & Routing Priority', sub: 'Chapter 8', url: 'pages/chapter8.html' },
    { title: 'Static vs Dynamic Routes', sub: 'Chapter 8', url: 'pages/chapter8.html' },
    { title: 'Route Matching — top-to-bottom', sub: 'Chapter 8', url: 'pages/chapter8.html' },
    { title: 'Best Practices — static before dynamic', sub: 'Chapter 8', url: 'pages/chapter8.html' },
    { title: 'Enum in Path Parameters', sub: 'Chapter 9', url: 'pages/chapter9.html' },
    { title: 'Restrict Allowed Values with Enum', sub: 'Chapter 9', url: 'pages/chapter9.html' },
    { title: 'Python Enum class', sub: 'Chapter 9', url: 'pages/chapter9.html' },
    { title: 'Enum Swagger Dropdown', sub: 'Chapter 9', url: 'pages/chapter9.html' },
    { title: 'Query Parameters', sub: 'Chapter 10', url: 'pages/chapter10.html' },
    { title: 'Key-value pairs after ?', sub: 'Chapter 10', url: 'pages/chapter10.html' },
    { title: 'Default Values in Query Params', sub: 'Chapter 10', url: 'pages/chapter10.html' },
    { title: 'Optional Query Parameters', sub: 'Chapter 11', url: 'pages/chapter11.html' },
    { title: 'Optional[str] = None', sub: 'Chapter 11', url: 'pages/chapter11.html' },
    { title: 'Conditional Logic with Optional', sub: 'Chapter 11', url: 'pages/chapter11.html' },
    { title: 'Combining Path + Query Parameters', sub: 'Chapter 12', url: 'pages/chapter12.html' },
    { title: 'Pagination with skip and limit', sub: 'Chapter 12', url: 'pages/chapter12.html' },
    { title: 'Search API — q, page, limit', sub: 'Chapter 12', url: 'pages/chapter12.html' },
  ];

  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  // Determine base URL for links
  const isOnChapterPage = window.location.pathname.includes('/pages/');
  const linkPrefix = isOnChapterPage ? '../' : '';

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      searchResults.innerHTML = '';

      if (!q) return;

      const matches = searchData.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.sub.toLowerCase().includes(q)
      ).slice(0, 8);

      if (matches.length === 0) {
        searchResults.innerHTML = '<p style="color:var(--text-secondary);font-size:.9rem;padding:.5rem 0">No results found.</p>';
        return;
      }

      matches.forEach(item => {
        const a = document.createElement('a');
        a.className = 'search-result-item';
        a.href = linkPrefix + item.url;
        a.innerHTML = `<div class="search-result-chapter">${item.sub}</div><div>${item.title}</div>`;
        searchResults.appendChild(a);
      });
    });
  }

  // ---- Back to Top ----
  const backTopBtn = document.getElementById('back-top');
  if (backTopBtn) {
    window.addEventListener('scroll', () => {
      backTopBtn.style.opacity = window.scrollY > 300 ? '1' : '0';
      backTopBtn.style.pointerEvents = window.scrollY > 300 ? 'auto' : 'none';
    }, { passive: true });

    backTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- Active section tracking via IntersectionObserver ----
  const sections = document.querySelectorAll('[data-section]');
  if (sections.length > 0) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
          const id = entry.target.getAttribute('data-section');
          const activeLink = document.querySelector(`.sidebar-link[data-section="${id}"]`);
          if (activeLink) activeLink.classList.add('active');
        }
      });
    }, { threshold: 0.2, rootMargin: '-80px 0px -60% 0px' });

    sections.forEach(s => obs.observe(s));
  }

  // ---- Keyboard shortcut: / to search ----
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      const searchModalEl = document.getElementById('searchModal');
      if (searchModalEl && window.bootstrap) {
        const modal = bootstrap.Modal.getOrCreateInstance(searchModalEl);
        modal.show();
        setTimeout(() => {
          const si = document.getElementById('search-input');
          if (si) si.focus();
        }, 200);
      }
    }
  });

  // ---- Initialize Prism (if loaded) ----
  if (typeof Prism !== 'undefined') {
    Prism.highlightAll();
  }
});
